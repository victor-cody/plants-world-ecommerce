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
      <div className="nav_price snipcart-checkout">
        <span>🛒</span>
        <p className="snipcart-total-price">$0.00</p>
      </div>
    </nav>
  );
};

export default Header;
