import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
          <a href="/" className="text-blue-900 font-semibold">
            Главная
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            О нас
          </a>
          <a
            href="/courses"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Курсы
          </a>
          <a
            href="/pricing"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Тарифы
          </a>
          <a
            href="/reviews"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Отзывы
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Войти
          </Button>
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
            <a href="/" className="text-blue-900 font-semibold">
              Главная
            </a>
            <a href="/about" className="text-gray-600">
              О нас
            </a>
            <a href="/courses" className="text-gray-600">
              Курсы
            </a>
            <a href="/pricing" className="text-gray-600">
              Тарифы
            </a>
            <a href="/reviews" className="text-gray-600">
              Отзывы
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" size="sm" className="w-full">
                Войти
              </Button>
              <Button size="sm" className="w-full">
                Записаться
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
