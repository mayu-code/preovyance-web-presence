
const MissionVision = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-8 bg-gradient-to-br from-preovyance-navy to-slate-800 text-white rounded-lg shadow-xl">
            <div className="mb-6">
              <span className="inline-block p-3 bg-white bg-opacity-20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses through innovative technology solutions that drive growth, 
              improve efficiency, and create sustainable competitive advantages in an ever-evolving 
              digital landscape.
            </p>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-preovyance-teal to-teal-600 text-white rounded-lg shadow-xl">
            <div className="mb-6">
              <span className="inline-block p-3 bg-white bg-opacity-20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-100">
              To become the most trusted technology partner for businesses worldwide by consistently 
              delivering exceptional value, fostering innovation, and maintaining the highest standards 
              of quality and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
