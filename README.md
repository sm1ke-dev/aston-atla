# aston-atla

- Приложение для поиска персонажей из вселенной мультфильма "Аватар: легенда об Аанге"
- Использованное API: [Last Airbender API](https://last-airbender-api.fly.dev/).

---

## Основной функционал

- Регистрация и авторизация пользователей;
- Поиск персонажей;
- Страницы с историей поиска и избранными карточками персонажей;

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы Требования к функциональности.

#### React

- [x] Пишем функциональные компоненты c хуками: [components](src/components), [pages](src/pages).
- [x] Есть разделение на [умные](src/components/CardItem/CardItem.tsx) и [глупые](src/components/Preloader/Preloader.tsx) компоненты.
- [x] Есть рендеринг [списков](src/pages/Main/Main.tsx).
- [x] Реализована хотя бы одна [форма](src/components/AuthForm/AuthForm.tsx).
- [x] Есть применение Контекст API: [ThemeContext](src/context/ThemeContext.tsx).
- [x] Есть применение предохранителя: [ErrorBoundary](src/App.tsx).
- [x] Есть хотя бы один кастомный хук: [useDebounce](src/hooks/useDebounce.ts) и [useAuth](src/hooks/useAuth.ts).
- [x] Хотя бы несколько компонентов используют PropTypes: [HistoryLink](src/components/HistoryLink/HistoryLink.tsx), [CardItem](src/components/CardItem/CardItem.tsx).
- [x] Поиск не должен триггерить много запросов к серверу [Search](src/components/SearchForm/SearchForm.tsx)
- [x] Есть применение [lazy + Suspense](src/App.tsx).

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](src/redux/store.ts).
- [x] Используем слайсы: [userSliсe](src/redux/slices/userSlice.ts).
- [x] Есть хотя бы одна кастомная мидлвара: [customMiddleware](src/redux/middleware/customMiddleware.ts).
- [x] Используется RTK Query: [characters](src/redux/atlaApi.ts).
- [x] Используется Transforming Responses: [getAllCharacters](src/redux/atlaApi.ts).

### 2 уровень (необязательный)

- [x] Использование TypeScript.
- [x] Использование Firebase для учетных записей пользователей, Избранного и Истории поиска.
