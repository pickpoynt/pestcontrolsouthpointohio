import { Shield, Droplets, Wind, Zap, Home, Sparkles, Sprout, Brush } from "lucide-react";

const VinylSidingMoldInfo = () => {
    return (
        <section id="siding-mold-info" className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-6 font-bold uppercase tracking-wider text-sm">
                            <Home className="w-4 h-4" />
                            Exterior Curb Appeal Restoration
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                            Vinyl siding mold cleaning Ambler: Soft-Wash Excellence
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            The humid, shaded neighborhoods of Ambler are prone to rapid mold and algae growth on north-facing vinyl siding. High-pressure washing can damage your siding and force water behind the panels. We use a specialized "Soft-Wash" system that kills mold at its root while protecting your home's integrity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
                                <Droplets className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Low-Pressure Soft Wash</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We utilize a specialized surfactant system that gently lifts mold, mildew, and pollutants without the risk of oxidation or siding damage.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Biodegradable Cleaning</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Our cleaning agents are plant-safe and eco-friendly, ensuring your Ambler landscaping remains healthy while your siding gets a deep clean.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mold Spore Inhibition</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We apply a long-lasting inhibitor that slows down the return of organic growth, keeping your siding bright for seasons to come.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-20">
                            <img
                                src="https://images.unsplash.com/photo-1518733057164-4579cbda39ef?auto=format&fit=crop&q=80"
                                alt="Exterior Siding Cleaning"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ambler's Exterior Restoration Specialists</h3>
                                <p className="text-emerald-100 text-lg leading-relaxed mb-8 opacity-90 font-medium">
                                    Vinyl siding is porous at a microscopic level. Traditional power washing only removes the surface layer, leaving the 'roots' to grow back faster. Our chemical soft-wash process sanitizes the surface, ensuring a longer-lasting clean and superior curb appeal.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Brush className="text-emerald-400 w-6 h-6" />
                                        Oxidation Removal Technology
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Brush className="text-emerald-400 w-6 h-6" />
                                        Gutter Brightening Included
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Brush className="text-emerald-400 w-6 h-6" />
                                        Whole-Home Exterior Sanitization
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h4 className="text-2xl font-bold text-white mb-4">Why Ambler Siding Gets Moldy</h4>
                                <ul className="text-emerald-50 space-y-4 font-medium opacity-80">
                                    <li>• Mature tree canopy providing heavy shade</li>
                                    <li>• High neighborhood humidity near local creeks</li>
                                    <li>• North-facing walls rarely seeing direct sun</li>
                                    <li>• Airborne organic debris and pollen</li>
                                    <li>• Coastal weather patterns and heavy rains</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VinylSidingMoldInfo;
