import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

function ViewNotes() {
  const { id } = useParams();
  const [notes, setNotes] = useState([]);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      
    },
    inline: {
      display: 'inline',
      fontSize : '15px',
    },
  }));

  const classes = useStyles();

  const listNotes = () => {
    const API_URL = "http://127.0.0.1:8000/test/listnotes/";
    axios
      .get(API_URL, {
        params: { id: id },
      })
      .then((response) => {
        console.log(response);
        setNotes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listNotes();
  }, []);

  return (
    <div className="container center">
      <h2>Notes</h2>
      <List className={classes.root }>
      
      {notes.length > 0 ? (notes.map((note, index) => {
         
            return ( 
            <div className="">
            <ListItem alignItems="flex-start">
            <ListItemText
            key = {index}
            primary = {index+1 +" Note"}
  
            secondary={
              <React.Fragment>
                <Typography
                  component="h3"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {note.text}
                </Typography>
                
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </div>)
          })):
          <h3>
              Please add some notes
          </h3>
          }
      </List>
      <p>
          <br/>
        <a className="btn" href={"/addnotes/" + id}>
          <span>Add Note</span>
        </a>
      </p>
    </div>
  );
}

export default ViewNotes;
