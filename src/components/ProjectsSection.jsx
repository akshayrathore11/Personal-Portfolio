import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "URL-Shortner",
    description:
      "A sleek full-stack URL shortener built with Supabase and React—custom links, real-time stats, and responsive UI.",
    image: "/projects/url-shortner2.png",
    tags: ["TailwindCSS","React Js", "Rechart","NodeJS","Supabase"],
    demoUrl: "https://url-shortener-ltu2hid3k-akshays-projects-1a176902.vercel.app/",
    githubUrl: "https://github.com/akshayrathore11/URL-ShorteNer",
  },
  {
    id: 2,
    title: "Code-Chat",
    description:
      "A real-time code collaboration and chat platform built with React, Node.js, and Socket.io—share code, chat live, and build together.",
    image: "/projects/codechat.png",
    tags: ["DaisyUI","React Js", "Soket.IO", "NodeJS","MongoDB"],
    demoUrl: "https://code-chat-gvxs.onrender.com/",
    githubUrl: "https://github.com/akshayrathore11/Code-Chat",
  },
  {
    id: 3,
    title: "Codefusion",
    description:
      "A browser-based code editor with live preview and built-in HTML, CSS, and JavaScript tutorials for fast learning and prototyping.",
    image: "/projects/codefusion2.png",
    tags: ["Typescript","Tailwind CSS","React Js", "Node.js","Monaco-Editor"],
    demoUrl: "https://codefusion-editor-sq3c.onrender.com/login",
    githubUrl: "https://github.com/akshayrathore11/Codefusion-editor",
  },
  {
    id: 4,
    title: "Real-Time Currency Converter",
    description:
      "A responsive JavaScript currency converter that fetches real-time exchange rates and allows seamless conversion across global currencies.",
    image: "/projects/cc.png",
    tags: ["HTML5","CSS3","Tailwind CSS","Javascript","API-Fawazah"],
    demoUrl: "https://js-projects-lemon-nine.vercel.app/",
    githubUrl: "https://github.com/akshayrathore11/Js-Projects/tree/master/currency-convertor",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/akshayrathore11"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
