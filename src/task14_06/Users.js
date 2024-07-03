import React from 'react'

export default function Users() {
  return (
    <div class="hometext">
      <h1>
        Registered Users
      </h1>
      <table border={2} cellPadding={10}>
        <thead>
            <tr>
                <th>
                    <td>Name</td>
                </th>
                <th>
                    <td>Email</td>
                </th>
                <th>
                    <td>Employee Code</td>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Neha Singh</td>
                <td>neha@test.com</td>
                <td>SY0014</td>
            </tr>

            <tr>
                <td>Ashish Verma</td>
                <td>ashish@test.com</td>
                <td>SY0078</td>
            </tr>

            <tr>
                <td>Seema Jain</td>
                <td>seemajain@test.com</td>
                <td>SY00154</td>
            </tr>
            
            <tr>
                <td>Animesh Tiwari</td>
                <td>animesh@test.com</td>
                <td>SY00176</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
