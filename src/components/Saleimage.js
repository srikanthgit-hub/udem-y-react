// Sale image Component

import saleimage from "../assets/images/sale-img3.png"

function Saleimage()
{
  return(
    <div className="sale-image">
        <img src={saleimage} alt="sm1"></img>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save</h2>
            <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
    </div>
  )
}

export default Saleimage