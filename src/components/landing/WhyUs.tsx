import { ShieldCheck, Zap, Users, Award, Home, Droplets, Sparkles, Sprout } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Siding Specialists",
    description: "We focus exclusively on vinyl and exterior surfaces, using industry-best 'Soft-Wash' methods."
  },
  {
    icon: Droplets,
    title: "Low-Pressure Safety",
    description: "Unlike high-pressure washers, our system is safe for siding, window seals, and delicate trim."
  },
  {
    icon: Sprout,
    title: "Eco-Friendly Agents",
    description: "Our surfactants are biodegradable and safe for your family, pets, and Ambler landscaping."
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guarantee",
    description: "We are committed to total restoration. If it's not bright and mold-free, we'll make it right."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            The Ambler Authority in Exterior Siding Care
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Exterior mold isn't just an eyesore—it's an organic infestation that can degrade your home's exterior over time. We provide the specialized cleaning power needed to restore your home safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-emerald-600 to-emerald-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Brighten Your Home?</h3>
            <p className="text-emerald-50 text-lg font-medium opacity-90">
              Our Ambler crews are standing by for same-day quotes. Restore your siding's original brilliance with professional soft-wash.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-emerald-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
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
