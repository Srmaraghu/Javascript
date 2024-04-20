let flag=0;

function controller(x)
{
flag=flag+x;
slideshow(flag);


}
slideshow(flag);

function slideshow(num){
    let slides=document.getElementsByClassName('slide');

    if(flag == slides.length)
    {
        flag=0;
        num=0;
    }
    if(num<0)
    {
        flag=slides.length-1;
        num=slides.length-1;
    }

    for(let images of slides)
    {
        images.style.display='none';
    }

    slides[num].style.display="block";
  
}