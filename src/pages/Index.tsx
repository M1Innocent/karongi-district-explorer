
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';
import WelcomeBanner from '../components/WelcomeBanner';
import ActivityShowcase from '../components/ActivityShowcase';
import SocialMediaSection from '../components/SocialMediaSection';
import { Users, MapPin, Sprout, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Activity Showcase */}
        <ActivityShowcase />

        {/* Hero Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Social Structure of <span className="text-rwanda-blue">Karongi District</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the vibrant social fabric that makes Karongi District a unique and thriving community in Rwanda's Western Province.
          </p>
        </div>

        {/* Social Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard title="Population Density" icon={Users}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-blue to-rwanda-green p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Demographics Overview</h4>
                <p className="text-sm opacity-90">
                  Karongi District is home to approximately 333,000 residents across 13 sectors, creating a diverse and dynamic community.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-rwanda-blue">333K+</div>
                  <div className="text-sm text-gray-600">Total Population</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-rwanda-green">13</div>
                  <div className="text-sm text-gray-600">Sectors</div>
                </div>
              </div>
              <p className="text-gray-700">
                The district maintains a balanced population distribution with vibrant communities in both urban centers and rural areas, fostering strong social cohesion and cultural preservation.
              </p>
            </div>
          </SectionCard>

          <SectionCard title="Area for Building" icon={MapPin}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-green to-rwanda-yellow p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Urban Development</h4>
                <p className="text-sm opacity-90">
                  Strategic urban planning ensures sustainable development while preserving Karongi's natural beauty.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-rwanda-blue rounded-full mr-3"></div>
                  Residential zones with modern infrastructure
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-rwanda-green rounded-full mr-3"></div>
                  Commercial districts near Lake Kivu
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-rwanda-yellow rounded-full mr-3"></div>
                  Industrial areas with environmental protection
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-rwanda-blue rounded-full mr-3"></div>
                  Tourism infrastructure development
                </li>
              </ul>
            </div>
          </SectionCard>

          <SectionCard title="Area for Agriculture" icon={Sprout}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-green to-rwanda-blue p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Agricultural Excellence</h4>
                <p className="text-sm opacity-90">
                  Rich volcanic soils and favorable climate make Karongi ideal for diverse agricultural activities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-xl font-bold text-rwanda-green">75%</div>
                  <div className="text-sm text-gray-600">Agricultural Land</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-xl font-bold text-rwanda-yellow">12+</div>
                  <div className="text-sm text-gray-600">Crop Types</div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">Main Agricultural Products:</p>
                <div className="flex flex-wrap gap-2">
                  {['Coffee', 'Tea', 'Bananas', 'Irish Potatoes', 'Beans', 'Maize'].map((crop) => (
                    <span key={crop} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Economic Level" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-yellow to-rwanda-blue p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Economic Status</h4>
                <p className="text-sm opacity-90">
                  Karongi shows steady economic growth driven by tourism, agriculture, and sustainable development initiatives.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tourism Growth</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-rwanda-blue h-3 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Agricultural Production</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-rwanda-green h-3 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Infrastructure Development</span>
                  <div className="w-32 bg-gray-200 rounded-full h-3">
                    <div className="bg-rwanda-yellow h-3 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                The district benefits from its strategic location on Lake Kivu, attracting both domestic and international investment in hospitality and sustainable development projects.
              </p>
            </div>
          </SectionCard>
        </div>

        {/* Social Media Section */}
        <SocialMediaSection />
      </div>
    </Layout>
  );
};

export default Index;
