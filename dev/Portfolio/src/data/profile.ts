export interface ProfileData {
  name: string;
  university: string;
  circle: string;
  bio: string;
  snsLinks: { platform: string; url: string; icon?: string }[];
}

export const myProfile: ProfileData = {
  name: "あなたの名前",
  university: "会津大学 コンピュータ理工学部",
  circle: "Zli",
  bio: "毎日ロケットナウ生活",
  snsLinks: [
    { platform: "GitHub", url: "https://github.com/gitonsen" },
    { platform: "X (Twitter)", url: "https://twitter.com/twiOnsen" },
  ],
};
