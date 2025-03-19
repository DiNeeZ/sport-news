// src/utils/scrollUtils.ts

// Функция для получения ширины скроллбара
function getScrollbarWidth(): number {
  return window.innerWidth - document.documentElement.clientWidth;
}

// Хранилище позиции скролла
let scrollPosition: number = 0;

export function disableScroll(): void {
  // Сохраняем текущую позицию скролла
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const scrollbarWidth: number = getScrollbarWidth();

  // Применяем стили для блокировки
  document.body.style.cssText = `
    position: fixed;
    top: -${scrollPosition}px;
    left: 0;
    right: 0;
    overflow: hidden;
    padding-right: ${scrollbarWidth}px;
  `;
}

export function enableScroll(): void {
  // Сбрасываем стили и восстанавливаем позицию
  document.body.style.cssText = "";
  window.scrollTo(0, scrollPosition);
}
