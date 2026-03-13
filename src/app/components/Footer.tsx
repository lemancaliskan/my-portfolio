import { Heart, Github, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Desktop'ta 3 sütunlu yapı: Boşluk | Yazı | İkonlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          
          {/* 1. Sütun: Desktop'ta boş (Denge için) */}
          <div className="hidden md:block"></div>

          {/* 2. Sütun: Tam Ortalanmış Yazı (Boyut text-base olarak büyütüldü) */}
          <div className="text-center">
            <p className="text-base text-foreground/60 flex items-center justify-center flex-wrap gap-1">
              <span>© {currentYear} Leman Çalışkan.</span>
              <span className="flex items-center gap-1">
                Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse" />
                and
                <span className="text-[#613DC1] font-medium">React</span>
              </span>
            </p>
          </div>

          {/* 3. Sütun: Sağ Alt / Sağ Kenar İkonlar */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <motion.a
              href="https://github.com/lemancaliskan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground/60 hover:text-[#613DC1]" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5 text-foreground/60 hover:text-[#613DC1]" />
            </motion.a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}