import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ContentSectionsProps {
  scrollToSection: (sectionId: string) => void;
}

const ContentSections = ({ scrollToSection }: ContentSectionsProps) => {
  const navigate = useNavigate();

  const retreats = [
    {
      title: 'Трансформационный',
      duration: '1-14 дней',
      description: 'Глубокая практика медитации, йоги и самопознания. Работа с внутренними блоками и раскрытие потенциала.',
      features: ['Утренние медитации', 'Хатха-йога', 'Работа с ментором', 'Практики осознанности']
    },
    {
      title: 'Единение с природой',
      duration: '1-14 дней',
      description: 'Погружение в природные ритмы, лесные практики, общение с животными места.',
      features: ['Прогулки в лесу', 'Купание в озере', 'Наблюдение за звёздами', 'Практики заземления']
    },
    {
      title: 'Осознайся',
      duration: '1-14 дней',
      description: 'Углублённое изучение философии ненасилия, этичное питание, практики сострадания.',
      features: ['Изучение философии', 'Веганские кулинарные классы', 'Практики любящей доброты', 'Групповые медитации']
    },
    {
      title: 'Ретрит в темноте',
      duration: '1-14 дней',
      description: 'Уникальный опыт пребывания в полной темноте для глубокого самопознания и активации внутренних ресурсов.',
      features: ['Специально оборудованные тёмные комнаты', 'Медитации в темноте', 'Работа с внутренним видением', 'Сопровождение наставника']
    },
    {
      title: 'Ретрит тишины',
      duration: '1-14 дней',
      description: 'Практика благородного молчания. Глубокое погружение в себя через отказ от вербального общения.',
      features: ['Випассана медитация', 'Молчаливые прогулки', 'Ведение дневника', 'Невербальные практики']
    },
    {
      title: 'Банный ретрит',
      duration: '1-14 дней',
      description: 'Исцеление через древние банные традиции. Очищение тела, ума и духа с помощью пара и воды.',
      features: ['Аутентичная русская баня', 'Травяные запаривания', 'Контрастные процедуры', 'Массаж вениками']
    },
    {
      title: 'Массажный ретрит',
      duration: '1-14 дней',
      description: 'Программа глубокого телесного расслабления и исцеления через различные виды массажа.',
      features: ['Тайский массаж', 'Аюрведический массаж', 'Висцеральная терапия', 'Работа с фасциями']
    },
    {
      title: 'Гастрономический веган-ретрит',
      duration: '1-14 дней',
      description: 'Путешествие в мир растительной кухни. Кулинарные мастер-классы и философия осознанного питания.',
      features: ['Веганские мастер-классы', 'Дегустации авторских блюд', 'Ферментация и проращивание', 'Философия питания']
    },
    {
      title: 'Эстетик Дэнс ретрит',
      duration: '1-7 дней',
      description: 'Трансформация через свободное движение и танец. Освобождение тела от зажимов и блоков.',
      features: ['Танцевальные практики', 'Контактная импровизация', 'Работа с телом', 'Музыкальные медитации']
    },
    {
      title: 'Бизнес-ретрит',
      duration: '1-14 дней',
      description: 'Перезагрузка для предпринимателей и руководителей. Баланс между достижениями и внутренней гармонией.',
      features: ['Стратегические сессии', 'Медитации для фокуса', 'Нетворкинг с единомышленниками', 'Коучинг от экспертов']
    }
  ];

  const mentors = [
    {
      name: 'Анна Светлова',
      role: 'Основатель и духовный наставник',
      description: '15 лет практики медитации и йоги. Сертифицированный инструктор по хатха-йоге.',
      initials: 'АС'
    },
    {
      name: 'Михаил Древин',
      role: 'Практик лесной терапии',
      description: 'Эксперт по взаимодействию с природой, проводник по местам силы.',
      initials: 'МД'
    },
    {
      name: 'Елена Гармония',
      role: 'Преподаватель философии Ахимсы',
      description: 'Автор книг о ненасилии, вегетарианка с 20-летним стажем.',
      initials: 'ЕГ'
    }
  ];

  const testimonials = [
    {
      name: 'Ольга М.',
      text: 'Это был самый трансформирующий опыт в моей жизни. Я нашла ответы на вопросы, которые искала годами.',
      location: 'Москва'
    },
    {
      name: 'Дмитрий К.',
      text: 'Место невероятной силы. После недели здесь я чувствую себя обновлённым и наполненным энергией.',
      location: 'Санкт-Петербург'
    },
    {
      name: 'Мария С.',
      text: 'Благодарна за атмосферу принятия и любви. Наставники помогли мне раскрыться и исцелиться.',
      location: 'Казань'
    }
  ];

  const faqs = [
    {
      question: 'Какой уровень подготовки нужен для участия в ретрите?',
      answer: 'Никакой специальной подготовки не требуется. Мы принимаем как новичков, так и опытных практиков. Программы адаптируются под уровень каждого участника.'
    },
    {
      question: 'Какое питание предоставляется?',
      answer: 'Мы предлагаем исключительно веганское питание из экологически чистых продуктов. Все блюда готовятся с любовью и в соответствии с принципами Ахимсы.'
    },
    {
      question: 'Можно ли приехать на более короткий срок?',
      answer: 'Минимальная продолжительность пребывания — 3 дня. Мы рекомендуем как минимум 5 дней для полного погружения в практики.'
    },
    {
      question: 'Есть ли Wi-Fi на территории?',
      answer: 'Для глубокого погружения мы рекомендуем цифровой детокс. Wi-Fi доступен в административном здании для экстренных случаев.'
    },
    {
      question: 'Какие условия проживания?',
      answer: 'Мы предлагаем эко-домики в лесу на 1-2 человека с минималистичным, но комфортным оснащением. Есть общие санузлы с горячей водой.'
    }
  ];

  return (
    <>
      <section id="retreats" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Программы ретритов
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждая программа создана для глубокой трансформации и обретения внутренней силы
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {retreats.map((retreat, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow animate-fade-in cursor-pointer"
                onClick={() => {
                  if (retreat.title === 'Ретрит в темноте') {
                    navigate('/retreat/dark');
                  } else if (retreat.title === 'Ретрит тишины') {
                    navigate('/retreat/silence');
                  }
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-serif">{retreat.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{retreat.duration}</span>
                  </div>
                  <CardDescription className="text-base">{retreat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {retreat.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Leaf" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {(retreat.title === 'Ретрит в темноте' || retreat.title === 'Ретрит тишины') && (
                    <Button variant="outline" className="w-full mt-4">
                      Узнать подробнее
                      <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            15 гектаров заповедного леса в Карелии — место силы и природной красоты
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Trees" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Сосновый лес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Вековые сосны создают особую атмосферу и наполняют воздух целебными фитонцидами.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Waves" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Озеро</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Чистейшее лесное озеро с прозрачной водой — идеально для плавания и медитаций у воды.
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
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Проживание
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Комфортные эко-домики в гармонии с природой
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Эко-домики</CardTitle>
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
                    <span>Минималистичный дизайн</span>
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
                <CardTitle className="text-2xl font-serif">Удобства</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Общие санузлы с горячей водой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Аутентичная русская баня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Зал для практик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                    <span>Веганская столовая</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="mentors" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Наши наставники
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Опытные практики, которые будут сопровождать вас на пути трансформации
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {mentor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl font-serif">{mentor.name}</CardTitle>
                  <CardDescription className="text-base">{mentor.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{mentor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Отзывы гостей
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Истории трансформации тех, кто уже побывал у нас
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на самые популярные вопросы о ретритах
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

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
                      href="mailto:da@bolshaya-zemlya.ru"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      da@bolshaya-zemlya.ru
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Icon name="MapPin" className="h-5 w-5 text-primary" />
                      Местоположение
                    </h3>
                    <p className="text-muted-foreground">
                      Россия, Карелия<br />
                      Заповедная территория<br />
                      (точный адрес высылается при бронировании)
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                    <div className="space-y-3">
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
                      <Button className="w-full">
                        Отправить
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
