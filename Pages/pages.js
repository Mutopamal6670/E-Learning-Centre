/*** 
Thsi script is used to display and hide the full curriculum section
*/


const viewFull_curr = document.getElementById('view-btn');  //Accessing the view full curriculum button
const hideFull_curr = document.getElementById('less-btn');  //accessing the view less button
const curr_sect = document.getElementsByClassName('curriculum');    //accessing the div section which containes the full curriculum



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