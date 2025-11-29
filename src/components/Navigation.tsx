import { Button } from '@/components/ui/button';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
              <div className="h-10 w-10 rounded-full border-4 border-background"></div>
            </div>
            <span className="text-2xl font-serif font-semibold text-primary">Большая Земля</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('retreats')} className="text-sm hover:text-primary transition-colors">
              Программы
            </button>
            <button onClick={() => scrollToSection('philosophy')} className="text-sm hover:text-primary transition-colors">
              Философия
            </button>
            <button onClick={() => scrollToSection('territory')} className="text-sm hover:text-primary transition-colors">
              Территория
            </button>
            <button onClick={() => scrollToSection('accommodation')} className="text-sm hover:text-primary transition-colors">
              Проживание
            </button>
            <button onClick={() => scrollToSection('mentors')} className="text-sm hover:text-primary transition-colors">
              Наставники
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
            Забронировать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;