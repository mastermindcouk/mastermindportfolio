"use client";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: "web",
    title: "Business Websites & Landing Pages",
    subtitle: "For companies needing a professional web presence",
    description:
      "High-performance websites that convert visitors into customers. Built with modern frameworks for speed, accessibility, and search engine visibility.",
    price: "₦350,000",
    includes: [
      "Responsive, mobile-first design",
      "Content management system",
      "SEO optimization",
      "Analytics integration",
      "Contact forms & lead capture",
      "Performance optimization",
    ],
    timeline: "1–3 weeks",
  },
  {
    id: "ecom",
    title: "E-commerce Websites",
    subtitle: "For businesses ready to sell online",
    description:
      "Full-featured online stores with secure payments, inventory management, and a seamless shopping experience across all devices.",
    price: "₦500,000",
    includes: [
      "Product catalog & categories",
      "Shopping cart & checkout",
      "Secure payment integration",
      "Order management system",
      "Inventory tracking",
      "Mobile-optimized storefront",
    ],
    timeline: "3–5 weeks",
  },
  {
    id: "saas",
    title: "SaaS MVP Development",
    subtitle: "For founders with a validated idea",
    description:
      "Take your concept to a working product in weeks. We handle the entire stack — frontend, backend, database, and deployment — so you can start getting user feedback and traction immediately.",
    price: "Custom Quote",
    includes: [
      "Authentication & user management",
      "Database design & setup",
      "RESTful or GraphQL API",
      "Admin panel / dashboard",
      "CI/CD & deployment",
      "Responsive design",
    ],
    timeline: "3–5 weeks",
  },
  {
    id: "dash",
    title: "Admin Dashboards & Internal Tools",
    subtitle: "For operations teams",
    description:
      "Replace spreadsheets and scattered tools with a centralized, real-time dashboard. Custom-built for your specific workflows and data sources.",
    price: "Custom Quote",
    includes: [
      "Interactive data tables & charts",
      "Role-based access control",
      "Data import/export",
      "Third-party integrations",
      "Real-time updates",
      "Custom reporting",
    ],
    timeline: "4–8 weeks",
  },
  {
    id: "api",
    title: "API & Backend Systems",
    subtitle: "For products needing robust infrastructure",
    description:
      "Scalable, well-documented APIs that power your applications. Built with performance, security, and developer experience in mind.",
    price: "Custom Quote",
    includes: [
      "REST & GraphQL endpoints",
      "Authentication & authorization",
      "Rate limiting & caching",
      "Database optimization",
      "API documentation (OpenAPI)",
      "Monitoring & logging",
    ],
    timeline: "3–6 weeks",
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
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              From MVPs to enterprise-grade systems — we design and develop
              digital products that move the needle.
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
