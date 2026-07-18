import { useState,useEffect } from 'react'

const RealFooter = () => {
    const [text, setText] = useState("");
    const [handleaction, setHandleaction] = useState(false);
    const [subscribed, isSubscribed] = useState(false);
    useEffect(() => {
        if (handleaction) {
            setText("");
            setHandleaction(false);
            isSubscribed(true);
        }
    }, [handleaction]);
    const handleSubscribeClick = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (text === "") {
            alert("Pls enter the email before subscribing");
        }
        else if (!emailRegex.test(text.trim())) {
            alert("You entered the wrong format. Please check your email address.");
        }
        else {
            alert("You have subscribed and now u will stay uptodate with our latest offers")
            setHandleaction(true);
        }
    };
    return (
        <footer className="real-footer">
            <div className="rf-display">
                <div className="rf-newsletter">
                    <h2 className="rf-newsletter-heading">
                        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                    </h2>

                    <div className="rf-newsletter-form">
                        <div className="rf-newsletter-input-wrapper">
                            <input type="email" value={text} onChange={(e) =>setText(e.target.value) } placeholder="Enter your email address" />
                        </div>
                        <button className="rf-subscribe-btn" onClick={handleSubscribeClick}>{subscribed?"Subscribed":"Subscribe to Newsletter"}</button>
                    </div>
                </div>
                <div className="rf-links">
                    <div className="rf-col rf-brand-col">
                        <h3 className="rf-brand-name">SHOP.CO</h3>
                        <p className="rf-brand-desc">
                            We have clothes that suits your style and which you're proud to
                            wear. From women to men.
                        </p>
                       
                    </div>

                    <div className="rf-col">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div className="rf-col">
                        <h4>HELP</h4>
                        <ul>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Delivery Details</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="rf-col">
                        <h4>FAQ</h4>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Manage Deliveries</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Payments</a></li>
                        </ul>
                    </div>

                    <div className="rf-col">
                        <h4>RESOURCES</h4>
                        <ul>
                            <li><a href="#">Free eBooks</a></li>
                            <li><a href="#">Development Tutorial</a></li>
                            <li><a href="#">How to - Blog</a></li>
                            <li><a href="#">Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default RealFooter;