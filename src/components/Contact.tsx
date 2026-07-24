"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Phone, 
  Copy, 
  Check, 
  Send, 
  CheckCircle2,
  Clock
} from "lucide-react";
import { PERSONAL_INFO } from "@/constants/portfolioData";

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3B82F6", "#8B5CF6", "#10B981"],
      });
    } catch {
      // Fallback
    }

    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 mb-20 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-wider uppercase">
          <Mail className="w-3.5 h-3.5" />
          <span>Kontakt</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
          Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Aryan</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Direct Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-white">Direct Information</h3>
              <p className="text-sm text-muted leading-relaxed">
                Feel free to reach out for software engineering inquiries, working student roles, or technical collaborations.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="p-3 rounded-xl bg-accent/20 text-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono text-muted uppercase">Email</span>
                  <p className="text-sm font-mono text-white font-medium truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-[#111111] border border-white/15 text-muted hover:text-white transition-all shrink-0 ml-2"
                title="Copy email"
                data-cursor-text="COPY"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="p-3 rounded-xl bg-secondary/20 text-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono text-muted uppercase">Telefon</span>
                  <p className="text-sm font-mono text-white font-medium truncate">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="p-2.5 rounded-xl bg-[#111111] border border-white/15 text-muted hover:text-white transition-all shrink-0 ml-2"
                title="Copy phone number"
                data-cursor-text="COPY"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Address & Location */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono text-muted">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Central European Time (UTC+1 / Germany)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-muted uppercase">Code & Profile</span>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/20 text-muted hover:text-white transition-all"
                  data-cursor-text="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/20 text-muted hover:text-white transition-all"
                  data-cursor-text="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Form Success Overlay */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#111111]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">Nachricht gesendet!</h3>
                <p className="text-sm text-muted max-w-md">
                  Vielen Dank für Ihre Nachricht. Ich werde mich innerhalb von 24 Stunden bei Ihnen melden.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-muted">Name</label>
                  <input
                    {...register("name", { required: "Name ist erforderlich" })}
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#050505] border border-white/10 focus:border-accent text-white text-sm focus:outline-none transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-400 font-mono">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-muted">E-Mail</label>
                  <input
                    {...register("email", {
                      required: "E-Mail ist erforderlich",
                      pattern: { value: /^\S+@\S+$/i, message: "Ungültiges Format" },
                    })}
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#050505] border border-white/10 focus:border-accent text-white text-sm focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-xs text-red-400 font-mono">{errors.email.message}</p>}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-muted">Betreff / Thema</label>
                <input
                  {...register("subject", { required: "Betreff ist erforderlich" })}
                  type="text"
                  placeholder="z.B. Software Engineering / Werksstudent"
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#050505] border border-white/10 focus:border-accent text-white text-sm focus:outline-none transition-colors"
                />
                {errors.subject && <p className="text-xs text-red-400 font-mono">{errors.subject.message}</p>}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-muted">Nachricht</label>
                <textarea
                  {...register("message", { required: "Nachricht ist erforderlich", minLength: { value: 10, message: "Mindestens 10 Zeichen" } })}
                  rows={5}
                  placeholder="Ihre Nachricht an Aryan..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#050505] border border-white/10 focus:border-accent text-white text-sm focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-xs text-red-400 font-mono">{errors.message.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-accent via-secondary to-accent text-white font-bold text-sm font-mono uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-50"
                data-cursor-text="SUBMIT"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Wird gesendet...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Nachricht senden</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
