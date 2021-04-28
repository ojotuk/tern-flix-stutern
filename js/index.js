const API_KEY = 'k_vee77rn9'
  
const getMovie =()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
       
      axios.get('https://imdb-api.com/en/API/Top250Movies/k_44sig65s', requestOptions)
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

// window.addEventListener('load', getMovie())
