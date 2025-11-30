import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const InfoSections = () => {
  return (
    <>
      <section id="philosophy" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Синтез традиций и практик
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Мы объединяем мудрость древних народов с современными технологиями трансформации. 
            Философия Ахимсы — принцип ненасилия и сострадания — лежит в основе всех наших практик
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Heart" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Сострадание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мы практикуем безусловную любовь ко всем живым существам. 
                  Наше пространство создано для развития глубокого сострадания к себе и миру.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Sprout" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Жизнь в гармонии с природой — основа нашего существования. 
                  Мы используем возобновляемые ресурсы и практикуем нулевой след.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Sparkles" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Осознанность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Каждое действие — это практика присутствия здесь и сейчас. 
                  Мы учимся жить осознанно в каждом моменте.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Flower2" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Веганство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Растительное питание — естественное выражение принципа ненасилия. 
                  Мы показываем, что этичное питание может быть вкусным и питательным.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="territory" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Наша территория
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            12 гектаров заповедной земли в экологически чистом месте Тульской области
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Trees" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Разнообразный лес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Лес из ореха, дуба, березы, ивы и липы создаёт уникальную атмосферу и наполняет воздух целебными фитонцидами.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Waves" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Лесное озеро</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Озеро с прохладной водой и рыбой — идеально для медитаций у воды и погружения в холод.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Mountain" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Места силы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  На территории есть особые точки с мощной энергетикой для глубоких практик.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Home" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Эко-дом хай-тек</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Современный двухэтажный соломенный эко-дом в стиле хай-тек — гармония природы и технологий.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Paintbrush" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Керамическая мастерская</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Место для творчества: лепка из глины, гончарный круг, создание уникальных изделий.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Leaf" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Теплицы и поля</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Теплицы и поля с однолетними культурами — свежие органические продукты прямо с грядки.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Flame" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Гриль-дом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Пространство у огня для чайных церемоний и медитативного наслаждения теплом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Проживание
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Разнообразные варианты размещения в гармонии с природой
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Эко-домики в лесу</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>1-2 человека в домике</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Экологичные материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Панорамные окна в лес</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Подземные жилища</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Уютные землянки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Особая энергетика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Естественная термоизоляция</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Safari Tent глемпинг</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Шатры дикого дома</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Максимальная близость к природе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Комфорт в лесу</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Кемпинг зона</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Место для туристических палаток</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Бюджетный вариант</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Общие удобства рядом</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Общие удобства</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                  <span>Санузлы с горячей водой</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                  <span>Нежная ароматная баня</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                  <span>Зал для практик</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 opacity-30" />
                  <span className="line-through opacity-50">Веганская столовая</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
