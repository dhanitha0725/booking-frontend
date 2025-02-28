import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography, Link } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      sx={{
        position: "absolute",
        top: "1rem",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            level="h4"
            component={Link}
            sx={{
              cursor: "pointer",
              color: "white",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            Facility Booking
          </Typography>

          <Button
            variant="outlined"
            sx={{
              display: { xs: "block", lg: "none" },
              ml: "auto",
              color: "white",
              borderColor: "white",
            }}
          >
            <MenuIcon />
          </Button>

          <Box
            component="ul"
            sx={{
              display: { xs: "none", lg: "flex" },
              p: 0,
              m: 0,
              listStyle: "none",
              gap: 2,
            }}
          >
            <Box component="li">
              <Link
                sx={{ color: "white", textDecoration: "none" }}
                onClick={() => navigate("/")}
              >
                Home
              </Link>
            </Box>
            <Box component="li">
              <Link
                sx={{ color: "white", textDecoration: "none" }}
                onClick={() => navigate("/about")}
              >
                About Us
              </Link>
            </Box>
            <Box component="li">
              <Link
                sx={{ color: "white", textDecoration: "none" }}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Link>
            </Box>
          </Box>

          <Box
            component="ul"
            sx={{
              display: { xs: "none", lg: "flex" },
              p: 0,
              m: 0,
              listStyle: "none",
              gap: 2,
            }}
          >
            <Box component="li">
              <Button
                variant="outlined"
                color="neutral"
                sx={{ color: "white", borderColor: "white" }}
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
