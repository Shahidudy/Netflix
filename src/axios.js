import axios from 'axios'
import {baseUrL} from "./constants/constants"

const instance = axios.create({
    baseURL : baseUrL,
  });

  export default instance