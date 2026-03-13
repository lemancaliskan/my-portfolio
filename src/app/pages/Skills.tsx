import { Code2, Wrench, Users, CheckCircle2 } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export function Skills() {
  const { language } = useApp();
  const t = translations[language];

  const skillCategories = [
    {
      title: t.skills.programming,
      icon: Code2,
      color: '#613DC1',
      skills: [
        { name: 'Python', level: '90%' },
        { name: 'C#', level: '85%' },
        { name: 'SQL', level: '80%' },
        { name: 'Javascript', level: '75%' },
        { name: 'HTML', level: '90%' },
        { name: 'CSS', level: '85%' }
      ]
    },
    {
      title: t.skills.tools,
      icon: Wrench,
      color: '#4E148C',
      skills: [
        { name: 'Git', level: '90%' },
        { name: 'Machine Learning (Scikit-learn)', level: '70%' },
        { name: 'MS Excel', level: '99%' },
        { name: 'Postgres', level: '85%' },
        { name: 'CustomTkinter', level: '80%' },
        { name: 'React', level: '65%' },
      ]
    },
    {
      title: t.skills.soft,
      icon: Users,
      color: '#858AE3',
      skills: [
        { 
          name: language === 'tr' ? 'Problem Çözme' : 'Problem Solving', 
          level: '90%' 
        },
        { 
          name: language === 'tr' ? 'Zaman Yönetimi' : 'Time Management', 
          level: '80%' 
        },
        { 
          name: language === 'tr' ? 'Adaptasyon Yeteneği' : 'Adaptability', 
          level: '90%' 
        },
        { 
          name: language === 'tr' ? 'Eleştirel Düşünme' : 'Critical Thinking', 
          level: '92%' 
        },
        { 
          name: language === 'tr' ? 'Hızlı Öğrenme' : 'Rapid Learning', 
          level: '95%' 
        },
        { 
          name: language === 'tr' ? 'Ekip Çalışması' : 'Team Collaboration', 
          level: '87%' 
        }
      ]
    }
  ];

  const getLevelInfo = (level: string) => {
    const percent = parseInt(level);
    if (percent >= 90) {
      return { percent: percent, classes: 'from-[#613DC1] to-[#4E148C]' };
    } else if (percent >= 80) {
      return { percent: percent, classes: 'from-[#4E148C] to-[#858AE3]' };
    } else {
      return { percent: percent, classes: 'from-[#858AE3] to-[#97DFFC]' };
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#613DC1] to-[#858AE3] bg-clip-text text-transparent"
          >
            {t.skills.title}
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-card p-8 rounded-2xl border-2 border-[#97DFFC]/30 shadow-xl shadow-[#613DC1]/5"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: category.color }}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const levelInfo = getLevelInfo(skill.level);
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-foreground/90 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-xs font-bold bg-gradient-to-r ${levelInfo.classes} bg-clip-text text-transparent`}>
                            {skill.level}
                          </span>
                        </div>
                        
                        <div className="h-2 bg-[#97DFFC]/10 rounded-full overflow-hidden flex items-center pr-1">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${levelInfo.percent}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                              ease: "easeOut" 
                            }}
                            className={`h-full bg-gradient-to-r ${levelInfo.classes} rounded-full`}
                            style={{ 
                              boxShadow: `0 0 10px ${category.color}40`
                            }}
                          />
                          <CheckCircle2 className="w-3 h-3 text-[#97DFFC] ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-8 bg-card rounded-2xl border-2 border-[#97DFFC]/30"
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#613DC1] to-[#858AE3] bg-clip-text text-transparent">
              {language === 'en' ? 'Core Competencies' : 'Ana Yetkinlikler'}
            </h3>
            
            <div className="flex flex-col items-center gap-4">

<div className="flex flex-col items-center gap-4">
  {/* Üst Satır */}
  <div className="flex flex-wrap justify-center gap-3">
    {[
      { en: 'Data Analysis', tr: 'Veri Analizi' },
      { en: 'GUI Development', tr: 'Arayüz Geliştirme' },
      { en: 'Database Management', tr: 'Veritabanı Yönetimi' },
      { en: 'Algorithm Design', tr: 'Algoritma Tasarımı' }
    ].map((skill, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 + index * 0.1 }}
        
        whileHover={{ 

          backgroundColor: "rgba(151, 223, 252, 0.25)",
        }}
       
        className="px-6 py-3 bg-[#97DFFC]/10 border border-[#97DFFC] text-[#613DC1] rounded-full text-sm font-semibold shadow-md transition-all cursor-default"
      >
        {language === 'tr' ? skill.tr : skill.en}
      </motion.span>
    ))}
  </div>

  {/* Alt Satır */}
  <div className="flex flex-wrap justify-center gap-3">
    {[
      { en: 'Web Development', tr: 'Web Geliştirme' },
      { en: 'RandomForest', tr: 'RandomForest' },
      { en: 'GradientBoosting', tr: 'GradientBoosting' }
    ].map((skill, index) => (
      <motion.span
        key={index + 4}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 + index * 0.1 }}
        whileHover={{ 
          backgroundColor: "rgba(151, 223, 252, 0.25)",
        }}
        className="px-6 py-3 bg-[#97DFFC]/10 border border-[#97DFFC] text-[#613DC1] rounded-full text-sm font-semibold shadow-md transition-all cursor-default"
      >
        {language === 'tr' ? skill.tr : skill.en}
      </motion.span>
    ))}
  </div>
</div>
</div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}