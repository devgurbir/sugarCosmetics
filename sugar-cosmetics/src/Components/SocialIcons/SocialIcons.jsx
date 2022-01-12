import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Box from "@mui/material/Box";

const SocialIcons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "25px",
        justifyContent: "center"
      }}
    >
      <FacebookIcon
        sx={{
          fontSize: 38,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      <TwitterIcon
        sx={{
          fontSize: 38,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
      <EmailOutlinedIcon
        sx={{
          fontSize: 38,
          cursor: "pointer",
          color: "#999999",
          "&:hover": {
            color: "white"
          }
        }}
      />
    </Box>
  );
};

export { SocialIcons };
