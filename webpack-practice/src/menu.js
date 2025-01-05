import myImage from './image.png';
export const menu = function (){
    const main = document.createElement('div');
    main.setAttribute("class","HomeMain")    
    const img = document.createElement('img');
    img.src = myImage;
    img.alt = 'Bundled Image Example';
    main.appendChild(img);
    document.body.appendChild(main);

}