import './css/Services.css';
import React, { useState } from "react";
import TestCSV from "../../src/text_segments.csv"
import CSVDataTable from '../components/CSVDataTable.jsx';

export const Services = () => {

    const [csvData, setCsvData] = useState([]);

    const handleFileChange = () => {
        console.log('Hello');
        // const file = event.target.files[0];

        // if (file) {
        //   const reader = new FileReader();
      
        //   reader.onload = (e) => {
        //     const csvText = e.target.result;
        //     parseCSV(csvText);
        //   };
      
        //   reader.readAsText(file);
        // }
        const reader = new FileReader();

       const csvText = reader.readAsText(TestCSV);
       console.log(csvText);
       parseCSV(csvText);
      
    };
  
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
            <div>
                <div className="buttons">
                    <button className="btn-pink" onClick={handleFileChange}>Load Sample Service Output</button>
                </div>
                <CSVDataTable data={csvData} />
            </div>
        </div>
    )
}