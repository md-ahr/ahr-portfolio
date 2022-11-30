const navbar = () => {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a aria-current="page" className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
