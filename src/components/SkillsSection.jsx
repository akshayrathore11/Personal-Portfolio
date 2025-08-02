import { useState } from "react";
import { cn } from "@/lib/utils";

// FontAwesome Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

// Simple Icons
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiCloudinary,
  SiSupabase,
  SiVercel,
  SiRender,
  SiMaildotru,
  SiChartdotjs,
  SiVite,
} from "react-icons/si";

// VS Code Icon
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 size={40} />, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt size={40} />, category: "frontend" },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} />,
    category: "frontend",
  },
  { name: "React", icon: <FaReact size={40} />, category: "frontend" },
  {
    name: "React Router",
    icon: <SiReactrouter size={40} />,
    category: "frontend",
  },
  { name: "Redux Toolkit", icon: <SiRedux size={40} />, category: "frontend" },
  { name: "Context API", icon: <FaReact size={40} />, category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    category: "frontend",
  },
  { name: "DaisyUI", icon: <SiTailwindcss size={40} />, category: "frontend" },
  { name: "Shadcn", icon: <SiVite size={40} />, category: "frontend" },
  { name: "Recharts", icon: <SiChartdotjs size={40} />, category: "frontend" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs size={40} />, category: "backend" },
  { name: "Express", icon: <SiExpress size={40} />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, category: "backend" },
  { name: "Mongoose", icon: <SiMongodb size={40} />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} />, category: "backend" },
  { name: "Supabase", icon: <SiSupabase size={40} />, category: "backend" },

  // Tools
  { name: "Git", icon: <FaGitAlt size={40} />, category: "tools" },
  { name: "GitHub", icon: <FaGithub size={40} />, category: "tools" },
  { name: "VS Code", icon: <VscVscode size={40} />, category: "tools" },
  { name: "Cursor", icon: <SiVite size={40} />, category: "tools" },
  { name: "Linux", icon: <FaLinux size={40} />, category: "tools" },
  { name: "Cloudinary", icon: <SiCloudinary size={40} />, category: "tools" },
  { name: "Vercel", icon: <SiVercel size={40} />, category: "tools" },
  { name: "Render", icon: <SiRender size={40} />, category: "tools" },
  { name: "EmailJS", icon: <SiMaildotru size={40} />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col items-center text-center gap-2 transition-all duration-300 hover:scale-110 hover:opacity-90"
              title={skill.name}
            >
              <div className="text-primary">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
