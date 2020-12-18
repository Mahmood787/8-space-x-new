import { Typography } from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player'
import { LaunchProfileQuery } from '../../generated/graphql'
import "./profile.css"

interface Props{
    data: LaunchProfileQuery
}
const LaunchProfile = ({data}:Props) => {
    console.log("LaunchProfile", data)
    return (
        <div className="Profile-container">
            <div className="p-header" >
                <div className="p-header-left" style={{float:"left"}}>
                    <Typography variant="h6">
                        Flight # {data.launch?.flight_number}
                    </Typography>
                </div>
                <div className="p-header-right" style={{float:"right"}}>
                    <Typography variant="h6">
                    Success: {String(data.launch?.launch_success!)}
                    </Typography>
                </div>
            </div>
            <div className="p-heading">
                <Typography variant="h3" color="secondary">
                    {data.launch?.mission_name} 
                </Typography>
                <p>{data.launch?.details} </p>
            </div> 
            <div className="p-img" >
                <img src={String(data.launch?.links?.flickr_images![0])}/>        
            </div>
            <div className="p-img" >
                <img src={String(data.launch?.links?.flickr_images![1])}/>        
            </div>
            <div className="p-img" >
                <img src={String(data.launch?.links?.flickr_images![2])}/>        
            </div>
        </div>
        
    )
}

export default LaunchProfile
