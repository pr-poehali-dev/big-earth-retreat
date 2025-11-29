import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const MassageRetreat = () => {
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
              Массажный ретрит
            </h1>
            <p className="text-xl text-muted-foreground">
              Программа глубокого телесного расслабления и исцеления через прикосновения
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">Глубинная работа с телом</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Массажный ретрит — это путешествие в мир чувственности и глубокого расслабления. 
                Мы работаем не только с физическим телом, но и с энергетическими потоками, 
                освобождая блоки и напряжение, накопленные годами.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-primary">Виды массажа в ретрите:</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Icon name="Sparkles" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Сакральный массаж тела</h4>
                      <p className="text-sm text-muted-foreground">
                        Глубокая практика работы с телом, основанная на древних техниках. 
                        Это интимное путешествие к себе через осознанные прикосновения. 
                        Массаж пробуждает жизненную энергию, раскрывает чувственность 
                        и помогает освободиться от напряжения в области таза и живота.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Мы работаем с уважением к границам каждого человека, создавая 
                        безопасное пространство для исследования своего тела и ощущений.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icon name="Waves" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Тайский массаж</h4>
                      <p className="text-sm text-muted-foreground">
                        Древняя техника растяжения и акупрессуры. Работа по энергетическим 
                        линиям тела для восстановления баланса и гибкости.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icon name="Droplets" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Аюрведический массаж</h4>
                      <p className="text-sm text-muted-foreground">
                        Масляный массаж с тёплыми маслами, подобранными по вашему типу доши. 
                        Глубокое питание кожи и расслабление нервной системы.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icon name="Heart" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Висцеральная терапия</h4>
                      <p className="text-sm text-muted-foreground">
                        Работа с внутренними органами через мягкие мануальные техники. 
                        Улучшение пищеварения и общего самочувствия.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Icon name="Move" className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Работа с фасциями</h4>
                      <p className="text-sm text-muted-foreground">
                        Глубокие техники освобождения соединительной ткани. 
                        Восстановление подвижности и снятие хронических напряжений.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-primary mb-4">Программа массажного ретрита</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Консультация и диагностика состояния тела</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ежедневные массажные сессии (1.5-2 часа)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Чередование разных техник массажа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Обучение самомассажу и работе с триггерными точками</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Дыхательные практики для углубления эффекта</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Индивидуальные рекомендации по уходу за телом</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <Icon name="Info" className="h-5 w-5" />
                  О сакральном массаже
                </h4>
                <p className="text-sm text-amber-800">
                  Мы предлагаем эту практику людям, готовым к глубокой работе с собой. 
                  Это не эротическая услуга, а терапевтическая практика освобождения 
                  и исцеления через осознанные прикосновения. Сессии проводятся 
                  в атмосфере уважения, безопасности и профессионализма.
                </p>
              </div>

              <div className="text-center pt-6">
                <Button size="lg" onClick={() => navigate('/#contact')}>
                  Забронировать массажный ретрит
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MassageRetreat;
