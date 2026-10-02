#!/bin/bash
# Builds the downloadable material packages — one zip per language for every package.
#
# Language rules: a file goes into the <lang> zip unless it sits inside a folder named
# after another language (en/cs/no/lt/de). Files outside language folders (videos,
# shared images, …) are included in every language's zip.
#
# Output (paths match src/data/moduleParts.ts and src/data/modules.ts):
#   <module>/partN/partN-<lang>.zip                       part package
#   <module>/teaching-guide/teaching-guide-<lang>.zip     teaching guide
#   <module>/<module>-<lang>.zip                          all materials (part zips + teaching guide)
#   introduction/introduction-<lang>.zip                  introductory materials
set -euo pipefail

MATERIALS="${1:-public/materials}"
LANGS=(en cs no lt de)

# zip_lang <source dir> <zip path, relative to source dir> <lang>
zip_lang() {
  local dir="$1" out="$2" lang="$3"
  local excludes=(-x "*.zip" -x "*.DS_Store")
  for other in "${LANGS[@]}"; do
    [ "$other" = "$lang" ] && continue
    excludes+=(-x "$other/*" -x "*/$other/*")
  done
  (
    cd "$dir"
    rm -f "$out"
    # zip exits with 12 when there is nothing to add — warn instead of failing the deploy
    zip -qr "$out" . "${excludes[@]}" || {
      status=$?
      if [ "$status" -eq 12 ]; then echo "  warning: no files for $dir ($lang)"; else exit "$status"; fi
    }
  )
}

for module_dir in "$MATERIALS"/*/; do
  module_dir="${module_dir%/}"
  module=$(basename "$module_dir")

  if [ "$module" = "introduction" ]; then
    for lang in "${LANGS[@]}"; do
      echo "Zipping introduction ($lang)"
      zip_lang "$module_dir" "introduction-$lang.zip" "$lang"
    done
    continue
  fi

  for lang in "${LANGS[@]}"; do
    echo "Zipping $module ($lang)"

    # 1. teaching guide
    if [ -d "$module_dir/teaching-guide" ]; then
      zip_lang "$module_dir/teaching-guide" "teaching-guide-$lang.zip" "$lang"
    fi

    # 2. parts
    for part_dir in "$module_dir"/part*/; do
      [ -d "$part_dir" ] || continue
      part=$(basename "$part_dir")
      zip_lang "${part_dir%/}" "$part-$lang.zip" "$lang"
    done

    # 3. all materials — the language's part zips + teaching guide zip, flat
    (
      cd "$module_dir"
      rm -f "$module-$lang.zip"
      find . -mindepth 2 -maxdepth 2 -name "*-$lang.zip" -print0 | sort -z \
        | xargs -0 -r zip -qj "$module-$lang.zip"
    )
  done
done

echo "Done."
