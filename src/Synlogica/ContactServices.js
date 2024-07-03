import React from 'react'

export default function ContactServices() {
    return (
        <div className='container-fluid'>
            <div className="row" id="contactus">
                <div className="col-12 bgimg3">
                    <h2 className="h1 text-center" style={{ position: "relative", top: "90px", color: "white" }}>
                        Don't Hesitate To Contact Us For Better <br />Information And Services
                    </h2>
                </div>
            </div>
            <div className="row" style={{ position: "relative", bottom: "90px" }}>
                <div className="col-6">
                    <div className="para5">
                        <p className="h2">
                            Perfect Solutions For Your  <br /> Business <br /><br />
                        </p>
                        <p>
                            If it is not success, then it is nothing else. No one will approach <br /> a failure but they will only ask about success stories. Therefore <br /> we work hard day in and day out just for this, success.<br /><br />
                        </p>
                        <p>
                            <i aria-hidden="true" className="fas fa-check"></i> &nbsp;&nbsp;
                            We are committed to providing quality IT Services <br /><br />
                            <i aria-hidden="true" className="fas fa-check"></i> &nbsp;&nbsp;
                            Provided by experts to help challenge critical activities <br /><br />
                            <i aria-hidden="true" className="fas fa-check"></i> &nbsp;&nbsp;
                            Really know the true needs and expectations of customers<br /><br />
                            <i aria-hidden="true" className="fas fa-check"></i> &nbsp;&nbsp;
                            Processes of achieving the excellence improvements<br /><br />
                        </p>
                        <button className="btn2">
                            GET A QUOTE
                        </button>
                        <p className="para6">
                            GET STARTED &rarr;
                        </p>
                    </div>
                </div>
                <div className="col-6" style={{ display: "flex", backgroundColor: "white", paddingTop: "50px", marginLeft: "-15px", marginRight: "10px", width: "600px" }}>
                    <div className="col-3" style={{ paddingLeft: "40px" }}>
                        <label style={{ paddingBottom: "5px" }}>First Name *</label> <br />
                        <input type="text" placeholder="First name here" style={{ width: "210px", height: "50px", backgroundColor: "rgb(247, 244, 244)", border: "1px solid rgb(192, 190, 190)", borderRadius: "5px", marginBottom: "20px" }} />
                        <label style={{ paddingBottom: "5px" }}>EmailAddress*</label> <br />
                        <input type="text" placeholder="Add email" style={{ width: "210px", height: "50px", backgroundColor: "rgb(247, 244, 244)", border: "1px solid rgb(192, 190, 190)", borderRadius: "5px", marginBottom: "20px" }} />
                        <label style={{ paddingBottom: "5px" }}>Comments/Questions*</label> <br />
                        <textarea name="" id="" cols="30" rows="8" style={{ width: "485px", backgroundColor: "rgb(247, 244, 244)", border: "1px solid rgb(192, 190, 190)", borderRadius: "5px", marginBottom: "20px", placeholder: "Comments" }}></textarea>
                        <button className="btn btn-danger" style={{ width: "160px", padding: "10px" }}>SEND MESSAGE</button>
                    </div>
                    <div className="col-3" style={{ paddingLeft: "40px", marginLeft: "120px" }}>
                        <label style={{ paddingBottom: "5px" }}>Last Name </label> <br />
                        <input type="text" placeholder="Last name here" style={{ width: "210px", height: "50px", backgroundColor: "rgb(247, 244, 244)", border: "1px solid rgb(192, 190, 190)", borderRadius: "5px", marginBottom: "20px" }} />
                        <label style={{ paddingBottom: "5px" }}>Subject *</label> <br />
                        <input type="text" placeholder="How can we help you?" style={{ width: "210px", height: "50px", backgroundColor: "rgb(247, 244, 244)", border: "1px solid rgb(192, 190, 190)", borderRadius: "5px", marginBottom: "20px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
