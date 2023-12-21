import './css/Services.css';
import React, { useState } from "react";
import { useRef } from 'react';
import CSVDataTable from '../components/CSVDataTable.jsx';
import Papa from 'papaparse';
import { Button } from '@chakra-ui/react';
import { SummaryCard } from './SummaryCard.jsx';
import { QAContainer } from './QAContainer.jsx';

export const Services = () => {

  const hiddenFileInput = useRef(null);
  const [csvData, setCsvData] = useState([]);
  const [showLoadSampleDataButton, setShowLoadSampleDataButton] = useState(true);
  const [showTable, setShowTable] = useState(true);
  const [getSummary, setGetSummary] = useState(false);
  const [getQA, setGetQA] = useState(false);
  const [uploadedDocument, setUploadedDocument] = useState(false);

  const toggleButton = () => {
    setShowLoadSampleDataButton(!showLoadSampleDataButton);

  };

  const handleGetSummary = () => {
    setShowTable(false);
    setGetSummary(true);
    setGetQA(false);
  };



  const handleQA = () => {
    setShowTable(false);
    setGetSummary(false);
    setGetQA(true);

  };

  const handleFileChange = async () => {
    const data = Papa.parse(await fetchCSV());
    console.log(data);
    toggleButton();
    return data;

  };

  const handleChange = (event) => {
    const files = Array.from(event.target.files)
    console.log("files:", files)
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
    setUploadedDocument(true)
    setGetQA(false);
    setGetSummary(false);

  };

  const fetchCSV = async () => {
    const response = await fetch('data/text_segments.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    console.log('csv', csv);
    parseCSV(csv);
    return csv;
  }

  

  const parseCSV = (csvText) => {
    const lines = csvText.split("\n");
    const headers = lines[0].split(",");
    const parsedData = [];

    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(",");

      if (currentLine.length === headers.length) {
        const row = {};
        for (let j = 0; j < headers.length; j++) {
          row[headers[j].trim()] = currentLine[j].trim();
        }
        parsedData.push(row);
      }
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
              {getSummary && <SummaryCard title={"Summary"} content={"WHO DIS"} />}
            </div>
            <div>
              {getQA && <QAContainer />}
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
            <div>
              <Button className="btn-pink" onClick={handleClick}  > Upload Your File </Button>
              <input type='file' accept='application/pdf' multiple onChange={handleChange} ref={hiddenFileInput} style={{ 'display': 'none' }} />
            </div>
          </div>
        </div>
        <div style={{ margin: "6em" }}>
          {uploadedDocument &&
            <div>
              <div>
                <SummaryCard title={"Context"} content={""} />
              </div>
              <div>
              <div>
              {uploadedDocument && <Button className="btn-pink" onClick={handleGetSummary}> Get Summary </Button>}
              {uploadedDocument && <Button className="btn-pink" onClick={handleQA}> Ask Questions </Button>}
            </div>
              </div>
              <div>
              {getSummary && <SummaryCard title={"Summary"} content={"WHO DIS"} />}
            </div>
            <div>
              {getQA && <QAContainer />}
            </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}