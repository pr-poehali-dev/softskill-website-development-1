
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { ReviewItem } from "@/types/types";

// Список отзывов
const reviewsList: ReviewItem[] = [
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
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950">Отзывы студентов</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Что говорят наши выпускники о процессе обучения
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map((review, index) => (
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
  );
};

export default TestimonialsSection;
