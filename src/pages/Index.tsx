import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BardstownPlumbingInfo from "@/components/landing/BardstownPlumbingInfo";
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
        <title>plumber bardstown ky Location</title>
        <meta name="description" content="plumber bardstown ky Location - Specialized plumbing solutions, leak detection & residential infrastructure services in Bardstown, KY. Call (877) 792-1410 for local experts." />
        <meta name="keywords" content="plumber bardstown ky, Bardstown plumber, plumbing repair Bardstown, emergency plumber Bardstown, Nelson County plumbing, Bardstown leak detection" />
        <link rel="canonical" href="https://bardstown-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bardstown Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bardstown",
              "addressRegion": "KY",
              "postalCode": "40004",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.8092",
              "longitude": "-85.4669"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Bardstown, KY"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in Bardstown, Kentucky. Specialized in technical diagnostics, heritage infrastructure restoration, and master-licensed care for property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Residential Plumbing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bardstown Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Bardstown, Kentucky"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Bardstown Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nelson County Leak Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bardstown Heritage Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Limestone Water Optimization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber bardstown ky Location - Bardstown Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in Bardstown, Kentucky. Technical restoration and infrastructure maintenance for Nelson County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bardstown-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber bardstown ky Location
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Bardstown Plumbing Pros</span>
            </>
          }
          subtitle="Bardstown's trusted authority for resilient home infrastructure in the Bourbon Trail region. We provide precision diagnostics, technical restoration, and master-licensed support for historic and modern property owners. Kentucky Engineering Excellence."
          image="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=2000"
          badge="BARDSTOWN AUTHORIZED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <BardstownPlumbingInfo />
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
