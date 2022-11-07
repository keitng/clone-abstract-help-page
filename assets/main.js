const search_btn = document.querySelector('.hero__search-btn');

search_btn.addEventListener('click', (e) => alert("Searching…"));

const subnav_open_btn = document.querySelector('.top-bar__menu-button');
const subnav = document.querySelector('.sub-nav')
subnav_open_btn.addEventListener('click', toggle_display_subnav);

function toggle_display_subnav() {
    subnav.classList.toggle('hide');
}