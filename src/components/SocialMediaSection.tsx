
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const SocialMediaSection = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      icon: Facebook,
      url: "#",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Follow us for daily updates and community news"
    },
    {
      platform: "Instagram",
      icon: Instagram,
      url: "#",
      color: "bg-pink-600 hover:bg-pink-700",
      description: "See beautiful photos of our district"
    },
    {
      platform: "Twitter",
      icon: Twitter,
      url: "#",
      color: "bg-sky-500 hover:bg-sky-600",
      description: "Get real-time updates and announcements"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@karongi.gov.rw",
      color: "text-rwanda-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 788 123 456",
      color: "text-rwanda-green"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Karongi District, Western Province, Rwanda",
      color: "text-rwanda-yellow"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stay Connected with Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our social media channels and get in touch for the latest updates about Karongi District
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Media Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg ${social.color} transition-colors duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-rwanda-blue transition-colors">
                        {social.platform}
                      </h4>
                      <p className="text-sm text-gray-600">{social.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <IconComponent className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-800">{contact.label}</h4>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-rwanda-blue to-rwanda-green p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
              <p className="text-sm opacity-90 mb-4">
                Subscribe to our newsletter for the latest news and updates from Karongi District
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-2 bg-white text-rwanda-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
