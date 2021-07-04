import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Container from "@material-ui/core/Container";
import { Input, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { RootRef } from "@material-ui/core";
import WithLoading from "./WithLoading";
const useStyles = makeStyles({
  main: {
    width: "100%",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "gray",
  },
  box: {
    padding: "20px",
    margin: "10px 15px",
  },
  input: {
    color: "white",
  },
});
const UserDetailes = ({ data }) => {
  const classes = useStyles();
  const ref = useRef();
  useEffect(() => {
    ref.current.click();
  }, []);
  console.log(data);
  return (
    <>
      <ToastContainer />
      <Container fixed>
        <Typography component="div" className={classes.main}>
          <Box component="div" className={classes.box}>
            <Box component="div" m={1}>
              <img src={data.avatar} />
            </Box>
            <Box component="div">
              <Input
                className={classes.input}
                placeholder="Name"
                defaultValue={data.name}
                fullWidth={true}
              />
              <RootRef rootRef={ref}>
                <Input
                  className={classes.input}
                  placeholder="Company"
                  defaultValue={data.company}
                  fullWidth={true}
                />
              </RootRef>
              <Input
                className={classes.input}
                placeholder="phone"
                defaultValue={data.phone}
                fullWidth={true}
              />
              <Input
                className={classes.input}
                placeholder="Email"
                defaultValue={data.mail}
                fullWidth={true}
              />
            </Box>
          </Box>
        </Typography>
      </Container>
    </>
  );
};

export default WithLoading(
  UserDetailes,
  "https://60c3832c2df2cb00178ab568.mockapi.io"
);
