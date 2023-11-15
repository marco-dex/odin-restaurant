const createMenuPage = function() {
    const content = document.querySelector('#content'); 
    const pageContent = document.createElement('div'); 

    pageContent.classList.add('page-content'); 

    const heading1 = document.createElement('h1'); 
    const heading2 = document.createElement('h1');
    const heading3 = document.createElement('h1');

    heading1.textContent = 'Pancakes'
    heading2.textContent = 'Waffles'
    heading3.textContent = 'Eggs'

    pageContent.appendChild(heading1); 
    pageContent.appendChild(heading2); 
    pageContent.appendChild(heading3); 

    content.appendChild(pageContent);

}

export default createMenuPage; 