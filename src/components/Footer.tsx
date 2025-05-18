import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
              Школа программирования, где каждый может освоить современные
              IT-навыки под руководством опытных наставников.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Курсы
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Тарифы
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="hover:text-white transition-colors"
                >
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Курсы</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Python
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  JavaScript
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Java
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  C#
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  PHP
                </a>
              </li>
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
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
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
  );
};

export default Footer;
