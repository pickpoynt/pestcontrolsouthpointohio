import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Wind, Award, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Austin's Soot Leaders",
    description: "We are the leading specialists for scientific soot removal in Austin, serving the Greater Austin area with surgical precision for over 15 years."
  },
  {
    icon: Microscope,
    title: "Microscopic Soot Analysis",
    description: "Every Austin project begins with a professional surface assessment, identifying the exact chemical composition of the soot deposits."
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly Extraction",
    description: "We use botanical-based cleaners and advanced dry-sponge extraction to ensure your Austin home is safe for immediate occupancy."
  },
  {
    icon: ClipboardCheck,
    title: "Certified & Local",
    description: "Our Austin team is IICRC certified in fire and smoke restoration, ensuring all work meets the highest national safety standards."
  },
  {
    icon: Shield,
    title: "Scientific Clean Guarantee",
    description: "We don't just clean; we extract. If any soot residue is found within 30 days, we'll return to your Austin property at zero cost."
  },
  {
    icon: Building2,
    title: "Texas Building Heritage",
    description: "From Clarksville bungalows to modern West Lake estates, we understand how to treat Austin's diverse building materials safely."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Austin's Choice for Soot Extraction
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the restoration team that Austin homeowners trust. We specialize in turning a smoke-damaged environment into a fresh, healthy home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;




