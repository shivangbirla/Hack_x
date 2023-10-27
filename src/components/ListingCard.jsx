import React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Listing } from "../data/data";

const ListingCard = () => {
  const { id } = useParams();
  const card = Listing[id]; // Assuming the id is the index of the selected card in the Listing array

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <>
      <Card className="ml-[35vw] mt-[10vh] w-[300px] h-auto">
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={card.img} // Fixed this line to use the card object
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography>{card.description}</Typography>
        </CardContent>
        <CardActions style={{ paddingLeft: "18px", paddingBottom: "25px" }}>
          <Button variant="contained">Appointment</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ListingCard;
