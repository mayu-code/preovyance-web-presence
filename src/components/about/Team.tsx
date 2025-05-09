
const teamMembers = [
  {
    name: "Rajiv Sharma",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in the IT industry, Rajiv leads Preovyance with a vision to transform how businesses leverage technology.",
    image: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    name: "Ananya Patel",
    role: "CTO",
    bio: "Ananya brings technical leadership and innovation to our solutions, with expertise in cloud architecture and emerging technologies.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "David Wilson",
    role: "Head of Consulting",
    bio: "David leads our consulting practice, helping clients navigate complex digital transformation journeys with strategic guidance.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Mehta",
    role: "Director of Operations",
    bio: "Priya ensures operational excellence across all our projects and services, maintaining the highest standards of delivery.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Team = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-preovyance-navy mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600">
            Meet the experienced professionals who drive our vision and lead our teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-preovyance-navy">{member.name}</h3>
                <p className="text-preovyance-teal font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
