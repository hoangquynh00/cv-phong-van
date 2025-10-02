import { useState } from "react";
import "./App.css";

export default function App() {
  // state cho theme
  const [dark, setDark] = useState(true);
  // state cho màu nền content
  const [color, setColor] = useState("#fff");
  // state cho ẩn/hiện kỹ năng
  const [showSkills, setShowSkills] = useState(true);

  return (
    <div
      className="cv"
      style={{
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        gap: "20px",
        maxWidth: "1000px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,.08)",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          background: dark ? "#2c2f36" : "#f0f0f0",
          color: dark ? "#fff" : "#000",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <img
          src="/unnamed.png"
          alt="Ảnh đại diện"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />
        
        <h2>Lập trình giao diện</h2>

        <section>
          <h3>Liên hệ</h3>
          <p>Email: hoangquynhhello@gmail.com</p>
          <p>SĐT: 0947 732 071</p>
          <p>Ngày sinh: 25/08/2004</p>
          <p>Quê quán: phường Đông Hà, tỉnh Quảng Trị</p>
        </section>

        {/* Các nút vui vẻ */}
        <div style={{ marginTop: "20px", display: "grid", gap: "8px" }}>
          <button onClick={() => setDark(!dark)}>Đổi theme</button>
          <button onClick={() => setColor(color === "#fff" ? "#e0f7fa" : "#fff")}>
            Đổi màu nền nội dung
          </button>
          <button onClick={() => setShowSkills(!showSkills)}>
            {showSkills ? "Ẩn kỹ năng" : "Hiện kỹ năng"}
          </button>
        </div>
      </aside>

      {/* Content */}
      <main style={{ background: color, padding: "20px", borderRadius: "12px" }}>
        <h1 className="name">Hoàng Thị Diễm Quỳnh</h1>
        <section>
          <h2>Tóm tắt</h2>
          <p>
            Có kinh nghiệm làm giao diện bằng HTML, CSS, JavaScript và React tại
            các dự án ở trường.
          </p>
        </section>

        {showSkills && (
          <section>
            <h2>Kỹ năng chuyên môn</h2>
            <ul>
              <li>HTML, CSS (Grid/Flex)</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git/GitHub</li>
            </ul>
          </section>
        )}
        {showSkills &&(
          <section>
            <h2>Kĩ năng mềm</h2>
            <ul>
              <li>Kĩ năng làm việc nhóm</li>
              <li>Kĩ năng quản lý thời gian</li>
              <li>Kĩ năng giao tiếp</li>
            </ul>
          </section>
        )

        }

        <section>
          <h2>Dự án</h2>
          <ul>
            <li>CV Website – React + Vite</li>
            <li>Todo App – React Hooks</li>
          </ul>
        </section>
        <section>
          <h2>Chứng chỉ</h2>
          <ul>
            <li>Chứng chỉ B1</li>
            <li>Chứng chỉ giáo dục quốc phòng</li>
            <li>Chứng chỉ giáo dục thể chất</li>
          </ul>     
        </section>
        <section>
          <h2>Kinh nghiệm làm việc</h2>
          <ul>
            <li>Nhân viên phục vụ</li>
            <li>Gia sư tiếng anh</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
