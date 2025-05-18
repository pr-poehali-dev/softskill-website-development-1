
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
