


const viewFull_curr = document.getElementById('view-btn');
const hideFull_curr = document.getElementById('less-btn');
const curr_sect = document.getElementsByClassName('curriculum');



viewFull_curr.addEventListener('click', e => {
    e.preventDefault();
    display();
});

hideFull_curr.addEventListener('click', e => {
    e.preventDefault();
    hide();    
})

function display() {
    viewFull_curr.style.display = 'none';
    curr_sect[0].style.display = "flex";
    hideFull_curr.style.display = "block";
}

function hide() {
   viewFull_curr.style.display = 'block';
    curr_sect[0].style.display = "none";
    hideFull_curr.style.display = "none";
}