import React from 'react';

function Food(props){
  console.log(props)
  return <h1>poatao</h1>
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" somthing={true} papapapa={["hello", 1,2,3,4, true]} />
    </div>
    
  )}

export default App;
