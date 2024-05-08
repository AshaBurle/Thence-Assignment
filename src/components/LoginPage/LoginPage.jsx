import {
  Box,
  Button,
  Stack,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

const defaultTheme = createTheme();
function RegistrationForm() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userData: {
        name: "",
        email: "",
      },
      showError: false,
    }
  );

  const handleChange = (e, data) => {
    const { userData } = state;
    userData[data] = e.target.value;
    setState(userData);
    console.log(userData);
  };
  let navigateTo = useNavigate();
  const handleSubmit = () => {
    if (
      state.userData.name !== "ashaburle" &&
      state.userData.email !== "ashaburle06@gmail.com"
    ) {
      setState({ showError: true });
    } else {
      setState({ showError: false });
      navigateTo("/success");
    }
  };

  const handleClose = () => {
    navigateTo("/");
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box component={"main"} maxWidth="xs" sx={{ padding: "30px" }}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component={"h1"}
              variant="h1"
              sx={{ fontWeight: 700, fontSize: "42px" }}
            >
              Brunel
            </Typography>
            <Button
              sx={{ color: "black", fontWeight: 0 }}
              onClick={handleClose}
            >
              {" "}
              <HighlightOffOutlinedIcon fontSize="large" color="default" />
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "22px",
                color: "lightgreen",
                fontFamily: "Cursive",
                marginBottom: "9px",
              }}
              component={"h3"}
            >
              Registration Form
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "42px" }} component={"h3"}>
              Start Your Success
              <br /> journey here!
            </Typography>
            <Stack
              component="form"
              sx={{
                width: "25ch",
                marginTop: "30px",
              }}
              spacing={4}
              noValidate
              autoComplete="on"
            >
              <TextField
                hiddenLabel
                onChange={(e) => handleChange(e, "name")}
                placeholder="enter your name"
                variant="filled"
                sx={{ borderRadius: "10px", borderWidth: "0px" }}
              />
              <TextField
                hiddenLabel
                placeholder="enter your email"
                onChange={(e) => handleChange(e, "email")}
                variant="filled"
              />
              {state.showError && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ErrorIcon fontSize="small" sx={{ color: "red" }} />
                  <Typography
                    component={"h6"}
                    variant="h6"
                    sx={{
                      color: "red",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginLeft: "3px",
                    }}
                  >
                    Enter valid user details
                  </Typography>
                </Box>
              )}
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ borderRadius: "10px" ,backgroundColor:'black'}}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default RegistrationForm;
