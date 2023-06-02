import axios from 'axios';
 //así hubiera consumido la api... si tuviera una
async function Input(ip) {
    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/geo`);
        if (response.status === 200) {
          return {
            "ip": "161.185.160.93",
            "city": "New York City",
            "region": "New York",
            "country": "US",
            "loc": "40.7143,-74.0060",
            "org": "AS22252 The City of New York",
            "postal": "10004",
            "timezone": "America/New_York",
            "readme": "https://ipinfo.io/missingauth"
          };
        } else {
          throw new Error('Error: Unexpected status code');
        }
      } catch (error) {
        console.error(error);
        throw error;
      };

}
// nos inventamos el dataframe (gracias profe)

export default Input;
