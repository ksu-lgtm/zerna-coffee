const btn = document.getElementById('themeToggle');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// включает нужную тему, меняет иконку кнопки и сообщает экранным чтецам, нажата ли кнопка
function setTheme(isDark) {
    document.body.classList.toggle('theme-dark', isDark);
    btn.setAttribute('aria-pressed', isDark);
    btn.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
    btn.setAttribute('aria-label', isDark ? 'Светлая тема' : 'Тёмная тема');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// при загрузке восстанавливаем сохранённую тему
setTheme(localStorage.getItem('theme') === 'dark');

// по клику включаем противоположную тему
btn.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('theme-dark'));
});

// открывает меню и переводит фокус на первый пункт
function openMenu() {
    menu.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
    menu.querySelector('a').focus();
}

// закрывает меню и возвращает фокус на бургер
function closeMenu() {
    menu.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    burger.focus();
}

// клик по бургеру (Enter и Space на кнопке тоже вызывают click)
burger.addEventListener('click', () => {
    if (menu.classList.contains('menu-open')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Esc закрывает открытое меню
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('menu-open')) {
        closeMenu();
    }
});
