function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-28">
      <h2 className="text-4xl font-bold text-center mb-16">
        How It Works
      </h2>

      <div className="flex flex-col sm:flex-row gap-10 text-center">
        {[
          "Search Jobs",
          "Save Opportunities",
          "Apply Anytime",
        ].map((step, index) => (
          <div
            key={index}
            className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40"
          >
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 font-bold">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold mb-3 tracking-tight">
              {step}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Simple and intuitive workflow designed to help you
              find the right job faster.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
