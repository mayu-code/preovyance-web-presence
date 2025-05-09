
import { ArrowRight } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 bg-preovyance-navy text-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive IT solutions designed to drive innovation, improve efficiency, and accelerate growth for your business.
          </p>
          <a href="#services-list" className="inline-flex items-center text-preovyance-teal hover:underline font-medium text-lg">
            Explore our services <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
