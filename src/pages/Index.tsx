import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TheVillageLeakInfo from "@/components/landing/TheVillageLeakInfo";
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
        <title>Electronic leak detection The Village OK</title>
        <meta name="description" content="Electronic leak detection The Village OK - Professional non-invasive leak detection services in The Village, Oklahoma. Using digital acoustic technology and infrared. Call (877) 792-1410." />
        <meta name="keywords" content="Electronic leak detection The Village OK, The Village Oklahoma leak detection, plumbing leak detection The Village, hidden leak pinpointing OKC Metro" />
        <link rel="canonical" href="https://electronic-leak-detection-the-village.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Electronic Leak Detection The Village Pros",
            "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2304 W Britton Rd",
              "addressLocality": "The Village",
              "addressRegion": "OK",
              "postalCode": "73120",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.5709",
              "longitude": "-97.5559"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "The Village, OK"
            },
            "priceRange": "$$$",
            "description": "Specialized electronic leak detection and pinpointing services in The Village, Oklahoma. Advanced acoustic technology and thermal imaging diagnostics."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electronic Leak Detection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Electronic Leak Detection The Village Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "The Village, Oklahoma"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "The Village Leak Detection Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Leak Pinpointing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thermal Imaging Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Electronic leak detection The Village OK - Electronic Leak Detection The Village Pros" />
        <meta property="og:description" content="Expert electronic leak detection in The Village, OK. Non-invasive technology to pinpoint hidden water leaks quickly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://electronic-leak-detection-the-village.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Electronic leak detection The Village OK
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Electronic Leak Detection The Village Pros</span>
            </>
          }
          subtitle="The Village's authority in electronic leak pinpointing. We use cutting-edge technology to find hidden leaks under slabs, behind walls, and in foundations. Serving Oklahoma City Metro with zero destruction."
          image="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&q=80"
          badge="THE VILLAGE LEAK SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <TheVillageLeakInfo />
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
