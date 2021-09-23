import React from "react";

function Body(props) {
    return (
        <div className="body ">
            <div className="Page flex ">
                <div className="NewPages flex-3 ">
                    <div className="Main_new flex">
                        <div className="Main_new--img flex-2 ">
                            <img src="./img/sutu.jpg" alt="" />
                        </div>
                        <div className="Main_new--content flex-1">
                            <div className="content_Tile">
                                <h2>
                                    {" "}
                                    <p>Our</p>
                                </h2>
                                <h1>
                                    {" "}
                                    <p className="color_green">New Tour</p>
                                </h1>
                            </div>
                            <div className="content_desciption">
                                Đến với NATURE TOURS, bạn có thể tham quan hoặc
                                tìm kiếm thông tin về các thắng cảnh ở bất kì
                                nơi nào trên thế giới mà bạn muốn
                                <p className="content_readmore">
                                    <span className="color_green">
                                        Continue
                                    </span>{" "}
                                    <span className="color_blue">
                                        reading...
                                    </span>
                                </p>
                            </div>

                            <div className="content_numPage">
                                <ul className="flex">
                                    <li className="activebtn">1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="subtext flex justify-between">
                        <div className="subtext_desciption flex-2">
                            <h1>
                                {" "}
                                <b>
                                    {" "}
                                    LOREM IPSUM{" "}
                                    <span className="color_green">
                                        DOLOR{" "}
                                    </span>{" "}
                                    SIT AMET
                                </b>
                            </h1>
                            <p>
                                Blandit praesent luptatum zzril delenit augue
                                duis dolore te feugait nulla facilisi. Nam liber
                                tempor cum soluta nobis{" "}
                                <strong>
                                    <u className="color_green">
                                        {" "}
                                        tulorial guides
                                    </u>
                                </strong>
                            </p>
                        </div>
                        <div className="flex-1 chuphinh">
                            <img src="./img/chuphinh.png" alt="" />
                        </div>
                    </div>
                    <div className="btn btn_items">
                        <ul className="flex justify-between ">
                            <li className="btn-active">By Destination</li>
                            <li>By Species</li>
                            <li>By Tour Type</li>
                        </ul>
                    </div>
                    <div className="list_Items grid grid-cols-3 gap-4">
                        <div className="Iteam">
                            <div className="Iteam_img">
                                {" "}
                                <img src="./img/convoi.jpg" alt="" />
                            </div>
                            <h4>
                                <b>Loream ipsurm dolor</b>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetuer
                                adipiscing elit, sed diam nonummy nibh.
                            </p>
                        </div>
                        <div className="Iteam">
                            <div className="Iteam_img">
                                {" "}
                                <img src="./img/rung.jpg" alt="" />
                            </div>
                            <h4>
                                <b>Loream ipsurm dolor</b>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetuer
                                adipiscing elit, sed diam nonummy nibh.
                            </p>
                        </div>
                        <div className="Iteam">
                            <div className="Iteam_img">
                                {" "}
                                <img src="./img/nuibang.jpg" alt="" />
                            </div>
                            <h4>
                                <b>Loream ipsurm dolor</b>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetuer
                                adipiscing elit, sed diam nonummy nibh.
                            </p>
                        </div>
                        <div className="Iteam">
                            <div className="Iteam_img">
                                {" "}
                                <img src="./img/conho.jpg" alt="" />
                            </div>
                            <h4>
                                <b>Loream ipsurm dolor</b>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetuer
                                adipiscing elit, sed diam nonummy nibh.
                            </p>
                        </div>
                        <div className="Iteam">
                            <div className="Iteam_img">
                                {" "}
                                <img src="./img/chuot-tui.jpg" alt="" />
                            </div>
                            <h4>
                                <b>Loream ipsurm dolor</b>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetuer
                                adipiscing elit, sed diam nonummy nibh.
                            </p>
                        </div>
                        <div className="Iteam">
                            <div className="Iteam_img">
                                {" "}
                                <img src="./img/song.jpg" alt="" />
                            </div>
                            <h4>
                                <b>Loream ipsurm dolor</b>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetuer
                                adipiscing elit, sed diam nonummy nibh.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Search flex-1">
                    <section className="m-7">
                        <div className="Holiday_form ">
                            <h3>HOLIDAY SEARCH</h3>
                            <p>Chọn nơi bạn muốn tham quan</p>
                            <form action="">
                                <select name="khuvuc" id="khuvuc">
                                    <option> Chọn khu vực</option>
                                </select>
                                <select name="chude" id="chude">
                                    <option> Chọn chủ đề</option>
                                </select>
                                <select name="ngaydulich" id="ngaydulich">
                                    <option> Chọn ngày du lịch</option>
                                </select>
                                <select name="mucgia" id="mucgia">
                                    <option> Chọn mức giá</option>
                                </select>
                                <button type="submit"> SEARCH HOLIDAY</button>
                            </form>
                        </div>

                        <div className="Quick_form">
                            <h3>QUICK SEARCH</h3>
                            <p>Tìm thông tin nơi bạn tham quan :</p>
                            <form className="flex justify-between" action="">
                                <input
                                    type="text"
                                    className="Quick_selectCountry"
                                    placeholder="Country/Code..."
                                />
                                <button type="submit" className="Quick_submit">
                                    SEARCH
                                </button>
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className="Newsletter_form">
                            <div className="m-7">
                                <h3>NEWSLETTER SIGNUP</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, Lorem ipsum
                                    dolor sit amet
                                </p>
                                <form action="">
                                    <div className="letter_Email ">
                                        <input
                                            type="email"
                                            placeholder="Enter Email"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            className="Newsletter_selectCountry flex-2"
                                            placeholder="Country/Code..."
                                        />
                                        <button
                                            type="submit"
                                            className="Newsletter_submit flex-1"
                                        >
                                            SEARCH
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="LatestNews m-7">
                            <div>
                                <h3>LASTEST NEWS</h3>
                            </div>

                            <div>
                                <h3 className="Latest_Title">
                                    Dolor sit amet ipsum dolor
                                </h3>
                                <p>
                                    Lorem iplum dolor sit amer, consectetuer
                                    adispiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut clariatem.
                                    Investigationes
                                </p>
                            </div>
                            <div>
                                <h3 className="Latest_Title">
                                    Dolor sit amet ipsum dolor
                                </h3>
                                <p>
                                    Lorem iplum dolor sit amer, consectetuer
                                    adispiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut clariatem.
                                    Investigationes
                                </p>
                            </div>
                            <div>
                                <h3 className="Latest_Title">
                                    Dolor sit amet ipsum dolor
                                </h3>
                                <p>
                                    Lorem iplum dolor sit amer, consectetuer
                                    adispiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut clariatem.
                                    Investigationes
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Body;
