import React from 'react'

const About = () => {
  return (
    <div className='about-div' id='about'>
      <div className='container mt-5'>
        <div className='row'>
            <h2 className='mt-5 text-center mb-4'>About Us</h2>
            <div className='col-md-6'>
                <h5><b>Royal Body Massage Hub </b></h5> <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit sapiente quas, blanditiis ipsum commodi magnam nobis exercitationem fuga libero ab, eius illum odit iusto? Debitis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates, consequatur, commodi aperiam illum corporis quas dolorum facere voluptatibus unde, temporibus officia aspernatur laborum! Facere inventore ipsam natus consequuntur numquam laborum dolor impedit soluta at quod enim voluptatem, aspernatur, sed officia! Nihil accusamus architecto commodi doloribus repellat cumque eius vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non est, corrupti itaque voluptatum, provident tempore saepe.</p>
            </div>
            <div className='col-md-6'>
                <img src='./src/assets/massage3.jpg' className='img-fluid'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
