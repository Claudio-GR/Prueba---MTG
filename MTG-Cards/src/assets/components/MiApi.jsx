import { useEffect, useState } from "react";


const MiApi = ({card_data, setcard_data, text_search, card_color}) => {
    const url= `https://api.magicthegathering.io/v1/cards/?name=${text_search}&colorIdentity=${card_color}`

    const MGTD_data = async () => {
        try {
            const resolution=await fetch(url)

            if(!resolution.ok){
                throw new Error ("Hay un error en la API");
            }
            console.log("respuesta de la api", resolution)
            
            const data =await resolution.json();
            console.log(data);
            const api = data;
            console.log(api)
            setcard_data(api.cards)
            console.log(api.cards)
            console.log("text search", text_search)
            console.log("card color", card_color)
        } catch(error){
            console.error({message:error})
        }
    }


    useEffect(() =>{
        MGTD_data();
    }, [text_search]);

    return (
        <>
            <div className="container">
                <div className="row m-1 mt-5 mb-5 justify-content-center">
                    {card_data.map((p) => (
                        <div key={p.id}
                        className="col-md-3 p-2">
                            <div className="card">
                                <img    src={p.imageUrl} 
                                        className="card-img-top bg-ligth"
                                        alt={p.name} />
                                <ul className="list-group list-group flush">
                                    <li className="list-group item">{p.name}</li>
                                    <li className="list-group item">Rarity: {p.rarity}</li>
                                    <li className="list-group item">Set: {p.setName}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default MiApi