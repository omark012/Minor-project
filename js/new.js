const searchInp = document.querySelector('.search-input');
const searchBtn = document.querySelector('.s-btn');
const container = document.querySelector('.search-container');
// const form=document.querySelector('.searchForm');


//Search bar responsiveness

searchBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    const searchItem = searchInp.value;

    if (searchItem == '') {
        alert('enter search');
    }

    else {
        console.log('1')
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchItem}`);
        const items = res.data;
        searchInp.value = '';
        container.textContent = '';

        //adding display class to container
        container.classList.add('visible');

        //crossIcon to remove search data
        const crossIcon = document.createElement('button');
        crossIcon.innerHTML = '<i class="fas fa-times"></i>'
        crossIcon.classList.add('cross-btn');
        container.append(crossIcon);

        //Eventlistener for crossIcon to remove display of search
        crossIcon.addEventListener('click', () => {
            container.classList.remove('visible');
        });

        //adding images to container
        for (let item of items) {
            if (item.show.image != null) {
                const img = document.createElement('img');
                img.src = item.show.image.medium;
                img.classList.add('image');
                container.append(img);

            }

        }
    }



});


//Adding responsiveness to menu-icon--->

const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('nav');
const navMenu = document.querySelector('.menu-list');
const searchBar = document.querySelector('.search-bar');
const login = document.querySelector('.login-btn');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('v-height');

    setTimeout(()=>{

        navMenu.classList.toggle('v-class');
        searchBar.classList.toggle('v-class');
        login.classList.toggle('v-class');
    },500);


});

// Adding Banner Button Responsiveness

const watchBtn = document.querySelector('.watch-btn');
const trailer = document.querySelector('.trailer');
const closeBtn = document.querySelector('.close-btn');
const iframe = document.querySelector('iframe');

watchBtn.addEventListener('click', () => {
    iframe.src = "https://www.youtube.com/embed/uwsmkWh0S5Y" ;
    trailer.classList.toggle('display');
})

closeBtn.addEventListener('click', () => {
    trailer.classList.toggle('display');
    iframe.src = "";


})

