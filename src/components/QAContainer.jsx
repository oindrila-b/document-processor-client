import TextField from '@mui/material/TextField';
import { Button } from '@chakra-ui/react';
import React, { useState } from "react";
import { SummaryCard } from './SummaryCard';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';


export const QAContainer = () => {

    const [question, setQuestion] = useState('');
    const [askedQuestion, setAskedQuestion] =  useState(false);

    const handleOnInputChange = (event) => {
        { setQuestion(event.target.value) }
    }

    const handleAskQuestion = () => {
        setQuestion("")
        setAskedQuestion(!askedQuestion);
        console.log(question);
    }

    return (
        <div>
            <div className="qa-container">
                <h2 style={{ color: "white", margin: "3em" }}>
                    Ask a Question about  the sample document to Documento
                </h2>
                <div>
                    <TextField id="outlined-basic" label="Question" variant="filled" color="secondary" focused multiline style={{ backgroundColor: "white", width: "50vh", borderRadius: "10px" }} onChange={handleOnInputChange} value={question}/>
                </div>
                <div>
                    <Button className="btn-pink" onClick={handleAskQuestion}>Ask Documento</Button>
                </div>
            </div>

            <div>
              { askedQuestion &&  <Grid
            container
            margin={'100px 0px 20px 0px'}
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '10vh' }}
            overflow="auto"
          >
            <Grid item xs={3}>
              <Card sx={{ minWidth: 500, maxWidth: 1000, borderRadius: '10px' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ background: 'grey', borderRadius: '10px' }}>
                    Answer
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                    {question}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>}
            </div>
        </div>

    )
}