import "./navbar.css";
export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <button
          className="btn-navbar"
          onClick={() => {
            alert("Sem funcionamento... (Ainda!)");
          }}
        >
          sair
        </button>
      </nav>
    </>
  );
}
