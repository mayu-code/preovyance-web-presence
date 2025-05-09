
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-preovyance-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Preovyance IT Solutions</h3>
            <p className="text-gray-300 mb-4">
              Delivering innovative IT solutions and digital transformation services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-preovyance-teal">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-preovyance-teal">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-preovyance-teal">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.124-5.864 10.124-11.854z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-preovyance-teal">Software Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-preovyance-teal">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-preovyance-teal">IT Consulting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-preovyance-teal">Data Analytics</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-preovyance-teal">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-preovyance-teal">About Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-preovyance-teal">Our Team</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-preovyance-teal">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-preovyance-teal">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-preovyance-teal">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 Tech Park, Silicon Valley</p>
              <p>New Delhi, India 110001</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@preovyance.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Preovyance IT Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-preovyance-teal">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-preovyance-teal">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-preovyance-teal">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
