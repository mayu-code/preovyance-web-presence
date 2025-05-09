
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section bg-gradient-to-r from-preovyance-teal to-teal-600 text-white">
      <div className="container-custom text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8">
          Partner with Preovyance IT Solutions and leverage our expertise to drive your digital transformation journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-preovyance-navy hover:bg-gray-100 px-8 py-6 text-lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-preovyance-navy px-8 py-6 text-lg" asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
