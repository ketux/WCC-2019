//import React from 'react';
//import React, { useState } from 'react';
import React, { useEffect, useState } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// export default function AddFeedbackForm() {
//export default function AddFeedbackForm({ onCancel, onSubmit }) {
export default function AddFeedbackForm({ onCancel, onSubmit, initialValues = {} }) {

    const [score, setScore] = useState(initialValues.score);
    const [name, setName] = useState(initialValues.name || '');
    const [text, setText] = useState(initialValues.text || '');

    const NAME_STORAGE_KEY = "author_name";
    useEffect(() => {
        const name = localStorage.getItem(NAME_STORAGE_KEY);
        if (name) {
            setName(name);
        }
    }, [setName]);


    function handleLikeClick() {
        setScore(1);
    }

    function handleDislikeClick() {
        setScore(-1);
    }

    function handleFormSubmit() {
        const DEFAULT_NAME = "Anonymous";
        onSubmit({
            score,
            name: name || DEFAULT_NAME,
            text
        });
        if (name) {
            localStorage.setItem(NAME_STORAGE_KEY, name);
        }
    }

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onTextChange(event) {
        setText(event.target.value);
    }

    const likeClicked = score && score > 0;
    const dislikeClicked = score && score < 0;

    return (
        <Dialog
            open
            onClose={onCancel}
            aria-labelledby="form-dialog-title"
            maxWidth="sm"
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">Add Feedback</DialogTitle>
            <DialogContent>
                <div>
                    {/* *** Vertinimo forma *** */}
                    {/* <IconButton color={undefined} aria-label="Like"> */}
                    <IconButton
                        aria-label="Like"
                        color={likeClicked ? "primary" : undefined}
                        onClick={handleLikeClick}
                    >
                        <ThumbUpIcon />
                    </IconButton>
                    {/* <IconButton color={undefined} aria-label="Dislike"> */}

                    <IconButton
                        aria-label="Like"
                        color={dislikeClicked ? "primary" : undefined}
                        onClick={handleDislikeClick}
                    >
                        <ThumbDownIcon />
                    </IconButton>
                </div>


                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={onNameChange}
                />
                <TextField
                    label="Your comments"
                    placeholder="Can add multiline text here"
                    multiline
                    fullWidth
                    margin="normal"
                    helperText="comments are optional"
                    value={text}
                    onChange={onTextChange}
                />
            </DialogContent >
            <DialogActions>
                {/* *** Valdymo mygtukai *** */}
                {/* <Button color="default"> */}
                <Button
                    onClick={onCancel}
                    color="default"
                >
                    Cancel
       </Button>
                {/* <Button color="primary" variant="contained"> */}


                {/* <Button color="primary" variant="contained"> */}
                <Button
                    onClick={handleFormSubmit}
                    color="primary"
                    variant="contained"
                    disabled={score == null}
                >
                    Submit
       </Button>
            </DialogActions>
        </Dialog >
    );
}