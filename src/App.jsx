import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState("");

  const WebApp = window.Telegram?.WebApp;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!WebApp) return;

    // Инициализация Telegram MainButton
    WebApp.MainButton.setText("Начать операцию");
    WebApp.MainButton.show();

    WebApp.MainButton.onClick(() => {
      WebApp.sendData("operation_started");
    });
  }, [WebApp]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "grid",
        flexDirection: "column",
        minHeight: "100vh",
        fontSize: "14px",
        color: WebApp?.themeParams?.text_color || "#000",
        background: WebApp?.themeParams?.bg_color || "#fff",
      }}
    >
      {/* Верхняя панель */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd",
          padding: "0.5rem",
          fontSize: "14px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{time}</span>
        <div style={{ fontWeight: "bold" }}>ССЗ №334</div>
      </header>

      {/* Контент */}
      <main style={{ flex: 1, padding: "0.5rem" }}>
        <p style={{ marginBottom: "0.5rem" }}>
          Выберите операцию, с которой собираетесь работать
        </p>
        <div
          style={{
            display: "grid",
            gap: "0.4rem",
            padding: "0.6rem",
            borderRadius: "8px",
            background: WebApp?.themeParams?.secondary_bg_color || "#f8f8f8",
          }}
        >
          <div><b>Дата:</b> 13/08/2025 20:00</div>
          <div><b>Операция:</b> Перевозка</div>
          <div><b>Номенклатура:</b> 117</div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <b>Количество:</b>
            <input
              type="number"
              defaultValue={1}
              style={{
                width: "70px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "4px",
              }}
            />
            <span>мин</span>
          </div>
          <div><b>Статус:</b> Ожидает выполнения</div>
        </div>
      </main>

      {/* Кнопка "Назад" */}
      <footer
        style={{
          padding: "0.5rem",
          borderTop: "1px solid #ddd",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <button
          onClick={() => WebApp?.close()}
          style={{
            padding: "0.5rem 1rem",
            background: "#f2f2f2",
            border: "1px solid #ccc",
            borderRadius: "6px",
            backgroundColor:"#000080"
          }}
        >
          Назад
        </button>
      </footer>
    </div>
  );
}