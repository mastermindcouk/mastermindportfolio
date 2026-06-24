"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Mail, CheckCircle, Send } from "lucide-react";

const projectTypes = [
  "SaaS MVP",
  "Business Website",
  "Dashboard",
  "API",
  "Other",
];

const budgetRanges = [
  "< $2,000",
  "$2,000–$5,000",
  "$5,000–$15,000",
  "$15,000+",
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none"
          style={{ backgroundSize: "48px 48px" }}
        />
        <GlowOrb className="top-1/3 left-1/3 w-96 h-96" color="brand" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Let&apos;s <span className="text-gradient">Talk</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Fill out the form and we&apos;ll get back
              to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Left — Info */}
            <AnimatedSection className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Contact Info
                </h2>

                <a
                  href="mailto:hello@scalestacklabs.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-400 transition-colors mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">hello@scalestacklabs.com</span>
                </a>

                <a
                  href="https://wa.me/2340000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Chat on WhatsApp</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reply within 24 hours",
                    "Free 30-minute discovery call",
                    "No-obligation project quote",
                    "Transparent pricing & timeline",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition-all active:scale-[0.97] w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection delay={0.1} className="md:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-glass p-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-gray-400">
                      Thanks for reaching out! We&apos;ll get back to you within
                      24 hours.
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          projectType: "",
                          budget: "",
                          message: "",
                        });
                      }}
                      className="mt-6"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="card-glass p-8 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-sm text-gray-400 font-medium"
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-sm text-gray-400 font-medium"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="projectType"
                        className="text-sm text-gray-400 font-medium"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                      >
                        <option value="" disabled>
                          Select project type
                        </option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="budget"
                        className="text-sm text-gray-400 font-medium"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm text-gray-400 font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-300 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full">
                      <Send className="w-4 h-4" />
                      Send Message →
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
