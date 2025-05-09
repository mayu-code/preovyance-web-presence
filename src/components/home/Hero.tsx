
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-preovyance-navy to-slate-800 text-white pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Transformation <span className="text-preovyance-teal">Simplified</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-xl">
              Preovyance IT Solutions delivers cutting-edge technology services to help businesses innovate and thrive in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-preovyance-teal hover:bg-opacity-90 text-white px-8 py-6 text-lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-preovyance-navy px-8 py-6 text-lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block slide-up">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000" 
              alt="Digital Transformation" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
