import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";


const GifContext = createContext();

const GifProvider = ({children}) =>{

    const [gifs,setGifs] = useState([]);
    const [filter,setFilter] = useState("gifs");
    const [favourites,setFavourites] = useState([]);

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

    const addToFavorites = (id) => {
        console.log(id);
        if (favourites.includes(id)) {
          // If the item is already in favorites, remove it
          const updatedFavorites = favourites.filter((itemId) => itemId !== id);
          localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
          setFavourites(updatedFavorites);
        } else {
          // If the item is not in favorites, add it
          const updatedFavorites = [...favourites];
          updatedFavorites.push(id);
          localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
          setFavourites(updatedFavorites);
        }
      };

      useEffect(() => {
        const favourites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
        setFavourites(favourites);
      }, []);

    return(
    <GifContext.Provider value={{gf,gifs,setGifs,filter,setFilter,favourites,addToFavorites}}>
        {children}
    </GifContext.Provider>
    )
};


export const GifState =() =>{
    return useContext(GifContext)
}

export default GifProvider;