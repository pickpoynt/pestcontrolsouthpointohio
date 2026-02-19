import { ShieldCheck, MapPin, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Dynamic Background with Technical Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-5 brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 opacity-95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Unmatched Precision</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight uppercase tracking-tight">
              Why Anoka Trusts <br />
              <span className="text-indigo-500">Our Plumbers</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light italic">
              We bring master-grade engineering to every plumbing repair. Our team is dedicated to preserving your home's infrastructure through technical excellence and precision diagnostics.
            </p>

            <div className="grid gap-6">
              {[
                {
                  title: "Diagnostic Accuracy",
                  description: "Our high-resolution camera equipment identifies pipe failures and root intrusions with +/- 1mm accuracy, preventing unnecessary excavation.",
                  icon: Target
                },
                {
                  title: "Anoka County Local",
                  description: "Based in the Halloween Capital. We understand the specific soil conditions and freeze-thaw cycles that impact Minnesota plumbing.",
                  icon: MapPin
                },
                {
                  title: "Rapid Deployment",
                  description: "Emergency service teams deployed immediately across the Anoka County region to stabilize failing drainage and water systems.",
                  icon: Clock
                },
                {
                  title: "Master Licensed",
                  description: "Master-level plumbing certification in Minnesota, ensuring all repairs meet and exceed municipal building codes.",
                  icon: ShieldCheck
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:scale-110 transition-all">
                    <item.icon className="w-7 h-7 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
                alt="Anoka Plumbing Professional"
                className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-all" />
            </div>

            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl relative group mt-8 md:mt-16">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
                alt="Technical Diagnostic Work"
                className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-all" />

              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-2">Pipe Crashing?</p>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Emergency Diagnostics</h4>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-10 px-6 rounded-xl uppercase tracking-widest text-[10px] w-full" asChild>
                  <a href="tel:8777921410">Call Anoka Team</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
