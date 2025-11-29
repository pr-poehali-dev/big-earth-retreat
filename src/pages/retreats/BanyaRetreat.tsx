import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const BanyaRetreat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <div className="h-8 w-8 rounded-full border-4 border-background"></div>
            </div>
            <span className="text-xl font-serif font-semibold">Большая Земля</span>
          </div>
          <Button variant="ghost" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
            Назад
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">
              Банный ретрит
            </h1>
            <p className="text-xl text-muted-foreground">
              Исцеление через древние банные традиции. Нежная баня, где не страдают, а наслаждаются.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">Дух бабушки, дух няни бани</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Наша баня — это не место для испытаний, а пространство для наслаждения и исцеления. 
                Мы создали атмосферу нежной заботы, где каждый парильщик окружён вниманием и теплом, 
                словно в объятиях любящей бабушки.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">Особенности нашей бани:</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <Icon name="Sparkles" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Нежный пар</h4>
                      <p className="text-sm text-muted-foreground">
                        Мягкий, ароматный пар окутывает тело, не обжигая, а лаская кожу. 
                        Мы создаём идеальную температуру для глубокого расслабления.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icon name="Leaf" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Ароматные травы</h4>
                      <p className="text-sm text-muted-foreground">
                        Запаривание на травах из нашего леса: мята, эвкалипт, пихта. 
                        Каждый аромат подбирается индивидуально.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icon name="Droplets" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Сибирский банный чан</h4>
                      <p className="text-sm text-muted-foreground">
                        Чан с настоем целебных трав под открытым небом. 
                        Погружение в тёплую воду после парной — незабываемый опыт.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icon name="Heart" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Забота банщика</h4>
                      <p className="text-sm text-muted-foreground">
                        Наш банщик — мастер своего дела, который чувствует каждого гостя 
                        и создаёт идеальные условия для исцеления.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-primary mb-4">Программа банного ретрита</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Подготовка тела: лёгкий массаж перед парной</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>3-4 захода в парную с постепенным увеличением температуры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Работа вениками: берёзовым, дубовым, эвкалиптовым</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Погружение в сибирский чан с травами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Травяной чай и отдых в релакс-зоне</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Завершающий массаж и обёртывание</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-6">
                <p className="text-lg text-primary font-semibold mb-6">
                  В нашей бане не страдают — в нашей бане наслаждаются
                </p>
                <Button size="lg" onClick={() => navigate('/#contact')}>
                  Забронировать банный ретрит
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BanyaRetreat;
