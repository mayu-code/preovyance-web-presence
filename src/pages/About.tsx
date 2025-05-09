
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import Values from '@/components/about/Values';
import Team from '@/components/about/Team';
import CTA from '@/components/home/CTA';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <Values />
      <Team />
      <CTA />
    </Layout>
  );
};

export default About;
