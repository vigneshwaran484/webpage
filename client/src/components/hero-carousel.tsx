import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


const carouselSlides = [
  {
    title: "St. Joseph's College of Engineering",
    tagline: "You Choose, We Do it!",
    department: "Department of Mathematics",
     image: "https://www.roofandfloor.com/blogimg/151/St.Josephs-College-Of-Engineering.jpg", // ✅ custom image
  },
  {
    title: "St. Joseph's College of Engineering",
    tagline: "You Choose, We Do it.",
    department: "Department of Mathematics",
   image: "https://images.shiksha.com/mediadata/images/1594191781phpiYyeeH.jpeg",
   },
  {
    title: "St. Joseph's College of Engineering",
    tagline: "You Choose, We Do it.",
    department: "Department of Mathematics",
     image: "https://tneacounselling.in/wp-content/uploads/2022/08/St.-Josephs-College-of-Engineering-Chennai.jpg",
  },
  {
    title: "St. Joseph's College of Engineering",
    tagline: "You Choose, We Do it.",
    department: "Department of Mathematics",
    image: "https://www.nobroker.in/blog/wp-content/uploads/2025/01/st-josephs-college-of-engineering-chennai.webp"
 
     } ,  {
    title: "St. Joseph's College of Engineering",
    tagline: "You Choose, We Do it.",
    department: "Department of Mathematics",
    image: "https://stjosephs.ac.in/sliderinfra/indoor2.jpg"
  },
];


export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section
			id="home"
			className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 pb-24"
		>
			{/* Blurred background image */}
			<div
				className="absolute inset-0 w-full h-full z-0"
				style={{
					backgroundImage: `url(${carouselSlides[currentSlide].image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					filter: "blur(8px) brightness(0.7)",
					transition: "background-image 0.5s",
				}}
			/>
			{/* Overlay for darkening */}
			<div className="absolute inset-0 bg-black/40 z-0"></div>
			{/* Mathematical pattern overlay */}
			<div className="absolute inset-0 opacity-10 math-pattern z-0"></div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-32">
				<div className="text-center space-y-8">
					<div className="carousel-slide">
						{/* No foreground image, only text */}
						<h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4">
							{carouselSlides[currentSlide].title}
						</h1>
						<p className="text-xl md:text-3xl text-blue-300 font-medium mb-2">
							{carouselSlides[currentSlide].tagline}
						</p>
						<p className="text-lg md:text-xl text-gray-300">
							{carouselSlides[currentSlide].department}
						</p>
						{/* Add the event date below the department */}
						<p className="text-gray-300 mt-4">17 September 2025</p>
					</div>
				</div>
			</div>

			{/* Navigation Controls */}
			<div className="relative z-10 w-full">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Indicators */}
					<div className="flex justify-center mb-4">
						{carouselSlides.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-3 h-3 mx-1 rounded-full transition-colors ${
									index === currentSlide ? "bg-white" : "bg-white/50"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
					{/* Navigation Buttons */}
					<div className="flex justify-center space-x-4">
						<Button
							onClick={prevSlide}
							variant="ghost"
							className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
						>
							<i className="fas fa-chevron-left mr-2"></i> Previous
						</Button>
						<Button
							onClick={nextSlide}
							variant="ghost"
							className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
						>
							Next <i className="fas fa-chevron-right ml-2"></i>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}