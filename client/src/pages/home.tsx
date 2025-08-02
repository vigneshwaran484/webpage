import Navigation from "@/components/navigation";
import HeroCarousel from "@/components/hero-carousel";
import MathFacts from "@/components/math-facts";
import CountdownTimer from "@/components/countdown-timer";
import EventsSection from "@/components/events-section";
import RulesSection from "@/components/rules-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      <HeroCarousel />
      
      <MathFacts />
      
      <CountdownTimer />
      
      <EventsSection />
      
      <RulesSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">Ready to showcase your mathematical prowess?</p>
          
          <div className="bg-gradient-to-r from-primary to-accent-500 p-12 rounded-2xl">
            <h3 className="font-display font-bold text-3xl text-white mb-6">Join JetSigma25</h3>
            <p className="text-xl text-blue-100 mb-8">Mathematics Symposium</p>
            <a 
              href="https://sympo.stjosephs-engg.cc/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-bold px-12 py-4 rounded-lg text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Register Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-4">JetSigma25</h3>
              <p className="text-gray-300">Mathematics Symposium organized by the Department of Mathematics, St. Joseph's College of Engineering.</p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors text-left">Events</button></li>
                <li><button onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors text-left">Rules</button></li>
                <li><a href="https://sympo.stjosephs-engg.cc/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Register</a></li>
                <li><a href="https://stjosephs.ac.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">College Website</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white mb-4">Contact Info</h3>
              <p className="text-gray-300 mb-2">St. Joseph's College of Engineering</p>
              <p className="text-gray-300 mb-2">OMR Chennai-119</p>
              <p className="text-gray-300 mb-2">Phone: 9080871672 / 8248823143</p>
              <p className="text-gray-300 mb-2">Email: jetsigma24@gmail.com</p>
              <p className="text-gray-300">September 17, 2025</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 JetSigma25 - St. Joseph's College of Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
