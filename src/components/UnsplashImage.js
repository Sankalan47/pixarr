import { Card, CardMedia, Typography } from "@material-ui/core";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

import "./style.css";

const styles = {
  cntnr: {
    marginLeft: "4rem",
    marginRight: "4rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    padding: "0.6rem",
    bottom: "0px",
    left: "60px",
    color: "white",
    zIndex: "100",
    fontSize: "1.5vw",
  },
  overlayimg: {
    borderRadius: "20px",
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "white",
    zIndex: "100",
  },
  overlaybtn: {
    position: "absolute",
    bottom: "10px",
    right: "20px",
    color: "white",
    zIndex: "100",
  },
};

const UnsplashImage = (props) => {
  return (
    /* <GridList cellHeight={500} cols={3}> */

    /* // <GridListTile */
    /* //   style={{ flexGrow: "1" }}
        //   cols={(img.width / 1200 / 3).toFixed(0)}
        // > */
    <div className="marginPhotos" style={styles.cntnr}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {props.photos.map((img) => (
            <Card style={{ position: "relative", borderRadius: "20px" }}>
              <CardMedia>
                <img
                  src={img.urls.regular}
                  className="marginimg"
                  alt="img.user.username"
                  style={{
                    display: "block",
                    width: "100%",
                    borderRadius: "12px",
                  }}
                />
              </CardMedia>

              <img
                src={img.user.profile_image.small}
                style={styles.overlayimg}
                alt={img.urls.description}
              />
              <Typography gutterBottom component="h3" style={styles.overlay}>
                {img.user.username}
              </Typography>
              <Button color="primary" style={styles.overlaybtn}>
                <a
                  href={`${img.links.download}?force=true`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <GetAppIcon />
                </a>
              </Button>
            </Card>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
    /* //   <GridListTileBar */
    /* //     title={ */
    /* //       <Grid direction="row">
        //         <img src={img.user.profile_image.small} alt="profilePic" />
        //         <h3>{img.user.username}</h3>
        //       </Grid>
        //     }
        //     actionIcon={ */
    /* //       <Button color="primary" onClick={img.links.download}>
        //         <a href={`${img.links.download}?force=true`} target="_blank">
        //           {" "}
        //           <GetAppIcon />
        //         </a>
        //       </Button>
        //     }
        //   />
        // </GridListTile> */

    /* </GridList> */
  );
};
export default UnsplashImage;
