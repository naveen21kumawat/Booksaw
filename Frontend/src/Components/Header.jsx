import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div id="header-wrap">
        <div className="top-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-youtube-play" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-behance-square" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-element">
                  <a href="#" className="user-account for-buy">
                    <i className="icon icon-user" />
                    <span>Account</span>
                  </a>
                  <a href="cart" className="cart for-buy">
                    <i className="icon icon-clipboard" />
                    <Link to="/cart">
                      <span>Cart</span>
                    </Link>
                  </a>
                  <div className="action-menu">
                    <div className="search-bar">
                      <a
                        href="#"
                        className="search-button search-toggle"
                        data-selector="#header-wrap"
                      >
                        <i className="icon icon-search" />
                      </a>
                      <form role="search" method="get" className="search-box">
                        <input
                          className="search-field text search-input"
                          placeholder="Search"
                          type="search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*top-content*/}
        <header id="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <div className="main-logo">
                  <a href="index.html">
                    <img src="images/main-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-10">
                <nav id="navbar">
                  <div className="main-menu stellarnav">
                    <ul className="menu-list">
                      <li className="menu-item active">
                        <a href="#home">Home</a>
                      </li>
                      {/* <li className="menu-item has-sub">
                        <a href="#pages" className="nav-link">
                          Pages
                        </a>
                        <ul>
                          <li className="active">
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="index.html">About</a>
                          </li>
                          <li>
                            <a href="index.html">Styles</a>
                          </li>
                          <li>
                            <a href="index.html">Blog</a>
                          </li>
                          <li>
                            <a href="index.html">Post Single</a>
                          </li>
                          <li>
                            <a href="index.html">Our Store</a>
                          </li>
                          <li>
                            <a href="index.html">Product Single</a>
                          </li>
                          <li>
                            <a href="index.html">Contact</a>
                          </li>
                          <li>
                            <a href="index.html">Thank You</a>
                          </li>
                        </ul>
                      </li> */}
                      <li className="menu-item">
                        <a href="#featured-books" className="nav-link">
                          Featured
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#popular-books" className="nav-link">
                          Popular
                        </a>
                      </li>
                      {/* <li className="menu-item">
                        <a href="#special-offer" className="nav-link">
                          Offer
                        </a>
                      </li> */}
                      <li className="menu-item">
                        <a href="#latest-blog" className="nav-link">
                          Articles
                        </a>
                      </li>
                      {/* <li className="menu-item">
                        <a href="#download-app" className="nav-link">
                          Download App
                        </a>
                      </li> */}
                    </ul>
                    <div className="hamburger">
                      <span className="bar" />
                      <span className="bar" />
                      <span className="bar" />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
