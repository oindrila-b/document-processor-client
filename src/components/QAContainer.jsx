import TextField from '@mui/material/TextField';
import { Button } from '@chakra-ui/react';
import React, { useState } from "react";
import { SummaryCard } from './SummaryCard';
import axios from 'axios';


export const QAContainer = ({ context }) => {

    const QA_URL = 'http://localhost:5000/askQuestion';

    //How is generating random paragraph useful?

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [askedQuestion, setAskedQuestion] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleOnchange = (event) => {
        setQuestion(event.target.value)
    }

    const params = {
        question: question,
        query_context: context
    }

    const handleAskQuestion = () => {
        setAskedQuestion(true);
        if (question) {
            console.log("context" + context)
            console.log("question" + question)
            queryQuestion(question, context);
        } else {
            alert("No Context Received");
        }
    }



    const queryQuestion = () => {
        axios.get(QA_URL, { params }).then((response) => {
            console.log(response.data);
            setAnswer(response.data);
            setIsLoading(false);
        }).catch((error) => {
            alert(error.message);
        });

    }

    return (
        <div>
            <div className="qa-container">
                <h2 style={{ color: "white", margin: "5em" }}>
                    Ask a Question about  the sample document to Documento
                </h2>
                <div>
                    <TextField id="outlined-basic" required label="Question" variant="filled" color="secondary" onChange={handleOnchange} focused multiline
                        maxRows={4} style={{ background: "white", width: "50vh", borderRadius: "10px" }} value={question} />
                </div>
                <div>
                    <Button className="btn-pink" onClick={handleAskQuestion}>Ask Documento</Button>
                </div>
            </div>

            <div>
                {askedQuestion && <SummaryCard title={"Answer"} content={isLoading ? "Loading Answer...." : answer} />}
            </div>
        </div>

    )
}