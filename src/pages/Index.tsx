
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Навигация */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="rounded-full bg-blue-600 p-1">
                <Icon name="Code" className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900">SoftSkill</span>
            </a>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="/" className="text-blue-900 font-semibold">Главная</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
            <a href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Курсы</a>
            <a href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Тарифы</a>
            <a href="/reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">Войти</Button>
            <Button size="sm">Записаться</Button>
          </div>

          {/* Мобильное меню */}
          <button 
            className="md:hidden flex items-center justify-center rounded-md p-2"
            onClick={toggleMenu}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>

        {/* Мобильное меню выпадающее */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 px-4 bg-white">
            <nav className="flex flex-col gap-4">
              <a href="/" className="text-blue-900 font-semibold">Главная</a>
              <a href="/about" className="text-gray-600">О нас</a>
              <a href="/courses" className="text-gray-600">Курсы</a>
              <a href="/pricing" className="text-gray-600">Тарифы</a>
              <a href="/reviews" className="text-gray-600">Отзывы</a>
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" size="sm" className="w-full">Войти</Button>
                <Button size="sm" className="w-full">Записаться</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero секция */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-blue-950 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3B82F6_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#2563EB_0%,transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <Badge className="mb-2 text-xs bg-blue-500 hover:bg-blue-600">Новые наборы</Badge>
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Школа программирования SoftSkill
                  </h1>
                  <p className="text-xl text-blue-100 mb-6">
                    Освойте востребованные навыки программирования вместе с профессионалами отрасли и начните карьеру в IT.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base bg-blue-600 hover:bg-blue-700">
                    Записаться на курс
                  </Button>
                  <Button size="lg" variant="outline" className="text-base text-white border-white hover:bg-white/10">
                    Узнать больше
                  </Button>
                </div>
              </div>
              <div className="lg:flex items-center justify-end hidden">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                          <Icon name="Code" className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Основы Python</h3>
                          <p className="text-sm text-blue-100">Популярный курс</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Прогресс обучения</span>
                          <span>42%</span>
                        </div>
                        <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Урок 3 пройден!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-950">Наши преимущества</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Почему тысячи студентов выбирают обучение в школе SoftSkill
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "Code",
                  title: "Практика с первого урока",
                  description: "Закрепляйте знания, выполняя практические задания под руководством экспертов"
                },
                {
                  icon: "GraduationCap",
                  title: "Опытные преподаватели",
                  description: "Наши преподаватели — профессионалы с многолетним опытом в ведущих IT-компаниях"
                },
                {
                  icon: "Clock",
                  title: "Гибкий график",
                  description: "Учитесь в удобное время. Доступ к материалам курса предоставляется круглосуточно"
                },
                {
                  icon: "FolderKanban",
                  title: "Современные методики",
                  description: "Программы курсов постоянно обновляются в соответствии с требованиями рынка"
                },
                {
                  icon: "Users",
                  title: "Сообщество студентов",
                  description: "Общайтесь с единомышленниками, обменивайтесь опытом и находите команду"
                },
                {
                  icon: "Briefcase",
                  title: "Помощь с трудоустройством",
                  description: "Помогаем составить резюме и подготовиться к собеседованиям в IT-компаниях"
                }
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Популярные курсы */}
        <section className="py-16 bg-slate-100 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-950">Популярные курсы</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Выберите направление, которое подходит именно вам
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Основы Python",
                  level: "Начинающий",
                  duration: "8 недель",
                  lessons: "32 урока",
                  description: "Освойте основы одного из самых популярных языков программирования"
                },
                {
                  title: "JavaScript для фронтенда",
                  level: "Средний",
                  duration: "10 недель",
                  lessons: "40 уроков",
                  description: "Научитесь создавать современные интерактивные веб-приложения"
                },
                {
                  title: "Java Core",
                  level: "Начинающий",
                  duration: "12 недель",
                  lessons: "48 уроков",
                  description: "Изучите основы Java и объектно-ориентированного программирования"
                }
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        {course.level}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                        {course.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Icon name="BookOpen" className="h-4 w-4 mr-2" />
                      {course.lessons}
                    </div>
                    <Button className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" size="lg" className="gap-2">
                Смотреть все курсы
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-950">Отзывы студентов</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Что говорят наши выпускники о процессе обучения
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Алексей Смирнов",
                  role: "Frontend-разработчик",
                  comment: "Благодаря курсу JavaScript я смог найти работу в крупной IT-компании всего через два месяца после окончания обучения. Очень практичный подход!",
                  avatar: "A",
                  rating: 5
                },
                {
                  name: "Мария Иванова",
                  role: "Python-разработчик",
                  comment: "Отличная программа для начинающих! Понятные объяснения, много практики и поддержка от преподавателей помогли мне быстро освоить основы Python.",
                  avatar: "М",
                  rating: 5
                },
                {
                  name: "Дмитрий Козлов",
                  role: "Java-разработчик",
                  comment: "Структурированный материал и постоянная обратная связь от наставника. Рекомендую всем, кто хочет глубоко изучить Java.",
                  avatar: "Д",
                  rating: 4
                }
              ].map((review, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-1">
                      {Array(review.rating).fill(0).map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 my-4 flex-grow">{review.comment}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-700">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-950 text-white px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Готовы начать свой путь в программировании?</h2>
              <p className="text-blue-100 mb-8">
                Присоединяйтесь к нашему сообществу и получите все необходимые навыки для успешной карьеры в IT
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
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-slate-900 text-white py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-blue-600 p-1">
                  <Icon name="Code" className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">SoftSkill</span>
              </div>
              <p className="text-slate-400 text-sm">
                Школа программирования, где каждый может освоить современные IT-навыки под руководством опытных наставников.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="/courses" className="hover:text-white transition-colors">Курсы</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="/reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Курсы</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JavaScript</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Java</a></li>
                <li><a href="#" className="hover:text-white transition-colors">C#</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PHP</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@softskill.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>Москва, ул. Программистов, 42</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Twitter" className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Youtube" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 SoftSkill. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
