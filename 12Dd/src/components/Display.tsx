import { useQuery } from '@apollo/client'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {BookmarksQuery} from '../pages/index'

const useStyle = makeStyles({
    cardWrapper: {
        background: "#f3f3f3",
        padding: "40px",
        maxWidth: "600px",
        margin: "10px auto 0 auto ",
        borderRadius: "8px",
        position: "relative",
      },
      title: {
        textTransform: "capitalize",
        fontSize: "30px",
        fontWeight: 550,
        textAlign: 'left'
      },
      desc:{
          textAlign: 'left',
          fontSize: "20px"
      }
})
const Display = () => {
    const classes = useStyle()
    const {loading, error, data} = useQuery(BookmarksQuery)
    console.log(data)

    return (
        <div style={{margin:"auto", textAlign:"center", background:""}}>
            <Box p={8}>
                <Typography variant="h4" color="primary"> Previously Created Bookmarks</Typography>
            </Box>
            <Box color="black">
                {data?.bookmark && data.bookmark.map((res:{id:string,title:string,url:string,desc:string},ind)=>(
                    <div key={ind} className={classes.cardWrapper}>
                        <Box>
                            <Typography  className={classes.title}>
                                Title: {res.title}
                            </Typography>
                        </Box>
                        <Box pb={2}>
                            <Typography className={classes.desc} >
                                Description: {res.desc}
                            </Typography>
                        </Box>
                        <Box pt={3} style={{textAlign:"left"}}>
                            <a href={res?.url} target="_blank" style={{textDecoration:"none"}}>
                                <Button
                                    variant="contained"
                                    disableElevation
                                    color="secondary"
                                >
                                    Open Bookmark
                                </Button>
                            </a>
                            
                        </Box>
                    </div>
                ))}
            
            </Box>
        </div>
    )
}

export default Display
