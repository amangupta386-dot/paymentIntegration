import './navbar.css'
import logoImage from '../assets/image.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logoImage} alt="" height={81} width={100} />
        </div>

        {/* Navigation Links - Centered */}
        <nav className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/solutions">Solutions</a>
            </li>
            <li>
              <a href="/technology">Technology</a>
            </li>
            <li>
              <a href="/projects">Custom Projects</a>
            </li>
            <li>
              <a href="/blog">Blogs & Events</a>
            </li>
          </ul>
        </nav>

        {/* Right Side - Icons and Auth */}
        <div className="nav-right">
          <button className="icon-button">
            <i className="search-icon">🔍</i>
          </button>
          <button className="icon-button">
            <i className="cart-icon">🛒</i>
          </button>
          <div className="auth-buttons">
            <a href="/login" className="login-btn">
              Login
            </a>
            <a href="/register" className="register-btn">
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
