import React from "react";

const NavMenu = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {props.items.map((item) => {
            return (
              <div key={item}>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => props.handleClick(item)}
                  >
                    {item}
                  </a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
