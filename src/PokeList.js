import React from 'react';
import axios from 'axios';

export default class PokeList extends React.Component{
    state = {
            pokemons: []
        }
   
    componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/ability/?limit=40&offset=40`)
        .then(res =>{
            this.setState({pokemons: res.data.results})
        })
    }
   
   render() {
    return(
        <div className="row">
        
            <h1 className='bg-info p-2 text-white'>Liste des pokemons</h1>
            {this.state.pokemons.map(pokemon => 
                    <div className='col-md-4'>
                        <div className="card-group">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <p className="card-text">{pokemon.url}</p>
                                    <button type="button" className="btn btn-secondary">Voir plus ...</button>
                                </div> 
                            </div>
                        </div>
                    </div>
            )}
        </div>
    )
   }
}