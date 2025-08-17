import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { FloatingElements } from "@/components/FloatingElements";
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Users,
  Shield,
  Search
} from "lucide-react";

export default function Index() {
  const projects = [
    {
      title: "Book Haven",
      description: "Built a responsive online bookstore using React.js, Tailwind CSS, and JavaScript with clean, reusable UI components. Developed a secure backend with Node.js, Express.js, and MongoDB to manage book inventory, user accounts, and orders, implementing JWT-based authentication and role-based access control.",
      fullDescription: "Integrated RESTful APIs for CRUD operations and efficiently managed application state using React hooks. Features include book inventory management, user authentication, order processing, and admin/user role-based dashboards.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT"],
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
      liveLink: "https://bookstore-9o9y.vercel.app/",
      githubLink: "https://github.com/AnshikaSahu157/bookstore"
    },
    {
      title: "Hire Hub",
      description: "Developed a full-stack job portal using the MERN stack, creating a role-based platform for employers and job seekers to connect. Implemented secure user management with JWT authentication and designed custom dashboards for Admin, Employer, and Job Seeker roles.",
      fullDescription: "Built advanced job search features including dynamic filters and keyword search, along with a responsive UI using Tailwind CSS and scalable RESTful APIs for CRUD operations.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST API"],
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-600",
      liveLink: "https://hire-hub-x6k3.vercel.app/",
      githubLink: "https://github.com/AnshikaSahu157/HIRE-HUB"
    }
  ];

  const skills = [
    "Python", "C", "Java", "JavaScript", "React.js", "Node.js", "Express.js",
    "MongoDB", "MySQL", "HTML", "CSS", "Tailwind CSS", "MERN Stack",
    "JWT Authentication", "RESTful APIs", "Machine Learning", "AI/ML",
    "Scikit-learn", "NLP", "Data Structures & Algorithms", "Full Stack Development"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <FloatingElements />

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20 transition-colors duration-300"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="text-sm font-medium text-primary dark:text-primary mb-4 tracking-wide uppercase animate-fade-in">
                  Welcome to my digital world
                </div>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-gradient animate-gradient">
                    Anshika Sahu
                  </span>
                </h1>
              </div>
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                  Full Stack Developer crafting{" "}
                  <span className="text-primary dark:text-primary font-medium">digital experiences</span>{" "}
                  that matter
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  I build scalable web applications and innovative solutions using modern technologies.
                  Passionate about clean code, user experience, and continuous learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" asChild className="group relative overflow-hidden bg-gradient-to-r from-primary to-brand-600 hover:from-brand-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <a href="#projects" className="relative z-10">
                  <span className="flex items-center">
                    View My Work
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-2 border-primary/20 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                <a href="mailto:anshika15032004@gmail.com?subject=Let's Connect&body=Hi Anshika,%0D%0A%0D%0AI'd love to connect with you!" className="flex items-center">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/AnshikaSahu157"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-200 dark:hover:to-gray-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshika-sahu-a20a56271/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-2">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-medium text-primary dark:text-primary mb-2 tracking-wide uppercase">Get to know me</span>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    About Me
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-brand-600 mt-4 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm a passionate <span className="text-primary dark:text-primary font-semibold">full stack developer</span> with expertise in modern web technologies.
                    I enjoy building applications that solve real-world problems and provide exceptional user experiences.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My journey in tech spans across various domains including <span className="text-brand-600 dark:text-brand-400 font-medium">e-commerce, job portals,
                    cybersecurity, and educational platforms</span>. I believe in writing clean, maintainable code
                    and staying updated with the latest industry trends.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Code className="h-5 w-5 text-primary mr-2" />
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`text-sm px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default
                        ${index % 3 === 0 ? 'hover:bg-primary/10' : index % 3 === 1 ? 'hover:bg-brand-500/10' : 'hover:bg-purple-500/10'}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5"></div>
                <CardContent className="relative p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Frontend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">React, Vue.js, TypeScript</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5"></div>
                <CardContent className="relative p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Backend Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">Node.js, Python, Databases</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-red-500/5 dark:to-pink-500/5"></div>
                <CardContent className="relative p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Cybersecurity</h3>
                    <p className="text-gray-600 dark:text-gray-400">AI-powered threat detection</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/5 dark:to-indigo-500/5"></div>
                <CardContent className="relative p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">EdTech Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-400">Learning platforms & ML</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-32 w-64 h-64 bg-gradient-to-br from-primary/10 to-brand-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-32 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary dark:text-primary mb-2 tracking-wide uppercase">Portfolio</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-brand-600 mt-4 rounded-full mx-auto"></div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work spanning different domains and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                fullDescription={project.fullDescription}
                tech={project.tech}
                icon={project.icon}
                color={project.color}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-2">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%238b5cf6" fill-opacity="1" fill-rule="evenodd"%3E%3Cpath d="m0 40l40-40h-40z"/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary dark:text-primary mb-2 tracking-wide uppercase">Get in touch</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Let's Connect
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-brand-600 mt-4 rounded-full mx-auto"></div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5"></div>
              <CardContent className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">anshika15032004@gmail.com</p>
                  <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn" asChild>
                    <a href="mailto:anshika15032004@gmail.com?subject=Let's Connect&body=Hi Anshika,%0D%0A%0D%0AI'd love to connect with you!" className="flex items-center justify-center">
                      Send Email
                      <ExternalLink className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 dark:from-blue-600/5 dark:to-blue-800/5"></div>
              <CardContent className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Professional networking</p>
                  <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn" asChild>
                    <a href="https://www.linkedin.com/in/anshika-sahu-a20a56271/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Connect
                      <ExternalLink className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-gray-900/10 dark:from-gray-700/5 dark:to-gray-900/5"></div>
              <CardContent className="relative p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-xl">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">View my code repositories</p>
                  <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn" asChild>
                    <a href="https://github.com/AnshikaSahu157" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Follow
                      <ExternalLink className="ml-1 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
