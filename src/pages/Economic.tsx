
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';
import { Factory, Building, MapPin, Plane, TrendingUp } from 'lucide-react';

const Economic = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Economic Activities in <span className="text-rwanda-green">Karongi District</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the diverse economic landscape that drives prosperity and development in our beautiful district.
          </p>
        </div>

        {/* Economic Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard title="Best Industries" icon={Factory}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-green to-rwanda-blue p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Leading Industries</h4>
                <p className="text-sm opacity-90">
                  Karongi's strategic location and natural resources support diverse industrial development.
                </p>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-rwanda-green pl-4">
                  <h5 className="font-semibold text-gray-800">Coffee Processing</h5>
                  <p className="text-sm text-gray-600">State-of-the-art coffee washing stations and export facilities</p>
                </div>
                <div className="border-l-4 border-rwanda-blue pl-4">
                  <h5 className="font-semibold text-gray-800">Tourism & Hospitality</h5>
                  <p className="text-sm text-gray-600">World-class resorts and eco-tourism facilities</p>
                </div>
                <div className="border-l-4 border-rwanda-yellow pl-4">
                  <h5 className="font-semibold text-gray-800">Fishing Industry</h5>
                  <p className="text-sm text-gray-600">Lake Kivu fishing cooperatives and processing plants</p>
                </div>
                <div className="border-l-4 border-rwanda-green pl-4">
                  <h5 className="font-semibold text-gray-800">Handicrafts</h5>
                  <p className="text-sm text-gray-600">Traditional basket weaving and pottery cooperatives</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Big Businesses" icon={Building}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-blue to-rwanda-yellow p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Major Enterprises</h4>
                <p className="text-sm opacity-90">
                  Established businesses that drive economic growth and provide employment opportunities.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-blue">Lake Kivu Serena Hotel</h5>
                  <p className="text-sm text-gray-600">Luxury hospitality and conference facilities</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-green">Kivu Coffee Cooperatives</h5>
                  <p className="text-sm text-gray-600">Premium coffee production and export</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-yellow">KivuWatt Gas Project</h5>
                  <p className="text-sm text-gray-600">Methane gas extraction and power generation</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-blue">Kivu Marina Bay</h5>
                  <p className="text-sm text-gray-600">Resort development and water sports</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Tourism Attractions" icon={Plane}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-yellow to-rwanda-green p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Tourist Destinations</h4>
                <p className="text-sm opacity-90">
                  Natural beauty and cultural heritage sites that attract visitors from around the world.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rwanda-blue" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Lake Kivu Shores</h5>
                    <p className="text-sm text-gray-600">Beautiful beaches, water sports, and scenic boat rides</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rwanda-green" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Napoleon Island</h5>
                    <p className="text-sm text-gray-600">Historic island with stunning views and wildlife</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rwanda-yellow" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Kibuye Coffee Plantations</h5>
                    <p className="text-sm text-gray-600">Coffee tourism and agro-tourism experiences</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Annual visitors:</strong> Over 50,000 tourists contributing significantly to local economy through accommodation, dining, and local purchases.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Other Economic Activities" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-blue to-rwanda-green p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Diverse Economy</h4>
                <p className="text-sm opacity-90">
                  Multiple sectors contributing to sustainable economic development and community prosperity.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">Small-scale Mining</span>
                  <span className="text-sm text-rwanda-blue">Minerals & aggregates</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">Financial Services</span>
                  <span className="text-sm text-rwanda-green">Banks & SACCOs</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">Transportation</span>
                  <span className="text-sm text-rwanda-yellow">Lake & road transport</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">Construction</span>
                  <span className="text-sm text-rwanda-blue">Infrastructure development</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">Retail Trade</span>
                  <span className="text-sm text-rwanda-green">Markets & shops</span>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </Layout>
  );
};

export default Economic;
