import React,{useState,useEffect} from "react";
import './App.css';

function App() {
  const [perso,setPerso]=useState([]);
  const {info,results}=perso
  
  useEffect(()=>{
    let url=`https://rickandmortyapi.com/api/character`;

    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      setPerso(data);
    })
  },[]);

  console.log(results);
  return (
 <div>
    <div>
      <header>
        <strong>Personagens</strong>
      </header>
    </div>
    <div id='container'>
      {results?.map((item)=>{
        return(
          <article key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image}/>
            <p>{item.species}</p>
            <p>{item.status}</p>

          </article>

        );
      })}
    </div>
  </div>
  );
}

export default App;
