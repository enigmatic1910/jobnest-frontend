import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FeaturedJobs from "../sections/FeaturedJobs.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import WhyChooseUs from "../sections/WhyChooseUs.jsx";

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <SearchBar />
      <FeaturedJobs />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
}

export default Home;
