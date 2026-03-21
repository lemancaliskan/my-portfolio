import { ExternalLink, Github } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import { motion } from 'motion/react';

export function Projects() {
  const { language } = useApp();
  const t = translations[language];

  const projects = [
    {
      ...t.projects.project1,
      github: 'https://github.com/lemancaliskan/SleepMetrics',
      demo: 'https://sleepmetrics.streamlit.app',
      gradient: 'from-[#613DC1] to-[#4E148C]'
    },
    {
      ...t.projects.project2,
      github: 'https://github.com/lemancaliskan/CardioMetrics-Core',
      demo: 'https://cardiometrics-core.streamlit.app',
      gradient: 'from-[#4E148C] to-[#858AE3]'
    },
    {
      ...t.projects.project3,
      github: 'https://github.com/lemancaliskan/Shelfy-Digital-Library',
      demo: null,
      gradient: 'from-[#858AE3] to-[#97DFFC]'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#613DC1] to-[#858AE3] bg-clip-text text-transparent">
            {t.projects.title}
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-xl bg-card border-2 border-[#97DFFC]/30 hover:border-[#97DFFC] transition-all duration-300 flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">
                      {project.name[0]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#613DC1] to-[#858AE3] bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-foreground/70 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-[#97DFFC] bg-[#97DFFC]/10 text-[#613DC1] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg border-2 border-[#613DC1] text-[#613DC1] hover:bg-[#613DC1] hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{t.projects.viewCode}</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-[#613DC1] text-white hover:bg-[#4E148C] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{t.projects.viewDemo}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative glow effect */}
              <div className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
