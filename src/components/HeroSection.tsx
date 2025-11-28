import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/files/1893dee9-ffab-495f-b0d1-e61817e0272c.jpg" 
            alt="Большая Земля" 
            className="h-48 w-48 object-contain mx-auto mb-6"
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-6 animate-fade-in">
          Большая Земля
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in font-light">
          Место силы для трансформации и уединения с природой
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Уникальный ретритный центр, где смешиваются древние техники народов мира и современные практики трансформации. 
          Здесь практикуется философия Ахимсы и синтез мудрости разных культур — от шаманских традиций до передовых методов работы с сознанием. 
          Обретите внутреннюю силу, гармонию с собой и окружающим миром.
        </p>
        <div className="flex gap-4 justify-center animate-scale-in">
          <Button size="lg" onClick={() => scrollToSection('retreats')} className="text-lg">
            Программы ретритов
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
