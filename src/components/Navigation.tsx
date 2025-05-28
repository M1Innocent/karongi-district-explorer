
import { Link, useLocation } from 'react-router-dom';
import { Users, Building, School } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Social', icon: Users },
    { path: '/economic', label: 'Economic Activities', icon: Building },
    { path: '/public', label: 'Public Activities', icon: School }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-rwanda-blue">Karongi District</h1>
            <span className="ml-2 text-sm text-gray-600">Western Province, Rwanda</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-rwanda-blue bg-blue-50 border-b-2 border-rwanda-blue'
                        : 'text-gray-700 hover:text-rwanda-blue hover:bg-blue-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-2 py-1 text-xs ${
                      isActive ? 'text-rwanda-blue' : 'text-gray-600'
                    }`}
                  >
                    <IconComponent className="w-3 h-3 mr-1" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
