import React from 'react';

const dates = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];

function Roster() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexBasis: "100%", boxSizing: 'border-box', marginLeft: 14 }}>
      {dates.map((day, dateIdx) => {
        return (
          <div key={dateIdx} style={{display: 'flex', flexBasis: `${100 / dates.length}%`}}>
            {day}
          </div>
        )
      })}
    </div>
  );
}

export default Roster;
