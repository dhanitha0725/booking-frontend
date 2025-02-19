import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Button, Typography } from "@mui/joy";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <NavBar />
      <Box
        component="header"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          gap: 2,
        }}
      >
        <Typography level="h2">Welcome to Facility Booking</Typography>
        <img src="/hero-image.jpg" alt="Hero" />
        <Button size="lg" onClick={() => navigate("/facilities")}>
          View Facilities
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
