import './css/Services.css';
import React, { useState } from "react";
import CSVDataTable from '../components/CSVDataTable.jsx';
import Papa from 'papaparse';


export const Services = () => {

  const [csvData, setCsvData] = useState([]);

  const handleFileChange = async () => {
    const data = Papa.parse(await fetchCSV());
    console.log(data);
    // parseCSV(data);
    return data;

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
        Service Sample
      </h2>
      <div className='container'>
        <div className="buttons">
          <button className="btn-pink" onClick={handleFileChange}>Load Sample Data</button>
        </div>
        <br /> <br /> <br />
        <div>
          <CSVDataTable data={csvData} />
        </div>
        <div>
        <button className="btn-pink" onClick={handleFileChange}>Load Sample Data</button>
        </div>
        <div>
        <button className="btn-pink" onClick={handleFileChange}>Load Sample Data</button>
        </div>
      </div>
    </div>
  )
}