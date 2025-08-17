import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  tech: string[];
  icon: React.ReactNode;
  color: string;
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  fullDescription,
  tech,
  icon,
  color,
  liveLink,
  githubLink
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${color.replace('from-', 'from-').replace(' to-', '/5 to-')}/5 dark:from-transparent dark:to-transparent`}></div>
      </div>

      <CardContent className="relative p-0">
        <div className={`h-1 bg-gradient-to-r ${color} group-hover:h-2 transition-all duration-300`} />
        <div className="p-8 space-y-6">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {description}
            </p>

            {fullDescription && (
              <>
                {isExpanded && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {fullDescription}
                    </p>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-0 h-auto text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 font-medium group/btn"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="ml-1 h-4 w-4 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  ) : (
                    <>
                      Learn More <ChevronDown className="ml-1 h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </Button>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, index) => (
              <Badge
                key={techItem}
                variant="outline"
                className={`text-xs px-2 py-1 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-600/60 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default
                  ${index % 4 === 0 ? 'hover:bg-blue-50 dark:hover:bg-blue-900/20' :
                    index % 4 === 1 ? 'hover:bg-green-50 dark:hover:bg-green-900/20' :
                    index % 4 === 2 ? 'hover:bg-purple-50 dark:hover:bg-purple-900/20' :
                    'hover:bg-pink-50 dark:hover:bg-pink-900/20'}`}
              >
                {techItem}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-3 pt-4">
            {liveLink && (
              <Button variant="outline" size="sm" className="group/btn flex-1 border-primary/20 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300" asChild>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  View Live Site
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </Button>
            )}
            {githubLink && (
              <Button variant="ghost" size="sm" className="group/btn px-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300" asChild>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
