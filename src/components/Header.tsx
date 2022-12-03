import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <>
        <Navbar />

        <div className="top-content">
            <p>Turn your</p>
            <p>Out of the box</p>
            <p>ideas into</p>
            <p>Reality</p>
            <span className="horizontal-line"></span>
            <span className="vertical-line-left"></span>
            <span className="vertical-line-right"></span>
        </div>

        <div className="shape">
            <div className="shape-circle"></div>
            <div className="shape-box">
                <p className="shape-box__intro">I am</p>
                <h1 className="shape-box__name text-uppercase mb-0">Abdul Halim</h1>
                <p className="shape-box__designation text-center">Creative web developer</p>
            </div>
        </div>
    </>
  );
};

export default Header;
