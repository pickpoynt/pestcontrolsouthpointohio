import { Shield, Home, Droplets, Wind, Zap, Brush, Sparkles, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Soft Wash House Washing",
    description: "Gentle, low-pressure cleaning that removes mold and algae without damaging vinyl siding or window seals.",
    link: "#siding-mold-info"
  },
  {
    icon: Zap,
    title: "Oxidation Removal",
    description: "Specialized chemical treatment to remove the chalky white 'oxidation' layer that makes vinyl look aged.",
    link: "#siding-mold-info"
  },
  {
    icon: Brush,
    title: "Gutter Brightening",
    description: "Manual detailing of gutter exteriors to remove 'tiger stripes' and restore them to their original color.",
    link: "#siding-mold-info"
  },
  {
    icon: Sparkles,
    title: "Exterior Sanitization",
    description: "Post-cleanup inhibitor application that keeps mold and organic growth from returning for up to 12 months.",
    link: "#siding-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Elite Exterior Restoration Services
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Your home's siding is its first line of defense. Our Ambler teams provide specialized soft-wash technology to protect and beautify your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  Details <ClipboardCheck className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
