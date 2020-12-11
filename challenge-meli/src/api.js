import axios from "axios";

/* export default axios.create({
  baseURL: `${window.location.origin}/api/`,
}); */

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}api/`,
});
