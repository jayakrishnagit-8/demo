import React from 'react'

export default function Home() {
    return (
        <div classNameName="container-fluid headers">
            <div className="row sec2" style={{width:"101%"}}>
                <div className="col-6" style={{ padding: "80px" }}>
                    <div>
                        <img src="https://synlogica.com/wp-content/uploads/2024/02/logo-1536x358.jpeg" width="150px" height="60px" alt="logo" /><br /><br />
                    </div>
                    <div>
                        <i aria-hidden="true" className="fas fa-map-marker-alt" style={{ color: "#f23665" }}></i>
                        Ardente Office One, Tower-2, Level-3, Hoodi Circle, Whitefield,<br /> Bengaluru, Karnataka - 560048<br /><br />
                    </div>
                    <div>
                        <i aria-hidden="true" className="fas fa-map-marker-alt" style={{ color: "#f23665" }}></i>
                        Innov8 Cp Regal, Connaught Place 1st, 2nd, and Mezzanine Floor, <br /> Property No. 44, Regal Building, Connaught Place, New Delhi - <br /> 110001<br /><br />
                    </div>
                    <div>
                        <i aria-hidden="true" className="fas fa-map-marker-alt" style={{ color: "#f23665" }}></i>
                        44, Berkeley Square, Bristol - BS81HB, United Kingdom<br /><br />
                    </div>
                    <div>
                        <i aria-hidden="true" className="fas fa-envelope" style={{ color: "#f23665" }}></i>
                        support@synlogica.com<br /><br />
                    </div>
                    <div>
                        <i className="fa-solid fa-phone-volume" style={{ color: "#f23665" }}></i>
                        +44 800 060 4573 (International)<br /><br />
                    </div>
                    <div>
                        <i className="fa-solid fa-phone-volume" style={{ color: "#f23665" }}></i>
                        +91-8309846759 (Domestic)<br /><br />
                    </div>
                </div>
                <div className="col-6" style={{ paddingTop: "80px", paddingLeft: "60px" }}>
                    <p className="h5">
                        Important links <br /><br />
                    </p>
                    <p>
                        <i className="fa-solid fa-greater-than" style={{ color: "#ec3c5f" }}></i>
                        <a href="#" style={{ textDecoration: "none", color: "white" }}>&nbsp;&nbsp;Home</a><br /><br />
                        <i className="fa-solid fa-greater-than" style={{ color: "#ec3c5f" }}></i>
                        <a href="#" style={{ textDecoration: "none", color: "white" }}>&nbsp;&nbsp;About us</a><br /><br />
                        <i className="fa-solid fa-greater-than" style={{ color: "#ec3c5f" }}></i>
                        <a href="#" style={{ textDecoration: "none", color: "white" }}>&nbsp;&nbsp;Services</a><br /><br />
                        <i className="fa-solid fa-greater-than" style={{ color: "#ec3c5f" }}></i>
                        <a href="#" style={{ textDecoration: "none", color: "white" }}>&nbsp;&nbsp;Contact us</a><br /><br />
                        <i className="fa-solid fa-greater-than" style={{ color: "#ec3c5f" }}></i>
                        <a href="#" style={{ textDecoration: "none", color: "white" }}>&nbsp;&nbsp;Project</a>
                    </p>
                </div>
                <hr style={{ backgroundColor: "antiquewhite" }} />
                <footer style={{ display: "flex" }}>
                    <div className="col-6">
                        <p style={{ paddingBottom: "20px", paddingLeft: "70px", paddingTop:'20px'}}>
                            Website developed by Ajayvarun.com
                        </p>
                    </div>
                    <div className="col-6">
                        <p style={{ float: "right", paddingBottom: '20px', paddingRight: "70px", paddingTop:'20px'}}>
                            Copyright © 2024 All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
