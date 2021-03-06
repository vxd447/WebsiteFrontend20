import { React } from "react";
import { Link } from "react-router-dom";
import { Particle } from "../Components/particle";
import TimelineHome from "../Pages/TimelineHome";
const Home = () => {
  return (
    <div>
      <div className="particle-style">
        <div className="center">
          <h1 className="main-title Altius">ALTIUS</h1>
        </div>
        <div className="menu">
          <div className="m-item">
            <Link to="/about">
              <div className="circle" />
            </Link>
            <div>About</div>
          </div>
          <div className="m-item">
            <Link to="/categories">
              <div className="circle" />
            </Link>
            <div>Categories</div>
          </div>
          <div className="m-item">
            <Link to="/contact">
              <div className="circle" />
            </Link>
            <div>Contact</div>
          </div>
          <div className="m-item">
            <Link to="/lectures">
              <div className="circle" />
            </Link>
            <div>Guest Lectures</div>
          </div>
          <div className="m-item">
            <Link to="/sponsors">
              <div className="circle" />
            </Link>
            <div>Sponsors</div>
          </div>
          <div className="m-item">
            <Link to="/testimonial">
              <div className="circle" />
            </Link>
            <div>Testimonials</div>
          </div>
          <div className="m-item">
            <Link to="/devs">
              <div className="circle" />
            </Link>
            <div>Devs</div>
          </div>
        </div>
        <div
          style={{
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
          <TimelineHome />
        </div>
      </div>

      <Particle />
    </div>
  );
};

export { Home };
