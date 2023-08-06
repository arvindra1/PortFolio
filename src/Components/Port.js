import React from 'react'
import './Port.css'

function Port({url,title,des,red}) {
  return (
    <div className="card" style={{margin:'20px 0'}}>
    <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Mountain"/>
    <div className="info">
      <h6>Mountain</h6>
      <p>Lorem Ipsum is simply dummy text from the printing and typesetting industry</p>
      <a href={red}>Read More</a>
    </div>
  </div>

    )
}

export default Port