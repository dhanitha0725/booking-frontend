import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/joy";

const NavBar = () => {
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "background.surface",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        level="h4"
        component="h1"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Facility Booking
      </Typography>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default NavBar;
