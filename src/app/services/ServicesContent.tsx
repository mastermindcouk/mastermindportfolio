"use client";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: "video",
    title: "Video Editing & Post Production",
    subtitle: "For brands that want polished, story-driven video",
    description:
      "From raw footage to final cut, we deliver cinematic editing, color grading, sound design, and social-ready exports that help your message stand out.",
    price: "Custom Quote",
    includes: [
      "Story-driven video editing",
      "Color grading & correction",
      "Sound design & mixing",
      "Social-ready export deliverables",
      "Captioning & subtitling",
      "Fast revision cycles",
    ],
    timeline: "1–2 weeks",
  },
  {
    id: "design",
    title: "Graphic Design & Brand Visuals",
    subtitle: "For companies needing memorable campaigns and assets",
    description:
      "We create stunning visuals for digital and print, from brand identity to social graphics, ads, presentations, and marketing collateral.",
    price: "Custom Quote",
    includes: [
      "Logo and brand identity",
      "Social media graphics",
      "Ad creative and banners",
      "Print-ready collateral",
      "Presentation and pitch deck design",
      "Brand style guidelines",
    ],
    timeline: "1–3 weeks",
  },
  {
    id: "motion",
    title: "Motion Graphics & Animation",
    subtitle: "For content that moves and captivates",
    description:
      "Bring your ideas to life with expressive motion graphics, animated intros, explainer sequences, and social clips designed for maximum engagement.",
    price: "Custom Quote",
    includes: [
      "Logo animation",
      "Kinetic typography",
      "Explainer scenes",
      "Lower thirds and transitions",
      "Looping social content",
      "Broadcast-ready deliverables",
    ],
    timeline: "2–4 weeks",
  },
  {
    id: "brand",
    title: "Brand Identity & Creative Direction",
    subtitle: "For teams building a cohesive visual voice",
    description:
      "We help define your brand through consistent creative direction, campaign concepts, and visual systems that make your story unforgettable.",
    price: "Custom Quote",
    includes: [
      "Brand positioning and messaging",
      "Visual mood boards",
      "Creative concept development",
      "Marketing campaign assets",
      "Design system guidance",
      "Launch-ready creative packages",
    ],
    timeline: "2–4 weeks",
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none"
          style={{ backgroundSize: "48px 48px" }}
        />
        <GlowOrb className="top-1/4 left-1/3 w-96 h-96" color="brand" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              What We <span className="text-gradient">Create</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Video editing, graphic design, and motion services made to grow your
              brand and engage your audience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="relative py-20 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={i * 0.1}>
              <div className="card-glass p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Left — description */}
                  <div>
                    <p className="text-sm font-medium text-brand-400 mb-2">
                      Service 0{i + 1}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{service.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-400" />
                        <span className="text-sm text-gray-400">
                          Timeline:{" "}
                          <span className="text-white font-medium">
                            {service.timeline}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-400">Starting at</span>
                        <span className="text-lg font-bold text-accent-500">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    <Button
                      href={`/contact?service=${service.id}`}
                      variant="primary"
                    >
                      Start this project →
                    </Button>
                  </div>

                  {/* Right — what's included */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
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
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not sure which service fits?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              We&apos;ll help you figure it out. Book a free discovery call —
              no obligation.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book a Free Discovery Call →
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
