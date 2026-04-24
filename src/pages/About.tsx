import { motion } from 'motion/react';
import { Users, Target, Award, Heart } from 'lucide-react';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import { Card } from '../components/ui/Card';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description:
        "We push the boundaries of what's possible in software development, constantly exploring new technologies and methodologies.",
    },
    {
      icon: Users,
      title: 'Developer Centric',
      description:
        'Every decision we make is guided by our commitment to improving the developer experience and productivity.',
    },
    {
      icon: Award,
      title: 'Quality Obsessed',
      description: 'We maintain uncompromising standards in our code, documentation, and user experience.',
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'We believe in the power of open source and collaborative development to drive innovation.',
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
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient mb-6">About rinix</h1>
            <p className="text-lg text-foreground-muted max-w-3xl mx-auto mb-12">
              We're a team of passionate developers and designers dedicated to creating tools that empower the next
              generation of software creators. Founded in 2020, rinix has grown from a small open-source project to a
              comprehensive platform trusted by thousands of developers worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#5E6AD2]/10 border border-[#5E6AD2]/20 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-[#5E6AD2]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-[#8A8F98] text-sm leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold mb-6">Join Our Mission</h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who share our passion for creating exceptional developer
              tools. If you're interested in joining the rinix team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-[#5E6AD2] text-white rounded-lg hover:bg-[#5E6AD2]/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/careers"
                className="px-6 py-3 border border-[#5E6AD2]/30 text-[#5E6AD2] rounded-lg hover:bg-[#5E6AD2]/10 transition-colors"
              >
                View Careers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
