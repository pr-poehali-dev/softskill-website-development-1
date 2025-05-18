
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { CourseItem } from "@/types/types";

// Список курсов
const coursesList: CourseItem[] = [
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
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-slate-100 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950">Популярные курсы</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Выберите направление, которое подходит именно вам
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesList.map((course, index) => (
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
  );
};

export default CoursesSection;
