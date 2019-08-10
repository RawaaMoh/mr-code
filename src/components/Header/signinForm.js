import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from "./firebase";
import signupForm from "./signupForm";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  // var firebase = require('firebase');
  // var firebaseui = require('firebaseui');


  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit() {
    // firebase.auth().signInWithEmailAndPassword(signupForm.e.target.value.email, signupForm.e.get.value.password).catch(function (error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });



  }

  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.value });
  // };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign In Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome back dear friend.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleChange("email")}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Enter your password"
            type="password"
            fullWidth
            onChange={handleChange("password")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}