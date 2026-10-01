"use client";

import { useState, useEffect } from "react";
import Navitem, { NavItemProps } from "./navItem";

const menuItem: NavItemProps[] = [
  { id: 1, title: "Home 🏠", url: "/" },
  { id: 2, title: "Products 🛍️", url: "/products" },
  { id: 3, title: "Services 🛠️", url: "/services" },
  { id: 4, title: "Contact 📞", url: "/contact" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Автоматически определяем ширину экрана браузера
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    
    handleResize(); // Проверка при загрузке
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative">
      {/* Кнопка бургера (показывается, если экран меньше 1100px) */}
      {isMobile ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white px-3 py-1 text-2xl border border-gray-700 rounded-lg bg-gray-800 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Выпадающее меню для мобильных и ноутбуков */}
          {isOpen && (
            <ul className="absolute right-0 top-12 w-56 flex flex-col gap-4 bg-gray-800 p-5 rounded-xl shadow-2xl border border-gray-700 z-50">
              {menuItem.map((item) => (
                <Navitem key={item.id} id={item.id} title={item.title} url={item.url} />
              ))}
            </ul>
          )}
        </div>
      ) : (
        /* Обычное десктопное меню для больших мониторов */
        <ul className="flex items-center gap-6">
          {menuItem.map((item) => (
            <Navitem key={item.id} id={item.id} title={item.title} url={item.url} />
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;