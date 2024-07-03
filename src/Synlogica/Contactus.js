import React from 'react'

export default function Contactus() {
    return (
        <div className='container-fluid'>
            <div className="row" id="home">
                <div className="col-12">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="meet" className="d-block" style={{ width: "100%" }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Office" className="d-block" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                    <div className="content">
                        <h1 className="conh">
                            Synlogica - 10 Years <br />of Successful <br />Business Consulting
                        </h1>
                        <p className="conp">
                            Synlogica is a well renown name in the arena of global IT solutions & also as a <br />service company providing
                            technology consulting, talent sourcing, and human <br />resource management solutions to For-tune 1000 companies
                        </p>
                        <button className="conbtn">
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 card1">
                    <div className="card" style={{ width: "18rem", height: "12rem" }}>
                        <i className="fa-solid fa-user-check" style={{ paddingTop: "50px" }}></i>
                        <div className="card-body">
                            <h5 className="card-title">IT Expertise</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 card2">
                    <div className="card" style={{ width: "18rem", height: "12rem" }}>
                        <i className="fa-solid fa-headphones" style={{ paddingTop: "50px" }}></i>
                        <div className="card-body">
                            <h5 className="card-title">24/7 IT Support</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 card3">
                    <div className="card" style={{ width: "18rem", height: "12rem" }}>
                        <div className="card-body" style={{ paddingTop: "50px" }}>
                            <h5 className="card-title">Custom Request</h5>
                            <a href="#" className="btn btn-danger">Find Solution</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
