export default function MathFacts() {
  const facts = [
    {
      title: "Euler's Identity",
      description: "Euler's identity is often considered the most beautiful equation in mathematics. It combines five fundamental mathematical constants:",
      formula: "e^(iπ) + 1 = 0"
    },
    {
      title: "∑ of Positive Numbers",
      description: "Using a technique involving the Riemann zeta function and analytic continuation, Ramanujan demonstrated that the sum of all positive integers 1+2+3+4+... can be assigned the value -1/12.",
      formula: null
    },
    {
      title: "Pi (π)",
      description: "Pi is an irrational number, meaning it cannot be expressed as a simple fraction. Its decimal representation never ends and never settles into a permanently repeating pattern.",
      formula: null
    },
    {
      title: "Infinity",
      description: "There are different sizes of infinity! For example, the set of all integers is countably infinite, but the set of all real numbers is uncountably infinite, which is a larger type of infinity.",
      formula: null
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-center text-white mb-16">Fun Math Facts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl border border-slate-600">
              <h3 className="font-display font-semibold text-xl text-blue-300 mb-4">{fact.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {fact.description}
              </p>
              {fact.formula && (
                <div className="text-center">
                  <code className="text-accent-500 font-mono text-lg">{fact.formula}</code>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
