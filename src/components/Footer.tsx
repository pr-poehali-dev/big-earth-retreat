const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/1893dee9-ffab-495f-b0d1-e61817e0272c.jpg" 
              alt="Большая Земля" 
              className="h-12 w-12 object-contain brightness-0 invert"
            />
            <span className="text-2xl font-serif font-semibold">Большая Земля</span>
          </div>
          <p className="text-sm opacity-90">
            © 2024 Большая Земля. Место силы и трансформации.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
