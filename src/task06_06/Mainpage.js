import React from 'react'
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faTruck, faBagShopping, faCircle, faRotate,faEnvelope,faForward,faF } from '@fortawesome/free-solid-svg-icons'
import "./Mainpage.css"
import Card from 'react-bootstrap/Card';


export default function Mainpage() {
    return (
        <div class="container-fluid">
            <div class="sec1">
                <div class="row">
                    <div class="col-3 head">
                        <h1>Furni.</h1>
                    </div>
                    <div class="col-6 navbar">
                        <nav>
                            <a href="#" class="nav-item">Home</a>
                            <a href="http://127.0.0.1:5500/src/task06_06/Shop.html" class="nav-item2">Shop</a>
                            <a href="http://127.0.0.1:5500/src/task06_06/Aboutus.html" class="nav-item2">About us</a>
                            <a href="http://127.0.0.1:5500/src/task06_06/Services.html " class="nav-item2">Services</a>
                            <a href="http://127.0.0.1:5500/src/task06_06/Blog.html" class="nav-item2">Blog</a>
                            <a href="http://127.0.0.1:5500/src/task06_06/Contact.html" class="nav-item2">Contact us</a>
                        </nav>
                    </div>
                    <div class="col-3 iconitems">
                        <div class="icnitem">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div class="icnitem">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <h1 class="main-head">
                            Modern Interior <br />
                            Design Studio
                        </h1>
                        <p class="main-para">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br />
                            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                        <button class="main-btn">
                            Shop Now
                        </button>
                        <button class="main-btn2">
                            Explore
                        </button>
                    </div>
                    <div class="col-7">
                        <div class="main-img">
                            <img src='https://themewagon.github.io/furni/images/couch.png' width="700px"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec2">
                <div class="row">
                    <div class="col-3">
                        <h2 class="sec2head">
                            Crafted with <br />
                            excellent <br />
                            material.
                        </h2>
                        <p class="sec2para">
                            Donec vitae odio quis nisl dapibus <br />
                            malesuada. Nullam ac aliquet velit. <br />
                            Aliquam vulputate velit imperdiet dolor <br />
                            tempor tristique.
                        </p>
                        <button class="sec2btn">
                            Explore
                        </button>
                    </div>
                    <div class="col-3 sec2img">
                        <img src="https://themewagon.github.io/furni/images/product-1.png" height="250px" width="250px"></img>
                        <h5 class="sec2subh">Nordic Chair</h5>
                        <h4 class="sec2price">$50.00</h4>
                    </div>
                    <div class="col-3 sec2img">
                        <img src="https://themewagon.github.io/furni/images/product-2.png" height="250px" width="250px"></img>
                        <h5 class="sec2subh">Kruzo Aaero Chair</h5>
                        <h4 class="sec2price">$78.00</h4>
                    </div>
                    <div class="col-3 sec2img">
                        <img src="https://themewagon.github.io/furni/images/product-3.png" height="250px" width="250px"></img>
                        <h5 class="sec2subh">Ergonomic Chair</h5>
                        <h4 class="sec2price">$43.00</h4>
                    </div>
                </div>
            </div>
            <div class="sec3">
                <div class="row">
                    <div class="col-6">
                        <div>
                            <h2 class="sec2head">
                                Why Choose Us
                            </h2>
                            <p class="sec3para">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam <br />
                                vulputate velit imperdiet dolor tempor tristique.
                            </p>
                        </div>
                        <div class="sec3flex">
                            <div class="sec3mar">
                                <div class="sec3icon">
                                    <FontAwesomeIcon icon={faTruck} />
                                </div>
                                <h5>
                                    Fast & Free Shipping
                                </h5>
                                <p class="sec4para">
                                    Donec vitae odio quis nisl dapibus <br />
                                    malesuada. Nullam ac aliquet velit. <br />
                                    Aliquam vulputate.
                                </p>
                            </div>
                            <div>
                                <div class="sec3icon">
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </div>
                                <h5>
                                    Easy to Shop
                                </h5>
                                <p class="sec4para">
                                    Donec vitae odio quis nisl dapibus <br />
                                    malesuada. Nullam ac aliquet velit. <br />
                                    Aliquam vulputate.
                                </p>
                            </div>
                        </div>
                        <div class="sec3flex">
                            <div class="sec3mar">
                                <div class="sec3icon">
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                                <h5>
                                    24/7 Support
                                </h5>
                                <p class="sec4para">
                                    Donec vitae odio quis nisl dapibus <br />
                                    malesuada. Nullam ac aliquet velit. <br />
                                    Aliquam vulputate.
                                </p>
                            </div>
                            <div>
                                <div class="sec3icon">
                                    <FontAwesomeIcon icon={faRotate} />
                                </div>
                                <h5>
                                    Hassle Free Returns
                                </h5>
                                <p class="sec4para">
                                    Donec vitae odio quis nisl dapibus <br />
                                    malesuada. Nullam ac aliquet velit. <br />
                                    Aliquam vulputate.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 sec3img">
                        <img src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" width="450px"></img>
                    </div>
                </div>
            </div>
            <div class="sec4">
                <div class="col-7 sec4div">
                    <div class="sec4img1">
                        <img src="https://themewagon.github.io/furni/images/img-grid-1.jpg" width="400px"></img>
                    </div>
                    <div class="sec4img2">
                        <img src="https://themewagon.github.io/furni/images/img-grid-2.jpg" width="200px"></img>
                    </div>
                    <div class="sec4img3">
                        <img src="https://themewagon.github.io/furni/images/img-grid-3.jpg" width="300px"></img>
                    </div>
                </div>
                <div class="col-5">
                    <h2>
                        We Help You Make Modern <br />
                        Interior Design
                    </h2>
                    <p class="sec4para">
                        Donec facilisis quam ut purus rutrum lobortis. Donec vitae <br />
                        odio quis nisl dapibus malesuada. Nullam ac aliquet velit. <br />
                        Aliquam vulputate velit imperdiet dolor tempor tristique. <br />
                        Pellentesque habitant morbi tristique senectus et netus et <br />
                        malesuada
                    </p>
                    <div class="sec4flex">
                        <p class="sec4para">
                            {'\u25CF'} Donec vitae odio quis <br />
                            &nbsp;&nbsp;&nbsp;nisl dapibus malesuada
                        </p>
                        <p class="sec4para">
                            {'\u25CF'} Donec vitae odio quis <br />
                            &nbsp;&nbsp;&nbsp;nisl dapibus malesuada
                        </p>
                    </div>
                    <div class="sec4flex">
                        <p class="sec4para">
                            {'\u25CF'} Donec vitae odio quis <br />
                            &nbsp;&nbsp;&nbsp;nisl dapibus malesuada
                        </p>
                        <p class="sec4para">
                            {'\u25CF'} Donec vitae odio quis <br />
                            &nbsp;&nbsp;&nbsp;nisl dapibus malesuada
                        </p>
                    </div>
                    <button class="sec4btn">
                        Explore
                    </button>
                </div>
            </div>
            <div class="sec5">
                <div class="col-4 sec5div">
                    <div>
                        <img src="https://themewagon.github.io/furni/images/product-1.png" width="120px"></img>
                    </div>
                    <div>
                        <p>
                            <b>Nordic Chair</b>
                        </p>
                        <p class="sec5para">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                        </p>
                        <div class="sec5a">
                            <a class="sec5a1" href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-4 sec5div">
                    <div>
                        <img src="https://themewagon.github.io/furni/images/product-2.png" width="120px"></img>
                    </div>
                    <div>
                        <p>
                            <b>Kruzo Aero Chair</b>
                        </p>
                        <p class="sec5para">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                        </p>
                        <div class="sec5a">
                            <a class="sec5a1" href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-4 sec5div">
                    <div>
                        <img src="https://themewagon.github.io/furni/images/product-3.png" width="120px"></img>
                    </div>
                    <div>
                        <p>
                            <b>Ergonomic Chair</b>
                        </p>
                        <p class="sec5para">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                        </p>
                        <div class="sec5a">
                            <a class="sec5a1" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec6">
                <h2>
                    Testimonials
                </h2>
                <p class="sec6para">
                    “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus <br />
                    malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor <br />
                    tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames <br />
                    ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                </p>
                <img class="sec6img" src="https://themewagon.github.io/furni/images/person-1.png" width="80px"></img>
                <p>
                    <b>Maria Jones</b>
                </p>
                <p class="sec6para2">
                    CEO, Co-Founder, XYZ Inc.
                </p>
            </div>
            <div class="sec7">
                <div class="row">
                    <div class="col-6">
                        <h2 class="sec7head">
                            Recent Blog
                        </h2>
                    </div>
                    <div class="col-6">
                        <a class="sec7hyp" href="#">View All Posts</a>
                    </div>
                </div>
            </div>
            <div class="sec8">
                <div class="row">
                    <div class="col-4 card1">
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://themewagon.github.io/furni/images/post-1.jpg" />
                            <Card.Body>
                                <Card.Title class="cardhead">First Time Home Owner Ideas</Card.Title>
                                <Card.Text>
                                    by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-4 card2">
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://themewagon.github.io/furni/images/post-2.jpg" />
                            <Card.Body>
                                <Card.Title class="cardhead">How To Keep Your Furniture Clean</Card.Title>
                                <Card.Text>
                                    by <b>Robert</b> Fox on <b>Dec 15, 2021</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-4 card3">
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://themewagon.github.io/furni/images/post-3.jpg" />
                            <Card.Body>
                                <Card.Title class="cardhead">Small Space Furniture Apartment Ideas</Card.Title>
                                <Card.Text>
                                    by <b>Kristin Watson</b> on <b>Dec 12, 2021</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div class="sec9">
                <div class="row">
                    <div class="col-6">
                        <div class="sec9icon">
                            <FontAwesomeIcon icon={faEnvelope} /> Subscribe to Newsletter
                        </div>
                        <div class='sec9inp'>
                            <input class="sec9inp1" type='text' placeholder='Enter your name'></input>
                            <input class="sec9inp1" type='text' placeholder='Enter your email'></input>
                            <FontAwesomeIcon icon={faForward} />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="sec9img">
                            <img src="https://themewagon.github.io/furni/images/sofa.png" width="400px"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec10">
                <div class="row">
                    <div class="col-4">
                        <h2 class="sec10h">
                            Furni.
                        </h2>
                        <p class="sec10para">
                            Donec facilisis quam ut purus rutrum lobortis. <br />
                            Donec vitae odio quis nisl dapibus malesuada. <br />
                            Nullam ac aliquet velit. Aliquam vulputate velit <br />
                            imperdiet dolor tempor tristique. Pellentesque habitant
                        </p>
                        <div class="sec10icon">
                            <div class="sec10icon2">
                                <FontAwesomeIcon icon={faF} />
                            </div>
                            <div class="sec10icon2">
                                <FontAwesomeIcon icon={faF} />
                            </div>
                            <div class="sec10icon2">
                                <FontAwesomeIcon icon={faF} />
                            </div>
                            <div class="sec10icon2">
                                <FontAwesomeIcon icon={faF} />
                            </div>
                        </div>
                    </div>
                    <div class="col-2 sec10nav">
                        <p>About us</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                    </div>
                    <div class="col-2 sec10nav">
                        <p>Support</p>
                        <p>Knowledge base</p>
                        <p>Live chat</p>
                    </div>
                    <div class="col-2 sec10nav">
                        <p>Jobs</p>
                        <p>Our team</p>
                        <p>Leadership</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div class="col-2 sec10nav">
                        <p>Nordic Chair</p>
                        <p>Kruzo Aero</p>
                        <p>Ergonomic Chair</p>
                    </div>
                </div>
            </div>
            <hr class="hrline"/>
            <div class="sec11">
                <div class="row">
                    <div class="col-6 sec11para">
                        <p>Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co</p>
                        <p>Distributed By ThemeWagon</p>
                    </div>
                    <div class="col-6 sec11para2">
                        <p>Terms & Conditions <span class="sec11span">Privacy Policy</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
