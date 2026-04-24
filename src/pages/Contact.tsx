import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      contact: 'hello@rinix.dev',
      action: 'mailto:hello@rinix.dev',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: '#',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our office',
      contact: 'San Francisco, CA',
      action: '#',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Background />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient mb-6">Get in Touch</h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Have questions about rinix? Need help with your project? We're here to help. Reach out to us through any
              of the channels below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:bg-white/[0.05] transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-[#5E6AD2]/10 border border-[#5E6AD2]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-[#5E6AD2]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-[#8A8F98] text-sm mb-3">{method.description}</p>
                  <p className="text-[#5E6AD2] font-medium">{method.contact}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg focus:border-[#5E6AD2] focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg focus:border-[#5E6AD2] focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg focus:border-[#5E6AD2] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg focus:border-[#5E6AD2] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
