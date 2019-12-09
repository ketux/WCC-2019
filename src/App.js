// import React from 'react';
//import React, { useState } from "react";
import React, { useEffect, useState } from 'react';
import FeedbackList from './components/FeedbackList';
import PageBox from './layout/PageBox';
import CssBaseline from '@material-ui/core/CssBaseline';
import VideoStream from './components/VideoStream';
import Dashboard from './components/Dashboard';
import PageControls from './components/PageControls';
import AddFeedbackForm from './components/AddFeedbackForm';
import * as feedbackStorage from './service/feedbackStorage';


import './App.css';


/*
function App() {
  return (
      <div>
        <FeedbackList msg="my custom message"/>
      </div>
  );
}
export default App;
*/

/*
function App() {
  return (
      <div>
        <FeedbackList msg="My Custom Message" version={2}/>
      </div>
  );
}
export default App;
*/

const DEFAULT_EVENT_ID = 'xwFMtkbumxM';


function App() {
  // const feedbackList = [
  //  { id: '01', name: 'Jonas', datetime: 'YYYY-MM-DD', score: 1, text: 'komentaras kaip vertina Jonas' },
  //  { id: '02', name: 'Aldona', datetime: 'YYYY-MM-DD', score: -1, text: 'komentaras kaip vertina Aldona' },
  //  { id: '02', name: 'Aldona', datetime: 'YYYY-MM-DD', score: -1, text: 'komentaras kaip vertina Aldona'},
  //];

  //const initialFeedbackList = [];
  // const eventId = 'WUWz6xmSzbk';

  //const [feedbackList, setFeedbackList] = useState(initialFeedbackList);

  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackFormVisible, setFeedbackFormVisible] = useState(false);
  const [eventId, setEventId] = useState(DEFAULT_EVENT_ID);
  const [score, setScore] = useState({ dislikeCount: 0, likeCount: 0 });

  useEffect(() => {
    feedbackStorage.initialize();
    const pathEventId = window.location.pathname.replace('/', '');
    if (pathEventId) {
      setEventId(pathEventId);
    }
  }, []);

  useEffect(() => {
    feedbackStorage.listenForListChanges(eventId, newList =>
      setFeedbackList(newList)
    );
    feedbackStorage.listenForScoreChanges(eventId, newScore =>
      setScore(newScore)
    );
  }, [eventId]);

  function addFeedback(feedbackInput) {
    const now = new Date();
    const newEntry = {
      id: Math.random(),
      name: feedbackInput.name,
      datetime: now.toUTCString(),
      score: feedbackInput.score,
      text: feedbackInput.text
    };
    // console.log(newEntry);
    // setFeedbackList(prevFeedbackList => [newEntry, ...prevFeedbackList]); // rodo ekrane
    feedbackStorage.addFeedback(eventId, feedbackInput); //kelia i duomenu baze
    hideFeedbackForm();
  };

  function hideFeedbackForm() {
    setFeedbackFormVisible(false);
  }

  function showFeedbackForm() {
    setFeedbackFormVisible(true);
  }

  return (
    <>
      <CssBaseline />

      <div className="main-content">
        <div className="main-content__left">
          <PageBox>
            <FeedbackList feedbackList={feedbackList} />
          </PageBox>
        </div>
        <div className="main-content__right">
          <div className="sub-section">
            <PageBox>
              <VideoStream
                videoUrl={`https://www.youtube.com/embed/${eventId}?controls=0`}
              />
            </PageBox>
          </div>

          <div className="sub-section"></div>
          <PageBox>
            {/* <h2>Renginio rezultatai</h2> --> */}
            {/* <Dashboard/> */}
            {/* <Dashboard feedbackList={feedbackList} /> */}
            <Dashboard score={score} onLikeClick={showFeedbackForm} onDislikeClick={showFeedbackForm }/>
          </PageBox>
        </div>
        {/* <PageControls /> */}
        {/* <AddFeedbackForm /> */}

        <PageControls buttonAction={showFeedbackForm} />
        {feedbackFormVisible && (
          // <AddFeedbackForm onCancel={hideFeedbackForm} />
          <AddFeedbackForm onCancel={hideFeedbackForm} onSubmit={addFeedback} />
        )}
      </div>
    </>
  );
}
export default App;