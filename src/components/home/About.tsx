
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-preovyance-navy mb-6">
              Transforming Businesses Through Technology
            </h2>
            <p className="text-gray-600 mb-6">
              At Preovyance IT Solutions, we combine technical expertise with industry knowledge to deliver innovative solutions that drive business growth and operational excellence.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-preovyance-teal text-white flex items-center justify-center text-sm font-bold">✓</div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-preovyance-navy">Industry Expertise</h3>
                  <p className="text-gray-600">Over 10 years of experience serving diverse industries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-preovyance-teal text-white flex items-center justify-center text-sm font-bold">✓</div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-preovyance-navy">Certified Professionals</h3>
                  <p className="text-gray-600">Team of experts with industry-leading certifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-preovyance-teal text-white flex items-center justify-center text-sm font-bold">✓</div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-preovyance-navy">Client-Centric Approach</h3>
                  <p className="text-gray-600">Tailored solutions designed around your business needs</p>
                </div>
              </div>
            </div>
            <Button className="bg-preovyance-navy hover:bg-preovyance-teal" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
