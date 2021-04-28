const topContainer = document.querySelector('#top-container');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');



// Paginations

let start = 0;
let stop = 20;

let top250Movies=[];

const API_KEY = 'k_vee77rn9'
  
const getMovie = async ()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const response = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_44sig65s', requestOptions)
      return response.data.items;
}

window.addEventListener('load', top250())

async function top250(){

  let data = await getMovie()

  const a = document.createElement('a');
  a.classList.add('col-lg-3');
  a.classList.add('col-md-4');
  a.classList.add('category-card');
  // a.innerHTML
  console.log(data)
  top250Movies=[...data]
  for (const movie of data) {
    a.innerHTML=`<p>${movie.title}</p>`
  }
  topContainer.innerHTML = displayTop()
  // splitter(start,stop).map(movie=>`<a class='col-lg-2'>
  // <p>${movie.title}</p>
  // <img src=${movie.image} class='top-img'/>
  // </a>`)
  // btnState();
  // console.log(start,stop)
}


function displayTop (){
  return splitter().map(movie=>`<a class='col-lg-2 col-md-3 col-sm-4 category-card'>
  <img src=${movie.image} class='top-img'/>
  <p>${movie.title}</p>
  </a>`)
}
function splitter (){
    return top250Movies.slice(start,stop)
}
function btnState(){
  if(start==0){
    prevBtn.setAttribute('disabled',true)
  }else{
    prevBtn.removeAttribute('disabled')
  }
  if(stop>250){
  nextBtn.setAttribute('disabled',true)
  }else{
    nextBtn.removeAttribute('disabled')
  }
}
btnState()

nextBtn.addEventListener('click',()=>{
  topContainer.innerHTML=``
  start=stop;
  stop=stop+20;
  topContainer.innerHTML = displayTop()
  // return btnState()
  console.log(start,stop)
  btnState()

})
prevBtn.addEventListener('click',()=>{
  topContainer.innerHTML=``
  start=start-20;
  stop=stop-20;
  topContainer.innerHTML = displayTop()
  btnState()
})