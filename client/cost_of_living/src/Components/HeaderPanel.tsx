import { async } from "@firebase/util"
import React from "react"
import { json } from "react-router"
import Favourites from "./Favourites"

const HeaderPanel : React.FC <{} > = () => {

const callServer = () => {
// async () => {


    console.log("🌏");
    console.log(process.env.NODE_ENV);
    console.log(process.env.DATABASE_URL);

    fetch(`http://localhost:8080/api/selectCity`)
      .then((response) => (response.text()))
      .then((data) => console.log(data))
    //   .then((messages) => {console.log("messages");});
    



    // fetch("http://localhost:8080/test").then( (data) => (data)).then((data) => (data));
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