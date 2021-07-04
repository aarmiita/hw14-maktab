import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Container from "@material-ui/core/Container";
import { Input, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { RootRef } from "@material-ui/core";
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
});
const UserDetailes = ({ data }) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  // useEffect(() => {
  //   const getUser = async () => {
  //     const userFromServer = await fetchTasks();
  //     setUser(userFromServer);
  //     console.log(user);
  //   };

  //   getUser();
  // }, []);

  // const fetchTasks = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://60c3832c2df2cb00178ab568.mockapi.io/users/${id}`
  //     );
  //     const user = await response.json();
  //     return user;
  //   } catch (err) {
  //     toast.error("request failed!");
  //   } finally {
  //     toast.success("it is done!!");
  //   }
  // };

  const classes = useStyles();
  const ref = useRef();
  useEffect(() => {
    ref.current.click();
  }, []);
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
                placeholder="Name"
                defaultValue={data.name}
                fullWidth={true}
              />
              <RootRef rootRef={ref}>
                <Input
                  placeholder="Company"
                  defaultValue={data.company}
                  fullWidth={true}
                />
              </RootRef>
              <Input
                placeholder="phone"
                defaultValue={data.phone}
                fullWidth={true}
              />
              <Input
                placeholder="Email"
                defaultValue={data.email}
                fullWidth={true}
              />
            </Box>
            {/* <Box component="div">Name :{user.name}</Box>
            <Box component="div">Company :{user.company}</Box>
            <Box component="div">Phone :{user.phone}</Box>
            <Box component="div">Email :{user.mail}</Box> */}
          </Box>
        </Typography>
      </Container>
    </>
  );
};

export default WithLoading(
  UserDetailes,
  "https://60c3832c2df2cb00178ab568.mockapi.io/users/"
);
