import React from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
const NotFound = () => {
  let history = useHistory();
  return (
    <div>
      <p>
        <strong>{history.location.pathname} </strong> does not exist
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        Back To Home
      </Button>
    </div>
  );
};

export default NotFound;
