import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import AnokaPlumbingInfo from "@/components/landing/AnokaPlumbingInfo";
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
        <title>plumber anoka mn | Anoka Plumbing Pros</title>
        <meta name="description" content="plumber anoka mn - Professional plumbing services in Anoka, MN. Emergency repairs, drain cleaning, water heater installation & pipe repair. Call (877) 792-1410 today!" />
        <meta name="keywords" content="plumber anoka mn, Anoka plumbing services, emergency plumber Anoka County, drain cleaning MN, water heater repair Anoka" />
        <link rel="canonical" href="https://plumber-anoka-mn.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Anoka Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1504148455328-4362779fb452?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Anoka",
              "addressRegion": "MN",
              "postalCode": "55303",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.1977",
              "longitude": "-93.3872"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Anoka, Minnesota"
            },
            "priceRange": "$$",
            "description": "Expert plumbing services in Anoka, MN. Specializing in emergency leak repair, drain cleaning, water heater service, and pipe replacement for Anoka County homes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Anoka Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Anoka, MN"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Service Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Leak Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drain Cleaning & Jetting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Installation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber anoka mn - Anoka Plumbing Pros" />
        <meta property="og:description" content="Professional plumbing repair and maintenance in Anoka, MN. 24/7 emergency service available for Anoka County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plumber-anoka-mn.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504148455328-4362779fb452?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber anoka mn
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Anoka Plumbing Pros</span>
            </>
          }
          subtitle="Anoka's leading experts in high-performance plumbing solutions. We protect your home from the confluence of the Rum and Mississippi Rivers with advanced drainage and piping systems. Quality plumbing for the Halloween Capital."
          image="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
          badge="ANOKA COUNTY PLUMBING SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <AnokaPlumbingInfo />
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
