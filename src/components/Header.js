import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div id="header-information">
        <span id="header-information-message"></span>
      </div>
      <div id="header-navigation">
        <div>
          <img src="/assets/images/logo512.png" alt="Logo" width="80" />
          <p>React Games</p>
        </div>
        <div style={{ justifyContent: "right" }}>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/software">Software</a>
          <a href="/documentation">Documentation</a>
        </div>
      </div>
    </header>
  );
}
