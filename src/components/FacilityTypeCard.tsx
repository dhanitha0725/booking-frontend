import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

interface FacilityType {
  typeName: string;
  imageUrl: string; // Add this field
}

interface FacilityTypeCardProps {
  facilityTypes: FacilityType[];
}

export default function FacilityTypeCard({
  facilityTypes,
}: FacilityTypeCardProps) {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        p: 2,
        m: 0,
        listStyle: "none",
        justifyContent: "center",
      }}
    >
      {facilityTypes.map((facility) => (
        <Card
          key={facility.typeName}
          component="li"
          sx={{
            minWidth: 400,
            minHeight: 300,
            maxWidth: 500,
            flexGrow: 1,
            cursor: "pointer",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <CardCover>
            <img
              src={
                facility.imageUrl ||
                "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8"
              }
              alt={facility.typeName}
              loading="lazy"
            />
          </CardCover>
          <CardContent>
            <Typography
              level="h3"
              textColor="#fff"
              sx={{
                fontWeight: "lg",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {facility.typeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
