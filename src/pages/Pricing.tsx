
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        {/* Заголовок страницы */}
        <section className="bg-blue-950 text-white py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Тарифы обучения</h1>
            <p className="text-xl text-blue-100">
              Выберите оптимальный тариф, который подходит именно вам
            </p>
          </div>
        </section>

        {/* Тарифы */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Базовый тариф */}
              <Card className="relative overflow-hidden border-2 border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold">Базовый</CardTitle>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-blue-600">₽5,900</span>
                    <span className="text-sm text-gray-500 mb-1">/месяц</span>
                  </div>
                  <p className="text-gray-600 font-normal mt-1">
                    Оптимальный старт для новичков в программировании
                  </p>
                </CardHeader>
                <CardContent className="py-4">
                  <ul className="space-y-3">
                    {[
                      "Доступ к видеоурокам",
                      "Конспекты и учебные материалы",
                      "Базовые практические задания",
                      "Домашние задания",
                      "Доступ к общему чату студентов"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">Выбрать тариф</Button>
                </CardFooter>
              </Card>

              {/* Продвинутый тариф */}
              <Card className="relative overflow-hidden border-2 border-blue-600 shadow-lg">
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-bl-lg rounded-tr-lg rounded-br-none rounded-tl-none px-3 py-1.5 bg-blue-600">
                    Популярный
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold">Продвинутый</CardTitle>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-blue-600">₽9,900</span>
                    <span className="text-sm text-gray-500 mb-1">/месяц</span>
                  </div>
                  <p className="text-gray-600 font-normal mt-1">
                    Лучший выбор для серьезного обучения
                  </p>
                </CardHeader>
                <CardContent className="py-4">
                  <ul className="space-y-3">
                    {[
                      "Всё, что включено в тариф Базовый",
                      "Проверка домашних заданий с обратной связью",
                      "Ежемесячные вебинары с преподавателями",
                      "Дополнительные практические задания",
                      "Доступ к библиотеке готовых проектов",
                      "Сертификат об окончании курса"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">Выбрать тариф</Button>
                </CardFooter>
              </Card>

              {/* Премиум тариф */}
              <Card className="relative overflow-hidden border-2 border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold">Премиум</CardTitle>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-blue-600">₽15,900</span>
                    <span className="text-sm text-gray-500 mb-1">/месяц</span>
                  </div>
                  <p className="text-gray-600 font-normal mt-1">
                    Полное сопровождение до трудоустройства
                  </p>
                </CardHeader>
                <CardContent className="py-4">
                  <ul className="space-y-3">
                    {[
                      "Всё, что включено в тариф Продвинутый",
                      "Индивидуальное менторство",
                      "Еженедельные личные созвоны с преподавателем",
                      "Помощь в составлении портфолио",
                      "Подготовка к собеседованиям",
                      "Гарантированная стажировка в компании-партнере",
                      "Карьерное сопровождение после окончания курса"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">Выбрать тариф</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Таблица сравнения тарифов */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Сравнение тарифов</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border p-3 text-left">Возможности</th>
                    <th className="border p-3 text-center">Базовый</th>
                    <th className="border p-3 text-center bg-blue-50">Продвинутый</th>
                    <th className="border p-3 text-center">Премиум</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Доступ к видеоурокам", basic: true, advanced: true, premium: true },
                    { feature: "Конспекты и учебные материалы", basic: true, advanced: true, premium: true },
                    { feature: "Базовые практические задания", basic: true, advanced: true, premium: true },
                    { feature: "Домашние задания", basic: true, advanced: true, premium: true },
                    { feature: "Доступ к общему чату студентов", basic: true, advanced: true, premium: true },
                    { feature: "Проверка домашних заданий с обратной связью", basic: false, advanced: true, premium: true },
                    { feature: "Ежемесячные вебинары с преподавателями", basic: false, advanced: true, premium: true },
                    { feature: "Дополнительные практические задания", basic: false, advanced: true, premium: true },
                    { feature: "Доступ к библиотеке готовых проектов", basic: false, advanced: true, premium: true },
                    { feature: "Сертификат об окончании курса", basic: false, advanced: true, premium: true },
                    { feature: "Индивидуальное менторство", basic: false, advanced: false, premium: true },
                    { feature: "Еженедельные личные созвоны с преподавателем", basic: false, advanced: false, premium: true },
                    { feature: "Помощь в составлении портфолио", basic: false, advanced: false, premium: true },
                    { feature: "Подготовка к собеседованиям", basic: false, advanced: false, premium: true },
                    { feature: "Гарантированная стажировка в компании-партнере", basic: false, advanced: false, premium: true },
                    { feature: "Карьерное сопровождение после окончания курса", basic: false, advanced: false, premium: true }
                  ].map((row, index) => (
                    <tr key={index} className="border hover:bg-slate-50">
                      <td className="border p-3">{row.feature}</td>
                      <td className="border p-3 text-center">
                        {row.basic ? <Icon name="Check" className="h-5 w-5 text-green-500 mx-auto" /> : "-"}
                      </td>
                      <td className="border p-3 text-center bg-blue-50">
                        {row.advanced ? <Icon name="Check" className="h-5 w-5 text-green-500 mx-auto" /> : "-"}
                      </td>
                      <td className="border p-3 text-center">
                        {row.premium ? <Icon name="Check" className="h-5 w-5 text-green-500 mx-auto" /> : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-6 bg-slate-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Можно ли перейти с одного тарифа на другой?",
                  answer: "Да, вы можете изменить тариф в любое время. При переходе на более высокий тариф вы доплачиваете разницу, а при переходе на более низкий — новые условия начинают действовать со следующего платежного периода."
                },
                {
                  question: "Есть ли возможность вернуть деньги, если курс мне не подойдет?",
                  answer: "Да, мы предоставляем гарантию возврата в течение первых 14 дней обучения. Если вы решите, что наши курсы вам не подходят, мы вернем полную стоимость."
                },
                {
                  question: "Как происходит оплата?",
                  answer: "Оплата происходит ежемесячно согласно выбранному тарифу. Мы принимаем оплату банковскими картами, электронными деньгами и через банковский перевод. Также доступна рассрочка на 6 или 12 месяцев."
                },
                {
                  question: "Что происходит после окончания курса?",
                  answer: "После окончания курса вы сохраняете доступ ко всем материалам в течение 12 месяцев. Выпускники тарифа 'Премиум' получают дополнительное карьерное сопровождение и помощь в трудоустройстве."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-950 text-white px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы начать обучение?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Выберите подходящий тариф и начните свой путь к профессии программиста уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base bg-blue-600 hover:bg-blue-700">
                Записаться на курс
              </Button>
              <Button size="lg" variant="outline" className="text-base text-white border-white hover:bg-white/10">
                Получить консультацию
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
