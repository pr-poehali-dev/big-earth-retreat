import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

interface RetreatsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const RetreatsSection = ({ scrollToSection }: RetreatsSectionProps) => {
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
    </>
  );
};

export default RetreatsSection;
