import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MustyOdorRemovalInfo from "@/components/landing/MustyOdorRemovalInfo";
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
        <title>White mold on crawl space floor Montvale</title>
        <meta name="description" content="White mold on crawl space floor Montvale. Expert crawl space mold remediation and moisture control in Montvale, NJ. Professional white mold removal. Call (380) 266-0944!" />
        <meta name="keywords" content="White mold on crawl space floor Montvale, crawl space mold removal Montvale NJ, Bergen County mold remediation, white mold on concrete floor" />
        <link rel="canonical" href="https://montvale-crawlspace-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Montvale Crawl Space Pros",
            "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Montvale",
              "addressRegion": "NJ",
              "postalCode": "07645",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.0473",
              "longitude": "-74.0326"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Montvale, Bergen County, NJ"
            },
            "priceRange": "$$",
            "description": "Premium crawl space mold remediation in Montvale, NJ. We specialize in removing white mold from crawl space floors and structural elements using advanced HEPA filtration and encapsulation."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Crawl Space Mold Remediation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Montvale Crawl Space Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Montvale, NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Crawl Space Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "White Mold Extraction & Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Crawl Space Vapor Barrier Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Vacuuming & Air Scrubbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Structural Dry-Out & Antimicrobial Coating"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="White mold on crawl space floor Montvale" />
        <meta property="og:description" content="Professional white mold removal for crawl space floors in Montvale, NJ. Bergen County's #1 foundation restoration experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://montvale-crawlspace-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              White mold on crawl space floor Montvale
              <span className="block text-indigo-400 mt-2">MONTVALE CRAWL SPACE PROS: STRUCTURAL RESTORATION</span>
            </>
          }
          subtitle="Is a powdery white substance taking over your foundation? Whether it's white mold or efflorescence, we provide scientific extraction and permanent vapor barrier solutions for Montvale crawl spaces."
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <MustyOdorRemovalInfo />
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
