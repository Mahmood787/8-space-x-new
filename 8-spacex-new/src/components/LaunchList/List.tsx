import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    listTopDiv:{
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "30px",
        rowGap:"50px",
        margin: "50px",
        justifyContent: "center",
        alignItems:"center"
    },
    root: {
      display: "grid",
      justifyContent: "center",
      alignItems:"center",
    },
    media: {
      height: 160,
      width: "100%",
    },
    text:{
        textAlign:"left"
    },
    textBody:{
        textAlign:"left",
        maxHeight: "75px",
        overflow:"hidden",
        textJustify:"inter-character",
        minHeight: "75px",
    }
  });
export interface OwnProps{
    
    callBack:(newId:number)=>void
}
interface Props extends OwnProps{
    data: LaunchesQuery
    setSW: (num:number)=>void
    refetch: any
    startWith: number
}
const LaunchList: React.FC<Props> = ({data,callBack,setSW,refetch,startWith}) => {
    console.log(data)
    const classes = useStyles()
    
    return (
        <div className={classes.listTopDiv}>
            {!!data.launches && data.launches.map((launch,ind)=>  
                !!launch &&   (
                    <>        
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia>
                                <img src={
                                   (!!launch.links?.flickr_images?.length ) ? (
                                    launch.links?.flickr_images[0]?.toString()):"https://live.staticflickr.com/65535/50428228397_6151927733_o.jpg"}
                                    className={classes.media}/>
                            </CardMedia>
                                <CardContent>
                                    <Typography className={classes.text} gutterBottom variant="h5" component="h2">
                                        {launch?.mission_name}
                                    </Typography>
                                    <Typography  className={classes.textBody} variant="body2" color="textSecondary" component="p">
                                        {launch.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Link to={launch.links?.article_link!} style={{textDecoration:"none"}}>
                                <Button size="small" color="secondary" variant="contained">
                                    Go to Article 
                                </Button>
                                </Link>
                                <Link to="/Profile" style={{textDecoration:"none"}}>
                                <Button size="small" color="secondary" variant="contained"
                                    onClick={()=>callBack(launch.flight_number!)}
                                >
                                Learn More
                                </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </>
                )
            )}
           <Button onClick={()=>{setSW(startWith+6);refetch()}}
           variant="contained"
           color="secondary"
            style={{margin:"auto", gridColumn:"2", width:"50%",fontWeight:"bolder"}}
           >Add More</Button>
        </div>
    )
}
export default LaunchList
