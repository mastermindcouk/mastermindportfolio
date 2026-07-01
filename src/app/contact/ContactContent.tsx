"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Button } from "@/components/ui/Button";
import {
  MessageCircle,
  Mail,
  CheckCircle,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";

const projectTypes = [
  "SaaS MVP",
  "Business Website",
  "E-commerce",
  "Dashboard",
  "API",
  "Other",
];

const budgetRanges = [
  "Business Website - ₦350,000",
  "E-commerce - ₦500,000",
  "Custom Projects - Let's discuss",
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
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
                  href="mailto:info@scalestacklab.online"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-400 transition-colors mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">info@scalestacklab.online</span>
                </a>

                <a
                  href="tel:+2348151073356"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-400 transition-colors mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.25A2.25 2.25 0 015.25 3h2.1a1.5 1.5 0 011.45 1.05l.65 2.03a1.5 1.5 0 01-.41 1.61l-1.26 1.08a12.4 12.4 0 005.96 5.96l1.08-1.26a1.5 1.5 0 011.61-.41l2.03.65A1.5 1.5 0 0121 7.65v2.1A2.25 2.25 0 0118.75 12h-.92a14.17 14.17 0 01-11.83-11.83V3A2.25 2.25 0 013 5.25z" />
                    </svg>
                  </div>
                  <span className="text-sm">+234 815 107 3356</span>
                </a>

                <a
                  href="https://wa.me/2348130845852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm">0813 084 5852</span>
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
                href="https://wa.me/2348130845852"
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

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={sending}
                    >
                      {sending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message →
                        </>
                      )}
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
