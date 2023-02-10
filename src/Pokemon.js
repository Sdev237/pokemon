import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useRef } from "react";
import { getFav, toogleFavoris } from "./poketReducer";

const Pokemon = ({pokemon}) => {
    const [image, setImage] = useState("")
    //const [detail, setDetail] = useState("")
    //const [puissance, setPuissance] = useState("")
    const [id, setId] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [like, setLike] = useState(false);

    useState(()=>{
        axios.get(pokemon.url)
        .then(function (response) {
            // handle success
            setImage(response.data.sprites.other.dream_world.front_default)
            setId(response.data.order)
           // console.log(response.data.sprites.other)
            
        })
        
        .catch(function (error) {
            // handle error
           // console.log(error);
        })
    })
    //changer l'etat du bouton like/don't like
    const togle =()=>{
        like? setLike(false): setLike(true);
    }
    //recuperation redux 
    const favori = useSelector(getFav)
    console.log(favori);
    //redux toolkit

    const dispatch = useDispatch()
    function handleFavoris(){
        dispatch(toogleFavoris(pokemon))
    }
    const select = useRef()
    return (
       
        <div >
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <div>
                            
                        <h5 className="card-title pokeName">{pokemon.name}</h5>
                        </div>
                        <img src={image} alt='pokemon' className="img col-md-12"/>
                        <div className="row mx-4 my-3">
                            
                            <Button className="col-md-5 col-sm-5 col-xl-5" variant="primary" onClick={handleShow}>
                                Voir plus ...
                            </Button>
                            <div className="text-danger like col-md-4 col-sm-4 col-xl-4 ml-4" >
                                
                            </div>
                            <div className="text-danger like col-md-1 col-sm-1 col-xl-1 ml-4" ref={select} >
                                {!like? <MDBIcon far icon="heart" onClick={()=>{togle(); handleFavoris()}} />: <MDBIcon fas icon="heart"  onClick={()=>{togle(); handleFavoris()}} />}
                                
                            </div>
                            <span className=" col-md-2 col-sm-2 col-xl-2 ml-3">0</span>
                        </div>
                    </div> 
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="container">
                    <Modal.Title className="text-center col-md-7">{pokemon.name}</Modal.Title>
                    <h3 className="col-md-3">{id}</h3>
                </Modal.Header>
                <Modal.Body>
                    <img src={image} alt='pokemon' className="img"/>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Pokemon;