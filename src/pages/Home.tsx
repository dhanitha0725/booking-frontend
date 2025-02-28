import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { Box, Button, Container, Typography } from "@mui/joy";
import FacilityTypeCard from "../components/FacilityTypeCard";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [facilityTypes, setFacilityTypes] = useState<{ typeName: string }[]>(
    []
  );
  const facilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("http://localhost:5162/api/Facility/facility-types")
      .then((res) => res.json())
      .then((data) => setFacilityTypes(data))
      .catch((error) => console.error("Error fetching facility types:", error));
  }, []);

  const scrollToFacilities = () => {
    facilitiesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <NavBar />
      {/* Hero Section */}
      <Box component="header" className="hero-section">
        <Box className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200"
            alt="Modern office building"
            className="hero-image"
          />
        </Box>
        <Container className="hero-content">
          <Box className="hero-text-container">
            <Typography
              level="h1"
              className="hero-title"
              sx={{ color: "white" }}
            >
              Welcome to Facility Booking
            </Typography>
            <Typography
              level="body-md"
              className="hero-description"
              sx={{ color: "white" }}
            >
              Book your ideal facility space with ease. Modern solutions for
              modern needs.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
              <Button
                size="lg"
                onClick={scrollToFacilities}
                className="hero-button"
              >
                View Facilities
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Facilities Section */}
      <Box ref={facilitiesRef} className="facilities-section">
        <Typography level="h2" className="facilities-title">
          Our Facilities
        </Typography>
        <FacilityTypeCard facilityTypes={facilityTypes} />
      </Box>
    </Box>
  );
};

export default Home;
