import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState("");



  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "#000", // 👈 весь текст черный
      }}
    >
      {/* Верхняя панель */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #ddd",
          padding: "0.5rem 1rem",
          color: "#000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button style={{ border: "none", background: "none", fontSize: 20 }}>
            🏠
          </button>
          <button style={{ border: "none", background: "none", fontSize: 20 }}>
            🔄
          </button>
          <span style={{ fontWeight: "bold" }}>{time}</span>
        </div>
        <div style={{ fontWeight: "bold" }}>ССЗ №334</div>
        <div>Full Full [test_2[full]]</div>
      </header>

      {/* Таблица */}
      <main style={{ flex: 1, padding: "1rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          Выберите операцию, с которой собираетесь работать
        </p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            color: "#000",
          }}
        >
          <thead style={{ background: "#f8f8f8" }}>
            <tr>
              <th style={th}>Дата начала (план)</th>
              <th style={th}>Операция</th>
              <th style={th}>Номенклатура</th>
              <th style={th}>Количество</th>
              <th style={th}>Ед. изм</th>
              <th style={th}>Время выполнения</th>
              <th style={th}>Оборудование</th>
              <th style={th}>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: "#f0f6ff" }}>
              <td style={td}>13/08/2025 20:00</td>
              <td style={td}>Перевозка</td>
              <td style={td}>117</td>
              <td style={td}>
                <input
                  type="number"
                  defaultValue={1}
                  style={{
                    width: "60px",
                    textAlign: "center",
                    color: "#000",
                    border: "1px solid #ccc",
                  }}
                />
              </td>
              <td style={td}>мин</td>
              <td style={td}>-</td>
              <td style={td}></td>
              <td style={td}>Ожидает выполнения</td>
            </tr>
          </tbody>
        </table>
      </main>

      {/* Нижние кнопки */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          borderTop: "1px solid #ddd",
          color: "#000",
        }}
      >
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "#f2f2f2",
            border: "1px solid #ccc",
            borderRadius: "6px",
            color: "#000",
          }}
        >
          Назад
        </button>
        <button
          style={{
            padding: "0.5rem 1.2rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Начать операцию
        </button>
      </footer>
    </div>
  );
}

const th = {
  border: "1px solid #ddd",
  padding: "8px",
  fontWeight: "bold",
  color: "#000",
};

const td = {
  border: "1px solid #ddd",
  padding: "8px",
  color: "#000",
};