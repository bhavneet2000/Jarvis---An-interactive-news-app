import React from "react";
import { Grid, Grow, Typography, Card, CardContent } from "@material-ui/core";
import useStyles from "./styles";
import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  { color: "#ff3333", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#b30000",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#ff6666",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Narendra Modi...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#660000",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from BBC News",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              style={{ display: "flex" }}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h4">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try Saying: <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Card className={classes.card2} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              <Typography variant="h6">
                Try Saying: <br />
                <i>Open article number [5]</i>
              </Typography>
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card2} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              <Typography variant="h6">
                Try Saying: <br />
                <i>Go back</i>
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              md={6}
              style={{ display: "flex" }}
            >
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </>
  );
};

export default NewsCards;
