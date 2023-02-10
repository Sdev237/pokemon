import { useState } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import NavBar from "./navBar";

const ApiRes = () => {

    const [allPokemons, setAllPokemons] = useState([]);
    const SERVER = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=18/'

    useState(()=>{
        axios.get(SERVER)
        .then(function (response) {
            // handle success
            setAllPokemons(response.data.results)
            
        })
        
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    })
   
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className=" row ">
                    {
                        allPokemons.map((item, index)=>(
                            <div className="col-md-4 pb-4">
                            <Pokemon pokemon={item} key={index}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ApiRes;