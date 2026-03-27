import axios from "axios"

export const BACK_ENDPOINT = "https://qtify-backend.labs.crio.do"
export const fetchAlbumsData = async() =>{
    try{
      const res = await axios.get(`${BACK_ENDPOINT}/albums/top`);
      console.log(res.data)
      return res.data
    }catch(err){
      console.error(err)
    }
}