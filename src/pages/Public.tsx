
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';
import { GraduationCap, Dumbbell, Church, Heart } from 'lucide-react';

const Public = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Public Activities in <span className="text-rwanda-yellow">Karongi District</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the rich educational, spiritual, and social infrastructure that supports our community's growth and well-being.
          </p>
        </div>

        {/* Public Activities Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard title="Education Levels" icon={GraduationCap}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-blue to-rwanda-green p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Educational Excellence</h4>
                <p className="text-sm opacity-90">
                  Comprehensive education system from primary to higher education, fostering intellectual development.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-rwanda-blue">95%</div>
                  <div className="text-sm text-gray-600">Primary Enrollment</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-rwanda-green">78%</div>
                  <div className="text-sm text-gray-600">Secondary Enrollment</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-rwanda-blue pl-4">
                  <h5 className="font-semibold text-gray-800">Primary Education</h5>
                  <p className="text-sm text-gray-600">85+ primary schools with modern facilities</p>
                </div>
                <div className="border-l-4 border-rwanda-green pl-4">
                  <h5 className="font-semibold text-gray-800">Secondary Education</h5>
                  <p className="text-sm text-gray-600">25+ secondary schools including technical schools</p>
                </div>
                <div className="border-l-4 border-rwanda-yellow pl-4">
                  <h5 className="font-semibold text-gray-800">Higher Education</h5>
                  <p className="text-sm text-gray-600">University of Tourism, Technology and Business Studies</p>
                </div>
                <div className="border-l-4 border-rwanda-blue pl-4">
                  <h5 className="font-semibold text-gray-800">Vocational Training</h5>
                  <p className="text-sm text-gray-600">Multiple TVET schools for practical skills</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Sport Activities" icon={Dumbbell}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-green to-rwanda-yellow p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Sports & Recreation</h4>
                <p className="text-sm opacity-90">
                  Diverse sporting activities promoting health, unity, and community engagement across all age groups.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-blue">Football (Soccer)</h5>
                  <p className="text-sm text-gray-600">Local leagues, youth teams, and community tournaments</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-green">Basketball</h5>
                  <p className="text-sm text-gray-600">School competitions and district championships</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-yellow">Swimming</h5>
                  <p className="text-sm text-gray-600">Lake Kivu swimming and water sports activities</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-blue">Volleyball</h5>
                  <p className="text-sm text-gray-600">Beach volleyball and indoor competitions</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-rwanda-green">Traditional Sports</h5>
                  <p className="text-sm text-gray-600">Cultural games and traditional competitions</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Sports Infrastructure:</strong> Modern sports complexes, community courts, and Lake Kivu waterfront facilities.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Best Churches" icon={Church}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-yellow to-rwanda-blue p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Spiritual Community</h4>
                <p className="text-sm opacity-90">
                  Strong faith communities providing spiritual guidance and social support across denominations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Church className="w-6 h-6 text-rwanda-blue" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Catholic Churches</h5>
                    <p className="text-sm text-gray-600">Multiple parishes serving large congregations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Church className="w-6 h-6 text-rwanda-green" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Protestant Churches</h5>
                    <p className="text-sm text-gray-600">Anglican, Presbyterian, and Baptist congregations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Church className="w-6 h-6 text-rwanda-yellow" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Pentecostal Churches</h5>
                    <p className="text-sm text-gray-600">Growing evangelical communities and youth ministries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Church className="w-6 h-6 text-rwanda-blue" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Islamic Centers</h5>
                    <p className="text-sm text-gray-600">Mosques serving the Muslim community</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Supporting Institutions" icon={Heart}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rwanda-green to-rwanda-blue p-4 rounded-lg text-white">
                <h4 className="font-semibold text-lg mb-2">Community Support</h4>
                <p className="text-sm opacity-90">
                  Essential institutions providing daily life support and improving quality of life for all residents.
                </p>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-rwanda-blue pl-4">
                  <h5 className="font-semibold text-gray-800">Healthcare Facilities</h5>
                  <p className="text-sm text-gray-600">District hospital, health centers, and clinics</p>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Karongi Hospital</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">15+ Health Centers</span>
                  </div>
                </div>
                <div className="border-l-4 border-rwanda-green pl-4">
                  <h5 className="font-semibold text-gray-800">Financial Institutions</h5>
                  <p className="text-sm text-gray-600">Banks, microfinance, and savings cooperatives</p>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Commercial Banks</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">SACCOs</span>
                  </div>
                </div>
                <div className="border-l-4 border-rwanda-yellow pl-4">
                  <h5 className="font-semibold text-gray-800">Government Services</h5>
                  <p className="text-sm text-gray-600">District offices, sector administration, and public services</p>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">District Office</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Citizen Service Centers</span>
                  </div>
                </div>
                <div className="border-l-4 border-rwanda-blue pl-4">
                  <h5 className="font-semibold text-gray-800">NGOs & Cooperatives</h5>
                  <p className="text-sm text-gray-600">Community development organizations and farmer cooperatives</p>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Development NGOs</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Farmer Cooperatives</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </Layout>
  );
};

export default Public;
