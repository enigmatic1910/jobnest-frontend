function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-28">
      <h2 className="text-4xl font-bold text-center mb-16">
        Why JobNest?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          "Fast Search",
          "Save Jobs",
          "Clean UI",
          "No Clutter",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/60 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40"
          >
            <p className="text-lg font-semibold tracking-tight">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
