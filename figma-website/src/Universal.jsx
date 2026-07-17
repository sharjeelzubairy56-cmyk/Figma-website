import figmaImage from './assets/figmaimage.jpg';
function Universal() {
    return (
      <div className="universal">
            <div className="one">
                <div className="findclothes"><h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1></div>
            <div className="browse">Browse through over diverse range of meticulously crafted garments, designed to bring out your individually and cater to your sense of style</div>
                <button>Shop Now</button>
                <div className="figures">
                    <div className="f">
                        <h2 className="data">200 +</h2>
                        <div className="eng">International Brands</div>
                    </div>
                    <div className="f">
                        <h2 className="data">2,000 +</h2>
                        <div className="eng">High Quality Products</div>
                    </div>
                    <div className="f">
                        <h2 className="data">30,000 +</h2>
                        <div className="eng">Happy Customers</div>
                    </div>
                </div>
            </div>
            <img className="two" src={figmaImage} height="80.7" width="50"/>
      </div>
  );
}

export default Universal;