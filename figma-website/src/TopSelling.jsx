import './App.css'
import { Link } from 'react-router-dom'
function TopSelling() {
  return (
      <div className="newarrivals">
          <div className="na">Top Selling</div>
          <div className="cards-container">
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div className="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div className="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div className="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
              <Link to="/ItemDetails">
                  <div className="nd">
                      <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                      <div className="bold">T-Shirt with tape details</div>
                      <div className="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
                      <div className="bold">$ 120</div>
                  </div>
              </Link>
          </div>
          <div>
              <Link to="/Shop"><center><button className="view">View All</button> </center></Link>
          </div>
      </div>
  );
}

export default TopSelling;