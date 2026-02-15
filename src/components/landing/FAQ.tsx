import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency plumbing in Tulsa?",
    answer: "Yes. Our Tulsa emergency teams are available 24/7 for urgent pipe bursts, major leaks, and sewer backups. We provide rapid dispatching across Green Country to minimize property damage."
  },
  {
    question: "How do you find hidden leaks in Tulsa homes?",
    answer: "We utilize advanced infrastructure analytics and high-definition CCTV cameras to pinpoint hidden failures, especially slab leaks common in Oklahoma. This diagnostic approach allows us to find the exact source without unnecessary destruction."
  },
  {
    question: "Are your plumbers licensed in Oklahoma?",
    answer: "Absolutely. All our technicians are master-licensed professionals who adhere strictly to Oklahoma state building codes and Tulsa municipal utilities standards for every restoration project."
  },
  {
    question: "Will you provide a price assessment before starting?",
    answer: "Absolutely. We believe in transparency. Our technicians will diagnose the issue and provide a clear, upfront, flat-rate pricing assessment before any restoration work begins."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Tulsa Infrastructure <span className="text-emerald-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about plumbing systems and technical restoration in Green Country.
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
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-emerald-600 text-left py-6">
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
