import TextField from '@mui/material/TextField';
import { Button } from '@chakra-ui/react';
import React, { useState } from "react";
import { SummaryCard } from './SummaryCard';


export const QAContainer = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [askedQuestion, setAskedQuestion] =  useState(false);

    const handleOnInputChange = (event) => {
        { setQuestion(event.target.value) }
    }

    const handleAskQuestion = () => {
        setQuestion("")
        setAskedQuestion(true);
        console.log(question);
        setAnswer("QUESTION")
    }

    return (
        <div>
            <div className="qa-container">
                <h2 style={{ color: "white", margin: "5em" }}>
                    Ask a Question about  the sample document to Documento
                </h2>
                <div>
                    <TextField id="outlined-basic" required label="Question" variant="filled" color="secondary" focused multiline style={{ backgroundColor: "white", width: "50vh", height: "6vh", borderRadius: "50px" }} onChange={handleOnInputChange} value={question}/>
                </div>
                <div>
                    <Button className="btn-pink" onClick={handleAskQuestion}>Ask Documento</Button>
                </div>
            </div>

            <div>
              { askedQuestion &&  <SummaryCard title={"Answer"} content={answer}/>}
            </div>
        </div>

    )
}