import React from 'react';

const units = {
  'Ortho': {
    'team_0': [{
      'id': 0,
      'name': 'John Doe',
      'band': '3',
      'department': 'HCA'
    },
    {
      'id': 1,
      'name': 'John Doe',
      'band': '1',
      'department': 'HCA'
    },
    {
      'id': 2,
      'name': 'John Doe',
      'band': '2',
      'department': 'HCA'
    },
    {
      'id': 3,
      'name': 'John Doe',
      'band': 'X',
      'department': 'HCA'
    }],
    'team_1': [{
      'id': 0,
      'name': 'John Doe',
      'band': '3',
      'department': 'HCA'
    },
    {
      'id': 1,
      'name': 'John Doe',
      'band': '1',
      'department': 'HCA'
    },
    {
      'id': 2,
      'name': 'John Doe',
      'band': '2',
      'department': 'HCA'
    }]
  },
  'Ped': {
    'team_0': [{
      'id': 0,
      'name': 'John Doe',
      'band': '3',
      'department': 'HCA'
    },
    {
      'id': 1,
      'name': 'John Doe',
      'band': '1',
      'department': 'HCA'
    },
    {
      'id': 2,
      'name': 'John Doe',
      'band': '2',
      'department': 'HCA'
    },
    {
      'id': 3,
      'name': 'John Doe',
      'band': 'X',
      'department': 'HCA'
    }]
  }
};

// const iterate = (obj) => {
//   Object.keys(obj).forEach(key => {

//     console.log(`key: ${key}, value: ${obj[key]}`)

//     if (typeof obj[key] === 'object') {
//       iterate(obj[key])
//     }
//   })
// }

function Units() {
  console.log("units", units);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '245px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          backgroundColor: '#ffb2b2',
          color: '#fff',
          height: 24,
          padding: "2px 8px",
          marginBottom: 8
        }}>Unfilled Duties</div>
        {Object.keys(units).map(function (unit, idx) {
          return (
            <div key={idx}>
              <div style={{
                color: '#fff',
                height: 24,
                padding: "2px 8px",
                marginBottom: 8,
                backgroundColor: '#5f8f9c'
              }}>{unit}
              </div>
              {Object.keys(units[unit]).map(function (team, teamIdx) {
                return (
                  <div key={teamIdx} style={{ margin: "6px 0" }}>
                    <div style={{ marginBottom: 8 }}>{team}</div>
                    {units[unit][team].map((member, memberIdx) => {
                      return (
                        <div key={memberIdx} style={{ display: 'flex', flexDirection: 'column', marginLeft: 12, marginBottom: 12 }}>
                          <div>{member.name}</div>
                          <div>Band: {member.band}</div>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default Units;
