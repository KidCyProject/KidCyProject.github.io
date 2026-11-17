// Facts about the lesson videos that cannot be read from the page data: when a video was first
// published and how long it runs. Used for the schema.org VideoObject entries on module pages
// (search engines require an upload date). Add a line when a video is added or replaced —
// tests/materials.test.ts fails if a video in moduleParts.ts has no entry here.
//
//   published  date the file was first added to the repository (YYYY-MM-DD)
//   seconds    running time, rounded

export interface VideoMeta {
  published: string
  seconds: number
}

export const VIDEO_META: Record<string, VideoMeta> = {
  '/materials/digital-citizenship/part1/videos/1.1.2.Video.Digital_Environment.mp4': { published: '2026-04-28', seconds: 352 },
  '/materials/digital-citizenship/part3/videos/1.3.3.Video.Privacy_Settings.mp4': { published: '2026-04-28', seconds: 311 },
  '/materials/digital-citizenship/part4/videos/1.4.1.Video.Resilience.mp4': { published: '2026-04-28', seconds: 252 },
  '/materials/attacker-perspective/part2/videos/2.2.3.Video.Who_is_Behind_Cyber_Attacks.mp4': { published: '2026-04-28', seconds: 372 },
  '/materials/authentication/part1/videos/3.1.2.Video.What_is_Digital_Identity.mp4': { published: '2026-09-21', seconds: 222 },
  '/materials/authentication/part2/videos/3.2.2.Video.Authentication.mp4': { published: '2026-04-28', seconds: 261 },
  '/materials/authentication/part3/videos/3.3.1.Video.Strong_and_Weak_Passwords.mp4': { published: '2026-09-21', seconds: 255 },
  '/materials/authentication/part4/videos/3.4.5.Video.Password_Manager.mp4': { published: '2026-09-21', seconds: 246 },
  '/materials/authentication/part5/videos/3.5.2.Video.Protecting_Your_Digital_Identity.mp4': { published: '2026-09-21', seconds: 240 },
  '/materials/data-privacy/part1/videos/4.1.1.Video.What_is_Private_Data.mp4': { published: '2026-04-28', seconds: 256 },
  '/materials/data-privacy/part3/videos/4.3.1.Video.What_is_a_Digital_Footprint.mp4': { published: '2026-09-21', seconds: 234 },
  '/materials/data-privacy/part4/videos/4.4.5.Video.Protecting_Your_Private_Data.mp4': { published: '2026-09-21', seconds: 226 },
  '/materials/social-engineering/part1/videos/5.1.1.Video.What_is_Social_Engineering.mp4': { published: '2026-09-21', seconds: 203 },
  '/materials/social-engineering/part3/videos/5.3.1.Video.Types_of_Social_Engineering.mp4': { published: '2026-04-28', seconds: 254 },
  '/materials/malware/part1/videos/6.1.3.Video.What_is_Malware.mp4': { published: '2026-09-21', seconds: 186 },
  '/materials/malware/part2/videos/6.2.1.Video.Malware_Types.mp4': { published: '2026-04-28', seconds: 355 },
  '/materials/digital-misuse/part1/videos/7.1.1.Video.Misinformation.mp4': { published: '2026-09-21', seconds: 184 },
  '/materials/digital-misuse/part2/videos/7.2.1.Video.Disinformation.mp4': { published: '2026-09-21', seconds: 220 },
  '/materials/digital-misuse/part3/videos/7.3.2.Video.Cyberbullying.mp4': { published: '2026-09-21', seconds: 184 },
  '/materials/digital-misuse/part5/videos/7.5.1.Video.Influencers.mp4': { published: '2026-04-28', seconds: 360 },
}

/** 251 → "PT4M11S" (ISO 8601 duration, the form schema.org expects) */
export const isoDuration = (seconds: number): string => `PT${Math.floor(seconds / 60)}M${seconds % 60}S`
