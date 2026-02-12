import { ShieldCheck, Zap, Users, Award, Wind, FlaskConical, Search, Activity, Microscope, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Molecular Destruction",
    description: "We don't just mask odors with scents. We use industrial hydroxyl generators to destroy odor-causing molecules at the molecular level."
  },
  {
    icon: Search,
    title: "Vapor Tracking",
    description: "Using infrared and deep-probe moisture mapping to identify exactly where groundwater vapor is entering your Pitman basement."
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Safety",
    description: "Our reset protocols are 100% ozone-free and safe for occupation immediately after treatment, perfect for Pitman families."
  },
  {
    icon: Activity,
    title: "Air Quality Audits",
    description: "We provide before-and-after laser particulate testing to prove that your 'old house' smell is gone forever."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase tracking-tight">
            Why Montvale Homeowners Choose Our <span className="text-indigo-400">Atmospheric Reset</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
            Invisible odors are often the most difficult to eliminate. Our Bergen County specialists use pharmaceutical-grade air science to refresh closet spaces permanently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Wind,
              title: "Molecular Removal",
              description: "We destroy the chemical signatures of musty smells rather than covering them up with fragrances."
            },
            {
              icon: Search,
              title: "Hidden Humidity Scans",
              description: "Detecting the micro-level moisture in Montvale closet walls that feeds invisible odor-causing bacteria."
            },
            {
              icon: ShieldCheck,
              title: "100% Wardrobe Safe",
              description: "Our processes are entirely safe for high-end clothing, leaving no scent, residue, or harmful byproducts."
            },
            {
              icon: Activity,
              title: "Air Freshness Audits",
              description: "Verification of zero mVOC levels after treatment ensuring your 'musty closet' problem is solved for good."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-indigo-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Lingering Closet Smells?</h3>
            <p className="text-indigo-50 text-lg font-medium opacity-90">
              Our Montvale diagnostic teams can perform a full environmental assessment and niche neutralization within 24 hours.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-indigo-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
          >
            <ShieldCheck className="w-6 h-6" />
            (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
