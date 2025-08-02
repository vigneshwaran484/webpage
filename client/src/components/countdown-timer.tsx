import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('September 17, 2025 00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Event has passed - show negative values as in original
        setTimeLeft({ days: -335, hours: -1, minutes: -37, seconds: -60 });
      }
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-4xl text-white mb-8">Event Countdown</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="countdown-number p-6 rounded-xl border border-slate-600">
            <div className="text-5xl font-bold text-yellow-400 mb-2">{timeLeft.days}</div>
            <div className="text-lg text-gray-300">Days</div>
          </div>
          <div className="countdown-number p-6 rounded-xl border border-slate-600">
            <div className="text-5xl font-bold text-yellow-400 mb-2">{timeLeft.hours}</div>
            <div className="text-lg text-gray-300">Hours</div>
          </div>
          <div className="countdown-number p-6 rounded-xl border border-slate-600">
            <div className="text-5xl font-bold text-yellow-400 mb-2">{timeLeft.minutes}</div>
            <div className="text-lg text-gray-300">Minutes</div>
          </div>
          <div className="countdown-number p-6 rounded-xl border border-slate-600">
            <div className="text-5xl font-bold text-yellow-400 mb-2">{timeLeft.seconds}</div>
            <div className="text-lg text-gray-300">Seconds</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-slate-800/30 p-6 rounded-xl">
            <h4 className="font-display font-semibold text-lg text-blue-300 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>Location
            </h4>
            <p className="text-gray-300">St. Joseph's College of Engineering, OMR Chennai-119.</p>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl">
            <h4 className="font-display font-semibold text-lg text-blue-300 mb-2">
              <i className="fas fa-calendar mr-2"></i>Date
            </h4>
            <p className="text-gray-300">17 September 2025</p>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl">
            <h4 className="font-display font-semibold text-lg text-blue-300 mb-2">
              <i className="fas fa-trophy mr-2"></i>Prize
            </h4>
            <p className="text-gray-300">Rs.30,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
