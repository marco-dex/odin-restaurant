const createContactPage = function () {
    const content = document.querySelector('#content')

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content'); 

    const name = document.createElement('input'); 
    const email = document.createElement('input'); 

    pageContent.appendChild(name);
    pageContent.appendChild(email);
    content.appendChild(pageContent);
}

export default createContactPage; 