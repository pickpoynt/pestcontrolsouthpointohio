import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import AlondraParkSlabLeakInfo from "@/components/landing/AlondraParkSlabLeakInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Slab leak detection experts Alondra Park Alondra Park</title>
        <meta name="description" content="Slab leak detection experts Alondra Park Alondra Park. Expert electronic slab leak detection and foundation leak repair in Alondra Park, CA. 24/7 non-invasive thermal and acoustic diagnostics. Call (877) 792-1410!" />
        <meta name="keywords" content="Slab leak detection experts Alondra Park, Alondra Park slab leak detection, foundation leak repair Alondra Park, under slab leak detection Alondra Park, electronic leak detection" />
        <link rel="canonical" href="https://alondra-park-slab-leak-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alondra Park Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alondra Park",
              "addressRegion": "CA",
              "postalCode": "90249",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.8892",
              "longitude": "-118.3306"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Alondra Park, CA"
            },
            "priceRange": "$$$",
            "description": "Professional electronic slab leak detection and foundation diagnostic services in Alondra Park, CA. We utilize acoustic and thermal technology to locate hidden leaks without destruction."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Detection & Diagnostic Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Alondra Park Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Alondra Park, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leak Detection Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Acoustic Leak Pinpointing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infrared Thermal Imaging Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tracer Gas Foundation Leak Location"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Non-Invasive Foundation Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Slab leak detection experts Alondra Park - Precision Foundation Diagnostics" />
        <meta property="og:description" content="Expert slab leak detection in Alondra Park. Locate hidden foundation leaks with thermal and acoustic precision. Protect your South Bay property." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alondra-park-slab-leak-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Slab leak detection experts Alondra Park
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Alondra Park Slab Leak Pros</span>
            </>
          }
          subtitle="Alondra Park's trusted authority for high-precision slab leak diagnostics. We provide advanced acoustic pinpointing, thermal imaging, and non-invasive foundation analytics. Professional Structural Quality."
          image="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80"
          badge="ALONDRA PARK SLAB LEAK EXPERTS"
        />
        <Services />
        <WhyUs />
        <AlondraParkSlabLeakInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
