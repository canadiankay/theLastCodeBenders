import * as React from "react";
import { useRef, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  marginBottom: "10%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  width: 500,
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
  justifyContent: "center",
  flexDirection: "column",
  overflow: "scroll",
};

export default function Register() {
  const uploadInputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // remove console after testing
    console.log({
      name: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [file, setFile] = useState();

  const onChange = (newValue) => {
    setFile(newValue);
  };
  return (
    <>
    <Button variant="outlined" onClick={handleOpen}>Register</Button>
    <Modal
      aria-labelledby="transition-modal"
      aria-describedby="transition"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 600,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {/* register text fields */}
          <Typography component="h1" variant="h7">
            Get Started as a Mentor
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              placeholder="Enter a screen name"
              name="username"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              placeholder="What city are you from?"
              name="city"
              
            />
            <Box sx={{ textAlign: "center" }}>
              <Typography component="div" variant="body1">
                What race/ethnicity do you identify as?
              </Typography>
              
              <FormControlLabel
                control={<Checkbox value="eth-east-asian" color="primary" />}
                label="East-Asian"
              />
              <FormControlLabel
                control={<Checkbox value="eth-south-asian" color="primary" />}
                label="South Asian"
              />
              <FormControlLabel
                control={<Checkbox value="eth-african" color="primary" />}
                label="Black/African"
              />
              <FormControlLabel
                control={<Checkbox value="eth-hispanic" color="primary" />}
                label="Hispanic"
              />
              <FormControlLabel
                control={<Checkbox value="eth-arab" color="primary" />}
                label="Arab"
              />
              <FormControlLabel
                control={<Checkbox value="eth-white" color="primary" />}
                label="White/Caucasian"
              />
              <FormControlLabel
                control={<Checkbox value="eth-other" color="primary" />}
                label="Other"
              />
              <TextField
                margin="normal"
                fullWidth
                id="other-eth"
                label="Other"
                name="other-eth"
              
              />
            </Box>

            {/* common Languages with other */}
            <Box sx={{ textAlign: "center" }}>
              <Typography component="div" variant="body1">
                What language(s) are you able to provide assistance in?
              </Typography>
              <FormControlLabel
                control={<Checkbox value="english" color="primary" />}
                label="English"
              />
              <FormControlLabel
                control={<Checkbox value="french" color="primary" />}
                label="French"
              />
              <FormControlLabel
                control={<Checkbox value="asl" color="primary" />}
                label="American Signed Language"
              />
              <FormControlLabel
                control={<Checkbox value="other" color="primary" />}
                label="Other"
              />
              <TextField
                margin="normal"
                fullWidth
                id="other-language"
                label="Other"
                name="otherLanguage"
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
            <Typography component="div" variant="body1">
              Please upload a copy of a background check check (completed within
              the last six months):
              <br />
              <div>
              <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                value={file}
                style={{ display: "none" }}
                onChange={onChange}
              />
              </div>
              </Typography>
              <Button
                onClick={() =>
                  uploadInputRef.current && uploadInputRef.current.click()
                }
                variant="contained"
              >
                Upload
              </Button>

            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              placeholder="Confirm password"
              type="password"
              id="repeat_password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Already have a mentor account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Modal>
    </>
  );
}
