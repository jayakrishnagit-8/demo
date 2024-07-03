import React from 'react'
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function Apply() {
  return (
    <div class="hometext">
      <h1>
        Apply at Synlogica
      </h1>
      <label>Name</label> <br />
      <input type='text' class="input-item"></input> <br /><br /><br />
      <label>Email</label> <br />
      <input type='email' class="input-item"></input> <br /><br /><br />
      <label>Phone No.</label> <br />
      <input type='text' class="input-item"></input> <br /><br /><br />
      <label>Total Experience (in yrs)</label> <br />
      <input type='text' class="input-item"></input> <br /><br />
      <button class="btn btn-primary">Apply Now</button>
    </div>
  )
}
