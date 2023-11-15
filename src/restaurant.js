const createRestaurantHomePage = function () {
    const content = document.querySelector('#content'); 
    const pageContent = document.createElement('div'); 

    pageContent.classList.add('page-content'); 

    const image = document.createElement('img'); 
    image.src = '../image.png'; 
    image.height =  '300'; 
    pageContent.appendChild(image);

    const headline = document.createElement('h1'); 
    headline.textContent = 'Welcome to our restaurant!'
    pageContent.appendChild(headline); 

    const copy = document.createElement('p'); 
    copy.textContent = 'The best food on route 66.'; 
    pageContent.appendChild(copy); 

    content.appendChild(pageContent);


}


export default createRestaurantHomePage; 