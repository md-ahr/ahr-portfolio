import arrowRight from '../assets/images/icons/bi_arrow-right.svg';
import DownArrow from '../components/DownArrow';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="custom-container home-page">
      <Header />

      <DownArrow />

      <div className="skill-wrapper">
        <div className="d-flex align-items-center justify-content-between">
          <div className="skill-wrapper__content">
            <h3 className="title">My Skills</h3>
            <p className="subtitle">I worked on Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="shape-square"></div>
          </div>
          <div className="skill-wrapper__list">
            <div className="line"></div>
            <div className="line2"></div>
            <div className="d-flex position-relative">
              <div className="circle"></div>
              <div className="square2"></div>
              <div className="square3"></div>
              <div className="item">
                <h4 className="item-title">HTML5</h4>
                <p className="item-description">&lt;/I worked on Lorem ipsum/&gt;</p>
              </div>
              <div className="item">
                <h4 className="item-title">CSS3</h4>
                <p className="item-description">&lt;/I worked on Lorem ipsum/&gt;</p>
              </div>
              <div className="item">
                <h4 className="item-title">JavaScript</h4>
                <p className="item-description">&lt;/I worked on Lorem ipsum/&gt;</p>
              </div>
              <div className="arrow-right">
                <img alt="icon arrow right" src={arrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-wrapper">
        <p className="cta-wrapper__content text-center mx-auto">With a Minimalist approach I do not just build websites I build websites that SELLS</p>
        <div className="bg-shape"></div>
        <div className="cta-wrapper__shape1"></div>
        <div className="cta-wrapper__shape2"></div>
        <div className="cta-wrapper__shape3"></div>
        <div className="cta-wrapper__shape4"></div>
        <div className="btn-wrapper text-center">
          <a className="btn cta-wrapper__btn-view mx-auto" href="/work">View my works</a>
          <a className="btn cta-wrapper__btn-link" href="/work">What I offer</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
