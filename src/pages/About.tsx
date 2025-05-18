
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        {/* Заголовок страницы */}
        <section className="bg-blue-950 text-white py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">О нашей школе</h1>
            <p className="text-xl text-blue-100">
              Знакомьтесь с командой SoftSkill — опытными профессионалами, которые помогут вам стать программистом
            </p>
          </div>
        </section>

        {/* О школе */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Наша миссия</h2>
                <p className="text-gray-600 mb-4">
                  SoftSkill — это образовательная платформа, основанная в 2020 году группой разработчиков, которые стремились сделать IT-образование доступным и эффективным для каждого.
                </p>
                <p className="text-gray-600 mb-4">
                  Наша миссия — помогать людям осваивать востребованные навыки программирования и уверенно начинать карьеру в IT-индустрии, независимо от их предыдущего опыта.
                </p>
                <p className="text-gray-600">
                  Мы верим, что правильный подход к обучению, сочетающий теорию с практикой и персональную поддержку, может раскрыть потенциал каждого ученика.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Команда SoftSkill" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Users",
                  title: "Сообщество",
                  description: "Мы создаем дружное сообщество, где студенты и преподаватели могут обмениваться знаниями и опытом"
                },
                {
                  icon: "Trophy",
                  title: "Качество",
                  description: "Мы постоянно совершенствуем наши методики и программы обучения, чтобы обеспечить максимальный результат"
                },
                {
                  icon: "HeartHandshake",
                  title: "Поддержка",
                  description: "Мы сопровождаем наших студентов на всех этапах обучения и помогаем с трудоустройством"
                }
              ].map((value, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 text-blue-700 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      <Icon name={value.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Наши достижения */}
        <section className="py-16 px-4 md:px-6 bg-slate-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12">Наши достижения</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "5000+", label: "Выпускников" },
                { number: "96%", label: "Трудоустройства" },
                { number: "50+", label: "Курсов" },
                { number: "30+", label: "Экспертов" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Наша команда</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Алексей Иванов",
                  role: "Основатель, Python-эксперт",
                  image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                  fallback: "АИ"
                },
                {
                  name: "Мария Петрова",
                  role: "Руководитель обучения, Frontend-эксперт",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                  fallback: "МП"
                },
                {
                  name: "Дмитрий Сидоров",
                  role: "Технический директор, Java-эксперт",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                  fallback: "ДС"
                },
                {
                  name: "Елена Смирнова",
                  role: "Руководитель карьерного центра",
                  image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                  fallback: "ЕС"
                },
                {
                  name: "Андрей Козлов",
                  role: "Преподаватель, Backend-эксперт",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                  fallback: "АК"
                },
                {
                  name: "Ольга Новикова",
                  role: "Преподаватель, UX/UI эксперт",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
                  fallback: "ОН"
                }
              ].map((member, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden">
                  <div className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                        {member.fallback}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <div className="flex justify-center gap-4">
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        <Icon name="Linkedin" className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        <Icon name="Github" className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        <Icon name="Mail" className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-950 text-white px-4 md:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Присоединяйтесь к нашему сообществу</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Начните свой путь в программировании с командой опытных профессионалов, которые помогут вам на каждом этапе
            </p>
            <Button size="lg" className="text-base bg-blue-600 hover:bg-blue-700">
              Начать обучение
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
