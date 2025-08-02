export default function RulesSection() {
  return (
    <section id="rules" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-center text-white mb-16">
          Rules & Guidelines
        </h2>

        <div className="space-y-8">
          {/* Rules & Guidelines Section */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
            
            <div className="space-y-8">
              {/* Registration Rules */}
              <div>
                <h3 className="font-semibold text-xl text-blue-300 mb-4">Registration Rules</h3>
                <ul className="text-gray-300 space-y-3 pl-5 list-disc">
                  <li>Students have to register only through online and confirmation mail will be sent to the participants.</li>
                  <li>No on-spot registrations will be allowed.</li>
                  <li>All participants must bring their college ID cards.</li>
                  <li>Only students from the same college can form teams.</li>
                </ul>
              </div>

              

              {/* Campus Guidelines */}
              <div>
                <h3 className="font-semibold text-xl text-blue-300 mb-4">Campus Guidelines</h3>
                <ul className="text-gray-300 space-y-3 pl-5 list-disc">
                  <li>Participants are permitted to enter the campus only in formal dress code.</li>
                  <li>Participants will be allowed to enter only with printout of the confirmation printout up to 9am.</li>
                  <li>Cell phones are not allowed inside the college campus.</li>
                  <li>Breakfast and lunch will be provided by the college.</li>
                </ul>
              </div>

              {/* General Rules */}
              <div>
                <h3 className="font-semibold text-xl text-blue-300 mb-4">General Rules</h3>
                <ul className="text-gray-300 space-y-3 pl-5 list-disc">
                  <li>College buses are available in all routes in and around the Chennai.</li>
                  <li>Proper decorum must be maintained in accordance with the college rules in the college premises.</li>
                  <li>Judges' decision is final.</li>
                </ul>
              </div>
            </div>
          </div>
{/* Important Dates Section */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl border border-blue-500">
                <h3 className="font-display font-semibold text-2xl text-white mb-6 text-center">
                  Important Dates
                </h3>
                <div className="flex flex-col items-center">
                  <div className="text-center mb-6">
                    <p className="text-lg text-blue-100 mb-2">Event Date:</p>
                    <p className="font-display font-bold text-3xl text-white">
                      Wednesday, 17th SEPTEMBER 2025
                    </p>
                  </div>
                  <a
                    href="https://sympo.stjosephs-engg.cc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
                  >
                    Register Now
                  </a>
                </div>
              </div>
          {/* Bus Routes Section */}
          <div className="mt-12 bg-slate-700 p-8 rounded-xl border border-slate-600">
            <h3 className="font-display font-semibold text-2xl text-blue-300 mb-8 text-center">
              Transportation - Bus Routes
            </h3>

            {/* Centered College Name */}
            <div className="flex justify-center mb-8">
              <div className="text-center p-4 bg-slate-800 rounded-lg w-fit">
                <h4 className="font-semibold text-lg text-white">
                  St. Joseph's College of Engineering
                </h4>
              </div>
            </div>

            {/* Bus Routes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-white mb-3">From CMBT</h4>
                <p className="text-blue-300 font-mono text-lg">570</p>
              </div>

              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-white mb-3">From Adyar</h4>
                <p className="text-blue-300 font-mono text-lg">19B, 21H</p>
              </div>

              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-white mb-3">From Tambaram</h4>
                <p className="text-blue-300 font-mono text-lg">95, 99</p>
              </div>

              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-white mb-3">From Saidapet</h4>
                <p className="text-blue-300 font-mono text-lg">19B</p>
              </div>
            </div>

            {/* Footer Link */}
            <div className="text-center mt-8">
              <p className="text-gray-300 mb-3">Click the link to know about all bus routes</p>
              <a
                href="https://stjosephs.ac.in/pages/bus_routes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                View All Bus Routes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}