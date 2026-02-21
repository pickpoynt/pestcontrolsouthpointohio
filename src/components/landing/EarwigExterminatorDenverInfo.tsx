import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Bug, Thermometer, Wind } from "lucide-react";

const EarwigExterminatorDenverInfo = () => {
    return (
        <section id="earwig-exterminator-denver-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Denver Front Range Pest Control Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">earwig exterminator denver</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Precision earwig elimination for Denver, CO homes and businesses. We deploy targeted perimeter defense, indoor crack-and-crevice treatment, and moisture-zone remediation to stop earwig invasions permanently.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    Denver Earwig Control Protocol
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Harborage Zone Identification</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Earwigs hide in mulch beds, under rocks, in foundation cracks, and in damp crawl spaces. Our Denver earwig exterminator specialists identify every harborage zone on your property before treatment begins — ensuring nothing is missed.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Perimeter Residual Barrier</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We apply a professional-grade residual insecticide barrier around your home's full perimeter — foundation base, entry points, window wells, and utility penetrations — creating an invisible defense earwigs cannot penetrate.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Moisture Source Treatment</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Denver's climate cycles between dry summers and wet springs. Moisture-heavy zones are earwig magnets. We treat and advise on drainage corrections, mulch management, and vapor barrier installation to remove the conditions earwigs need to survive.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Denver & The Front Range
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid earwig exterminator denver service for these neighborhoods and communities:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Capitol Hill",
                                        "Highlands",
                                        "Aurora",
                                        "Lakewood",
                                        "Thornton",
                                        "Arvada",
                                        "Englewood",
                                        "Centennial"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Denver Earwig Problem</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    Denver's unique climate creates perfect conditions for earwig populations to explode each spring. Overwintering earwigs emerge when temperatures warm, flooding gardens and invading homes through foundation cracks and window frames. Our earwig exterminator denver team uniquely understands Front Range earwig behavior cycles and deploys precisely timed treatments to break the breeding chain permanently.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs & Unique Content Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need An <span className="text-indigo-600">Earwig Exterminator Denver</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Bug, title: "Earwigs Indoors", desc: "Finding earwigs in bathrooms, kitchens, basements, or under appliances is a clear sign of an active infestation requiring professional treatment." },
                                { icon: Droplets, title: "Garden Damage", desc: "Ragged, chewed edges on flower petals, seedlings, and vegetable leaves overnight are classic earwig feeding signs common in Denver gardens." },
                                { icon: Wind, title: "Musty Crawl Spaces", desc: "Dark, damp crawl spaces with high moisture are prime earwig harborage zones. An earwig presence there signals both a pest problem and a moisture issue." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Earwigs Invading Your Denver Home?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't wait for a small earwig problem to become a full infestation. Every week without treatment allows populations to multiply. Our Denver earwig exterminator team is dispatched locally for rapid same-day response anywhere in the Metro.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">CO State Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">IPM Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Same-Day Service</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Earwig Control Denver</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    earwig exterminator denver
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarwigExterminatorDenverInfo;
