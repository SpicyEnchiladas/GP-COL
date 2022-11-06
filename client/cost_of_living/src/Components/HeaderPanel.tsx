import { async } from "@firebase/util"
import React from "react"
import Favourites from "./Favourites"

const HeaderPanel : React.FC <{} > = () => {

const callServer = async () => {
    console.log("🌏");
    fetch("http://localhost:8080/test").then( (data) => console.log(data))
}


    return (
        <><div className="title_header">
            <h1>Cost Of Living</h1>
           </div>
           <button onClick={callServer}> Call From Server</button>
           <Favourites></Favourites>
        
        </>
        

    )


}

export default HeaderPanel