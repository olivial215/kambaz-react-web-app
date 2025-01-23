import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/code.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/math.jpg" width={200} />
                <div>
                <h5> MATH2331 </h5>
                <p className="wd-dashboard-course-title">
                Linear Algebra </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/physics.jpg" width={200} />
                <div>
                <h5> PHYS1165 </h5>
                <p className="wd-dashboard-course-title">
                Physics 2</p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/science.jpg" width={200} />
                <div>
                <h5> CHEM2311 </h5>
                <p className="wd-dashboard-course-title">
                Organic Chemistry </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/security.jpg" width={200} />
                <div>
                <h5> CY2550 </h5>
                <p className="wd-dashboard-course-title">
                Foundations of Cybersecurity </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/space.jpg" width={200} />
                <div>
                <h5> PHYS1111 </h5>
                <p className="wd-dashboard-course-title">
                Intro to Astronomy </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/writing.jpg" width={200} />
                <div>
                <h5> ENGL2700 </h5>
                <p className="wd-dashboard-course-title">
                Creative Writing </p>
                <button> Go </button>
                </div>
            </Link>
        </div>
      </div>
    </div>
);}
