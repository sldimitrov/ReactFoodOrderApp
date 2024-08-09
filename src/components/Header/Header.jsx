import logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restaurant" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button>Cart (1)</button>
      </nav>
    </header>
  );
}
