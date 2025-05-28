
import { Camera, Sprout, Users } from 'lucide-react';

const ActivityShowcase = () => {
  const activities = [
    {
      title: "Tourism & Lake Kivu",
      description: "Beautiful lakeside resorts, boat tours, and scenic landscapes that attract visitors from around the world.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      icon: Camera,
      color: "from-rwanda-blue to-blue-600"
    },
    {
      title: "Agriculture & Coffee",
      description: "Rich volcanic soils perfect for growing premium coffee beans and diverse agricultural products.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      icon: Sprout,
      color: "from-rwanda-green to-green-600"
    },
    {
      title: "Community Events",
      description: "Vibrant cultural celebrations, traditional ceremonies, and community gatherings that strengthen social bonds.",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      icon: Users,
      color: "from-rwanda-yellow to-yellow-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Life in Karongi District
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the diverse activities and vibrant lifestyle that make our district special
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-70`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivityShowcase;
