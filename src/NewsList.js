import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        display: "flex",
        marginBottom: theme.spacing(4),
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    title: {
        fontWeight: 600,
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    subtitle: {
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing(1),
    },
    description: {
        color: theme.palette.text.secondary,
    },
}));

function NewsList() {
    const classes = useStyles();
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
            )
            .then((response) => {
                setNews(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {news.map((article, index) => (
                <Card className={classes.card} key={index}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography
                                className={classes.title}
                                component="h2"
                                variant="h5"
                            >
                                <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                    {article.title}
                                </a>
                            </Typography>
                            <Typography
                                className={classes.subtitle}
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {article.author} |{" "}
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </Typography>
                            <Typography
                                className={classes.description}
                                variant="subtitle1"
                                paragraph
                            >
                                {article.description}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cardMedia}
                        image={article.urlToImage}
                        title={article.title}
                    />
                </Card>
            ))}
        </div>
    );
}

export default NewsList;