import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SootRemovalInfo from "@/components/landing/SootRemovalInfo";
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
        <title>soot removal Austin | Austin Soot Masters: Expert Fire Restoration</title>
        <meta name="description" content="soot removal Austin. Professional soot cleaning, fire damage restoration, and puff-back cleanup. 24/7 expert restoration in Austin. Call (380) 266-0944 today!" />
        <meta name="keywords" content="soot removal Austin, fire damage restoration Austin, puff back cleanup Austin, smoke damage cleaning Austin, Austin fireplace soot removal" />
        <link rel="canonical" href="https://austin-soot-removal.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Austin Soot Masters",
            "image": "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "postalCode": "78701",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.2672",
              "longitude": "-97.7431"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Austin, Texas"
            },
            "priceRange": "$$$",
            "description": "Professional soot removal and fire damage restoration services in Austin, TX. We specialize in scientific soot extraction from walls, ceilings, and ductwork."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Soot Removal Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Austin Soot Masters",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Austin, Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Soot Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dry Chemical Sponge Extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Furnace Puff Back Cleanup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Smoke Odor Neutralization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Air Scrubbing"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="soot removal Austin | Austin Soot Masters" />
        <meta property="og:description" content="Professional soot removal in Austin, TX. 24/7 scientific cleaning and fire damage restoration. Call (380) 266-0944 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://austin-soot-removal.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              soot removal Austin
              <span className="block text-amber-500 mt-2">Austin Soot Masters: Restore Your Space</span>
            </>
          }
          subtitle="Don't let soot settle into your Texas home. Our specialized dry extraction and HEPA filtration systems target microscopic soot particles, restoring walls and ceilings to their original state while neutralizing lingering Austin fire odors."
          image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <SootRemovalInfo />
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




