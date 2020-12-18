import { AppBar, Button, IconButton, makeStyles, MenuItem, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom"

const useStyle = makeStyles((theme)=>({
    title:{
        flexGrow: 1,
        textAlign: "start"
    },
    menuButton: {
        marginRight: theme.spacing(2)
      },
      appBar:{
          background:"black"
      }
}))

interface Props {
    setJamboState: (id:boolean)=>void
}

const Header = ({setJamboState}:Props) => {
    const classes = useStyle()
    return (
        <div >
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                <IconButton
                    edge="start"
                    className = {classes.menuButton}
                    color = "inherit"
                    aria-label = "menu"
                    >
            <MenuIcon /> 
          </IconButton>
            <Typography variant="h5" className={classes.title}>SpaceX App</Typography>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Button variant="contained"
                         color="secondary"
                         onClick={()=>{setJamboState(false)}}
                         >
                             Home
                         </Button >
                    </Link>
                    <Link to="/LaunchList"style={{textDecoration:"none"}}>
                     <Button variant="contained" color="secondary"
                        style={{marginLeft:"20px"}}
                        onClick={()=>{setJamboState(true)}}
                     >Missions</Button >
                    </Link>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header
