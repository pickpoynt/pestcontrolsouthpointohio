import { Eraser, Wind, Shield, Zap, Sparkles, Home } from "lucide-react";

const SootRemovalInfo = () => {
    return (
        <section id="soot-removal-info" className="py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Scientific Soot Extraction & Surface Restoration in Austin, Texas
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Austin's unique climate and diverse architecture—from historic Clarksville bungalows to modern downtown high-rises—require a tailored approach to soot removal. Soot isn't just dust; it's a chemically complex byproduct of combustion that can permanently etch into Texas limestone and modern drywall if not treated with precision.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Eraser className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Texas Limestone Soot Cleaning
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Many Austin homes feature beautiful, porous limestone fireplaces. We use specialized latex-based cleaning films and low-moisture techniques to draw soot out of the stone's pores without driving the particles deeper, preserving the natural beauty of your Texas masonry.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        HVAC & Ductwork Decontamination
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        In the Austin heat, your AC system can quickly spread soot throughout the entire property. Our team performs deep-cleaning of ductwork using HEPA-filtered vacuum systems, ensuring that microscopic soot particles aren't recirculated every time your climate control kicks in.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Wind className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Molecular Odor Eradication
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Austin's humidity can trap smoke odors in soft surfaces. We utilize advanced hydroxyl generators and thermal fogging to neutralize odors at the molecular level, going beyond masking scents to actually breaking down the odor-causing carbon chains.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        HEPA-Filtered Air Scrubbing
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Protecting indoor air quality is our priority. During the soot removal process, we deploy industrial-grade air scrubbers that capture 99.97% of airborne particles, ensuring that soot removed from surfaces doesn't end up in your lungs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Sparkles className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Delicate Surface sponges
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        For painted walls and designer wallpapers common in West Lake Hills estates, we use 'dry' chemical sponges. These professional tools lift soot without liquid, preventing the smearing and staining that occurs with DIY cleaning attempts.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Austin Restoration Expertise
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We understand the specific challenges of Austin restoration, from dealing with ash from Central Texas wildfires to oily soot from kitchen fires. Our local team is ready 24/7 to respond to any soot emergency in the Greater Austin area.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SootRemovalInfo;
