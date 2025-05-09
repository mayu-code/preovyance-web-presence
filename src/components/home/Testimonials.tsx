
const testimonials = [
  {
    quote: "Preovyance IT Solutions has been instrumental in our digital transformation journey. Their team's expertise and dedication helped us navigate complex technological challenges.",
    author: "Sarah Johnson",
    title: "CTO, TechCorp Inc.",
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    quote: "Working with Preovyance has been a game-changer for our organization. Their cloud migration services were seamless, and their ongoing support is exceptional.",
    author: "Michael Chen",
    title: "IT Director, Global Finance",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The cybersecurity solutions provided by Preovyance have significantly enhanced our data protection capabilities. Highly recommended for businesses of all sizes.",
    author: "Priya Sharma",
    title: "CISO, Healthcare Solutions",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-preovyance-navy text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with Preovyance IT Solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                  <p className="text-preovyance-teal">{testimonial.title}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
