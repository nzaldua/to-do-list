import { Link } from "react-router-dom";

const NavBar: React.FunctionComponent<any> = props => {
  return (
    <nav className="NavBar-content">
      <ul className="nav-link"><Link className="Link" to="/"><h2>List</h2></Link></ul>
      <ul className="nav-link"><Link className="Link" to="/create"><h2>Create</h2></Link></ul>
    </nav>
  )
}

export default NavBar;