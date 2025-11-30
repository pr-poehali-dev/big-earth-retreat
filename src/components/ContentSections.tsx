import RetreatsSection from './sections/RetreatsSection';
import InfoSections from './sections/InfoSections';
import MentorsTestimonialsSection from './sections/MentorsTestimonialsSection';
import ContactSection from './sections/ContactSection';

interface ContentSectionsProps {
  scrollToSection: (sectionId: string) => void;
}

const ContentSections = ({ scrollToSection }: ContentSectionsProps) => {
  return (
    <>
      <RetreatsSection scrollToSection={scrollToSection} />
      <InfoSections />
      <MentorsTestimonialsSection />
      <ContactSection />
    </>
  );
};

export default ContentSections;
