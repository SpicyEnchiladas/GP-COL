import React from "react"
import FavouritesPage from "./Favourites";
import ResultsPage from "./Results"

interface GalleryProps {
    handleCurrentView: (view: string) => void;
    currentView: string;
}

const Gallery : React.FC <GalleryProps> = ({ handleCurrentView, currentView }) => {

    
    return (
        <div>Gallery
            <button onClick={() => handleCurrentView("Favourites")}>Favourites</button>
            <button onClick={() => handleCurrentView("Ranged")}>Results</button>
            {currentView === "Ranged" ? (
        <ResultsPage/>
      ) : (
        <FavouritesPage/>
      )}
        </div>
    )

}


export default  Gallery