import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const DarkRetreat = () => {
  const navigate = useNavigate();

  const schedule = [
    {
      day: 'День 1',
      title: 'Подготовка и вход',
      description: 'Знакомство с пространством при свете, инструктаж по безопасности, последний ужин при свечах. В 22:00 — погружение в темноту.'
    },
    {
      day: 'Дни 2-6',
      title: 'Глубокое погружение',
      description: 'Полное пребывание в темноте. Медитации, практики самонаблюдения, работа с внутренним видением. Питание подаётся через специальный шлюз.'
    },
    {
      day: 'День 7',
      title: 'Выход и интеграция',
      description: 'Постепенный выход к свету через приглушённое освещение. Шеринг опыта с группой и наставником.'
    }
  ];

  const features = [
    {
      icon: 'Mountain',
      title: 'Подземное пространство',
      description: 'Специально оборудованное подземелье с идеальной звукоизоляцией и полным отсутствием света'
    },
    {
      icon: 'Wind',
      title: 'Вентиляция',
      description: 'Современная система вытяжки обеспечивает постоянный приток свежего воздуха без проникновения света'
    },
    {
      icon: 'Droplets',
      title: 'Санузел в темноте',
      description: 'Душ и туалет оборудованы специально для использования в полной темноте с тактильными маркерами'
    },
    {
      icon: 'Bed',
      title: 'Безопасное пространство',
      description: 'Комната адаптирована для передвижения вслепую, без острых углов, с мягкими поверхностями'
    },
    {
      icon: 'Bell',
      title: 'Связь с наставником',
      description: 'Кнопка вызова для экстренной связи с дежурным наставником в любое время'
    },
    {
      icon: 'Utensils',
      title: 'Питание в темноте',
      description: 'Трёхразовое веганское питание подаётся через световой шлюз, простая еда для лёгкого употребления вслепую'
    }
  ];

  const benefits = [
    'Активация шишковидной железы и выработка естественного мелатонина',
    'Глубокая перезагрузка нервной системы и снятие стресса',
    'Развитие внутреннего видения и интуиции',
    'Освобождение от визуальных стимулов и информационной перегрузки',
    'Трансформация страхов и работа с подсознанием',
    'Усиление остальных органов чувств'
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/1893dee9-ffab-495f-b0d1-e61817e0272c.jpg" 
                alt="Большая Земля" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-serif font-semibold text-primary">Большая Земля</span>
            </div>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Icon name="Moon" className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Ретрит в темноте
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Погружение в абсолютную темноту для пробуждения внутреннего света
          </p>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" className="h-5 w-5" />
              <span>7 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" className="h-5 w-5" />
              <span>До 6 участников</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">Что это такое?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <p>
                Ретрит в темноте — это древняя практика самопознания, когда человек добровольно 
                отключает зрение на несколько дней, погружаясь в полную темноту. Это не просто 
                отсутствие света — это путешествие внутрь себя, где визуальные стимулы больше 
                не отвлекают от внутренних процессов.
              </p>
              <p>
                Вы проведёте 7 дней в специально оборудованном подземном пространстве, где 
                отсутствует даже малейший проблеск света. Ваше чувство зрения полностью 
                отключится, а остальные органы чувств станут значительно острее.
              </p>
              <p className="font-semibold text-foreground">
                Это опыт абсолютной темноты — не сумерек, не полумрака, а именно полного 
                отсутствия света. Вы не увидите даже собственную руку перед лицом.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-12">
            Пространство подземелья
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={feature.icon as any} className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mb-16 bg-muted/30">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">Безопасность превыше всего</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Подземное пространство спроектировано с учётом всех норм безопасности:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Экстренная кнопка связи с наставником в любой момент</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Мягкие стены и отсутствие острых углов для безопасного передвижения</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Постоянная циркуляция свежего воздуха через бесшумную вытяжку</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Тактильные маркеры для навигации в пространстве</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Возможность экстренного выхода с постепенной адаптацией к свету</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-12">
            Программа ретрита
          </h2>

          <div className="space-y-6 mb-16">
            {schedule.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-serif">{item.day}</CardTitle>
                      <CardDescription className="text-base font-semibold">
                        {item.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">Что происходит в темноте?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Без визуальных стимулов ваш мозг начинает работать совершенно иначе. 
                В первые дни вы можете видеть цветные пятна, вспышки света — это нормальная 
                реакция зрительной коры, которая пытается «увидеть» что-то в темноте.
              </p>
              <p>
                Через 3-4 дня активируется шишковидная железа, начинает вырабатываться 
                естественный мелатонин, который помогает глубокому расслаблению и открывает 
                доступ к изменённым состояниям сознания.
              </p>
              <p>
                Обостряются слух, обоняние, осязание. Вы начинаете чувствовать пространство 
                по-новому. Многие участники описывают опыт «внутреннего видения» — способность 
                воспринимать реальность без участия глаз.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-12">
            Польза практики
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">Кому подходит?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Этот ретрит для тех, кто:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Готов к глубокой трансформации и встрече с собой</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Имеет опыт медитации или других духовных практик</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Не боится замкнутых пространств и темноты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Находится в стабильном психическом состоянии</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-destructive">Противопоказания</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Ретрит НЕ рекомендуется при:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Психических заболеваниях (депрессия, тревожные расстройства, психозы)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Клаустрофобии или боязни темноты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Беременности</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Серьёзных хронических заболеваниях без согласования с врачом</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/#contact')} className="text-lg">
              Забронировать ретрит
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Перед бронированием проводится обязательное интервью с наставником
            </p>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default DarkRetreat;
