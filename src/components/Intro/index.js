import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue, orange,pink } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    margin: 5,
    marginTop: 200,
  },
  media: {
  
  
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
    backgroundColor: pink[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  

  return (
    <Grid id="lessons" container spacing={3} justify="center">
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            MR 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="HTML"
        subheader="HTML FOR KIDS"
      />
      <CardMedia
        className={classes.media}
        image="https://www.moradam.com/wp-content/uploads/2018/01/HTML-Kod-Rehberi.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This lesson including only basic html explanation.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>What is HTML?</Typography>
          <Typography paragraph>
            <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
          </Typography>
         
        
        </CardContent>
      </Collapse>
    </Card>
    <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          MR
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="CSS"
      subheader="CSS FOR KIDS"
    />
    <CardMedia
      className={classes.media}
      image="https://www.adtrak.co.uk/wp-content/uploads/2018/03/css-selectors-hero-1024x625.jpg"
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
      This lesson including only basic css explanation.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>What is CSS?</Typography>
        <Typography paragraph>
        
<li>CSS stands for Cascading Style Sheets</li>
<li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
<li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
<li>External stylesheets are stored in CSS files</li>
        </Typography>
        
      </CardContent>
    </Collapse>
  </Card>
    </Grid>
      );
}
