
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
