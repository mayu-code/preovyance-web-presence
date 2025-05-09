
const ContactMap = () => {
  return (
    <section className="section bg-preovyance-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-preovyance-navy mb-4">Visit Our Office</h2>
          <p className="text-lg text-gray-600">
            Located in the heart of New Delhi's technology district
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28005.631137722554!2d77.19792968781237!3d28.613329083763896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1653896356249!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
