import React from 'react'

export default function Header() {
    return (
        <div className='container-fluid'>
            {/* ------------popup form------------------ */}
            <div id="myModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Launch your career with us</h5>
                            <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label>Join a community of 25k engineers</label>
                                <input type="text" className="form1" placeholder="&#128100; &nbsp; Enter Your Name" /> <br /><br />
                                <input type="email" className="form1" placeholder="&#128231; &nbsp; Enter Email Address" /> <br /><br />
                                <input type="text" className="form1" style={{ paddingLeft: "80px", placeholder: "90001 10009" }} /> <br /><br />
                                <select style={{ position: "relative", bottom: "57px", marginLeft: "10px", border: "none" }}>
                                    <option value="op1">+91</option>
                                    <option value="op1">+13</option>
                                    <option value="op2">+39</option>
                                    <option value="op3">+53</option>
                                </select>
                                <div style={{ position: "relative", bottom: "20px" }}>
                                    <input type="text" className="form1 boldt" placeholder="Select your Domain *" /> <br /><br />
                                    <select className="dropf">
                                        <option value="op1"></option>
                                        <option value="op1">1</option>
                                        <option value="op2">2</option>
                                        <option value="op3">3</option>
                                    </select>
                                </div>
                                <div style={{ position: "relative", bottom: "40px" }}>
                                    <input type="text" className="form1 boldt" placeholder="Select your Primary Language *" /> <br /><br />
                                    <select className="dropf">
                                        <option value="op1"></option>
                                        <option value="op1">1</option>
                                        <option value="op2">2</option>
                                        <option value="op3">3</option>
                                    </select>
                                </div>
                                <div style={{ position: "relative", bottom: "60px" }}>
                                    <input type="text" className="form1 boldt" placeholder="Select your Employment Status *" /> <br /><br />
                                    <select className="dropf">
                                        <option value="op1"></option>
                                        <option value="op1">1</option>
                                        <option value="op2">2</option>
                                        <option value="op3">3</option>
                                    </select>
                                </div>
                                <div style={{ position: "relative", bottom: "80px" }}>
                                    <input type="text" className="form1 boldt" placeholder="Select your Educational Background *" /> <br /><br />
                                    <select className="dropf">
                                        <option value="op1"></option>
                                        <option value="op1">1</option>
                                        <option value="op2">2</option>
                                        <option value="op3">3</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary form1" style={{ position: "relative", bottom: "90px", backgroundColor: "blue" }}>&#9654;Join Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------popup form------------------ */}
            <div className="row mainh">
                <div className="col-6">
                    <img className="headimg" src="css/image.png" width="220px" alt="company logo" />
                </div>
                <div className="col-6 headnav">
                    <nav>
                        <a className="nav1" href="#">Resources</a>
                        <a className="nav1" href="#">Become an instructor</a>
                        <a className="nav1" href="#">Hire from us</a>
                        <a className="nav1" href="#">Reviews</a>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12 marq">
                    <h2>
                        <marquee behavior="scroll" direction="right" scrollamount="5">Welcome to <span className="stys">S</span>ynlogica <span className="stys">S</span>olutions</marquee>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 headnav2" align="center">
                    <nav>
                        <a className="nav2" href="#home">Home</a>
                        <a className="navdrop" href="#">Leap Programs</a>
                        <select className="dropd">
                            <option></option>
                            <option>..</option>
                            <option>..</option>
                            <option>..</option>
                        </select>
                        <a className="nav2" href="#">Executive Programs</a>
                        <a className="nav2" href="#aboutus">About Us</a>
                        <a className="nav2" href="#contactus">Contact Us</a>
                        <a className="navdrop" href="#">FAQs</a>
                        <select className="dropd">
                            <option></option>
                            <option>..</option>
                            <option>..</option>
                            <option>..</option>
                        </select>
                    </nav>
                </div>
            </div>
        </div>
    )
}
