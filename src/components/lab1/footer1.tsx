import React from "react";

function Footer1() {
    return (
        <div className="footer">
            <div className="title_footer">
                <p>
                    Option conasjdud Option conasjdud Option conasjdud Option
                    conasjdud Option conasjdud{" "}
                </p>
            </div>
            <div className="links_footer padding-15">
                <div className="link_follow flex-1 padding_lf_ri-15 ">
                    <div> <h4><b>FOLLOW ON TWITTER</b></h4> </div>
                    <div className="note">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi, fugit pariatur. Ratione, aspernatur
                        molestias aut nam tenetur cumque.
                    </div>
                    <p>
                        {" "}
                        
                    </p>
                    
                    <button  className="btnjoin flex"> <p>JOIN US ON FACEBOOK</p> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
</svg></button>
                </div>

                <div className="link_lienket flex-2 padding_lf_ri-15 ">
                    <div className="tilte_lienket">
                        <h4><b>LIÊN KẾT</b></h4>
                    </div>

                    <ul>
                        <li className="flex-1">
                            <div className="li">Lorem ipsum</div>
                            <div className="li">Duis autem</div>
                            <div className="li">Typi non habent</div>
                            <div className="li">Odio dignissim</div>
                            <div className="li">Accumsan et</div>
                        </li>
                        <li className="flex-1 ">
                            <div className="li">Dolor sit amet</div>
                            <div className="li">FAQs</div>
                            <div className="li">Home</div>
                            <div className="li">Clients</div>
                            <div className="li">Donate</div>
                        </li>
                        <li className="flex-1">
                            <div className="li">BBC Vietnamese</div>
                            <div className="li">Quarta decima et</div>
                            <div className="li">Legere me lius</div>
                            <div className="li">Contact Us</div>
                        </li>
                    </ul>
                </div>

                <div className="link_contact flex-1 padding_lf_ri-15">
                    <h4><b>CONTACT</b></h4>
                    <div className="info">
                        <ul>
                        <li><b>Tel:</b> 03920329232</li>
                        <li><b>Email: </b> abc456@gmail.com</li>
                        </ul>
                    </div>
                    <div className="addr">
                        <ul>
                        <li>Nature Tour, Hanoi</li>
                        <li>Dongda, 123 456 789</li>
                        </ul>
                    </div>

                    

                </div>
            </div>
            <div className="footer-last">
                <b> @ Nature tour 2013.</b>
                <p>Copy right and design by <b>IZWEB.COM</b> All right reserved. </p>
            </div>
        </div>
    );
}

export default Footer1;
