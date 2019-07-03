import React from 'react';
// import Units from './components/Units';
// import Roster from './components/Roster';
import { ParentTable } from './components/Table';
import "./styles/_table.css";
// const dummyData = [];
// const users = [{

// }];

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: 25}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {/* <Units /> */}
        {/* <Roster /> */}
        <ParentTable />
      </div>
    </div>
  );
}

export default App;
