import { Link } from 'react-router-dom'
function ItemDetails() {
    return (
        <div className="itemdetails">
            <div className="idimage"><img src="shirt.jpg" height="100%" width="100%"/></div>
            <div className="details">
                <div className="tsdetail">T-Shirt with tape details</div>
            <br/>
                <div class="rating-row">⭐⭐⭐⭐ <span className="bold">3.5/5</span></div>
            </div>
        </div>

    );
}

export default ItemDetails;