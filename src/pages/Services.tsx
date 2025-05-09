
import Layout from '@/components/layout/Layout';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import CTA from '@/components/home/CTA';

const Services = () => {
  return (
    <Layout>
      <ServicesHero />
      <ServicesList />
      <CTA />
    </Layout>
  );
};

export default Services;
