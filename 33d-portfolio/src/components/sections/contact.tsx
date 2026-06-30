"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Send, Mail, MapPin, Phone, Sparkles, CheckCircle } from "lucide-react";

const projectTypes = [
  "Full Stack Web App",
  "AI / ML System",
  "Automation Tool",
  "Consulting",
  "Other",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sadiqkhan@example.com" },
    { icon: MapPin, label: "Location", value: "Pakistan" },
    { icon: Phone, label: "Availability", value: "Open to opportunities" },
  ];

  return (
    <SectionWrapper id="contact">
      <Container>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Get in Touch
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1} scale>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal mode="word">Let&apos;s Build Something Amazing</TextReveal>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} blur>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can work together
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} delay={0.1 * i} direction="left" distance={30}>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card glass className="p-4 flex items-center gap-4 group">
                    <motion.div
                      className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <item.icon className="h-5 w-5 text-blue-400" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-white/40">{item.label}</p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal direction="right" distance={30}>
              <Card glass className="p-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="h-8 w-8 text-green-400" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-semibold text-white mb-2"
                      >
                        Message Sent!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/50"
                      >
                        Thank you! I&apos;ll get back to you within 24 hours.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button
                          className="mt-6"
                          variant="outline"
                          onClick={() => setSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                        >
                          <Input
                            id="name"
                            label="Name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                        >
                          <Input
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </motion.div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                        >
                          <Input
                            id="company"
                            label="Company"
                            placeholder="Acme Inc."
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </motion.div>
                        <motion.div
                          className="space-y-2"
                          onFocus={() => setFocusedField("projectType")}
                          onBlur={() => setFocusedField(null)}
                        >
                          <label
                            htmlFor="projectType"
                            className="block text-sm font-medium text-white/70"
                          >
                            Project Type
                          </label>
                          <motion.select
                            id="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            whileFocus={{ scale: 1.01 }}
                            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 hover:border-white/20"
                          >
                            <option value="" className="bg-[#0a0a1a]">Select type</option>
                            {projectTypes.map((t) => (
                              <option key={t} value={t} className="bg-[#0a0a1a]">
                                {t}
                              </option>
                            ))}
                          </motion.select>
                        </motion.div>
                      </div>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        onFocus={() => setFocusedField("budget")}
                        onBlur={() => setFocusedField(null)}
                      >
                        <Input
                          id="budget"
                          label="Budget Range"
                          placeholder="$5,000 - $10,000"
                          value={formData.budget}
                          onChange={handleChange}
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                      >
                        <Textarea
                          id="message"
                          label="Message"
                          placeholder="Tell me about your project..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </motion.div>
                      <MagneticButton strength={0.4}>
                        <Button
                          type="submit"
                          className="w-full relative overflow-hidden"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.span
                                className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </span>
                          ) : (
                            <motion.span
                              className="flex items-center gap-2"
                              whileHover={{ x: 3 }}
                            >
                              <Send className="h-4 w-4" />
                              Send Message
                            </motion.span>
                          )}
                        </Button>
                      </MagneticButton>
                    </motion.form>
                  )}
                </AnimatePresence>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
