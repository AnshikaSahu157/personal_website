import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                AS
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Anshika Sahu</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating meaningful digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 relative group">
                <span className="relative">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 relative group">
                <span className="relative">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 relative group">
                <span className="relative">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AnshikaSahu157"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshika-sahu-a20a56271/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:anshika15032004@gmail.com?subject=Let's Connect&body=Hi Anshika,%0D%0A%0D%0AI'd love to connect with you!"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Anshika Sahu. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
