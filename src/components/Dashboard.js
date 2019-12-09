import React from 'react';
import Typography from '@material-ui/core/Typography';
import DashboardScore from './DashboardScore';

import './Dashboard.css';

// export default function Dashboard(){

//export default function Dashboard({ feedbackList = [] }) {
export default function Dashboard({ score = { likeCount: 0, dislikeCount: 0 }, onLikeClick, onDislikeClick}) {
    //  const likes = feedbackList.filter(feedback => feedback.score > 0).length;
    //  const dislikes = feedbackList.filter(feedback => feedback.score < 0).length;
    return (
        <div className="dashboard">
            <div className="dashboard__event-title">
                <Typography component="h2" variant="h4" align="center">
                    MyLiveEvent
        </Typography>
            </div>
            <div className="dashboard__event-description">
                <Typography color="textSecondary" align="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
            </div>
            <div className="dashboard__event-score">
                {/* Event Score */}
                {/* <DashboardScore/> */}
                {/* <DashboardScore likes={likes} dislikes={dislikes} /> */}
                <DashboardScore
                    likes={score && score.likeCount}
                    dislikes={score && score.dislikeCount}
                    onLikeClick={onLikeClick}
                    onDislikeClick={onDislikeClick}
                />
            </div>
        </div>
    );
}