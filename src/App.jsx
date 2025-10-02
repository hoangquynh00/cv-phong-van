import "./App.css";
function tinhTuoi(ngaySinh) {
  const dob = new Date(ngaySinh);
  const now = new Date();
  let tuoi = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) tuoi--;
  return tuoi;
}

export default function App() {
  // ====== DỮ LIỆU ======
  const thongTin = {
    hoTen: "Hoàng Thị Diễm Quỳnh",
    ngheNghiep: "Lập trình giao diện",
    email: "hoangquynhhello@gmail.com",
    sdt: "0947 732 071",
    ngaySinh: "2004-08-25",
    queQuan: "phường Đông Hà, tỉnh Quảng Trị",
    anh: "/Anh.jpg",
  };

  const kyNangChuyenMon = ["HTML, CSS (Grid/Flex)", "JavaScript", "React", "Git/GitHub"];
  const kyNangMem = ["Kĩ năng làm việc nhóm", "Kĩ năng quản lý thời gian", "Kĩ năng giao tiếp"];
  const duAn = ["CV Website – React + Vite", "Todo App – React Hooks"];
  const chungChi = ["Chứng chỉ B1", "Chứng chỉ giáo dục quốc phòng", "Chứng chỉ giáo dục thể chất"];
  const kinhNghiem = ["Nhân viên phục vụ", "Gia sư tiếng anh"];

  const tuoi = tinhTuoi(thongTin.ngaySinh);
  const namHienTai = new Date().getFullYear();

  // ====== HÀM XỬ LÝ ======
  const inCV = () => window.print();
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(thongTin.email);
      alert("Đã copy email vào clipboard!");
    } catch {
      alert("Không copy được email, hãy thử thủ công.");
    }
  };

  return (
    <div className="cv">
      {/* Cột bên trái */}
      <aside className="sidebar">
        <img src={thongTin.anh} alt="Ảnh đại diện" className="avatar" />
        <h2 className="role">{thongTin.ngheNghiep}</h2>

        <section className="contact">
          <h3>Liên hệ</h3>
          <p>
            Email: <a href={`mailto:${thongTin.email}`}>{thongTin.email}</a>{" "}
            <button className="chip" onClick={copyEmail}>Copy</button>
          </p>
          <p>SĐT: {thongTin.sdt}</p>
          <p>Ngày sinh: 25/08/2004 (≈ {tuoi} tuổi)</p>
          <p>Quê quán: {thongTin.queQuan}</p>
          <button className="primary" onClick={inCV}>🖨️ In / Lưu PDF</button>
        </section>
      </aside>

      {/* Cột bên phải */}
      <main className="content">
        <h1 className="name">{thongTin.hoTen}</h1>

        <section>
          <h2>Tóm tắt</h2>
          <p>
            Có kinh nghiệm làm giao diện bằng HTML, CSS, JavaScript và React tại
            các dự án ở trường.
          </p>
        </section>

        <section>
          <h2>Kỹ năng chuyên môn</h2>
          <ul>{kyNangChuyenMon.map((muc) => <li key={muc}>{muc}</li>)}</ul>
        </section>

        <section>
          <h2>Kĩ năng mềm</h2>
          <ul>{kyNangMem.map((muc) => <li key={muc}>{muc}</li>)}</ul>
        </section>

        <section>
          <h2>Dự án</h2>
          <ul>{duAn.map((muc) => <li key={muc}>{muc}</li>)}</ul>
        </section>

        <section>
          <h2>Chứng chỉ</h2>
          <ul>{chungChi.map((muc) => <li key={muc}>{muc}</li>)}</ul>
        </section>

        <section>
          <h2>Kinh nghiệm làm việc</h2>
          <ul>{kinhNghiem.map((muc) => <li key={muc}>{muc}</li>)}</ul>
        </section>

        <footer className="footer">© {namHienTai} {thongTin.hoTen}</footer>
      </main>
    </div>
  );
}
