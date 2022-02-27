
import axios from "axios";
import React,{useState,  useEffect} from "react";
import { useParams } from "react-router-dom";
 function Userviwe(){
    let params = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
     getUser()
    }, [])

    let getUser = async () => {
        let Userdata = await axios.get( `https://61f531ae62f1e300173c4040.mockapi.io/api/list/${params.id}`)
        setUser(Userdata.data)
       
    }   
    return(
       
       <>
        <div>Viwe{params.Id}</div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.country}</h1>
        <h1>{user.state}</h1>
        <h1>{user.city}</h1>
       </>
      
    )
 }
 export default Userviwe;