
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    icon: "💻",
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business needs and challenges.",
    path: "/services#software-development"
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure and migration services for modern businesses.",
    path: "/services#cloud-solutions"
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving threats.",
    path: "/services#cybersecurity"
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description: "Transform your data into actionable insights that drive business growth.",
    path: "/services#data-analytics"
  }
];

const Services = () => {
  return (
    <section className="section bg-preovyance-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-preovyance-navy mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end IT solutions to help your business stay ahead in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-preovyance-navy">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={service.path} 
                className="inline-flex items-center text-preovyance-teal font-medium hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-block bg-preovyance-navy text-white py-3 px-8 rounded-md hover:bg-opacity-90 transition-all font-medium"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
