import React from "./node_modules/react";
import { withStyles } from "./node_modules/@material-ui/core/styles";
import Card from "./node_modules/@material-ui/core/Card";
import CardActionArea from "./node_modules/@material-ui/core/CardActionArea";
import CardContent from "./node_modules/@material-ui/core/CardContent";
import CardMedia from "./node_modules/@material-ui/core/CardMedia";
import Typography from "./node_modules/@material-ui/core/Typography";

const styles = {
  cardContainer: {
    display: "inline-grid",
    margin: "10px"
  },
  card: {
    maxWidth: "300px",
    display: "inline-block"
  },
  media: {
    objectFit: "cover"
  }
};


const BookCard = props => {
  const { classes } = props;

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}
        title={props.title}
        image={props.image}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.title}
            className={classes.media}
            height="200"
            image={props.image || "https://via.placeholder.com/200"}
            src={props.link}
            title={props.title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title} | {props.authors}
            </Typography>
            <Typography component="p">{props.description}</Typography>
          </CardContent>
        </CardActionArea>

        <div actionbtns="action-buttons" {...props} >
          {props.children}
        </div>
      </Card>
    </div>
  );
};

export default withStyles(styles)(BookCard);
