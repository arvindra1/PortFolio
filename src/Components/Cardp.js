import React from 'react'
import { Card } from 'antd'
import './Cardp.css'

function Cardp({ icon, names, description }) {
    return (
        <Card className='cp' hoverable={true}>
            <div style={{fontSize:'40px'}}>
                {icon}
            </div>
            <div>
            <p><h2><b>{names}</b></h2></p>
                
            </div>
            <div>
                <p>
                   
                        {description}
                   

                </p>
            </div>
        </Card>
    )
}

export default Cardp