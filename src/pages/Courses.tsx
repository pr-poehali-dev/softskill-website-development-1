
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        {/* Заголовок страницы */}
        <section className="bg-blue-950 text-white py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Наши курсы</h1>
            <p className="text-xl text-blue-100">
              Выберите подходящий курс и начните свой путь в программировании
            </p>
          </div>
        </section>

        {/* Фильтры курсов */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <TabsList className="h-auto p-1 bg-slate-100">
                  <TabsTrigger value="all">Все курсы</TabsTrigger>
                  <TabsTrigger value="beginners">Для начинающих</TabsTrigger>
                  <TabsTrigger value="intermediate">Средний уровень</TabsTrigger>
                  <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Сортировать:</span>
                  <select className="bg-white border rounded-md px-3 py-1.5 text-sm">
                    <option>По популярности</option>
                    <option>По дате</option>
                    <option>По длительности</option>
                    <option>По цене</option>
                  </select>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="beginners" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses
                    .filter(course => course.level === "Начинающий")
                    .map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="intermediate" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses
                    .filter(course => course.level === "Средний")
                    .map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses
                    .filter(course => course.level === "Продвинутый")
                    .map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Часто задаваемые вопросы</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Как проходит обучение?",
                  answer: "Обучение проходит в формате онлайн. Вы получаете доступ к видеоурокам, заданиям и дополнительным материалам. Преподаватели проводят вебинары и отвечают на вопросы в чате. Вы можете заниматься в удобное для вас время, но важно соблюдать график выполнения заданий."
                },
                {
                  question: "Нужны ли какие-то начальные знания?",
                  answer: "Для курсов уровня «Начинающий» предварительные знания не требуются. Для курсов уровня «Средний» и «Продвинутый» необходимы базовые знания программирования, которые указаны в описании каждого курса."
                },
                {
                  question: "Что будет после окончания курса?",
                  answer: "По окончании курса вы получите сертификат, проект в портфолио и помощь с трудоустройством. Наш карьерный центр поможет составить резюме, подготовиться к собеседованиям и найти первую работу в IT."
                },
                {
                  question: "Можно ли обучаться, если у меня плотный график?",
                  answer: "Да, наши курсы разработаны с учетом занятых людей. Вы можете изучать материалы в удобное время. Рекомендуется уделять обучению минимум 10 часов в неделю для достижения наилучших результатов."
                },
                {
                  question: "Как проходит оплата?",
                  answer: "Оплату можно произвести банковской картой, через электронные платежные системы или оформить рассрочку. Детали оплаты указаны на странице каждого курса."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-start">
                      <Icon name="HelpCircle" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-950 text-white px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Не нашли подходящий курс?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Напишите нам, и мы подберем курс, который подходит именно вам, или составим индивидуальную программу обучения
            </p>
            <Button size="lg" className="text-base bg-blue-600 hover:bg-blue-700">
              Получить консультацию
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Компонент карточки курса
const CourseCard = ({ course }) => (
  <Card className="overflow-hidden h-full flex flex-col">
    <div className={`bg-gradient-to-r ${course.color} p-4`}>
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
    <CardContent className="p-6 flex-1 flex flex-col">
      <p className="text-gray-600 mb-6 flex-1">{course.description}</p>
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <Icon name="BookOpen" className="h-4 w-4 mr-2" />
          {course.lessons}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Icon name="Clock" className="h-4 w-4 mr-2" />
          {course.timeRequired}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Icon name="UserCheck" className="h-4 w-4 mr-2" />
          {course.studentsCount}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">{course.price} ₽</span>
        <Button>Подробнее</Button>
      </div>
    </CardContent>
  </Card>
);

// Данные курсов
const courses = [
  {
    title: "Основы Python",
    level: "Начинающий",
    duration: "8 недель",
    lessons: "32 урока",
    timeRequired: "10 часов в неделю",
    studentsCount: "3540 студентов",
    price: "19 900",
    description: "Освойте основы одного из самых популярных языков программирования. Научитесь создавать простые программы и автоматизировать задачи.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "JavaScript для фронтенда",
    level: "Средний",
    duration: "10 недель",
    lessons: "40 уроков",
    timeRequired: "12 часов в неделю",
    studentsCount: "2185 студентов",
    price: "22 900",
    description: "Научитесь создавать современные интерактивные веб-приложения с помощью JavaScript, HTML и CSS.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Java Core",
    level: "Начинающий",
    duration: "12 недель",
    lessons: "48 уроков",
    timeRequired: "10 часов в неделю",
    studentsCount: "1890 студентов",
    price: "24 900",
    description: "Изучите основы Java и объектно-ориентированного программирования. Создавайте настольные приложения и освойте работу с базами данных.",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Fullstack-разработчик",
    level: "Продвинутый",
    duration: "24 недели",
    lessons: "96 уроков",
    timeRequired: "20 часов в неделю",
    studentsCount: "1250 студентов",
    price: "79 900",
    description: "Станьте универсальным разработчиком, способным создавать полноценные веб-приложения, включая фронтенд и бэкенд.",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Аналитика данных с Python",
    level: "Средний",
    duration: "14 недель",
    lessons: "56 уроков",
    timeRequired: "15 часов в неделю",
    studentsCount: "945 студентов",
    price: "34 900",
    description: "Научитесь анализировать данные с помощью Python и его библиотек: Pandas, NumPy, Matplotlib и других.",
    color: "from-green-600 to-teal-600"
  },
  {
    title: "Разработка мобильных приложений",
    level: "Продвинутый",
    duration: "16 недель",
    lessons: "64 урока",
    timeRequired: "18 часов в неделю",
    studentsCount: "780 студентов",
    price: "44 900",
    description: "Изучите разработку мобильных приложений для iOS и Android с использованием React Native.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "SQL и базы данных",
    level: "Начинающий",
    duration: "6 недель",
    lessons: "24 урока",
    timeRequired: "8 часов в неделю",
    studentsCount: "2720 студентов",
    price: "17 900",
    description: "Освойте основы работы с базами данных, изучите SQL и научитесь проектировать эффективные структуры данных.",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "DevOps для разработчиков",
    level: "Продвинутый",
    duration: "12 недель",
    lessons: "48 уроков",
    timeRequired: "15 часов в неделю",
    studentsCount: "650 студентов",
    price: "39 900",
    description: "Изучите инструменты и методологии DevOps для автоматизации процессов разработки, тестирования и развертывания.",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "React.js для frontend-разработчиков",
    level: "Средний",
    duration: "10 недель",
    lessons: "40 уроков",
    timeRequired: "12 часов в неделю",
    studentsCount: "1870 студентов",
    price: "27 900",
    description: "Изучите популярную библиотеку React.js и научитесь создавать динамические и интерактивные веб-приложения.",
    color: "from-indigo-500 to-purple-500"
  }
];

export default Courses;
