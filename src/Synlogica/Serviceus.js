import React from 'react'

export default function Serviceus() {
    return (
        <div className='container-fluid'>
            <div className="row section2">
                <div className="col-4">
                    <p className="h5 text text-danger">
                        OUR SERVICES
                    </p>
                    <p className="h1" style={{ fontWeight: "650", paddingBottom: "20px" }}>
                        Solutions & Focus <br />Areas
                    </p>
                    <p style={{ color: "rgb(180, 175, 175)" }}>
                        We are fully committed to providing some of the finest sevices.
                    </p>
                    <button className="btn1" style={{ border: "none", marginTop: "20px" }}>ALL SERVICES</button>
                </div>
                <div className="col-4">
                    <div className="card" style={{ width: "23rem", height: "18rem", border: "none" }}>
                        <div className="card-body text-center" style={{ paddingTop: "50px" }}>
                            <h3 className="card-title">Human Capital <br /> Solutions</h3>
                            <p style={{ color: "rgb(180, 175, 175)" }}>
                                Over a decade, Synlogica has <br />experience in providing contingent <br />workforce management services
                            </p>
                            <a href="#" className="text text-danger text-decoration-none">READ MORE &rarr;</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ width: "23rem", height: "18rem", border: "none" }}>
                        <div className="card-body text-center" style={{ paddingTop: "50px" }}>
                            <h3 className="card-title">Payroll Services</h3>
                            <p style={{ color: "rgb(180, 175, 175)" }}>
                                Payroll Services is a solution which <br />offers Input Validation, Payroll <br />Processing, Reimbursement <br />Management,
                            </p>
                            <a href="#" className="text text-danger text-decoration-none">READ MORE &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row section3">
                <div className="col-4">
                    <div className="card" style={{ width: "23rem", height: "18rem", border: "none" }}>
                        <div className="card-body text-center" style={{ paddingTop: "50px" }}>
                            <h3 className="card-title">Statutory Consulting</h3>
                            <p style={{ color: "rgb(180, 175, 175)" }}>
                                At Synlogica, our professionals work <br />with, small to mid-cap companies, <br />improving upon their corporate <br />compliance practices and structures.
                            </p>
                            <a href="#" className="text text-danger text-decoration-none">READ MORE &rarr;</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ width: "23rem", height: "22rem", border: "none" }}>
                        <div className="card-body text-center" style={{ paddingTop: "50px" }}>
                            <h3 className="card-title">Executive Search</h3>
                            <p style={{ color: "rgb(180, 175, 175)" }}>
                                Our Executive Search practice is <br />focused on bringing refined and <br />proven, yet bespoke, solutions to <br />sourcing and securing innovative <br />business leaders for our clients, <br />anywhere around the world.
                            </p>
                            <a href="#" className="text text-danger text-decoration-none">READ MORE &rarr;</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card bgimg1" style={{ width: "23rem", height: "22rem", border: "none" }}>
                        <div className="card-body text-center" style={{ paddingTop: "50px" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
