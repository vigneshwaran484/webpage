import React from "react";

type EventItem = {
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  alt: string;
  rules: string[];
};

export default function EventsSection() {
  const events: EventItem[] = [
    {
      title: "Infinity Quest",
      subtitle: "(MATHS OLYMPIAD)",
      tagline: "Where Genius Meets Numbers!",
      image: "../photos/infinity.png", // Replace with actual image link
      alt: "Math Olympiad",
      rules: [
        "Individual event",
        "Single round will be conducted",
        "Two participants per team",
        "Prelims will be conducted",
        "Top 5 participants qualify to the final round",
      ],
    },
    {
      title: "Bit Battle",
      subtitle: "(Math Fun)",
      tagline: "Unravel the Mystery of Numbers!",
      image: "../photos/second.png", // Replace with actual image link
      alt: "Math Puzzles",
      rules: [
        "Two participants per team",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round",
      ],
    },
    {
      title: "Sigma Grid",
      subtitle: "(Crossword)",
      tagline: "Discover the Joy in Every Number!",
      image: "../photos/third.png",
      alt: "Math Fun",
      rules: [
        "Two participants per team",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round",
      ],
    },
    {
      title: "Math Rumble",
      subtitle: "(Math Puzzles)",
      tagline: "Prove Your Prowess with Numbers!",
      image: "../photos/four.png",
      alt: "Math Quiz",
      rules: [
        "Two participants per team",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round",
      ],
    },
    {
      title: "Neuro Numerics",
      subtitle: "(Math Quiz)",
      tagline: "Crack the Clues, Conquer the Math Grid!",
      image: "../photos/five.png",
      alt: "Math Crossword",
      rules: [
        "Two participants per team",
        "Prelims will be conducted",
        "Top 5 teams qualify to the final round",
      ],
    },
  ];

  const ruleIcons: Record<string, string> = {
    "Individual event": "fas fa-user",
    "Two participants per team": "fas fa-users",
    "Single round will be conducted": "fas fa-stopwatch",
    "Prelims will be conducted": "fas fa-filter",
    "Top 5 participants qualify to the final round": "fas fa-star",
    "Top 5 teams qualify to the final round": "fas fa-trophy",
  };

  return (
    <section id="events" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-center text-white mb-16">
          Competition Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg">
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://via.placeholder.com/400x200?text=Event+Image";
                    target.className =
                      "w-full h-full object-contain bg-gray-800 p-4";
                  }}
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-1">
                {event.title}
              </h3>
              <p className="text-blue-300 font-medium mb-3">{event.subtitle}</p>
              <p className="text-yellow-400 font-semibold text-lg mb-4 italic">
                "{event.tagline}"
              </p>
              <ul className="text-gray-300 space-y-2">
                {event.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start">
                    <i
                      className={`${
                        ruleIcons[rule] || "fas fa-check"
                      } text-blue-400 mr-2 mt-1 flex-shrink-0`}
                      aria-hidden="true"
                    ></i>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Registration Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl border border-blue-500 flex flex-col">
            <div className="relative h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img
                src="../photos/six.png" // Replace with actual image link
                alt="Registration"
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://via.placeholder.com/400x200?text=Register+Now";
                  target.className =
                    "w-full h-full object-contain bg-gray-800 p-4";
                }}
              />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Register Now
            </h3>
            <p className="text-blue-100 mb-6">
              Secure your spot in these exciting math competitions!
            </p>

            <div className="inline-block bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-md text-lg mb-4 text-center">
              🏆 Total Cash Prize: Rs. 30,000
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeFjH_rRLzK-g5CYWAkTOpqW0UqvCGJlbV6WyuPJtyaj43BNA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors hover:shadow-lg text-center"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}