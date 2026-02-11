const faqs = [
  {
    question: "Is 'soft-washing' the same as pressure washing?",
    answer: "No. Standard pressure washing uses high force that can crack vinyl siding and force water behind it, leading to hidden mold. Our soft-wash system uses gentle redirection and specialized cleaning agents to kill mold at the source without any risk to your home's structural integrity."
  },
  {
    question: "Will the cleaning chemicals hurt my plants or grass?",
    answer: "Absolutely not. We use biodegradable, plant-safe surfactants. Our Ambler teams also take an extra step to 'pre-saturate' your landscaping with fresh water and rinse thoroughly afterward, ensuring your garden remains lush and healthy."
  },
  {
    question: "How long will the results last?",
    answer: "Typically, a professional soft-wash in Ambler will keep your siding mold-free for 12 to 24 months. We also apply a post-cleanup inhibitor that significantly slows down the return of green algae and mildew compared to standard cleaning."
  },
  {
    question: "Can you remove the chalky white stuff on my siding?",
    answer: "Yes. That white powdery substance is oxidation, which is caused by UV exposure. While a standard wash won't remove it, we offer a specialized 'Oxidation Treatment' that restores the vinyl's original color and luster."
  },
  {
    question: "How long does a full house wash take?",
    answer: "Most residential house washes in Ambler take between 3 and 5 hours, depending on the house size and the level of organic growth. You don't even need to be home—just ensure all windows are closed and exterior power is protected."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Exterior Cleaning FAQ
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Expert answers to common questions about house washing and vinyl siding care in Montgomery County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors flex items-start gap-3">
                  <span className="text-emerald-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-emerald-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
