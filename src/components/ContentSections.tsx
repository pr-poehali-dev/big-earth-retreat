import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

interface ContentSectionsProps {
  scrollToSection: (sectionId: string) => void;
}

const ContentSections = ({ scrollToSection }: ContentSectionsProps) => {
  const navigate = useNavigate();
  const [selectedRetreats, setSelectedRetreats] = useState<string[]>([]);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [preferredContact, setPreferredContact] = useState('telegram');

  const retreats = [
    {
      title: 'Ретрит в темноте',
      duration: '1-14 дней',
      description: 'Уникальный опыт пребывания в полной темноте для глубокого самопознания и активации внутренних ресурсов.',
      features: ['Специально оборудованные тёмные комнаты', 'Медитации в темноте', 'Работа с внутренним видением', 'Сопровождение наставника'],
      hasDetails: true,
      route: '/retreat/dark'
    },
    {
      title: 'Банный ретрит',
      duration: '1-14 дней',
      description: 'Исцеление через древние банные традиции. Нежная баня с духом няни, где не страдают, а наслаждаются.',
      features: ['Ароматная нежная баня', 'Сибирский банный чан с травами', 'Травяные запаривания', 'Массаж вениками'],
      hasDetails: true,
      route: '/retreat/banya'
    },
    {
      title: 'Ретрит тишины',
      duration: '1-14 дней',
      description: 'Практика благородного молчания. Глубокое погружение в себя через отказ от вербального общения.',
      features: ['Випассана медитация', 'Молчаливые прогулки', 'Ведение дневника', 'Невербальные практики'],
      hasDetails: true,
      route: '/retreat/silence'
    },
    {
      title: 'Массажный ретрит',
      duration: '1-14 дней',
      description: 'Программа глубокого телесного расслабления и исцеления через различные виды массажа.',
      features: ['Тайский массаж', 'Аюрведический массаж', 'Висцеральная терапия', 'Глубокая работа с телом'],
      hasDetails: true,
      route: '/retreat/massage'
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
    },
    {
      title: 'Ретрит Ахимса',
      duration: '1-14 дней',
      description: 'Углублённое изучение философии ненасилия, этичное питание, практики сострадания ко всем живым существам.',
      features: ['Изучение философии Ахимсы', 'Веганские кулинарные классы', 'Практики любящей доброты', 'Групповые медитации']
    },
    {
      title: 'Единение с природой',
      duration: '1-14 дней',
      description: 'Погружение в природные ритмы, лесные практики, общение с животными места.',
      features: ['Прогулки в лесу', 'Купание в озере', 'Наблюдение за звёздами', 'Практики заземления']
    },
    {
      title: 'Трансформационный ретрит',
      duration: '1-14 дней',
      description: 'Глубокая практика медитации, йоги и самопознания. Работа с внутренними блоками и раскрытие потенциала.',
      features: ['Утренние медитации', 'Хатха-йога', 'Работа с ментором', 'Практики осознанности']
    },
    {
      title: 'Керамический ретрит',
      duration: '1-14 дней',
      description: 'Творческое погружение в мир керамики. Лепка из глины, работа на гончарном круге, создание уникальных изделий.',
      features: ['Работа на гончарном круге', 'Лепка из глины', 'Роспись керамики', 'Медитативное творчество']
    },
    {
      title: 'Кото-терапия ретрит',
      duration: '1-14 дней',
      description: 'Уникальный опыт общения с 14 тактильными кошками разного возраста. Телесная терапия через прикосновения.',
      features: ['Общение с 14 кошками', 'Разные породы и характеры', 'Тактильная терапия', 'Пушистая релаксация']
    },
    {
      title: 'Шаманский сбор',
      duration: '1-14 дней',
      description: 'Древняя практика собирательства. Изучение целебных трав, грибов и мухоморов в их естественной среде.',
      features: ['Сбор целебных трав', 'Изучение грибов', 'Работа с мухоморами', 'Шаманские практики']
    }
  ];

  const mentors = [
    {
      name: 'Иван Ленков',
      role: 'Основатель и духовный наставник',
      description: 'Более 7 лет в глубоких практиках медитации и трансформации сознания.',
      initials: 'ИЛ'
    },
    {
      name: 'Виктория Тен',
      role: 'Мастер стиля и вкуса',
      description: 'Коуч-наставник, коллекционер винтажных кимоно, мастер керамики.',
      initials: 'ВТ'
    },
    {
      name: 'Александр Печных',
      role: 'Банщик и массажист',
      description: 'Хранитель древних банных традиций, мастер нежной бани.',
      initials: 'АП'
    },
    {
      name: 'Анетта Олимпиева',
      role: 'Практик тета-хилинг',
      description: 'Нейрографика, лила, ретритные перезагрузки, диагностика предназначений, магазин украшений и предметов силы.',
      initials: 'АО'
    },
    {
      name: 'Денис Назаренко',
      role: 'Мастер кундалини',
      description: 'Человек, который меняет мир. Мастер кундалини и шаманских практик.',
      initials: 'ДН'
    },
    {
      name: 'Анна Мягкова',
      role: 'Массажный терапевт',
      description: 'Специалист по массажу тела и ног древних техник.',
      initials: 'АМ'
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
      location: 'Реутов'
    },
    {
      name: 'Мария С.',
      text: 'Благодарна за атмосферу принятия и любви. Наставники помогли мне раскрыться и исцелиться.',
      location: 'Красногорск'
    },
    {
      name: 'Алексей П.',
      text: 'Кошки здесь — это что-то особенное! Никогда не думал, что общение с животными может так глубоко исцелять.',
      location: 'Москва'
    },
    {
      name: 'Екатерина В.',
      text: 'Баня просто волшебная! Впервые попробовала нежную баню — это совершенно другой уровень расслабления.',
      location: 'Москва'
    },
    {
      name: 'Светлана Н.',
      text: 'Керамическая мастерская стала для меня открытием. Работа с глиной — это медитация и творчество одновременно.',
      location: 'Реутов'
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
      question: 'Разрешены ли алкоголь и сигареты на территории?',
      answer: 'Нет, наше пространство полностью свободно от алкоголя и сигарет. Это важная часть нашей философии создания чистого пространства для трансформации.'
    },
    {
      question: 'Есть ли Wi-Fi на территории?',
      answer: 'Для глубокого погружения мы рекомендуем цифровой детокс. Wi-Fi доступен в административном здании для экстренных случаев.'
    },
    {
      question: 'Какие условия проживания?',
      answer: 'Мы предлагаем разнообразные варианты: эко-домики в лесу, подземные жилища (землянки), safari tent глемпинг и зону кемпинга для палаток.'
    }
  ];

  const handleRetreatToggle = (retreat: string) => {
    setSelectedRetreats(prev =>
      prev.includes(retreat)
        ? prev.filter(r => r !== retreat)
        : [...prev, retreat]
    );
  };

  const handleSubmitRetreats = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
Новая заявка на ретриты:

Имя: ${contactName}
Телефон: ${contactPhone}
Предпочтительный способ связи: ${preferredContact === 'telegram' ? 'Telegram' : preferredContact === 'whatsapp' ? 'WhatsApp' : 'VK'}

Интересующие ретриты:
${selectedRetreats.join(', ')}
    `.trim();

    console.log('Отправка заявки:', message);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    
    setContactName('');
    setContactPhone('');
    setSelectedRetreats([]);
    setPreferredContact('telegram');
  };

  return (
    <>
      <section id="info" className="py-12 px-4 bg-amber-50 border-y-2 border-amber-200">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Cigarette" className="h-6 w-6 text-red-600" />
            <Icon name="Wine" className="h-6 w-6 text-red-600" />
          </div>
          <p className="text-lg font-semibold text-amber-900">
            🌿 Пространство свободно от алкоголя и сигарет 🌿
          </p>
          <p className="text-sm text-amber-700 mt-2">
            Мы создаём чистую среду для вашей трансформации и здоровья
          </p>
        </div>
      </section>

      <section id="retreats" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-serif font-bold text-center text-primary mb-4">
            Программы ретритов
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
            Каждая программа создана для глубокой трансформации и обретения внутренней силы
          </p>
          <p className="text-center text-primary font-semibold mb-12">
            ✨ Все ретриты можно комбинировать и составить индивидуальную программу
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {retreats.map((retreat, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow animate-fade-in"
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
                  {retreat.hasDetails && (
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => navigate(retreat.route!)}
                    >
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

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-serif text-primary mb-3">
                Подберём программу для вас
              </CardTitle>
              <CardDescription className="text-lg">
                Выберите интересующие ретриты, и мы свяжемся с вами для составления индивидуальной программы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitRetreats} className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {retreats.map((retreat, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`retreat-${index}`}
                        checked={selectedRetreats.includes(retreat.title)}
                        onCheckedChange={() => handleRetreatToggle(retreat.title)}
                      />
                      <Label
                        htmlFor={`retreat-${index}`}
                        className="text-sm cursor-pointer"
                      >
                        {retreat.title}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                      placeholder="+7 900 123-45-67"
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block">Как с вами связаться?</Label>
                    <RadioGroup value={preferredContact} onValueChange={setPreferredContact}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="telegram" id="telegram" />
                        <Label htmlFor="telegram" className="cursor-pointer">Telegram</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp" />
                        <Label htmlFor="whatsapp" className="cursor-pointer">WhatsApp</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vk" id="vk" />
                        <Label htmlFor="vk" className="cursor-pointer">VK</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
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
    </>
  );
};

export default ContentSections;
