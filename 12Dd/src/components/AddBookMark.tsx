import React from 'react'
import {
    makeStyles,
    Box,
    Typography,
    Button,
    TextField,
    TextareaAutosize,
  } from "@material-ui/core";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  import {AddBookmarkMutation, BookmarksQuery} from '../pages/index'
import { useMutation } from '@apollo/client';

    const useStyle =makeStyles({
        root:  {
           margin:"auto"
        }
    })
    const initialValues = {
        title: "",
        url: "",
        desc: "",
      };
  const AddBookMark = () => {
      const classes = useStyle()
      const [addBookmark] =useMutation(AddBookmarkMutation)
      const handleSubmit=async(values,actions)=>{
        await addBookmark({variables:{
            title: values.title,
            url: values.url,
            desc: values.desc,
        },
        refetchQueries:[{query:BookmarksQuery}]
        });
        actions.resetForm({
            values: {
              title: "",
              url: "",
              description: "",
            },
          });
    }
    return (
        <div style={{width:"50%", margin:"auto"}}>
            <div className={classes.root}>
                <Box p={6}>
                    <Box pb={4}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <Box p={1}>
                                    <Typography color="secondary">
                                        Add Bookmark
                                    </Typography>
                                </Box>
                                <Box p={2}>
                                    <Field 
                                        as={TextField}
                                        color="secondary"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="title"
                                        type="text"
                                        label="Title"

                                    />
                                </Box>
                                <Box p={2}>
                                    <Field 
                                        as={TextField}
                                        color="secondary"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="url"
                                        type="text"
                                        label="Url"

                                    />
                                </Box>
                                <Box p={2}>
                                    <Field 
                                        as={TextField}
                                        color="secondary"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="desc"
                                        type="text"
                                        label="Description"

                                    />
                                </Box>
                                <Button variant="contained" color="secondary" type="submit" style={{width:"30%", margin:"auto",display:"flex"}}>
                                    Submit
                                </Button>
                            </Form>
                        </Formik>
                    </Box>

                </Box>
            </div>
        </div>
    )
}

export default AddBookMark
