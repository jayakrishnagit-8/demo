import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import './index.css';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCalendar, faTasks, faNotesMedical, faContactBook, faBookmark, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'


export default function Mail() {
    return (
        <div>
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-1 p-lg-5 " style={{ backgroundColor: 'black', color: 'white' }}>
                        <div style={{ paddingBottom: "50px", marginLeft: "-30px", marginTop: "-40px" }}>
                            <div class="display d-inline-flex s1">
                                <FontAwesomeIcon style={{ paddingTop: '10px', paddingRight: '10px' }} icon={faEnvelope} /><p style={{ fontSize: "24px" }}>Mail</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-info btn-sm" style={{marginLeft:'-25px'}} > <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                        <p style={{marginLeft:'-25px'}}>Mail</p>
                        <button type="button" class="btn btn-prim btn-sm" style={{ backgroundColor: '#d051d2',marginLeft:'-25px'}} > <FontAwesomeIcon icon={faCalendar} /></button>
                        <p style={{marginLeft:'-25px'}}>calendar</p>

                        <button type="button" class="btn btn-prim btn-sm" style={{ backgroundColor: '#098310',marginLeft:'-25px'}} > <FontAwesomeIcon icon={faTasks} /></button>
                        <p style={{marginLeft:'-25px'}}>Tasks</p>
                        <button type="button" class="btn btn-prim btn-sm" style={{ backgroundColor: '#F36C5A',marginLeft:'-25px'}} > <FontAwesomeIcon icon={faNotesMedical} /></button>
                        <p style={{marginLeft:'-25px'}}>Notes</p>
                        <button type="button" class="btn btn-prim btn-sm" style={{ backgroundColor: '#C45546',marginLeft:'-25px'}} > <FontAwesomeIcon icon={faContactBook} /></button>
                        <p style={{marginLeft:'-25px'}}>Notes</p>
                        <button type="button" class="btn btn-prim btn-sm" style={{ backgroundColor: '#F92C4E',marginLeft:'-25px'}} > <FontAwesomeIcon icon={faBookmark} /></button>
                        <p style={{marginLeft:'-25px'}}>BookMark</p>
                        <button type="button" class="btn btn-prim btn-sm" style={{ backgroundColor: '#EBD42A',marginLeft:'-25px'}} > <FontAwesomeIcon icon={faPersonCircleQuestion} /></button>
                        <p style={{marginLeft:'-25px'}}>Resources</p>


                    </div>
                    <div class="col-md-2" style={{ backgroundColor: 'black', paddingLeft: "10px", paddingTop:'85px' }}>
                        <br />
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                New  Mail
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"> <i class="far fa-rectangle-list"></i>New Note</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"> <i class="far fa-square-check"></i>New Task</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i class="fas fa-calendar-days"></i>New Event</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i class="fas fa-id-badge"></i>New Contact</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i class="far fa-bookmark"></i>New bookmark</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"> <i class="fas fa-calendar-days"></i>New booking</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div>
                            <br />


                            <NavDropdown title="STREAMS" id="navbarScrollingDropdown" style={{ color: 'blue' }}>
                                <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    ALL Unread
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action5">
                                    T@F
                                </NavDropdown.Item>
                            </NavDropdown>
                            <br />
                            <NavDropdown title="FOLDERS" id="navbarScrollingDropdown" style={{ color: 'blue' }}>
                                <NavDropdown.Item href="#action3">Inbox</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Drafts
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action5">
                                    Templates
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action6">
                                    Snoozed
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action7">
                                    Sent
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action8">
                                    Spam
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#actio9">
                                    Trash
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#actio9">
                                    Outbox
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#actio9">
                                    Newsletter
                                </NavDropdown.Item>
                            </NavDropdown>
                            <br />
                            <NavDropdown title="TAGS" id="navbarScrollingDropdown" style={{ color: 'blue' }}>

                            </NavDropdown>
                            <br />
                            <NavDropdown title="VIEWS" id="navbarScrollingDropdown" style={{ color: 'blue' }}>
                                <NavDropdown.Item href="#action3">Unread</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    All message
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action5">
                                    Flagged
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    All archived
                                </NavDropdown.Item>
                            </NavDropdown>
                            <br />

                        </div>






                    </div>

                    <div class="col-md-9 p-3" style={{ backgroundColor: '#F9F9EC ' }}>

                        <div class="p-4 d-inline-flex" style={{ float: "right" }}>
                            <div style={{ marginRight: "550px" }}>
                                <NavDropdown title="Inbox" id="navbarScrollingDropdown" style={{ color: 'black' }}>

                                    <div class="input-group">
                                        <div class="form-outline" data-mdb-input-init>
                                            <input id="search-input" type="search" class="form-control" />
                                            <i class="fas fa-search">
                                                <label class="form-label" for="form1">Search</label></i>

                                        </div>
                                    </div>
                                    <NavDropdown.Item href="#action3">Inbox</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Sent
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action5">
                                        Spam
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Trash
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Newsletter
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Notification
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </div>
                            <label class="visually-hidden" for="FormInputGroupUsername">Username</label>
                            <div class="input-group" style={{ width: "300px", height: "20px" }}>
                                <div class="input-group-text"><i class="fas fa-magnifying-glass"> Mail</i>
                                    <NavDropdown>
                                        <Dropdown.Item href="#/action-1"> <i class="far fa-rectangle-list"></i>New Note</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2"> <i class="far fa-square-check"></i>New Task</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"> <i class="fas fa-calendar-days"></i>New Event</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"> <i class="fas fa-id-badge"></i>New Contact</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"> <i class="far fa-bookmark"></i>New bookmark</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"> <i class="fas fa-calendar-days"></i>New booking</Dropdown.Item>
                                    </NavDropdown>


                                </div>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inlineFormInputGroupUsername"
                                    placeholder="Search (/)"
                                />

                            </div>
                            <div class="d-inline-flex">
                                <i class="fas fa-chess-bishop fa-2x" style={{ float: "right", marginLeft: "20px" }}></i>
                                <i class="far fa-bell fa-2x" style={{ float: "right", marginLeft: "20px" }}></i>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s" class="rounded-circle" height={'30px'} style={{ float: "right", marginLeft: "15px" }} alt="sarathimg"></img>
                                <i class="fas fa-grip fa-2x" style={{ float: "right", marginLeft: "20px" }}></i>
                            </div>

                        </div>
                        <div class=" d-inline-flex ">
                            <i class="far fa-square" style={{ paddingLeft: "5px", margin: "5px" }}></i><NavDropdown >
                                <NavDropdown.Item href="#action3" style={{ paddingLeft: "10px" }}>All</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    None
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action5">
                                    Unread
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Read
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Flagged
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Attachments
                                </NavDropdown.Item>
                            </NavDropdown>
                            <i class="fas fa-filter" style={{ marginLeft: "30px", paddingTop: "5px" }}></i><span style={{ paddingLeft: "10px" }}>Views</span>
                            <NavDropdown >
                                <NavDropdown.Item href="#action3">View all</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Unread
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action5">
                                    Unread
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Flagged
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    info
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    important
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Fllow-up
                                </NavDropdown.Item>
                            </NavDropdown>
                            <i class="fas fa-paperclip" style={{ marginLeft: "30px", paddingLeft: "10px", paddingTop: "5px" }}></i> <i class="fas fa-align-right" style={{ paddingLeft: "10px", paddingTop: "5px" }}></i><span style={{ marginTop: "-5px", paddingLeft: "10px", paddingTop: "5px" }}>Attachments options</span>
                            <NavDropdown >

                                <NavDropdown.Item href="#action4">
                                    Attachments in this folders
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action5">
                                    Email with Attachments
                                </NavDropdown.Item>

                            </NavDropdown>;
                            <i class="fas fa-ellipsis-vertical" style={{ marginLeft: "30px", paddingTop: "5px" }}></i>
                            <NavDropdown>
                                <NavDropdown.Item href="#action4">
                                    Turn off converstion in this folders
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div>
                                <div style={{ marginLeft: "560px" }}>
                                    <i class="fas fa-envelope-open-text" style={{ margin: "10px" }}></i>
                                    <i class="fas fa-indent" style={{ margin: "10px" }}></i>
                                    <i class="fab fa-wpforms" style={{ margin: "10px" }}></i>
                                </div>
                            </div>
                        </div>



                        <p style={{ backgroundColor: ' #CCCCC8 ' }}>Today</p>

                        <i class="far fa-envelope-open"></i>Jayakrishna.Royal@synlogica.com
                        <hr />
                        <i class="far fa-envelope-open"></i>  Hayagreevan T
                        <br /> <i class="fas fa-paperclip"></i> Task
                        <hr />
                        <i class="far fa-calendar-days"></i>   Zoho webconferance
                        <br /> <i class="fas fa-paperclip"></i> Reaschdule meeting
                        <hr />

                        <p style={{ backgroundColor: ' #CCCCC8 ' }}>Yesterday</p>

                        <i class="far fa-envelope-open"></i>   Jayakrishna.Royal@synlogica.com
                        <hr />
                        <i class="far fa-envelope-open"></i>   Jayakrishna.Royal@synlogica.com
                        <hr />
                        <i class="far fa-calendar-days"></i>   Zoho webconferance
                        <br /> <i class="fas fa-paperclip"></i> Reaschdule meeting
                        <hr />
                    </div>

                </div>
            </div>
        </div>
    )
}
