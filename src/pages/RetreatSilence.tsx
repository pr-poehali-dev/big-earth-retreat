import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const RetreatSilence = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">Большая Земля</h1>
          <Button variant="ghost" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
            Назад
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-4">Ретрит тишины</h1>
          <p className="text-xl text-muted-foreground">
            Практика благородного молчания для глубокой концентрации и эффективности
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Icon name="Target" className="h-6 w-6 text-primary" />
                Для кого этот ретрит
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Ретрит тишины — это мощный инструмент для предпринимателей, топ-менеджеров и руководителей, 
                которым необходимо принимать стратегические решения в условиях постоянного информационного 
                шума и высокой нагрузки.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Icon name="TrendingUp" className="h-6 w-6 text-primary" />
                Измеримые результаты для бизнеса
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Brain" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Улучшение когнитивных функций</h3>
                      <p className="text-sm text-muted-foreground">
                        Повышение способности к глубокой концентрации на 40-60%. Улучшение качества 
                        стратегического планирования и анализа сложных проблем.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Качество решений</h3>
                      <p className="text-sm text-muted-foreground">
                        Снижение импульсивных решений. Увеличение времени на обдумывание критических 
                        вопросов ведёт к более взвешенным стратегическим выборам.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Zap" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Энергия и продуктивность</h3>
                      <p className="text-sm text-muted-foreground">
                        Экономия до 30% когнитивных ресурсов за счёт отсутствия необходимости 
                        постоянно переключаться между задачами и общением.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="BarChart3" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Стрессоустойчивость</h3>
                      <p className="text-sm text-muted-foreground">
                        Снижение уровня кортизола (гормона стресса) на 25-30% уже после 3 дней практики. 
                        Это прямо влияет на качество управленческих решений под давлением.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Эмоциональный интеллект</h3>
                      <p className="text-sm text-muted-foreground">
                        Повышение способности понимать и регулировать свои эмоции, что критично 
                        для переговоров, управления командой и конфликтных ситуаций.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Focus" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Фокус на приоритетах</h3>
                      <p className="text-sm text-muted-foreground">
                        Отсутствие внешних коммуникаций позволяет переосмыслить цели и выделить 
                        действительно важные направления развития бизнеса.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Shield" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Профилактика выгорания</h3>
                      <p className="text-sm text-muted-foreground">
                        Глубокий ментальный отдых предотвращает эмоциональное выгорание и позволяет 
                        вернуться к работе с обновлённой энергией и мотивацией.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Eye" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Системное мышление</h3>
                      <p className="text-sm text-muted-foreground">
                        Время для обработки накопленной информации и формирования целостного 
                        видения бизнес-процессов и рынка.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Icon name="Clock" className="h-6 w-6 text-primary" />
                Гибкий формат: от 1 до 14 дней
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">1-3 дня</h3>
                  <p className="text-sm text-muted-foreground">
                    Быстрая перезагрузка для принятия конкретного решения или выхода из стрессовой ситуации
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">5-7 дней</h3>
                  <p className="text-sm text-muted-foreground">
                    Оптимальный срок для глубокой работы над стратегией и восстановления ментальных ресурсов
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">10-14 дней</h3>
                  <p className="text-sm text-muted-foreground">
                    Трансформационный опыт для кардинальных изменений в подходе к управлению и жизни
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Icon name="Calendar" className="h-6 w-6 text-primary" />
                Что включено
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Випассана медитация — практика наблюдения за собственным умом и телом</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Молчаливые прогулки на природе для очищения сознания</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ведение дневника — структурирование мыслей и инсайтов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Невербальные практики для развития других каналов восприятия</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Этичное веганское питание для ясности ума</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Индивидуальные консультации с наставником (в письменном формате)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Icon name="Award" className="h-6 w-6 text-primary" />
                Научное обоснование
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                Исследования нейробиологов подтверждают: длительное молчание активирует дефолт-систему мозга, 
                отвечающую за креативность и долгосрочное планирование. Это состояние недоступно при постоянном 
                вербальном взаимодействии.
              </p>
              <p>
                Практика тишины снижает активность миндалевидного тела (центра страха и тревоги) 
                и усиливает связи в префронтальной коре, отвечающей за принятие решений и самоконтроль.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Icon name="Quote" className="h-6 w-6 text-primary" />
                ROI ретрита тишины
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                <strong>7 дней тишины = 3-6 месяцев повышенной эффективности.</strong>
              </p>
              <p>
                Участники отмечают улучшение качества управленческих решений, снижение конфликтов 
                в команде благодаря повышенной эмпатии, и увеличение способности работать 
                с долгосрочными целями без отвлечений на текучку.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                <Icon name="AlertCircle" className="h-6 w-6 text-primary" />
                Важные условия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Полный отказ от гаджетов и цифровых устройств на весь период</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Отсутствие вербальной коммуникации (включая переписку)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Возможность экстренной связи через координатора центра</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Безопасная и комфортная среда для практики</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button size="lg" className="flex-1" onClick={() => navigate('/')}>
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Забронировать даты
            </Button>
            <Button size="lg" variant="outline" className="flex-1" onClick={() => navigate('/')}>
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatSilence;
