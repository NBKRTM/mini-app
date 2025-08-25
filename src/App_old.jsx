import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Если открыть в браузере, чтобы не падало:
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready(); // Сообщаем Telegram, что всё загрузилось
      tg.expand(); // Делаем окно на весь экран
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Мой первый Telegram Mini App 🚀</h1>
      <p>Если ты видишь это в браузере — значит React работает.</p>
      <p>Если в Telegram — значит Mini App тоже работает!</p>
    </div>
  );
}

export default App;
