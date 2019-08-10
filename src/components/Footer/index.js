import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import makbuleImage from '../../assets/makbule.jpg';
import ruyaImage from '../../assets/ruya.jpg';
import { SocialIcon } from 'react-social-icons';
import styles from './index.module.scss';
import { red, blue, orange,pink,lightpink } from '@material-ui/core/colors'


const messages = [
  
  {
    id: 1,
    primary: 'RUYA RAWA',
    secondary: `Studied Biomedical Engineering.Still lives in İstanbul`,
    person: ruyaImage,
  },
  {
    id: 2,
    primary: 'MAKBULE',
    secondary: `Studied Food Engineering.Still lives in Gaziantep.`,
    person: makbuleImage,
  },
];

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),

  
  },
  paper: {
    paddingBottom: 50,
    backgroundColor : "lightpink",
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  
}));

export default function BottomAppBar() {
  const classes = useStyles();

  messages.map(({ id, primary, secondary, person,  }) => {
    console.log(person)
  });
    

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper id="footer" square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          WHO ARE WE 
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}></ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}></ListSubheader>}
              <ListItem button>
                <ListItemAvatar >
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <SocialIcon url='http://www.twitter.com/makbuleozbay8' />
                <SocialIcon url='https://www.facebook.com/rawaa.rajab'/>
            
              </ListItem>
             </React.Fragment>
            
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
