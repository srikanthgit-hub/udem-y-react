//Navbar Component

function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
        </div>
        <div className="navbar__s2">
              <i className="fa-sharp fa-solid fa-magnifying-glass" style={{color: "#171612;"}}></i>
              <input type="text" placeholder="Search for anything here.Tech, Business, Art..."></input>
          </div>
          <div className="navbar__s3">
              <p>Courses</p>
  
              <div className="mylearning">
                  <p>My Learning</p>
                  <div className="mylearning__popup">You did not purchase anything yet</div>
              </div>
              <i className="fa-solid fa-cart-shopping" style={{color: "#010813;"}}></i>
              <i className="fa-solid fa-bell" style={{color: "#010a18;"}}></i>
              <i className="fa-solid fa-user" style={{color: "#010c1e;"}}></i>
          </div>
          <div className="navbar__s4">
              <i className="fa-solid fa-bars" style={{color: "#010813;"}}></i>
          </div>
      </div>
    )
  }

  export default Navbar