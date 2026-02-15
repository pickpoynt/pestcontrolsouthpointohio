import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you detect a slab leak without digging?",
    answer: "We utilize non-invasive electronic technology including acoustic sensors and thermal imaging. These tools allow us to pinpoint the exact location of a leak through concrete with surgical precision, preventing unnecessary damage to your floors."
  },
  {
    question: "Will you provide a price before starting the work?",
    answer: "Absolutely. We believe in transparency. Our technicians will diagnose the issue and provide a clear, upfront, flat-rate pricing assessment before any work begins."
  },
  {
    question: "What are the common signs of a slab leak?",
    answer: "Common indicators include hot spots on the floor, unusually high water bills, damp carpets, the sound of running water when all taps are off, and cracks in your foundation or walls. We recommend a professional diagnostic if you notice any of these."
  },
  {
    question: "How do I know if my water heater needs to be replaced?",
    answer: "If your unit is over 10 years old, shows signs of rust, makes rumbling noises, or isn't providing enough hot water, it's time for an inspection. We can help you decide if a repair or a more efficient tankless upgrade is best."
  },
  {
    question: "Does insurance cover slab leak detection?",
    answer: "While coverage varies by policy, many homeowners' insurance providers cover the cost of professional leak detection when there is evidence of water damage. We provide detailed diagnostic reports to assist with your claim process."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Westlake Village Pipe <span className="text-orange-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about cast iron pipe restoration and trenchless technology in Westlake Village.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-blue-600 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
