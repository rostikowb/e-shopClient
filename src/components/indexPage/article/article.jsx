import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import {NavLink} from "react-router-dom";
import './article.css'

const useStyles = makeStyles(theme => ({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    card: {
        width: 350,
        height: 526,
        display: 'flex',
        "flex-direction": "column",
        // "align-items": "center",
        "justify-content": "flex-start",
    },
    cardHeader: {
        fontFamily: 'Playfair',
        fontSize: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),

    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <NavLink to={'/news/' + props.id}>
                <CardHeader className={classes.cardHeader}
                            title={props.title}
                            subheader={props.date}
                />
            </NavLink>
            <CardMedia
                className={classes.media}
                image={props.imgSrc}
                title={props.title}
            />
            <CardContent>
                <Typography className="cardText" variant="body2" component="p">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions className="cardDetailsBox" disableSpacing>
                <NavLink className="cardDetails" to={'/news/' + props.id}>Детальніше</NavLink>
            </CardActions>
        </Card>
    );
}
