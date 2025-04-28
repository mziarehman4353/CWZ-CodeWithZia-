'use client';

import LayoutWrapper from '@/app/components/General/LayoutWrapper';
import ContactHero from './components/ContactHero';
import ContactSection from './components/ContactSection';


const Page = () => {
  return (
    <LayoutWrapper>
      <section className='w-full'>
        <ContactHero />
      </section>

      <section className="w-full mt-6">
        <ContactSection />
      </section>
    </LayoutWrapper>
  );
};

export default Page;