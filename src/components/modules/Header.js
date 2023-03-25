import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">
          <p>
            PLANTS WORLD <span className="logo_span">{"  "}☘️</span>
          </p>
        </div>
      </Link>
      <div className="nav_price">
        <span>🛒</span>
        <p>$0.00</p>
      </div>
    </nav>
  );
};

export default Header;
