import { useState } from "react";
import "./App.css";


function App() {


const [data,setData] = useState(null);


async function generateData(){

 const response =
 await fetch(
 "http://localhost:3000/api/generate"
 );

 const result =
 await response.json();


 setData(result);

}


return (

<div className="container">

<h1>
LGTM Ops Platform
</h1>

<p>
Observability Lab
</p>


<button onClick={generateData}>
Generate Data
</button>


{
data && (

<div className="card">

<h2>Generated Event</h2>

<p>
ID: {data.id}
</p>

<p>
User: {data.user}
</p>

<p>
Email: {data.email}
</p>

<p>
Amount: {data.amount}
</p>

</div>

)

}


</div>

)


}


export default App;
