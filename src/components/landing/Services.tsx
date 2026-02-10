import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck, Eraser } from "lucide-react";

const services = [
  {
    icon: Eraser,
    title: "Dry Chemical Extraction",
    description: "Removing soot from Austin walls and ceilings using professional-grade dry sponges. We lift particles without liquid to prevent permanent staining.",
    link: "#soot-removal-info"
  },
  {
    icon: Shield,
    title: "Texas Limestone Care",
    description: "Professional cleaning of soot-stained Austin limestone fireplaces. We use specialized stone-safe chemistry to draw out carbon deposits.",
    link: "#soot-removal-info"
  },
  {
    icon: Filter,
    title: "HEPA Air Scrubbing",
    description: "Capturing 99.97% of airborne soot particles in your Austin home. We protect your indoor air quality during the entire cleaning process.",
    link: "#soot-removal-info"
  },
  {
    icon: Activity,
    title: "Ductwork Purification",
    description: "Decontaminating HVAC systems after furnace puff-backs. We ensure soot isn't recirculated through your Austin ventilation network.",
    link: "#soot-removal-info"
  },
  {
    icon: Wind,
    title: "Odor Neutralization",
    description: "Molecular fire odor removal for Austin homes. We break down the chemical bonds of smoke scents using hydroxyl and thermal fogging.",
    link: "#soot-removal-info"
  },
  {
    icon: AlertTriangle,
    title: "Puff-Back Restoration",
    description: "Rapid response for furnace and boiler misfires in Austin. We clean the oily residue that blankets your property before it causes damage.",
    link: "#soot-removal-info"
  },
  {
    icon: Sparkles,
    title: "Upholstery Cleaning",
    description: "Specialized soot extraction from high-end Austin furniture and rugs. We restore delicate textiles using low-moisture scientific methods.",
    link: "#soot-removal-info"
  },
  {
    icon: ShieldCheck,
    title: "Certified Clean Guarantee",
    description: "Austin's most thorough soot inspection. We provide digital verification of surface and air quality before we consider the job completed.",
    link: "#soot-removal-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Austin's Scientific Soot Removal
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just wipe away soot—extract it. Our Austin restoration team uses advanced physics to remove fine carbon particles from every surface of your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                    <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


