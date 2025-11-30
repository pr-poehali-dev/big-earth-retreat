import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-serif text-primary mb-3">
              Связаться с нами
            </CardTitle>
            <CardDescription className="text-lg">
              Мы с радостью ответим на все ваши вопросы и поможем забронировать ретрит
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                    Телефон
                  </h3>
                  <a 
                    href="https://t.me/is964" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +7 964 646 46 45
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                    Email
                  </h3>
                  <a 
                    href="mailto:islenkov@mail.ru"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    islenkov@mail.ru
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                    Местоположение
                  </h3>
                  <p className="text-muted-foreground">
                    Россия, Тульская область<br />
                    Заокский район, Давыдовская<br />
                    (точный адрес высылается при бронировании)
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                  <form className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    <Button className="w-full" type="button">
                      Отправить
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
