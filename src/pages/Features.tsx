import { motion } from 'motion/react';
import { Cpu, Shield, Zap, Globe, Layers, Sparkles } from 'lucide-react';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import { Card } from '../components/ui/Card';

export default function Features() {
  const features = [
    {
      icon: Cpu,
      title: 'Sync Engine',
      description:
        'Automatically propagate code changes across your entire infrastructure with our procedural illumination engine.',
      details:
        'Real-time synchronization ensures that every component stays in harmony, reducing development friction and improving team collaboration.',
    },
    {
      icon: Shield,
      title: 'Framework Ready',
      description: 'Highly secure isolation with built-in protection against common vulnerabilities.',
      details:
        'Enterprise-grade security features including sandboxed execution, encrypted communications, and comprehensive audit trails.',
    },
    {
      icon: Zap,
      title: 'Blink Fast Performance',
      description: 'Infrastructure as code optimized for 120fps UI rendering and smooth animations.',
      details:
        'Leverage our optimized rendering pipeline that minimizes layout shifts and maximizes frame rates across all devices.',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy worldwide with our distributed network of edge locations.',
      details: '99.9% uptime guarantee with automatic failover and load balancing across multiple continents.',
    },
    {
      icon: Layers,
      title: 'Layered Architecture',
      description: 'Modular design that scales from small projects to enterprise applications.',
      details: 'Composable components that can be mixed and matched to create exactly the experience you need.',
    },
    {
      icon: Sparkles,
      title: 'Ambient Intelligence',
      description: 'AI-powered insights that adapt to your development workflow.',
      details:
        'Machine learning algorithms that learn from your patterns and provide intelligent suggestions for optimization.',
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
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient mb-6">Powerful Features</h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Discover the tools and capabilities that make rinix the premier choice for modern development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:bg-white/[0.05] transition-colors group">
                  <div className="w-16 h-16 rounded-2xl bg-[#5E6AD2]/10 border border-[#5E6AD2]/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(94,106,210,0.2)] group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-[#5E6AD2]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-[#8A8F98] text-sm leading-relaxed mb-4">{feature.description}</p>
                  <p className="text-[#8A8F98] text-xs leading-relaxed">{feature.details}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
