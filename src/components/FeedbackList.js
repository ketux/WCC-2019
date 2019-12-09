import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import ScoreIcon from './ScoreIcon';

import './FeedbackList.css';

/*
export default function FeedbackList(props) {
  const content = <div>Mano pirmas komponentas su {props.msg}</div>;
  return content;
}
*/

/*
export default function FeedbackList() {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Vardas"
          secondary="informacinis tekstas"
        />
      </ListItem>
    </List>
  );
} */

/* 
Iterpia ikonele 
*/



/*
export default function FeedbackList({ feedbackList = [] }) {
  console.log (feedbackList)
  return (
    <List>
      <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ThumbUpIcon/>
        </Avatar>
      </ListItemAvatar>

        <ListItemText
          primary="Vardas"
          secondary="informacinis tekstas"
        />
      </ListItem>
    </List>
  );
}
*/

/*
export default function FeedbackList({ feedbackList = [] }) {
  return (
    <List>
     {feedbackList.map(feedback => (
       
       <ListItem key={feedback.id}>
          <ListItemAvatar>
            <Avatar>
              <ThumbUpIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={feedback.name}
            secondary={<> {feedback.datetime} / {feedback.text}</>}
          />
        </ListItem>
     ))}
    </List>
  );
}
*/

export default function FeedbackList({ feedbackList = [] }) {
  return (
    <List>
      {feedbackList.map(feedback => (
        
        <ListItem key={feedback.id}>
          <ListItemAvatar>
           <ScoreIcon score={feedback.score}/>
          </ListItemAvatar>
          <ListItemText
            primary={feedback.name}
            secondary={<> {feedback.datetime} / {feedback.text}</>}
          />
        </ListItem>
      ))}
    </List>
  );
}
  


/*
export default function FeedbackList({ msg, version = null }) {
  const classes = `Feedback-List Feedback-List-${version}`;
  return (
    <div className={classes}>
      <h1>Mano pirmas komponentas pavadinimu <h3> {msg} </h3> </h1> 
      {version && (
        <p>Tai versija {version}</p>
      )}
    </div>
  );
}
*/