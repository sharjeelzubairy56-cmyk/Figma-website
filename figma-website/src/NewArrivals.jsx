import { Link } from 'react-router-dom'
function NewArrivals() {
    return (
        <div className="newarrivals">
            <div className="na">New Arrivals</div>
            <div className="cards-container">
            <Link to="/ItemDetails">
                <div className="nd">
                    <div className="im"><img src="/shirt.jpg" height="100%" width="100%"/></div>
                        <div>T-Shirt with tape details</div>
                        <div class="rating-row">⭐⭐⭐⭐ <span>3.5/5</span></div>
                    <div className="bold">$ 120</div>
                    </div>
                </Link>
                <Link to="/ItemDetails">
                    <div className="nd">
                        <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                        <div>T-Shirt with tape details</div>
                        <div class="rating-row">⭐⭐⭐⭐ <span>3.5/5</span></div>
                        <div className="bold">$ 120</div>
                    </div>
                </Link>
                <Link to="/ItemDetails">
                    <div className="nd">
                        <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                        <div>T-Shirt with tape details</div>
                        <div class="rating-row">⭐⭐⭐⭐ <span>3.5/5</span></div>
                        <div className="bold">$ 120</div>
                    </div>
                </Link>
                <Link to="/ItemDetails">
                    <div className="nd">
                        <div className="im"><img src="/shirt.jpg" height="100%" width="100%" /></div>
                        <div>T-Shirt with tape details</div>
                        <div class="rating-row">⭐⭐⭐⭐ <span>3.5/5</span></div>
                        <div className="bold">$ 120</div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/NewArrivals"><center><button className="view">View All</button> </center></Link>
            </div>   
        </div>
  );
}

export default NewArrivals;