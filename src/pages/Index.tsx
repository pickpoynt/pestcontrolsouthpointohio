import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import EarwigExterminatorDenverInfo from "@/components/landing/EarwigExterminatorDenverInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>earwig exterminator denver - Denver Earwig Exterminator Pros</title>
        <meta name="description" content="earwig exterminator denver - Professional earwig exterminator denver. Licensed pest specialists deploy proven earwig elimination, barrier treatments, and full home protection across Denver, CO. Call (323) 880-1224 for 24/7 same-day service." />
        <meta name="keywords" content="earwig exterminator denver, denver earwig removal, earwig control denver CO, pest control denver earwig" />
        <link rel="canonical" href="https://earwigexterminatordenver.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Denver Earwig Exterminator Pros",
            "image": "/1.jpeg",
            "@id": "https://earwigexterminatordenver.com/",
            "url": "https://earwigexterminatordenver.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1600 Glenarm Pl",
              "addressLocality": "Denver",
              "addressRegion": "CO",
              "postalCode": "80202",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.7392",
              "longitude": "-104.9903"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Earwig Extermination",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Denver Earwig Exterminator Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Denver, CO"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Earwig Exterminator Denver Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Earwig Inspection & Identification" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perimeter Barrier Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indoor Earwig Elimination" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="earwig exterminator denver - Denver Earwig Exterminator Pros" />
        <meta property="og:description" content="earwig exterminator denver - Licensed Denver pest specialists. Same-day earwig elimination, perimeter treatments, and full home protection across Denver, CO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://earwigexterminatordenver.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              earwig exterminator <br />
              <span className="text-white drop-shadow-sm uppercase">denver</span>
            </>
          }
          subtitle="Denver's most trusted earwig elimination specialists. We deploy targeted perimeter barrier treatments, deep-crack injections, and moisture-zone exclusion to protect your home from earwig invasions — fast."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="DENVER EARWIG CONTROL ELITE"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <EarwigExterminatorDenverInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
