import { Link } from 'react-router';
import { ArrowRight, Code2, Database, Brain } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';


export function Home() {
  const { language } = useApp();
  const t = translations[language];

  const languages = [
    { name: language === 'tr' ? 'Türkçe' : 'Turkish', level: language === 'tr' ? 'Anadil' : 'Native', percent: 100 },
    { name: language === 'tr' ? 'İngilizce' : 'English', level: 'C1', percent: 90 },
    { name: language === 'tr' ? 'Rusça' : 'Russian', level: 'B1', percent: 60 },
    { name: language === 'tr' ? 'Korece' : 'Korean', level: 'B2', percent: 75 },
    { name: language === 'tr' ? 'Çince' : 'Chinese', level: 'A1', percent: 30 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#858AE3] text-base font-medium"
              >
                {t.home.subtitle}
              </motion.p>
              
              {/* ÇÖZÜM: whitespace-nowrap kaldırıldı, böylece uzun isimlerde alt satıra geçerek kesilmeyi önler */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#613DC1] via-[#4E148C] to-[#858AE3] bg-clip-text text-transparent leading-tight">
                {t.home.title}
              </h1>
            </div>

            <p className="text-lg leading-relaxed text-foreground/80 max-w-xl">
              {t.home.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/projects"
                className="group px-6 py-3 bg-[#613DC1] hover:bg-[#4E148C] text-white rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-[#613DC1]/20 text-sm font-medium"
              >
                <span>{t.home.viewProjects}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-[#613DC1] text-[#613DC1] hover:bg-[#613DC1] hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
              >
                {t.home.contactMe}
              </Link>
            </div>

            {/* Languages Section */}
            <div className="pt-4 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#858AE3]">
                {language === 'tr' ? 'Diller' : 'Languages'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground/90">{lang.name}</span>
                      <span className="text-foreground/50">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#613DC1]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.percent}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#613DC1] to-[#858AE3] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-card border border-[#97DFFC]/30 text-center"
              >
                <Code2 className="w-8 h-8 mx-auto mb-2 text-[#613DC1]" />
                <div className="text-2xl font-bold text-[#613DC1]">Python</div>
                <div className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Expert</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-card border border-[#97DFFC]/30 text-center"
              >
                <Brain className="w-8 h-8 mx-auto mb-2 text-[#4E148C]" />
                <div className="text-2xl font-bold text-[#4E148C]">ML/AI</div>
                <div className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Advanced</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-card border border-[#97DFFC]/30 text-center"
              >
                <Database className="w-8 h-8 mx-auto mb-2 text-[#858AE3]" />
                <div className="text-2xl font-bold text-[#858AE3]">Data</div>
                <div className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Specialist</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(151, 223, 252, 0.3)',
                    '0 0 40px rgba(151, 223, 252, 0.5)',
                    '0 0 20px rgba(151, 223, 252, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#97DFFC] relative"
              >
                <ImageWithFallback
                  src="/assets/portrait.jpg"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-20 h-20 border-4 border-[#858AE3] rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-[#613DC1] rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}