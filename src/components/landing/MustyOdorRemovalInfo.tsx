import { Shield, Droplets, Wind, CheckCircle2, AlertTriangle, ThermometerSnowflake, Microscope, Phone } from "lucide-react";

const MustyOdorRemovalInfo = () => {
    return (
        <section id="musty-odor-info" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60" />
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                                alt="White mold on crawl space floor Montvale"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2 text-indigo-600">
                                    <Wind className="w-5 h-5" />
                                    <span className="font-bold uppercase tracking-wider text-sm">Crawl Space Restoration</span>
                                </div>
                                <p className="text-slate-800 font-medium">
                                    Bergen County crawl spaces are prone to white mold. We provide scientific remediation and moisture control.
                                </p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                            <Shield className="w-16 h-16 text-white" />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                            Scientific <span className="text-indigo-600 uppercase">MOLD REMEDIATION</span> for Bergen County Foundations
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
                            Identifying "White mold on crawl space floor Montvale" is the first step toward protecting your home's structural integrity. Often confused with efflorescence, <strong className="text-slate-900 uppercase">white mold</strong> thrives on wood, dirt floors, and concrete in high-humidity Montvale environments.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Wind,
                                    title: "HEPA Filtration & Containment",
                                    desc: "We use laboratory-grade HEPA air scrubbers to create negative air pressure, preventing spores from entering your Montvale living spaces during cleanup."
                                },
                                {
                                    icon: Microscope,
                                    title: "Sub-Floor Diagnostics",
                                    desc: "Our technicians use deep-probe moisture sensors to find the hidden water intrusion points fueling the white mold growth on your crawl space floor."
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Permanent Vapor Control",
                                    desc: "We don't just clean—we solve. Our 20-mil reinforced vapor barrier systems encapsulate your crawl space to stop future mold cycles forever."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                                        <item.icon className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                            <a
                                href="tel:3802660944"
                                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 uppercase tracking-widest"
                            >
                                <Phone className="w-5 h-5 text-white" />
                                (380) 266-0944
                            </a>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">
                                        NJ
                                    </div>
                                ))}
                                <div className="pl-4 text-sm font-bold text-slate-500 italic uppercase tracking-wider">
                                    Serving Bergen County foundations since 2012
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MustyOdorRemovalInfo;
