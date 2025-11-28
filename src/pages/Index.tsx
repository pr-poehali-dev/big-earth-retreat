import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const retreats = [
    {
      title: 'Трансформационный',
      duration: '7 дней',
      description: 'Глубокая практика медитации, йоги и самопознания. Работа с внутренними блоками и раскрытие потенциала.',
      features: ['Утренние медитации', 'Хатха-йога', 'Работа с ментором', 'Практики осознанности']
    },
    {
      title: 'Единение с природой',
      duration: '7 дней',
      description: 'Погружение в природные ритмы, лесные практики, общение с животными места.',
      features: ['Прогулки в лесу', 'Купание в озере', 'Наблюдение за звёздами', 'Практики заземления']
    },
    {
      title: 'Осознайся',
      duration: '7 дней',
      description: 'Углублённое изучение философии ненасилия, этичное питание, практики сострадания.',
      features: ['Изучение философии', 'Веганские кулинарные классы', 'Практики любящей доброты', 'Групповые медитации']
    },
    {
      title: 'Ретрит в темноте',
      duration: '7 дней',
      description: 'Уникальный опыт пребывания в полной темноте для глубокого самопознания и активации внутренних ресурсов.',
      features: ['Специально оборудованные тёмные комнаты', 'Медитации в темноте', 'Работа с внутренним видением', 'Сопровождение наставника']
    },
    {
      title: 'Ретрит тишины',
      duration: '7 дней',
      description: 'Практика благородного молчания. Глубокое погружение в себя через отказ от вербального общения.',
      features: ['Випассана медитация', 'Молчаливые прогулки', 'Ведение дневника', 'Невербальные практики']
    },
    {
      title: 'Банный ретрит',
      duration: '7 дней',
      description: 'Исцеление через древние банные традиции. Очищение тела, ума и духа с помощью пара и воды.',
      features: ['Аутентичная русская баня', 'Травяные запаривания', 'Контрастные процедуры', 'Массаж вениками']
    },
    {
      title: 'Массажный ретрит',
      duration: '7 дней',
      description: 'Программа глубокого телесного расслабления и исцеления через различные виды массажа.',
      features: ['Тайский массаж', 'Аюрведический массаж', 'Висцеральная терапия', 'Работа с фасциями']
    },
    {
      title: 'Гастрономический веган-ретрит',
      duration: '7 дней',
      description: 'Путешествие в мир растительной кухни. Кулинарные мастер-классы и философия осознанного питания.',
      features: ['Веганские мастер-классы', 'Дегустации авторских блюд', 'Ферментация и проращивание', 'Философия питания']
    },
    {
      title: 'Эстетик Дэнс ретрит',
      duration: '7 дней',
      description: 'Трансформация через свободное движение и танец. Освобождение тела от зажимов и блоков.',
      features: ['Танцевальные практики', 'Контактная импровизация', 'Работа с телом', 'Музыкальные медитации']
    },
    {
      title: 'Бизнес-ретрит',
      duration: '7 дней',
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
            Место силы для трансформации и единения с природой
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Уникальный ретритный центр, где практикуется философия Ахимсы. Здесь вы обретёте внутреннюю силу, 
            гармонию с собой и окружающим миром.
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
                  {retreat.title === 'Ретрит в темноте' && (
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
            Философия Ахимсы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Принцип ненасилия — основа нашей жизни
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
                  Каждое действие совершается с полным присутствием. 
                  Мы учим практикам медитации и осознанной жизни в моменте.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Users" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Единство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мы создаём сообщество единомышленников, где каждый чувствует себя частью большего целого.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="territory" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Территория и природа
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            12 гектаров заповедного леса, кристально чистое озеро, места силы древних практик
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="TreePine" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Заповедный лес</CardTitle>
                <CardDescription className="text-base">
                  Вековые сосны и ели, пронизанные энергией веков. 
                  Экологические тропы для медитативных прогулок.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Waves" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Озеро</CardTitle>
                <CardDescription className="text-base">
                  Чистейшая родниковая вода. Идеально для практик очищения и купаний на рассвете.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Moon" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Места силы</CardTitle>
                <CardDescription className="text-base">
                  Древние точки концентрации энергии, используемые для глубоких медитативных практик.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <Icon name="Bird" className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl font-serif">Природные обитатели</CardTitle>
                <CardDescription className="text-base">
                  Олени, лисы, множество птиц. Возможность наблюдения за дикой природой в её первозданном виде.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Размещение
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Комфортные эко-домики в гармонии с природой
          </p>
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl font-serif">Эко-домики</CardTitle>
              <CardDescription className="text-base">
                Построены из натуральных материалов с минимальным воздействием на окружающую среду
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Home" className="h-5 w-5 text-primary" />
                    Удобства
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Натуральное постельное бельё</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Эко-печь для обогрева</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Терраса с видом на лес</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Место для медитации</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Utensils" className="h-5 w-5 text-primary" />
                    Питание
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>3-разовое веганское питание</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Продукты с собственного огорода</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Травяные чаи из местных трав</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5" />
                      <span>Учёт индивидуальных предпочтений</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="mentors" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Наставники
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Опытные практики, которые проведут вас по пути трансформации
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="text-center animate-fade-in">
                <CardHeader className="items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground font-serif">
                      {mentor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl font-serif">{mentor.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {mentor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{mentor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Отзывы гостей
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Истории трансформации наших гостей
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
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

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на самые частые вопросы наших гостей
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-serif">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Бронирование и контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами для бронирования места на ретрите
          </p>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Icon name="Phone" className="h-5 w-5 text-primary" />
                      Телефон
                    </h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Icon name="Mail" className="h-5 w-5 text-primary" />
                      Email
                    </h3>
                    <p className="text-muted-foreground">info@bolshaya-zemlya.ru</p>
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

export default Index;