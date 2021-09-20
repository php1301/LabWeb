import React from "react";

function Header() {
    return (
        <div className="flex">
            <div className="logo"></div>
            <div className="navigation">
                <div className="navigation-info">
                    <h2>Contact us by the number</h2>
                    <br />
                    <p>02020202</p>
                </div>
                <div className="navigation-info flex justify-between">
                    <div className="navigation-item active">Home</div>
                    <div className="navigation-item">About</div>
                    <div className="navigation-item">Donate</div>
                    <div className="navigation-item">Video</div>
                    <div className="navigation-item">Contact</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
