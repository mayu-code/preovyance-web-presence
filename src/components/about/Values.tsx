
const values = [
  {
    icon: "🏆",
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication."
  },
  {
    icon: "🔄",
    title: "Innovation",
    description: "We embrace cutting-edge technologies and methodologies to stay ahead of industry trends."
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "We build long-term partnerships with our clients based on trust and mutual success."
  },
  {
    icon: "🔒",
    title: "Integrity",
    description: "We operate with transparency, honesty, and the highest ethical standards."
  },
  {
    icon: "👥",
    title: "Collaboration",
    description: "We believe in the power of teamwork and collaborative problem-solving."
  },
  {
    icon: "🎯",
    title: "Results-Driven",
    description: "We focus on delivering measurable results that drive business value."
  }
];

const Values = () => {
  return (
    <section className="section bg-preovyance-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-preovyance-navy mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600">
            These principles guide our decisions, shape our culture, and define how we serve our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-preovyance-navy">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
