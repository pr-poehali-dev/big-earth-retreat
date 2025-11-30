import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const MentorsTestimonialsSection = () => {
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

  return (
    <>
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
    </>
  );
};

export default MentorsTestimonialsSection;
