import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { motion } from 'motion/react';

export function NotFound() {
  const { language } = useApp();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#613DC1] via-[#4E148C] to-[#858AE3] bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-4"
        >
          {language === 'en' ? 'Page Not Found' : 'Sayfa Bulunamadı'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-foreground/70 mb-8 text-lg"
        >
          {language === 'en' 
            ? "The page you're looking for doesn't exist or has been moved." 
            : 'Aradığınız sayfa bulunamadı veya taşınmış olabilir.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/"
            className="group flex items-center space-x-2 px-6 py-3 bg-[#613DC1] hover:bg-[#4E148C] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#613DC1]/20"
          >
            <Home className="w-5 h-5" />
            <span>{language === 'en' ? 'Go Home' : 'Ana Sayfaya Dön'}</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-6 py-3 border-2 border-[#613DC1] text-[#613DC1] hover:bg-[#613DC1] hover:text-white rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'en' ? 'Go Back' : 'Geri Dön'}</span>
          </button>
        </motion.div>

        {/* Decorative animated circles */}
        <div className="relative mt-16">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-1/4 top-0 w-32 h-32 rounded-full bg-[#97DFFC]/20 blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute right-1/4 top-0 w-40 h-40 rounded-full bg-[#858AE3]/20 blur-xl"
          />
        </div>
      </motion.div>
    </div>
  );
}
