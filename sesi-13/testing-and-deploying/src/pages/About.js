import React from 'react'

function About() {
  return (
    <>
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 border mt-4">
      <div className='container-fluid py-5'>
        <h3 className='display-5 fw-bold'>Getting know more about me</h3>
          <br />
          <h6 className='col-md 8 fs-4'>Biodata</h6>
          <br />
          <p className='col-md 8 fs-4'>Name: Fitri Aulia S.
          <br/>
          Student's code: RCTN-KS-005-024
          <br/>
          Hobby: Playing games
          </p>
          
          <br/>
          <h6 className='col-md 8 fs-4'>Progress</h6>
          <br/>
          <p className='col-md 8 fs-4'>Sesi 1 s/d 13 <b>Done</b>
          <br/>
          Self pace learning: <br/>
          - HTML dan CSS Dasar <b>Done</b> <br/>
          - Styling Komponen React <b>Not yet</b> <br/>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About;
