import React from 'react';

const Header = props => {
  const { branding } = props;

  return (
    <div className="navbar navbar-dark bg-primary navbar-expand-sm">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/signin.html" className="nav-link">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a href="/signout.html" className="nav-link">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
