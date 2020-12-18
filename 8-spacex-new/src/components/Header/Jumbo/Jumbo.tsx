import { Button, Typography } from '@material-ui/core'
import React from 'react'
import {Link } from "react-router-dom"

interface Props {
    jamboState: boolean
    setJamboState: (id:boolean)=>void
}
const Jumbo = ({jamboState, setJamboState}:Props) => {
    
    return (
        <div className={!jamboState ? "Jumbo" : "Jumbo2"}>
            <div className={!jamboState ? "h11" : "h22"}>
                <p>UPCOMING LAUNCH</p>
                <h2>NROL-108 MISSION</h2>
                <p>Dragon is designed to autonomously dock and undock</p>
                <p> with the International Space Station.  </p> 
               {!jamboState ? (
                   <>
                   <p> However, the crew can take manual control if necessary.</p> 
                   <Link to="/LaunchList" onClick={()=>{setJamboState(true)}}>
                       <Button variant="contained" style={{marginTop:"20px",fontWeight:"bolder"}}>More Missions</Button>
                   </Link>
                   </>
               ): null} 
            </div>
        </div>
    )
}

export default Jumbo
