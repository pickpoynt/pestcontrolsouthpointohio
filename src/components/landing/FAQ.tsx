const faqs = [
  {
    question: "Why does my Montvale closet smell musty even if there's no visible mold?",
    answer: "The smell is caused by mVOCs (Microbial Volatile Organic Compounds)—gases emitted by microscopic microbial activity in damp, enclosed spaces. Closets often lack proper airflow, allowing these gases to saturate drywall, wood, and fabrics, creating a persistent odor even without visible colonies."
  },
  {
    question: "Is the closet odor neutralization process safe for my luxury clothes?",
    answer: "Absolutely. We use professional-grade hydroxyl generators and localized HEPA air scrubbing. This process is 100% non-toxic, ozone-free, and safe for all fabrics, including silk, wool, and leather. It leaves no chemical residue or lingering scent."
  },
  {
    question: "How long does it take to remove the smell from a walk-in closet?",
    answer: "Most Montvale residential closets can be fully neutralized within 24 hours. This includes our multi-step protocol: source identification, atmospheric reset, and precision air scrubbing. You can typically use the space immediately after treatment."
  },
  {
    question: "Can't I just use moisture absorbers or cedar blocks?",
    answer: "Moisture absorbers can help prevent *new* smells, but they cannot remove the gas molecules already trapped in your closet's materials. Cedar only masks the odor. Our technology chemically dismantles the odor-causing compounds at the molecular level, ensuring the musty smell is actually gone."
  },
  {
    question: "Does the service cover closets on any floor of the house?",
    answer: "Yes. Whether it's a primary suite walk-in, a basement storage closet, or a hallway wardrobe, our Montvale team has portable, high-efficiency equipment designed for any room in your home."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Closet <span className="text-indigo-600">Odor FAQ</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
              Expert answers to common questions about musty closet smells and air quality restoration in Montvale and Bergen County.
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
