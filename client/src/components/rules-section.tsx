export default function RulesSection() {
  return (
    <section id="rules" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl text-center text-white mb-16">
          Rules & Guidelines
        </h2>

        <div className="space-y-8">
          {/* Rules & Guidelines Section */}
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-600 space-y-8">

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

          {/* Important Dates Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl border border-blue-500 space-y-6">
            <h3 className="font-display font-semibold text-2xl text-white text-center">Important Dates</h3>

            <div className="text-center">
              <p className="text-xl text-cyan-300 mb-1">Registration Closing</p>
              <p className="text-3xl font-bold text-white">
                <span className="text-cyan-400">10-09-2025</span>
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl text-cyan-300 mb-1">Confirmation mail sent to participant</p>
              <p className="text-3xl font-bold text-white">
                <span className="text-cyan-400">11-09-2025</span>
              </p>
              <p className="text-sm text-cyan-200 mt-1">(Only through e-mail)</p>
            </div>

            <div className="text-center">
              <p className="text-lg text-blue-100 mb-2">Event Date:</p>
              <p className="font-display font-bold text-3xl text-white">
                Wednesday, 13th SEPTEMBER 2025
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://forms.gle/W15XosJ5qzrWvwKG8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Transportation - Bus Routes */}
          <div className="mt-12 bg-slate-700 p-8 rounded-xl border border-slate-600">
            <h3 className="font-display font-semibold text-2xl text-blue-300 mb-8 text-center">
              Transportation - Bus Routes
            </h3>

            <div className="flex justify-center mb-8">
              <div className="text-center p-4 bg-slate-800 rounded-lg w-fit">
                <h4 className="font-semibold text-lg text-white">
                  St. Joseph's College of Engineering
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-white mb-3">From CMBT</h4>
                <p className="text-blue-300 font-mono text-lg">570</p>
              </div>

              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-white mb-3">From Adyr</h4>
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
          {/* Contact Details Section */}
<div className="mt-12 bg-slate-700 p-8 rounded-xl border border-slate-600">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
    <div className="bg-slate-800 p-4 rounded-lg">
      <p className="text-white font-semibold">Mr. S. Shakunth</p>
      <a href="tel:7871452052" className="text-cyan-400 hover:underline">7871452052</a>
    </div>
    <div className="bg-slate-800 p-4 rounded-lg">
      <p className="text-white font-semibold">Mr. A. Alagumanikanadan</p>
      <a href="tel:9003449592" className="text-cyan-400 hover:underline">9003449592</a>
    </div>
    <div className="bg-slate-800 p-4 rounded-lg">
      <p className="text-white font-semibold">Mr. P. Kanagarasu</p>
      <a href="tel:7806910299" className="text-cyan-400 hover:underline">7806910299</a>
    </div>
  </div>

  <div className="flex items-center mb-6">
    <div className="bg-cyan-300 text-white rounded-full p-3 mr-3">
      📞
    </div>
    <h3 className="font-display font-semibold text-2xl text-white">Coordinators</h3>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-8">
    <div className="bg-slate-800 p-4 rounded-lg">
      <p className="text-white font-semibold">Dr. K. Suresh</p>
      <a href="tel:8344475333" className="text-cyan-400 hover:underline">8344475333</a>
    </div>
    <div className="bg-slate-800 p-4 rounded-lg">
      <p className="text-white font-semibold">Dr. P. Agilan</p>
      <a href="tel:9789643221" className="text-cyan-400 hover:underline">9789643221</a>
    </div>
  </div>

  <hr className="border-slate-600 my-6" />

  <div className="flex items-center justify-center space-x-3">
    <div className="bg-cyan-300 text-white rounded-full p-3">
      📧
    </div>
  </div>
</div>

        </div>
      </div>
      
    </section>
  );
}
