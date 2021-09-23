/* This example requires Tailwind CSS v2.0+ */

const NavBar = () => {
    return (
        <>
            <div className="NavBar flex justify-between">
                <div className="NavBar_logo">
                    <img src="./img/logo3.png" alt="" />
                </div>
                <div className="NavBar_contact">
                    <div className="contact_text text-right">
                        <p>Contact Us by the telephone number bellow</p>
                        <h2>
                            12 <span className="text_spc"> (0) </span> 1234
                            567980
                        </h2>
                    </div>
                    <div className="btn contact_button">
                        <ul className="flex justify-between">
                            <li className="btn-active">HOME</li>
                            <li>ABOUT</li>
                            <li>DONATE</li>
                            <li>VIDEO</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Nav_control">
                <ul className="control_btn flex">
                    <li>HOME</li>
                    <li>DONATE</li>
                    <li>ABOUT US</li>
                    <li>TOUR</li>
                    <li>NATURE</li>
                    <li>TIPS</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
