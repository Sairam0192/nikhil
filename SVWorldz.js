import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { YoutubeIcon, CoffeeIcon, BrainIcon, RocketIcon, HeartIcon, Check } from 'lucide-react';

const GoldText = ({ children, className = '' }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 ${className}`}>
    {children}
  </span>
);

const VideoCard = ({ id, title, views, duration }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg shadow-lg bg-white"
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,215,0,0.3)" }}
  >
    <img
      src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
      alt={title}
      className="w-full h-auto"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-white font-bold">{title}</h3>
      <p className="text-sm text-gray-300">{views} views • {duration}</p>
    </div>
  </motion.div>
);

const ScrollingSponsors = () => {
  const sponsors = [
    { name: 'Sponsor 1', image: 'https://via.placeholder.com/200x100.png?text=Sponsor+1' },
    { name: 'Sponsor 2', image: 'https://via.placeholder.com/200x100.png?text=Sponsor+2' },
    { name: 'Sponsor 3', image: 'https://via.placeholder.com/200x100.png?text=Sponsor+3' },
    { name: 'Sponsor 4', image: 'https://via.placeholder.com/200x100.png?text=Sponsor+4' },
    { name: 'Sponsor 5', image: 'https://via.placeholder.com/200x100.png?text=Sponsor+5' },
  ];

  return (
    <div className="relative overflow-hidden h-32">
      <motion.div
        className="flex absolute"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <img src={sponsor.image} alt={sponsor.name} className="h-24 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const StatCounter = ({ label, value }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-yellow-600">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const FloatingElement = ({ children }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2
    }}
  >
    {children}
  </motion.div>
);

const SVWorldz = () => {
  const [contactType, setContactType] = useState("personal");
  const [currentPage, setCurrentPage] = useState("home");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const videos = [
    { id: "rNJWZ7SFhEM", title: "The Rise and Fall of WeWork", views: "1.2M", duration: "15:23" },
    { id: "0ic47fAqRHs", title: "How Theranos Fooled the World", views: "2.5M", duration: "20:17" },
    { id: "2kg4LArtymg", title: "The Enron Scandal Explained", views: "1.8M", duration: "18:45" },
    { id: "YyXRYgjQXX0", title: "The Wirecard Fraud Explained", views: "950K", duration: "16:30" },
    { id: "TQ1iED9gkFw", title: "The Downfall of Lehman Brothers", views: "1.5M", duration: "19:12" },
  ];

  const renderHeader = () => (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <GoldText>SV Worldz</GoldText>
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#" onClick={() => setCurrentPage("home")} className="hover:text-yellow-600 transition-colors">Home</a>
          <a href="#" onClick={() => setCurrentPage("about")} className="hover:text-yellow-600 transition-colors">About</a>
          <a href="#videos" className="hover:text-yellow-600 transition-colors">Videos</a>
          <a href="#sponsors" className="hover:text-yellow-600 transition-colors">Sponsors</a>
          <a href="#features" className="hover:text-yellow-600 transition-colors">Features</a>
          <a href="#contact" className="hover:text-yellow-600 transition-colors">Contact</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,215,0,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-colors"
        >
          Subscribe
        </motion.button>
      </nav>
    </header>
  );

  const renderFooter = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <GoldText>SV Worldz</GoldText>
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          {['YouTube', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">{social}</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 SV Worldz. All rights reserved.
        </div>
      </div>
    </footer>
  );

  const renderHomePage = () => (
    <>
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to <span className="text-black">SV Worldz</span>
          </motion.h1>
          <motion.p 
            className="text-2xl mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unraveling Business Mysteries for Our Audience
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#videos"
              className="bg-white text-yellow-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Our Videos
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-around">
            <StatCounter label="Subscribers" value="775K" />
            <StatCounter label="Total Views" value="100M+" />
          </div>
        </div>
      </section>

      <section id="videos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured <GoldText>Videos</GoldText></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About <GoldText>SV Worldz</GoldText></h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="https://via.placeholder.com/400x400.png?text=Sai+Vardhan" alt="Sai Vardhan" className="rounded-full shadow-lg mx-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Sai Vardhan</h3>
              <p className="text-lg mb-4">
                Welcome to SV Worldz, where we unravel the most intriguing business mysteries of our time. As the founder and host, I bring my expertise in finance and investigative journalism to deliver in-depth analyses of corporate stories that have shaped the business world.
              </p>
              <p className="text-lg mb-4">
                Our mission is to educate and entertain, breaking down complex business cases into engaging narratives that resonate with entrepreneurs, students, and professionals alike. With over 775,000 subscribers and 100 million views, we're proud to be a trusted source for business insights and lessons.
              </p>
              <p className="text-lg">
                Join us on this journey of discovery as we explore the triumphs, failures, and everything in between in the corporate landscape. Together, we'll uncover the hidden lessons and gain valuable insights that can shape your understanding of the business world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Esteemed <GoldText>Sponsors</GoldText></h2>
          <ScrollingSponsors />
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose <GoldText>SV Worldz</GoldText></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "In-depth Analysis", description: "We dive deep into complex business cases, providing thorough and insightful analysis." },
              { title: "Engaging Storytelling", description: "Our content is crafted to be both educational and entertaining, keeping you hooked from start to finish." },
              { title: "Expert Insights", description: "Benefit from our team's extensive experience in finance, journalism, and corporate analysis." },
              { title: "Regular Updates", description: "Stay informed with our consistent release of new, relevant content in the business world." },
              { title: "Community Engagement", description: "Join a growing community of business enthusiasts and professionals." },
              { title: "Accessible Learning", description: "Complex topics are broken down into easily digestible content for learners at all levels." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,215,0,0.3)" }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Dive Deeper?</h2>
          <p className="text-xl mb-8">Join our premium membership for exclusive content, early access to videos, and personalized insights.</p>
          <motion.a
            href="#"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Premium Member
          </motion.a>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact <GoldText>SV Worldz</GoldText></h2>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Type</label>
                <div className="mt-2 space-x-6">
                  <label className="inline-flex items-center">
                    <input type="radio" name="contactType" value="personal" checked={contactType === "personal"} onChange={() => setContactType("personal")} className="form-radio text-yellow-600" />
                    <span className="ml-2">Personal</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="contactType" value="business" checked={contactType === "business"} onChange={() => setContactType("business")} className="form-radio text-yellow-600" />
                    <span className="ml-2">Business</span>
                  </label>
                </div>
              </div>
              {contactType === "business" && (
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization Name</label>
                  <input type="text" id="organization" name="organization" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" />
                </div>
              )}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={6} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500" required></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </>
  );

  const renderAboutPage = () => (
    <div className="min-h-screen bg-[#FFFDF6] text-black">
      <header className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About <GoldText>SV Worldz</GoldText></h1>
          <p className="text-xl">Unraveling Business Mysteries with a Twist of Humor</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our <GoldText>Slightly Serious</GoldText> Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                At SV Worldz, we're on a mission to demystify the business world, one YouTube video at a time. We're like the Sherlock Holmes of the corporate world, but with better hair and a much cooler magnifying glass (it's actually a 4K camera).
              </p>
              <p className="text-lg mb-4">
                Our goal? To make business case studies so entertaining that you'll forget you're actually learning something. It's like sneaking vegetables into a kid's meal, but instead of carrots, we're serving up knowledge bombs.
              </p>
            </div>
            <FloatingElement>
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">SV Worldz by Numbers</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <YoutubeIcon className="mr-2 text-red-500" /> 774k+ Subscribers
                  </li>
                  <li className="flex items-center">
                    <CoffeeIcon className="mr-2 text-brown-500" /> 1,000+ Cups of Coffee Consumed
                  </li>
                  <li className="flex items-center">
                    <BrainIcon className="mr-2 text-pink-500" /> 50+ Business Mysteries Solved
                  </li>
                  <li className="flex items-center">
                    <RocketIcon className="mr-2 text-blue-500" /> 100+ Companies Analyzed
                  </li>
                </ul>
              </div>
            </FloatingElement>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet the <GoldText>Mastermind</GoldText></h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/creator-image.jpg"
              alt="Sai Vardhan - The Business Whisperer"
              className="w-64 h-64 rounded-full shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Sai Vardhan - The Business Whisperer</h3>
              <p className="text-lg mb-4">
                Legend has it that Sai Vardhan can smell a failing business model from miles away. Some say he was born with a silver PowerPoint clicker in his hand. Others claim he learned to read balance sheets before bedtime stories.
              </p>
              <p className="text-lg mb-4">
                What we know for sure is that Sai has an uncanny ability to turn complex business concepts into bite-sized, easily digestible content. It's like he's got a PhD in Corporate Simplification (if that were a real thing).
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 border border-yellow-600 text-yellow-600 rounded-md hover:bg-yellow-600 hover:text-white transition-colors"
              >
                <HeartIcon className="mr-2" /> Follow Sai's Business Adventures
              </motion.button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our <GoldText>Not-So-Secret</GoldText> Sauce</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">1. Thorough Research</h3>
              <p>We dig deeper than a mole on espresso. Our fact-checking is so intense, even our fact-checkers have fact-checkers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">2. Engaging Storytelling</h3>
              <p>We turn dry business cases into edge-of-your-seat thrillers. Move over, Hollywood!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">3. Sprinkle of Humor</h3>
              <p>We believe laughter is the best medicine... unless you're actually sick. Then please see a doctor.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why <GoldText>Choose Us</GoldText>?</h2>
          <div className="text-center">
            <p className="text-lg mb-4">
              Because where else can you learn about corporate strategies while simultaneously improving your dad-joke game?
            </p>
            <p className="text-lg mb-8">
              We're like the cool economics teacher you wish you had in high school, but with better production value and fewer pop quizzes.
            </p>
            <FloatingElement>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-lg hover:bg-yellow-600 transition-colors"
              >
                <YoutubeIcon className="mr-2" /> Subscribe to Our Channel
              </motion.button>
            </FloatingElement>
          </div>
        </section>
      </main>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {renderHeader()}
      <main>
        {currentPage === "home" ? renderHomePage() : renderAboutPage()}
      </main>
      {renderFooter()}
    </div>
  );
};

export default SVWorldz;