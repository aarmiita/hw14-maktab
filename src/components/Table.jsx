import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import WithLoading from "./WithLoading";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    overflowX: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    padding: "10px",
    margin: "10px",
  },
  container: {
    overflowX: "scroll",
  },
});

function BasicTable({ data }) {
  const url = "https://60c3832c2df2cb00178ab568.mockapi.io/users";
  const classes = useStyles();

  let history = useHistory();

  return (
    <>
      <ToastContainer />
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Picture</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  <Button onClick={() => history.push(`/users/${user.id}`)}>
                    {user.name}
                  </Button>
                </TableCell>
                <TableCell align="right">{user.company}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.mail}</TableCell>
                <TableCell align="right">
                  <img src={user.avatar} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default WithLoading(
  BasicTable,
  "https://60c3832c2df2cb00178ab568.mockapi.io/users"
);
