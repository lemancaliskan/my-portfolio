import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import { motion } from 'motion/react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { PageTransition } from '../components/PageTransition';

export function Contact() {
  const { language } = useApp();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setStatus('success');
      setFormData({ name: '', surname: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Webhook Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#613DC1] to-[#858AE3] bg-clip-text text-transparent">
              {t.contact.title}
            </h1>
            <p className="text-xl text-[#613DC1] dark:text-[#858AE3]">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 md:p-12 rounded-2xl border-2 border-[#97DFFC]/30 shadow-xl shadow-[#613DC1]/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-[#613DC1]" />
              <h2 className="text-2xl font-bold text-foreground">
                {t.contact.form.send || (language === 'en' ? 'Send a Message' : 'Mesaj Gönder')}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#613DC1] dark:text-[#858AE3]">
                    {t.contact.form.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'en' ? '' : ''}
                    className="bg-input-background border-[#97DFFC]/30 focus:border-[#613DC1] text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="surname" className="text-[#613DC1] dark:text-[#858AE3]">
                    {t.contact.form.surname}
                  </Label>
                  <Input
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    placeholder={language === 'en' ? '' : ''}
                    className="bg-input-background border-[#97DFFC]/30 focus:border-[#613DC1] text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#613DC1] dark:text-[#858AE3]">
                  {t.contact.form.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input-background border-[#97DFFC]/30 focus:border-[#613DC1] text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#613DC1] dark:text-[#858AE3]">
                  {t.contact.form.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-input-background border-[#97DFFC]/30 focus:border-[#613DC1] text-foreground resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-[#613DC1] hover:bg-[#4E148C] text-white shadow-lg hover:shadow-[#613DC1]/30'
                } disabled:opacity-70`}
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="w-6 h-6" />
                    </motion.div>
                    {t.contact.form.sending}
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    {t.contact.form.success}
                  </>
                ) : status === 'error' ? (
                  t.contact.form.error
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    {t.contact.form.send}
                  </>
                )}
              </motion.button>
            </form>

            {/* Bilgi Kartları Alt Bölüm */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 pt-8 border-t border-[#97DFFC]/30">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#613DC1] to-[#4E148C] flex items-center justify-center shadow-lg shadow-[#613DC1]/20">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-foreground">Email</p>
                <p className="text-sm text-foreground/60">jmleman95@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4E148C] to-[#858AE3] flex items-center justify-center shadow-lg shadow-[#4E148C]/20">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-foreground">
                  {language === 'en' ? 'Response Time' : 'Yanıt Süresi'}
                </p>
                <p className="text-sm text-foreground/60">24-48 Hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#858AE3] to-[#97DFFC] flex items-center justify-center shadow-lg shadow-[#858AE3]/20">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-foreground">
                  {language === 'en' ? 'Status' : 'Durum'}
                </p>
                <p className="text-sm text-foreground/60">
                  {language === 'en' ? 'Open to opportunities' : 'Fırsatlara açık'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}