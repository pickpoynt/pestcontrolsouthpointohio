import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Home, Sparkles, Droplets, Wind } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = "Vinyl siding mold cleaning Ambler",
  subtitle = "Is green mold or black algae ruining your Ambler home's curb appeal? Our specialized soft-wash technicians provide deep-cleaning for vinyl siding and home exteriors without the damage of high pressure. Ambler Exterior Mold Pros: Restoration Excellence.",
  image = "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Vinyl siding mold cleaning Ambler" className="w-full h-full object-cover brightness-[0.45]" />
        {/* UNIQUE OVERLAY IMAGE: Using a water drop / ripple texture overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?auto=format&fit=crop&q=80"
            alt="Water Ripple Texture Overlay"
            className="w-full h-full object-cover scale-150 animate-pulse transition-all duration-[15000ms]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 animate-fade-in shadow-lg shadow-emerald-500/5">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Ambler's Premier Exterior Restoration Team</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-emerald-900/40" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                Cleaning Protocols
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white font-medium">Soft Wash Tech</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white font-medium">Safe for Landscaping</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Wind className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white font-medium">Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
