import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can soot really be removed from Austin limestone fireplaces?",
    answer: "Yes. Using specialized latex cleaning films and dry extraction chemistry, we can draw soot and carbon deposits out of the porous limestone common in Austin homes without driving the particles deeper into the stone."
  },
  {
    question: "What is the difference between soot and smoke damage?",
    answer: "Smoke is the airborne byproduct, while soot is the physical carbon deposit left on surfaces. In Austin's humid climate, soot can become oily and acidic, requiring scientific neutralization to prevent it from etching into your walls and ceilings."
  },
  {
    question: "How long does the soot removal process take in Austin?",
    answer: "Most Austin residential treatments for furnace puff-backs or minor kitchen fires take 24 to 72 hours. Serious local wildfire smoke restoration or major structure fire cleanup may require a multi-stage approach over a week."
  },
  {
    question: "Do you also clean the HVAC ducts in Austin homes?",
    answer: "Absolutely. In the Austin heat, your AC system is the primary vehicle for spreading soot throughout the property. We use HEPA-filtered vacuum systems and specialized fogging agents to decontaminate your entire ventilation network."
  },
  {
    question: "Will the soot smell return in the Texas heat?",
    answer: "No. Because we use molecular-level neutralizing agents that physically dismantle the carbon bonds of soot and smoke, the odor is permanently eliminated regardless of Austin's high temperatures or humidity."
  },
  {
    question: "Is the soot removal process safe for my pets and family?",
    answer: "Yes. We use hospital-grade HEPA air scrubbers and botanical-based cleaning agents that are safe for people and pets. We prioritize Austin air quality and surface safety in every restoration project."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Austin Soot Removal FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Professional restoration expertise for Austin homeowners and property managers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-amber-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;




