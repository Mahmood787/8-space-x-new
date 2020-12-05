import React from "react"
import {useMutation, useQuery} from '@apollo/client'
import gql from 'graphql-tag'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Container, Grid, Typography } from "@material-ui/core";
import AddBookMark from "../components/AddBookMark";
import Display from "../components/Display";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export const BookmarksQuery = gql`
  {
    bookmark{
      title
      url
      desc
      id
    }
  }
`;
export const AddBookmarkMutation = gql`
  mutation addBookmark($title: String,$url:String!, $desc:String!){
    addBookmark(title:$title, url:$url, desc:$desc){
      url
    }
  }
`;
export default function Home() {
  const {loading, error, data} = useQuery(BookmarksQuery)
  const [addBookmark] =useMutation(AddBookmarkMutation)
  
  let textfield;
  let desc;
  const addBookmarkSubmit=async()=>{
    await addBookmark({variables:{
      url : textfield.value,
      desc : desc.value
    }})
    console.log("desc",desc.value, "url",textfield.value)
  }
  const classes = useStyles();

  return (
    <div >
      <Box p={6} style={{textAlign:'center'}}>
        <Typography variant="h3" color="primary">
          Wellcome to Bookmarking App
        </Typography>
      </Box>
      <AddBookMark/>
      <Display/>
    </div>
  )
}
