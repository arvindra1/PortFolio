import React from 'react'
import Modal1 from './Modal'

function Skills({role1,role2,role3,em1,em2,em3,d1,d2,d3}) {
  return (
   <>
    <h6>{role1}</h6><span>{em1}</span>
    <p>{d1}</p>
    <h6>{role2}</h6><span>{em2}</span>
    <p>{d2}</p>
    <h6>{role3}</h6><span>{em3}</span>
    <p>{d3}</p>
   </>
  )
}

export default Skills