
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { AdvantageItem } from "@/types/types";

// Список преимуществ
const advantagesList: AdvantageItem[] = [
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
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950">Наши преимущества</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Почему тысячи студентов выбирают обучение в школе SoftSkill
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesList.map((item, index) => (
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
  );
};

export default AdvantagesSection;
