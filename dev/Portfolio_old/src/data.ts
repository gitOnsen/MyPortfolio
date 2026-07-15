export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "My Portfolio",
    description: "自身の技術とデザインスキルをアピールするためのポートフォリオサイト。ViteとVanilla TypeScriptを使用し、高速で軽量な構成にしています。",
    image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Portfolio",
    tags: ["HTML", "CSS", "TypeScript", "Vite"]
  },
  {
    id: "2",
    title: "E-Commerce App (Demo)",
    description: "将来追加する実績のプレースホルダーです。ユーザーフレンドリーなUIとスムーズな決済フローを想定しています。",
    image: "https://placehold.co/600x400/3a3a3a/ffffff?text=EC+App",
    tags: ["React", "Node.js"]
  },
  {
    id: "3",
    title: "UI Design Mockup",
    description: "デザイン作品のプレースホルダーです。グラスモーフィズムを取り入れたモダンなダッシュボードのモックアップ。",
    image: "https://placehold.co/600x400/4a4a4a/ffffff?text=Design",
    tags: ["Figma", "UI/UX"]
  }
];

export const skills: string[] = [
  "HTML5", 
  "CSS3", 
  "JavaScript", 
  "TypeScript", 
  "React", 
  "Git / GitHub", 
  "Figma", 
  "UI/UX Design"
];
