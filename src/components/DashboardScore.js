import React from 'react';
import ScoreSeparatorIcon from '@material-ui/icons/Remove';
import ScoreIcon from './ScoreIcon';
//import DashboardScore from './DashboardScore'

import './DashboardScore.css'

// export default function DashboardScore() {
export default function DashboardScore({likes, dislikes, onLikeClick, onDislikeClick}) {
  return (
    <div className="dashboard-score">
      <div className="dashboard-score__box">
        {/* <h4 className="dashboard-score__scoreboard-item">0</h4> */}
        {/* <ScoreIcon score={1}/> */}
        <h4 className="dashboard-score__scoreboard-item">{likes || 0}</h4>
        <ScoreIcon score={1} onClick={onLikeClick}/> 
      </div>
      <div className="dashboard-score__scoreboard-item">
        <ScoreSeparatorIcon />
      </div>
      <div className="dashboard-score__box">
        {/* <ScoreIcon score={-1}/> */}
        {/* <h4 className="dashboard-score__scoreboard-item">0</h4> */}
        <ScoreIcon score={-1} onClick={onDislikeClick}/>
       <h4 className="dashboard-score__scoreboard-item">{dislikes || 0}</h4>
      </div>
    </div>
  );
}