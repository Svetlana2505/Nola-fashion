// let slider = document.getElementById('slider');


// let item = 0;

// document.getElementById('left').addEventListener('click',function(){
//     item = item -800;
//     if(item < -1600) {
//         item = -1600
//     }
//     slider.style.left = item + 'px'
// });

// document.getElementById('right').addEventListener('click',function(){
//     item = item +800
//     if(item > 0) {
//         item = 0
//     }
//     slider.style.left = item + 'px'
// });

let slider = document.getElementById('slider');

let item = 0;

document.getElementById('left').addEventListener('click',function(){
    item = item -800;
    if(item < -1600) {
        item = -1600
    }
    slider.style.left = item + 'px'
});

document.getElementById('right').addEventListener('click',function(){
    item = item +800
    if(item > 0) {
        item = 0
    }
    slider.style.left = item + 'px'
})