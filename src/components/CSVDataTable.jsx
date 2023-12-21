import React from "react";

const CSVDataTable = ({ data }) => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <>
      {data.length === 0 ? (
        <p></p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} style={tableHeaderStyle}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header, columnIndex) => (
                  <td key={columnIndex} style={tableCellStyle}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
    
  );
};

const tableStyle = {
  // borderCollapse: "collapse",
  // width: "70%",
  // maxHeight: '800px',
  // outerHeight: "50%",
  // borderRadius: "20px",
  // padding:"10px",
  // margin: "20em",
  // overflowY: "auto",
  // boxShadow: "40px 90px 55px -20px rgba(155, 184, 243, 0.2)",
  borderCollapse: "collapse",
  maxHeight: "500px",
  width: "70%",
  padding: "10px",
  margin: "5em 20em 5em 20em",
  // background: "linear-gradient(90deg, #bf5eff,#820fcf, #511ae7 )",
  overflowY: "scroll",
  display: "block",
  boxShadow: "40px 90px 55px -20px rgba(155, 184, 243, 0.2)"
};

const tableHeaderStyle = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#ffffff",
  backgroundColor: "#6D95E0",
  borderBottom: "1px solid #ddd",
  padding: "15px",
  textAlign: "center",
  position : "sticky",
  overflow: "hidden",
  top : "0",

};

const tableCellStyle = {
  fontSize: "14px",
  fontWeight: 500,
  borderBottom: "1px solid #ddd",
  padding: "15px",
  backgroundColor: "#fff",
};

export default CSVDataTable;