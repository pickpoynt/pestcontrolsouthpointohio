const faqs = [
  {
    question: "Are earwigs dangerous to my family or home?",
    answer: "Earwigs are not directly dangerous to humans, but large infestations indicate moisture problems and can cause significant damage to garden plants, seedlings, and indoor fabrics. Their pinchers can cause minor skin irritation. Our earwig exterminator denver team eliminates them before colonies grow."
  },
  {
    question: "How quickly can you respond to an earwig infestation in Denver?",
    answer: "We offer same-day service for active earwig infestations across Denver, CO and surrounding areas including Aurora, Lakewood, Thornton, and Arvada. Call (323) 880-1224 and we'll dispatch immediately."
  },
  {
    question: "Why do I keep getting earwigs inside my Denver home?",
    answer: "Denver's Front Range climate — with winter cold driving insects indoors — plus over-mulched garden beds, poor drainage, and foundation moisture create ideal earwig breeding zones. Our earwig exterminator denver specialists identify and treat all root causes, not just the visible bugs."
  },
  {
    question: "What earwig treatments do you use and are they safe for pets and children?",
    answer: "We use Colorado-approved, EPA-registered pest control products with targeted crack-and-crevice application. We offer pet-safe and family-friendly formulations. Our technicians always brief you on any precautions before treatment begins."
  },
  {
    question: "Do you offer a guarantee on your earwig extermination services?",
    answer: "Yes. We stand behind our work with a satisfaction guarantee. If earwigs return within the treatment period, we re-treat at no additional charge. Denver homeowners count on us for long-lasting results."
  }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Earwig Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Earwig Exterminator Denver <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Key answers for Denver property owners dealing with earwig problems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
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
