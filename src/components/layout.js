import * as React from 'react'
import { Link } from 'gatsby'

const navStyles = {
};

const navList = {
    display: "inline-block",
};

const navLi = {
    display: "inline-block",
    listStyleType: "none",
    marginRight: 10
};

const navLink = {
    color: "#333"
}

const Layout = ({ style, pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav style={navStyles}>
        <ul style={navList}>
          <li style={navLi}><Link to="/" style={navLink}>J'ai peur du vaccin</Link></li>
        </ul>
      </nav>
      <main style={style}>
      {children}
      </main>
      </div>
  )
}

export default Layout
