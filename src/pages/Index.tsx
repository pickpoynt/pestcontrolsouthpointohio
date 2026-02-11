import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import VinylSidingMoldInfo from "@/components/landing/VinylSidingMoldInfo";
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
        <title>Vinyl siding mold cleaning Ambler</title>
        <meta name="description" content="Vinyl siding mold cleaning Ambler. Professional soft-wash exterior cleaning for homes in Ambler, PA. Safe mold removal, oxidation treatment, and curb appeal restoration. Call (380) 266-0944!" />
        <meta name="keywords" content="Vinyl siding mold cleaning Ambler, house washing Ambler PA, soft wash siding cleaning Ambler, exterior mold removal Montgomery County" />
        <link rel="canonical" href="https://ambler-siding-cleaning.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ambler Exterior Mold Pros",
            "image": "https://images.unsplash.com/photo-1518733057164-4579cbda39ef?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ambler",
              "addressRegion": "PA",
              "postalCode": "19002",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.1545",
              "longitude": "-75.2216"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "description": "Professional vinyl siding cleaning and exterior mold removal in Ambler, PA. Specialized in soft-wash technology for residential house washing."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Vinyl Siding Mold Cleaning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ambler Exterior Mold Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Exterior Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Soft Wash House Washing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Vinyl Siding Mold Removal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Exterior Oxidation Treatment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter & Trim Brightening"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Vinyl siding mold cleaning Ambler" />
        <meta property="og:description" content="Professional exterior siding cleaning in Ambler, PA. Safe soft-wash mold removal for your home. Call (380) 266-0944 today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ambler-siding-cleaning.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518733057164-4579cbda39ef?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title="Vinyl siding mold cleaning Ambler"
          subtitle="Is green mold or black algae ruining your Ambler home's curb appeal? Our specialized soft-wash technicians provide deep-cleaning for vinyl siding and home exteriors without the damage of high pressure. Ambler Exterior Mold Pros: Restoration Excellence."
          image="https://images.unsplash.com/photo-1516515429572-10920000305a?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <VinylSidingMoldInfo />
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
