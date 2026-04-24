import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Zap, Shield, Globe, Cpu, Layers, ArrowRight, Github, Command } from 'lucide-react';
import Background from '../components/Background';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function Home() {
  const { scrollY } = useScroll();

  // Parallax effects for hero
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="relative min-h-screen">
      <Background />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E6AD2]/10 border border-[#5E6AD2]/30 text-[#6872D9] text-[10px] font-mono uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse"></span>
            <span>rinix Engine v2.4 Active</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[84px] font-semibold leading-[0.9] tracking-[-0.04em] mb-8 text-gradient"
          >
            Engineering the future <br />
            <span className="accent-gradient">of ambient code.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The premium developer toolkit for building cinematic, technical, and performant user experiences with
            obsessive attention to depth and motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg">
              <Github className="w-4 h-4 mr-2" />
              Star on GitHub
            </Button>
          </motion.div>
        </motion.div>

        {/* Mock Interface Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <Card className="p-1 rounded-3xl bg-linear-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm shadow-2xl">
            <div className="bg-background-elevated rounded-2xl overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.1),transparent_70%)]" />
              <div className="flex items-center gap-2 p-4 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="mx-auto w-1/3 h-6 bg-white/[0.04] rounded-md border border-white/[0.06]" />
              </div>
              <div className="p-8 grid grid-cols-3 gap-6 h-full">
                <div className="space-y-4">
                  <div className="h-32 bg-white/[0.03] rounded-xl border border-white/[0.05]" />
                  <div className="h-4 w-3/4 bg-white/[0.03] rounded" />
                  <div className="h-4 w-1/2 bg-white/[0.03] rounded" />
                </div>
                <div className="col-span-2 h-full bg-white/[0.02] rounded-xl border border-white/[0.05] p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-24 h-6 bg-accent/20 rounded-full border border-accent/20" />
                    <div className="w-32 h-6 bg-white/[0.05] rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/[0.05] rounded w-full" />
                    <div className="h-4 bg-white/[0.05] rounded w-11/12" />
                    <div className="h-4 bg-white/[0.05] rounded w-4/5" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-[10px] font-mono tracking-widest text-[#8A8F98] uppercase mb-4">Core Principles</h2>
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
              Master the art of light.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-[600px] md:h-[480px]">
            {/* Main Feature Card */}
            <Card className="md:col-span-3 md:row-span-2 group flex flex-col justify-end p-8 bg-white/[0.03]">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#5E6AD2]/10 border border-[#5E6AD2]/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(94,106,210,0.2)] group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-[#5E6AD2]" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">Sync Engine</h4>
                <p className="text-[#8A8F98] text-sm leading-relaxed max-w-sm">
                  Automatically propagate code changes across your entire infrastructure with our procedural
                  illumination engine.
                </p>
              </div>
            </Card>

            <Card className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#8A8F98] font-mono">Uptime</span>
              <div className="text-4xl font-semibold tracking-tight text-[#EDEDEF]">99.9%</div>
            </Card>

            <Card className="md:col-span-2 md:row-span-1 p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-[#5E6AD2]" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Framework Ready</h4>
                <p className="text-xs text-[#8A8F98]">Highly secure isolation.</p>
              </div>
            </Card>

            <Card className="md:col-span-3 md:row-span-1 bg-linear-to-br from-[#5E6AD2]/10 to-transparent p-6 flex items-center justify-between border-[#5E6AD2]/20">
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg">Blink Fast Performance</h4>
                <p className="text-sm text-[#8A8F98]">Infrastructure as code for 120fps UI.</p>
              </div>
              <button className="w-10 h-10 rounded-full border border-[#5E6AD2]/40 flex items-center justify-center hover:bg-[#5E6AD2] hover:border-transparent transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-32 px-6 border-t border-white/[0.06] mt-20 relative bg-background-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,106,210,0.05),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient mb-8">
            Ready to illuminate your <br /> next project?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto h-14 text-lg">
              Join the Beta
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 text-lg">
              View Documentation
            </Button>
          </div>
          <div className="mt-20 pt-10 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-[#8A8F98]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Operational
              </div>
            </div>
            <div className="flex gap-8">
              <span>v2.4.12-stable</span>
              <span>US-East-1</span>
              <span>Memory: 42%</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
