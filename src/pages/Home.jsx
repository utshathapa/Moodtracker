import React, { useState } from 'react';

// NOTE: In a real environment, this component would assume Tailwind CSS is configured.

// Functional component for the Mood Tracker Landing Page
const Home = () => {
  // State for toggling the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper component for common icon style (Clock/Time)
  const TimeIcon = (props) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  // Helper component for common icon style (Pie Chart/Analytics)
  const ChartIcon = (props) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  );

  // Helper component for common icon style (Lightning/Insight)
  const LightningIcon = (props) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  // Helper component for Checkmark (Progress)
  const CheckIcon = (props) => (
    <svg className={props.className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand Name */}
            <a href="#" className="flex items-center text-xl font-bold text-primary-teal">
              <TimeIcon className="w-7 h-7 mr-2" />
              Clarity
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-teal transition duration-150">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-primary-teal transition duration-150">Benefits</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-teal transition duration-150">How It Works</a>
            </nav>

            {/* Action Button */}
            <a href="#download" className="hidden md:block bg-primary-teal text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-emerald-600 transition duration-300">
              Start Tracking
            </a>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition duration-150">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visibility controlled by state) */}
        <div className={`md:hidden bg-white shadow-xl pb-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-2 px-4" onClick={() => setIsMenuOpen(false)}>
            <a href="#features" className="block py-2 text-gray-600 hover:text-primary-teal hover:bg-gray-50 rounded-lg">Features</a>
            <a href="#benefits" className="block py-2 text-gray-600 hover:text-primary-teal hover:bg-gray-50 rounded-lg">Benefits</a>
            <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-primary-teal hover:bg-gray-50 rounded-lg">How It Works</a>
            <a href="#download" className="block w-full text-center bg-primary-teal text-white py-2 rounded-full font-semibold mt-2 hover:bg-emerald-600">
              Start Tracking
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-bg-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Text Content */}
              <div className="md:col-span-6 lg:col-span-7">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
                  Find Your <span className="text-primary-teal">Inner Balance</span>. Track Your Mood.
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Clarity is the simple, private way to log your daily emotions, understand your triggers, and improve your mental wellbeing journey.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#download" className="inline-flex justify-center items-center bg-secondary-blue text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:bg-blue-700 transition duration-300 ease-in-out">
                    Download Now
                  </a>
                  <a href="#how-it-works" className="inline-flex justify-center items-center border border-gray-300 text-gray-700 text-lg font-semibold py-3 px-8 rounded-full bg-white shadow-md hover:bg-gray-50 transition duration-300 ease-in-out">
                    See Demo
                  </a>
                </div>
              </div>
              
              {/* Mockup Image/Illustration */}
              <div className="md:col-span-6 lg:col-span-5 flex justify-center mt-8 md:mt-0">
                <div className="w-full max-w-sm h-80 bg-white rounded-3xl shadow-2xl p-6 border-4 border-primary-teal/50 relative transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                  {/* Simple App UI Mockup */}
                  <div className="text-center mb-4">
                    <p className="text-xl font-semibold text-primary-teal">How are you feeling today?</p>
                  </div>
                  <div className="flex justify-around text-4xl mb-6">
                    <span>😔</span>
                    <span>😐</span>
                    <span className="ring-4 ring-primary-teal rounded-full p-2 bg-primary-teal/10">😊</span>
                    <span>😌</span>
                    <span>😡</span>
                  </div>
                  <div className="bg-bg-light p-4 rounded-xl shadow-inner mb-4">
                    <p className="text-sm font-medium text-gray-600 mb-1">Recent Insights:</p>
                    <ul className="text-xs space-y-1 text-gray-500">
                      <li>- Mood tends to drop on Tuesdays.</li>
                      <li>- Higher energy after morning walk.</li>
                      <li>- Stress spikes correlate with caffeine.</li>
                    </ul>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 px-6">
                    <button className="w-full bg-primary-teal text-white py-2 rounded-full font-medium">Log Entry</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Powerful Tools for a Clear Mind</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Clarity provides simple, effective features to help you track, analyze, and reflect on your emotional patterns.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1: Quick Logging */}
              <div className="bg-card-light p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-teal/20 text-primary-teal mb-4">
                  <TimeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Mood Logging</h3>
                <p className="text-gray-600">Log how you feel in seconds with a simple tap. Rate your mood, add a quick note, and continue your day effortlessly.</p>
              </div>

              {/* Feature 2: Insightful Analytics */}
              <div className="bg-card-light p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-blue/20 text-secondary-blue mb-4">
                  <ChartIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pattern Recognition</h3>
                <p className="text-gray-600">Visual charts show trends over time, helping you identify correlations between your activities, sleep, and emotional state.</p>
              </div>

              {/* Feature 3: Journaling & Notes */}
              <div className="bg-card-light p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-teal/20 text-primary-teal mb-4">
                  <LightningIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contextual Journaling</h3>
                <p className="text-gray-600">Deepen your reflection with private journaling space. Add tags and details to understand *why* your mood changed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-20 bg-bg-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary-teal font-semibold uppercase tracking-wider">The Clarity Difference</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Benefits for Your Mental Wellbeing</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1: Self-Awareness (Check Circle) */}
              <div className="flex items-start bg-card-light p-6 rounded-xl shadow-md border-l-4 border-primary-teal">
                <div className="p-3 bg-primary-teal/10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2c-2.978 0-5.786 1.15-7.984 3.184l-.196.2A11.955 11.955 0 012 12c0 2.978 1.15 5.786 3.184 7.984l.196.2A11.955 11.955 0 0112 22c2.978 0 5.786-1.15 7.984-3.184l.196-.2A11.955 11.955 0 0122 12c0-2.978-1.15-5.786-3.184-7.984l-.196-.2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Self-Awareness</h4>
                  <p className="text-sm text-gray-600">Identify subconscious emotional cycles and become more present with your feelings.</p>
                </div>
              </div>
              
              {/* Benefit 2: Better Coping (Calendar) */}
              <div className="flex items-start bg-card-light p-6 rounded-xl shadow-md border-l-4 border-secondary-blue">
                <div className="p-3 bg-secondary-blue/10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-secondary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M8 12h.01M12 16h.01M16 12h.01M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h18a2 2 0 012 2v11a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Better Coping</h4>
                  <p className="text-sm text-gray-600">Pinpoint stressors and positive influences to proactively manage your challenging days.</p>
                </div>
              </div>

              {/* Benefit 3: Data for Professionals (Chart) */}
              <div className="flex items-start bg-card-light p-6 rounded-xl shadow-md border-l-4 border-primary-teal">
                <div className="p-3 bg-primary-teal/10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v14L9 19z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Data for Professionals</h4>
                  <p className="text-sm text-gray-600">Generate a comprehensive report to share meaningful data with your therapist or doctor.</p>
                </div>
              </div>
              
              {/* Benefit 4: Journaling Prompts (Notes) */}
              <div className="flex items-start bg-card-light p-6 rounded-xl shadow-md border-l-4 border-secondary-blue">
                <div className="p-3 bg-secondary-blue/10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-secondary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Journaling Prompts</h4>
                  <p className="text-sm text-gray-600">Receive suggested prompts tailored to your mood to encourage deeper, meaningful reflection.</p>
                </div>
              </div>

              {/* Benefit 5: 100% Private (Lock) */}
              <div className="flex items-start bg-card-light p-6 rounded-xl shadow-md border-l-4 border-primary-teal">
                <div className="p-3 bg-primary-teal/10 rounded-full mr-4">
                  <svg className="w-6 h-6 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-2-6h4m-7 8h10a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">100% Private</h4>
                  <p className="text-sm text-gray-600">Your data is yours. We prioritize your privacy and security above all else for a safe space.</p>
                </div>
              </div>
              
              {/* Benefit 6: Progress Visualized (Check) */}
              <div className="flex items-start bg-card-light p-6 rounded-xl shadow-md border-l-4 border-secondary-blue">
                <div className="p-3 bg-secondary-blue/10 rounded-full mr-4">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Progress Visualized</h4>
                  <p className="text-sm text-gray-600">Celebrate small victories and see tangible proof of your emotional growth over weeks and months.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900">It's Simple. It Works.</h2>
              <p className="text-xl text-gray-600 mt-2 max-w-2xl mx-auto">Get started on your path to clarity in just three easy steps.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div className="text-center p-6 rounded-xl shadow-lg border border-primary-teal/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-teal text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Log Your Mood</h3>
                <p className="text-gray-600">Take 30 seconds to rate your current mood and note what you're doing. It's that easy.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center p-6 rounded-xl shadow-lg border border-secondary-blue/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary-blue text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Your Trends</h3>
                <p className="text-gray-600">After a week, look at your personalized charts. Discover your emotional cycles and hidden patterns.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center p-6 rounded-xl shadow-lg border border-primary-teal/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-teal text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Your Insights</h3>
                <p className="text-gray-600">Use what you learn to make positive, intentional changes to your routine and lifestyle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Download Section */}
        <section id="download" className="py-16 md:py-20 bg-primary-teal/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Ready for Clarity?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Take the first step towards deeper self-understanding and improved mental health. Download the Clarity app today.
            </p>
            
            {/* Mock App Store/Play Store Buttons */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="inline-flex items-center bg-gray-900 text-white py-3 px-6 rounded-lg shadow-xl hover:bg-black transform hover:scale-105 transition duration-300">
                {/* Apple Logo SVG */}
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C7.294 0 3.328 3.518 3.256 8.35c-.068 4.832 3.55 9.074 8.244 9.458.072.006.14.01.21.01s.138-.004.21-.01c4.694-.384 8.312-4.626 8.244-9.458C20.672 3.518 16.706 0 12 0zm0 18.992c-1.55 0-3.056-.47-4.32-1.353-.192-.132-.39-.257-.594-.374-1.042-.602-1.896-1.516-2.48-2.67-.32-6.284 3.75-9.395 8.394-9.395 4.644 0 8.714 3.111 8.394 9.395-.584 1.154-1.438 2.068-2.48 2.67-.204.117-.402.242-.594.374-1.264.883-2.77 1.353-4.32 1.353z"/></svg>
                App Store
              </a>
              <a href="#" className="inline-flex items-center bg-gray-900 text-white py-3 px-6 rounded-lg shadow-xl hover:bg-black transform hover:scale-105 transition duration-300">
                {/* Android Logo SVG */}
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.833 17.5l-2.917-2.917V8.583L10.167 6.417 12 8.25l1.833-1.833 2.917 2.917v6.083l-2.917 2.917L12 15.75l-1.833 1.75z"/></svg>
                Google Play
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <h5 className="text-xl font-bold text-primary-teal mb-3">Clarity</h5>
              <p className="text-sm text-gray-400">Your partner in mental wellbeing.</p>
            </div>
            
            {/* Links 1 */}
            <div>
              <h6 className="font-semibold text-white mb-3">Product</h6>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-primary-teal text-sm">Features</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-primary-teal text-sm">Benefits</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-teal text-sm">Pricing</a></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h6 className="font-semibold text-white mb-3">Company</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary-teal text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-teal text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-teal text-sm">Contact</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h6 className="font-semibold text-white mb-3">Legal</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary-teal text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-teal text-sm">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h6 className="font-semibold text-white mb-3">Get In Touch</h6>
              <p className="text-sm text-gray-400">support@clarityapp.com</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-500">&copy; 2025 Clarity App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;