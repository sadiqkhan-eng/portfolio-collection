"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "@/components/shared/animated-button";
// Import the Server Action
import { sendEmail } from "@/actions/contactActions"; 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle"); // Reset status before new submission

    const result = await sendEmail(formData); // Call the Server Action

    if (result.success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form on success
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);

    // Optionally clear success/error message after a delay
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Get In <GradientText>Touch</GradientText>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-4">
                  <GlassCard className="p-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:hello@example.com" className="text-sm text-muted-foreground hover:text-primary">
                          hello@example.com
                        </a>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">
                          San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <p className="font-semibold mb-4">Follow Me</p>
                  <div className="flex gap-3">
                    {[
                      { label: "GitHub", href: "#" },
                      { label: "LinkedIn", href: "#" },
                      { label: "Twitter", href: "#" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="p-3 rounded-lg glass hover:bg-primary/10 transition-colors text-sm font-medium"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <GlassCard className="p-4 mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-semibold">Available for Projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects. Response within 24 hours.
                  </p>
                </GlassCard>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500"
                  >
                    ✗ Something went wrong. Please try again.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <AnimatedButton
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </AnimatedButton>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-transparent to-purple-900/10">
        <Container>
          <GlassCard className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a free 30-minute consultation to discuss your project
            </p>
            {/* Note: This button might need an href to a booking system or a different contact mechanism */}
            <AnimatedButton variant="outline" size="xl"> 
              Schedule a Call
            </AnimatedButton>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
