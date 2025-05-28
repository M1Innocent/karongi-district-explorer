
const WelcomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-rwanda-blue via-rwanda-green to-rwanda-yellow text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Karongi District
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover the pearl of Rwanda's Western Province, where natural beauty meets vibrant community life along the shores of Lake Kivu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-lg font-semibold">Western Province</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-lg font-semibold">Lake Kivu Region</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-lg font-semibold">333K+ Residents</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-blue-50">
          <path d="M0,120 C150,80 350,0 600,30 C850,60 1050,100 1200,80 L1200,120 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default WelcomeBanner;
