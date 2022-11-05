import React from "react"
import Favourites from "./Favourites"

const HeaderPanel : React.FC <{} > = () => {

    return (
        <><div className="title_header">
            <h1>Cost Of Living</h1>
           </div>
        
           <Favourites></Favourites>
        
        </>
        

    )


}

export default HeaderPanel