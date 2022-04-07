import  React, { useState,createContext } from "react";

export const MovieContext = createContext();


export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
          name: "Trolls",
          price: "100$",
          id: 231210,
        },
        {
          name: "Harry Potter",
          price: "100$",
          id: 231250,
        },
        {
          name: "Game of thrones",
          price: "100$",
          id: 232510,
        },
        {
          name: "Game",
          price: "100$",
          id: 232511,
        },
      ]);
    return (
        <div>
            <MovieContext.Provider value={[movies,setMovies]}>
               {props.children}
            </MovieContext.Provider>
        </div>
    )
}