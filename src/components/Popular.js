// Popular Section Component

import cc1 from "../assets/images/c1.jpg"
import cc2 from "../assets/images/c2.jpg"
import cc3 from "../assets/images/c3.jpg"
import cc4 from "../assets/images/c4.jpg"
import cc5 from "../assets/images/c5.jpg"
import cc6 from "../assets/images/c6.jpg"
import cc7 from "../assets/images/c7.jpg"
import cc8 from "../assets/images/c8.jpg"



function Popular()
{
  return(
    <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the bes fit</p>

        <div className="popular__container">
            <div className="course-card">
                <img src={cc1} alt="cc1"></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={cc2} alt="cc2"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={cc3} alt="cc3"></img>
                <h3>Web Development Bootcamp 2023 </h3>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={cc4} alt="cc4"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={cc5} alt="cc5"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={cc6} alt="cc6"></img>
                <h3>Web Development Bootcamp 2023 </h3>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={cc7} alt="cc7"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={cc8} alt="cc8"></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

        </div>
    </div>

  )
}


export default Popular