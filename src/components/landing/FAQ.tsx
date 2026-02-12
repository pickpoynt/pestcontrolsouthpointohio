const faqs = [
  {
    question: "Is the white powder on my crawl space floor mold or efflorescence?",
    answer: "In Montvale, white powder on foundation floors can be either. Efflorescence is a salt deposit from evaporating water, while white mold is a biological growth. We use specialized testing and visual diagnostics to distinguish them—mold requires professional extraction, while efflorescence requires structural waterproofing."
  },
  {
    question: "Does white mold in the crawl space affect the air inside my home?",
    answer: "Yes. Due to the 'stack effect,' air from your crawl space naturally rises into your living areas. If white mold spores are present on the floor or structural beams, they can be pulled upwards, potentially affecting indoor air quality and triggering allergies in your household."
  },
  {
    question: "How do you remove white mold from a dirt crawl space floor?",
    answer: "For dirt floors, we remove the top layer of contaminated soil and apply an EPA-approved antimicrobial treatment. We then install a high-performance 20-mil vapor barrier to permanently seal the floor and prevent moisture from fueling future mold growth."
  },
  {
    question: "Is your crawl space mold treatment safe for my family?",
    answer: "Absolutely. We use hospital-grade, non-toxic antimicrobial solutions. During the remediation process, we maintain negative air pressure with HEPA air scrubbers to ensure no dust or spores escape from the crawl space into your Montvale home."
  },
  {
    question: "How long does the crawl space remediation process take?",
    answer: "Most Montvale residential crawl space projects are completed within 2 to 3 days. This includes debris removal, mold extraction, antimicrobial treatment, and the installation of a professional-grade encapsulation system."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Remediation <span className="text-indigo-600">Science FAQ</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
              Expert answers to common questions about white mold on crawl space floors and foundation air quality in Montvale and Bergen County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors flex items-start gap-3">
                  <span className="text-indigo-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-indigo-100">
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
