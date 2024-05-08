import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <div className="mx-10 mt-10">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "40px",
            margin: "30px",
            marginTop: "10px",
            backgroundColor: "#eeeeee",
            borderRadius: "30px",
          }}
          container
        >
          <Typography sx={{ fontWeight: "700" }}>
            Talup 2023, all rights reserved
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }} item>
            <Link>
              <Typography
                marginRight={4}
                sx={{ color: "black", fontWeight: "700" }}
              >
                Terms & Conditions
              </Typography>
            </Link>
            <Link>
              <Typography sx={{ color: "black", fontWeight: "700" }}>
                Privacy Policy
              </Typography>
            </Link>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Footer;
