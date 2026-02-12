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
        <title>Musty smell in closet no mold visible Montvale | Montvale Closet Odor Pros</title>
        <meta name="description" content="Musty smell in closet no mold visible Montvale. Professional odor removal specialists for closets and enclosed spaces in Montvale, NJ. No mold? No problem. Call (380) 266-0944!" />
        <meta name="keywords" content="Musty smell in closet no mold visible Montvale, closet odor removal Montvale NJ, Bergen County smell elimination, clothes odor removal" />
        <link rel="canonical" href="https://montvale-closet-odor.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Montvale Closet Odor Pros",
            "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80",
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
            "description": "Specialized closet odor removal in Montvale, NJ. We eliminate stubborn musty smells from closets and wardrobes even when no mold is visible using advanced molecular technology."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Closet Odor Removal Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Montvale Closet Odor Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Montvale, NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Odor Extraction Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Closet Molecular Neutralization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "mVOC Air Purification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wall and Fabric Deodorization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Airflow Optimization & Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Musty smell in closet no mold visible Montvale | Montvale Closet Odor Pros" />
        <meta property="og:description" content="Professional musty odor removal for closets in Montvale, NJ. Science-based molecular neutralization for invisible smells." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://montvale-closet-odor.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Musty smell in closet no mold visible Montvale
              <span className="block text-indigo-400 mt-2">MONTVALE CLOSET ODOR PROS: INVISIBLE ODOR ELIMINATION</span>
            </>
          }
          subtitle="Tired of your clothes smelling like a damp basement? Even without visible mold, musty odors in Montvale closets are caused by trapped microbial compounds. We use molecular air scrubbing to eliminate these smells forever."
          image="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80"
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
