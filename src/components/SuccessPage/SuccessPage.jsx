import { Box, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

let defaultTheme = createTheme();
function SuccessPage() {
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
            <CheckCircleOutlineIcon fontSize="large" sx={{ color: "green" }} />
            <Typography
              variant="h3"
              sx={{
                fontSize: "22px",
                marginTop: "25px",
                color: "green",
                fontWeight: 700,
                fontFamily: "Cursive",
                marginBottom: "9px",
              }}
              component={"h3"}
            >
              Success Submitted
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "42px", marginTop: "15px" }}
              component={"h3"}
            >
              Congratulations
            </Typography>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{ marginTop: "22px" }}
            >
              {" "}
              Your request has been Successfully submitted to us.We <br /> will
              validate your informationa and reach out to you <br /> shortly
              with update.{" "}
            </Typography>

            <Typography
              variant="h6"
              component={"h6"}
              sx={{ fontSize: "14px", marginTop: "80px" }}
            >
              {" "}
              Redirecting you to Homepage in <span>5 Seconds</span>
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default SuccessPage;
