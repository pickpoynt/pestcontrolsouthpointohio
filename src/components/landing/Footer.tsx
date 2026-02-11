import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Home, Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none">Ambler</span>
                <span className="text-sm font-medium text-emerald-500">Exterior Mold Pros</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Montgomery County's premier specialists in vinyl siding restoration and exterior house washing. We utilize advanced soft-wash technology to protect and beautify your home safely.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Soft Wash House Wash</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Vinyl Siding Cleaning</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Oxidation Removal</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Gutter Brightening</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Mold Spore Inhibition</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#why-us" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Our Guarantee</a></li>
              <li><a href="#siding-mold-info" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Soft-Wash Science</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Cleaning FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Free Quote</a></li>
              <li><p className="text-slate-400 font-medium">Privacy Policy</p></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Exterior Hotline</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Ambler Office</p>
                  <a href="tel:3802660944" className="text-lg font-bold text-white hover:text-emerald-500 transition-colors">
                    (380) 266-0944
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Service Region</p>
                  <p className="text-white font-bold">
                    Ambler & SE Pennsylvania
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Ambler Exterior Mold Pros. Professional Soft-Wash Restoration.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Eco-Friendly & Licensed Specialists</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
