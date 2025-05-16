import {obj} from './imagesliderdata.js';

let image_address='';
document.querySelectorAll('.photos').forEach( (image,index) =>{
        image.addEventListener('click',()=>{
        console.log(index);
        image_address=obj[index].img;
        document.body.style.backgroundImage = `url('${image_address}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.querySelector('.js-wallpapertext').innerHTML=`WALLPAPER - ${index+1}`;
     });
} );
document.querySelector('.see-more-btn').addEventListener('click',()=>{
    window.body.innerHTML=`em ledh dobbey`;
    console.log('hii');
});
