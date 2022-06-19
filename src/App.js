// import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = ({ name, phone, email, photo }) => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div
      className="App"
      style={{ backgroundColor: "#fcd9d9", padding: "20px" }}
    >
      <Header />
      {contacts.map((data, key) => {
        return (
          <div key={key}>
            <Contact
              name={data.name}
              phone={data.phone}
              email={data.email}
              photo={data.photo}
            />

          </div>
        );
      })}
    </div>
  );
};

export default App;
