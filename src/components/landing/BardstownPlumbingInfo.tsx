import { Wrench, Droplet, Thermometer, Shield, Clock, Award, MapPin, Phone, Zap } from "lucide-react";

const BardstownPlumbingInfo = () => {
    return (
        <section id="bardstown-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Zap className="w-4 h-4" />
                            <span>Nelson County Local Authority</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Elite <span className="text-indigo-600">Plumbing Restoration</span> in Bardstown
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Serving the Bardstown community and the greater Bourbon Trail region. We provide technical residential infrastructure maintenance and advanced system diagnostics for Bardstown's historical and modern properties.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Priority Response */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Clock className="w-7 h-7 text-indigo-600" />
                                    Bardstown Priority Response
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Nelson County Dispatch</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Centrally based to serve Bardstown, Bloomfield, and New Haven areas. Our teams provide rapid deployment for pipe failures and system blockages across Nelson County.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Historical District Specialist</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Bardstown is famous for its historic heritage. We specialize in maintaining aging metallic pipe systems and integrating modern PEX and PVC solutions while respecting the integrity of historic Bluegrass structures.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplet className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Bourbon Trail Water Quality</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Kentucky's limestone water is legendary, but it can lead to mineral buildup. We utilize advanced filtration diagnostics and sediment removal to protect your home's internal plumbing network.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Reach */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Bardstown & Nelson County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    We provide comprehensive master-licensed technical plumbing services to the Nelson County region, including:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Bardstown",
                                        "Bloomfield",
                                        "New Haven",
                                        "Fairfield",
                                        "Coxs Creek",
                                        "Boston",
                                        "Nazareth",
                                        "Botland"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Bardstown Infrastructure Pros
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Don't compromise on your home's technical reliability. Our Nelson County experts provide master-licensed diagnostics and precision restoration throughout the Bourbon Trail area.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Master Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Nelson Co. Approved</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Insured & Bonded</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Service Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-100 text-sm italic">
                                    Local Technical Support Available 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BardstownPlumbingInfo;
