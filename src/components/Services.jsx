import './css/Services.css';
import React, { useState } from "react";
import { useRef } from 'react';
import CSVDataTable from '../components/CSVDataTable.jsx';
import Papa from 'papaparse';
import { Button } from '@chakra-ui/react';
import { SummaryCard } from './SummaryCard.jsx';
import { QAContainer } from './QAContainer.jsx';
import axios from 'axios';

export const Services = () => {

  


  const SUMMARY_URL = 'http://localhost:5000/getSummary';
  
  const hiddenFileInput = useRef(null);
  const [csvData, setCsvData] = useState([]);
  const [showLoadSampleDataButton, setShowLoadSampleDataButton] = useState(true);
  const [showTable, setShowTable] = useState(true);
  const [getSummary, setGetSummary] = useState(false);
  const [getQA, setGetQA] = useState(false);
  const [uploadedDocument, setUploadedDocument] = useState(false);
  const [summary, setSummary] = useState("");
  const [context, setContext] = useState("");
  const [hasContext, setHasContext] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = {
    query_context: context
  }

  const toggleButton = () => {
    setShowLoadSampleDataButton(!showLoadSampleDataButton);

  };

  // const handleDefaultGetSummary = () => {
  //   setShowTable(false);
  //   setGetSummary(true);
  //   setGetQA(false);

  // };

  // const handleDefaultQA = () => {
  //   setShowTable(false);
  //   setGetSummary(false);
  //   setGetQA(true);
  // };

  const handleGetSummary = (context) => {
    setShowTable(false);
    setGetSummary(true);
    setGetQA(false);
    if (context) {
      querySummary(context);
    }else{
      alert("No Context Received");
    }
    
  }

  const handleQA = () => {
    setShowTable(false);
    setGetSummary(false);
    setGetQA(true);   
    setHasContext(true);
  };

  const querySummary = () => {
    axios.get(SUMMARY_URL, {params}).then((response) => {
      console.log(response.data);
       setSummary(response.data);
       setIsLoading(false);
       setHasContext(true)
    }).catch((error) => {
      alert(error.message);
  });

  }

  const handleFileChange = async () => {
    const data = Papa.parse(await fetchCSV());
    console.log(data);
    toggleButton();
    return data;

  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
    if(!e.target.files[0]){
      alert("Please select a file");
      setHasContext(false);
      return;
    }
    const reader = new FileReader() 

    reader.onload = async (e) => { 
       const text = (e.target.result) 
       console.log(text) 
       setContext(text);
       setHasContext(true)
    }; 
    reader.readAsText(e.target.files[0]);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
    setUploadedDocument(true)
    setGetQA(false);
    setGetSummary(false);
    setHasContext(true);
  };

  const fetchCSV = async () => {
  
    const response = await fetch('data/text_segments.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    parseCSV(csv);
    return csv;
  }



  const parseCSV = (csvText) => {
    let extractedText=""
    const lines = csvText.split("\n");
    const headers = lines[0].split(",");
    const parsedData = [];

    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(",");

      if (currentLine.length === headers.length) {
        const row = {};
        for (let j = 0; j < headers.length; j++) {
          row[headers[0].trim()] = currentLine[0].trim();
        }
        // console.log('row', row['text']);
        parsedData.push(row);
        extractedText += row['text'];
        console.log('extracted', extractedText);
      }
      setContext(extractedText); 
    }
    setCsvData(parsedData);
  };

  return (

    <div>
      <h1 className="title">
        Services
      </h1>
      <h2 className="subtitle">
        Explore Services
      </h2>
      <div className="container">
        <div>
          {!uploadedDocument && <div>
            <div className="buttons">
              {showLoadSampleDataButton && <button className="btn-pink" onClick={handleFileChange}>Load Sample Data</button>}
            </div>
            <div>
              {!showLoadSampleDataButton && <Button className="btn-pink" onClick={handleGetSummary}> Get Summary </Button>}
              {!showLoadSampleDataButton && <Button className="btn-pink" onClick={handleQA}> Ask Questions </Button>}
            </div>
            <div>
              {showTable && <CSVDataTable data={csvData} />}
            </div>
            <div>
              {getSummary && <SummaryCard title={"Summary"} content={isLoading? "Loading Summary...." : summary} />}
            </div>
            <div>
              {getQA && hasContext &&  <QAContainer context={context} />}
            </div>

            <div style={{ margin: "10em" }}>
              <h1 className='subtitle'>
                OR
              </h1>
            </div>
          </div>}
          <div>
            <h1 className='subtitle'>
              Test With Your own Documents
            </h1>
            <p style={{color:"white"}}>*Currently We Are Only accepting .doc/.docx/.txt files</p>
            <div>
              <Button className="btn-pink" onClick={handleClick}  > Upload Your File </Button>
              <input type='file' accept='.doc,.docx,.txt' onChange={handleChange} ref={hiddenFileInput} style={{ 'display': 'none' }} />
            </div>
          </div>
        </div>
        <div style={{ margin: "6em" }}>
          {uploadedDocument &&
            <div>
              <div>
                {hasContext && <SummaryCard title={"Context"} content={context} />}
              </div>
              <div>
                <div>
                  {uploadedDocument && <Button className="btn-pink" onClick={handleGetSummary}> Get Summary </Button>}
                  {uploadedDocument && <Button className="btn-pink" onClick={handleQA}> Ask Questions </Button>}
                </div>
              </div>
              <div>
                {getSummary && context && <SummaryCard title={"Summary"} content={isLoading? "Loading Summary...." : summary} />}
              </div>
              <div>
                {getQA &&  hasContext && <QAContainer context={context} />}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}