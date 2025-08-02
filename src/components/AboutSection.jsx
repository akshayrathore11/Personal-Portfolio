import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I'm a builder. A problem-solver. A relentless learner.
            </p>

            <p className="text-muted-foreground">
              Whether it's a sleek landing page or a complex full-stack app, I
              approach each project like a storyteller crafting a narrative —
              every pixel placed with purpose, every line of logic connected
              with intention.
            </p>

            <p className="text-muted-foreground">
              I thrive where design meets functionality. Where curiosity becomes
              craft. And where every new challenge is a canvas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Akshay_Rathore_Resume.pdf"
                download="Akshay_Rathore_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    I design and build responsive, accessible, and user-focused
                    interfaces using modern frameworks like React and Tailwind
                    CSS.
                  </p>
                </div>
              </div>

            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Engineering</h4>
                  <p className="text-muted-foreground">
                   I develop scalable server-side applications with Node.js, Express, and databases like MongoDB and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Execution</h4>
                  <p className="text-muted-foreground">
                    I bridge frontend and backend to deliver seamless, production-ready web applications from concept to deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
