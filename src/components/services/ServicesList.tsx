
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business requirements.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Custom application development",
      "Web and mobile applications",
      "API development and integration",
      "UI/UX design",
      "Legacy system modernization"
    ]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure and migration services.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Cloud migration strategy",
      "AWS, Azure, and Google Cloud services",
      "Cloud infrastructure management",
      "Serverless architecture implementation",
      "Cloud cost optimization"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving threats.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Security assessment and audit",
      "Vulnerability management",
      "Data protection solutions",
      "Compliance (GDPR, HIPAA, etc.)",
      "Security awareness training"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform your data into actionable insights that drive business growth.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Business intelligence solutions",
      "Data warehouse design",
      "Big data implementation",
      "Predictive analytics",
      "Data visualization and reporting"
    ]
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Strategic technology advice to help you make informed business decisions.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80",
    features: [
      "IT strategy development",
      "Digital transformation roadmap",
      "Technology assessment",
      "Process optimization",
      "IT governance and compliance"
    ]
  },
  {
    id: "managed-services",
    title: "Managed IT Services",
    description: "Proactive IT management and support to keep your systems running smoothly.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80",
    features: [
      "24/7 monitoring and support",
      "System administration",
      "Network management",
      "Backup and disaster recovery",
      "IT help desk services"
    ]
  }
];

const ServicesList = () => {
  return (
    <section id="services-list" className="section">
      <div className="container-custom">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <h2 className="text-3xl font-bold text-preovyance-navy mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-preovyance-teal text-white flex items-center justify-center mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="bg-preovyance-navy hover:bg-preovyance-teal" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
              </div>
              
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
