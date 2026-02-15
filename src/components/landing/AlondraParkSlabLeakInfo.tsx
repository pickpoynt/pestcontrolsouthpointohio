import { Search, ShieldAlert, Zap, Microscope, CheckCircle2 } from "lucide-react";

const slabFactors = [
    {
        icon: Search,
        title: "Acoustic Leak Pinpointing",
        description: "Alondra Park foundations require precise diagnostics. We utilize advanced electronic acoustic sensors to 'hear' leaks through concrete, identifying the exact failure point without unnecessary demolition."
    },
    {
        icon: Microscope,
        title: "Thermal Imaging Verification",
        description: "Using high-resolution infrared technology, we visualize temperature fluctuations beneath your slab, confirming hidden hot-water line leaks that conventional methods often miss."
    },
    {
        icon: Zap,
        title: "Non-Invasive Diagnostics",
        description: "Our goal is total property preservation. We focus on identifying slab leaks through the most advanced non-destructive testing available in Los Angeles County."
    },
    {
        icon: ShieldAlert,
        title: "Foundation Risk Mitigation",
        description: "Undetected slab leaks can lead to soil erosion and structural shifting. We provide rapid diagnostic response to Alondra Park homeowners to prevent long-term foundation damage."
    }
];

const expertBenefits = [
    {
        title: "Master Diagnostic Techs",
        description: "Our specialists are specifically trained in the unique soil and construction profiles found throughout Alondra Park and the South Bay."
    },
    {
        title: "Electronic Tracer Gas",
        description: "For the most elusive leaks, we utilize high-sensitivity tracer gases to detect even the smallest pinhole failures deep beneath your foundation."
    },
    {
        title: "Clear Project Assessment",
        description: "Receive a comprehensive diagnostic report and clear explanation of all findings before any repair recommendations are made."
    },
    {
        title: "24/7 Priority Emergency Support",
        description: "Slab leaks don't wait. Our Alondra Park diagnostic teams are on standby to respond to signs of foundation moisture at any hour."
    }
];

const AlondraParkSlabLeakInfo = () => {
    return (
        <section id="slab-leak-info" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        Alondra Park Specialists
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic">
                        The Science of Slab Leak Detection in Alondra Park
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Beneath your Alondra Park home, a hidden network of pipes provides essential water service. When these lines fail under concrete,
                        conventional plumbing can't help. You need technical specialists armed with the latest sonic and thermal diagnostic technology.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {slabFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-indigo-400">
                                Protecting South Bay Foundations
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                A slab leak is more than a plumbing issue; it's a structural threat. Our experts utilize surgical precision to
                                locate leaks, minimizing property disturbance while securing your Alondra Park property's integrity.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {expertBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1542013936693-884638332a53?auto=format&fit=crop&q=80"
                                alt="High-Tech Electronic Leak Detector"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Precision Foundation Diagnostics</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategic Service Network */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Strategic Service Network
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Dallas Plumber", link: "https://dallasplumber.vercel.app" },
                            { name: "San Antonio Plumbing", link: "https://sanantonioplumbing.vercel.app" },
                            { name: "Plumber San Francisco CA", link: "https://plumbersanfranciscoca.vercel.app/" }
                        ].map((site) => (
                            <a
                                key={site.name}
                                href={site.link}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-widest hover:border-indigo-500/50 shadow-xl"
                            >
                                {site.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlondraParkSlabLeakInfo;
