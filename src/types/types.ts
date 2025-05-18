
// Типы для компонентов
export interface AdvantageItem {
  icon: string;
  title: string;
  description: string;
}

export interface CourseItem {
  title: string;
  level: string;
  duration: string;
  lessons: string;
  description: string;
}

export interface ReviewItem {
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}
