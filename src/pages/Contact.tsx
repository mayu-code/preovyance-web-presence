
import Layout from '@/components/layout/Layout';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </Layout>
  );
};

export default Contact;
