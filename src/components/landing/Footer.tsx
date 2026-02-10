import { Phone, Mail, MapPin, Flame, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Austin Soot Masters
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Austin's leading specialists in scientific soot removal and fire damage restoration. We restore your Texas property with advanced HEPA extraction and molecular cleaning technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:3802660944" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Restoration Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-amber-600" /> Soot Removal</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-amber-600" /> Limestone Cleaning</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-amber-600" /> HEPA Air Scrubbing</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-amber-600" /> Fire Odor Neutralization</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-amber-600" /> Duct Decontamination</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Austin Service Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> West Lake Hills & Rollingwood</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> Tarrytown & Clarksville</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> Round Rock & Pflugerville</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> Cedar Park & Leander</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> Downtown & South Congress</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Austin Soot Line</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-amber-400 font-bold text-sm uppercase mb-2">TX Licensed & Bonded</div>
              <a href="tel:3802660944" className="text-2xl font-heading font-bold text-white hover:text-amber-400 transition-colors">
                (380) 266-0944
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Licensed & Insured #ATXSOOT1
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Austin Soot Masters. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">soot removal Austin</div>
            <div className="w-2 h-2 rounded-full bg-amber-600/30" />
            <div className="text-xs text-slate-600 italic">Fire damage restoration TX</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Austin Soot Masters",
          "telephone": "+1-380-266-0944",
          "url": "https://austin-soot-removal.com/",
          "logo": "https://austin-soot-removal.com/logo.png",
          "image": "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80",
          "description": "Professional soot removal and fire damage restoration services in Austin, TX. We specialize in scientific soot extraction from walls, ceilings, and ductwork.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving the Greater Austin Area",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "postalCode": "78701",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.2672,
            "longitude": -97.7431
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;

