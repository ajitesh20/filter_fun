var image1=null;
var image2=null;
var image3=null;
var image4=null;
var image5=null;
var canvas=null;
var dark = 1;

function uploadImage()
{
  var imgs=document.getElementById("img");
  image1 = new SimpleImage(imgs);
  image2 = new SimpleImage(imgs);
  image3 = new SimpleImage(imgs);
  image4 = new SimpleImage(imgs);
  image5 = new SimpleImage(imgs);
  canvas = document.getElementById("can");
  image1.drawTo(canvas);
}

function GreyScale()
{
  var avg;
  for(var pixel of image1.values())
  {
    avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setGreen(avg);
    pixel.setRed(avg);
    pixel.setBlue(avg);
  }
    image1.drawTo(canvas);
}

function Red()
{
  var avg=null;
  for(var pixel of image2.values())
  {
    avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    
    if(avg < 128)
      {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
    
    else
      {
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
  } 
    image2.drawTo(canvas);
}

function BlurImage()
{
  for(var pixel of image3.values())
    {
      if(Math.random() > 0.5)
        {
          var in1 = Math.random()*10 - 5;
          var in2 = Math.random()*10 - 5;
          
          if(pixel.getX()+in1 >= 0 && pixel.getY()+in2 >= 0 && pixel.getX()+in1 < image3.getWidth() && pixel.getY()+in2 < image3.getHeight())
            {
              image3.setPixel(pixel.getX(),pixel.getY(),image3.getPixel(pixel.getX()+in1,pixel.getY()+in2));
            }
        }
    }
  
  image3.drawTo(canvas);
}

function RainbowImage()
{
  var avg;
  for(var pixel of image4.values())
    {
      avg=(pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
      if(pixel.getY() <= image4.getHeight()/7)
        {
          if(avg <= 128)
            {
              pixel.setRed(2*avg);
              pixel.setGreen(0);
              pixel.setBlue(0);
            }
          else
            {
              pixel.setRed(255);
              pixel.setGreen(2*avg - 255);
              pixel.setBlue(2*avg - 255);
            }
        }
      else if(pixel.getY() <= 2*image4.getHeight()/7)
        {
          if(avg < 128)
      {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
    
    else
      {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg - 255);
      }
        }
      else if(pixel.getY() <= 3*image4.getHeight()/7)
        {if(avg <= 128)
            {
              pixel.setRed(2*avg);
              pixel.setGreen(2*avg);
              pixel.setBlue(0);
            }
          else
            {
              pixel.setRed(255);
              pixel.setGreen(255);
              pixel.setBlue(2*avg - 255);
            }
        }
      else if(pixel.getY() <= 4*image4.getHeight()/7)
        {if(avg <= 128)
            {
              pixel.setRed(0);
              pixel.setGreen(2*avg);
              pixel.setBlue(0);
            }
          else
            {
              pixel.setRed(2*avg - 255);
              pixel.setGreen(255);
              pixel.setBlue(2*avg - 255);
            }
        }
      else if(pixel.getY() <= 5*image4.getHeight()/7)
        {if(avg <= 128)
            {
              pixel.setRed(0);
              pixel.setGreen(0);
              pixel.setBlue(2*avg);
            }
          else
            {
              pixel.setRed(2*avg - 255);
              pixel.setGreen(2*avg - 255);
              pixel.setBlue(255);
            }
        }
      else if(pixel.getY() <= 6*image4.getHeight()/7)
        {if(avg <= 128)
            {
              pixel.setRed(0.8*avg);
              pixel.setGreen(0);
              pixel.setBlue(2*avg);
            }
          else
            {
              pixel.setRed(1.2*avg - 51);
              pixel.setGreen(2*avg - 255);
              pixel.setBlue(255);
            }
        }
      else 
        {
          if(avg <= 128)
            {
              pixel.setRed(1.6*avg);
              pixel.setGreen(0);
              pixel.setBlue(1.6*avg);
            }
          else
            {
              pixel.setRed(0.4*avg + 153);
              pixel.setGreen(2*avg - 255);
              pixel.setBlue(0.4*avg + 153);
            }
        }
    }
  image4.drawTo(canvas);
}

function ResetImage()
{
  image5.drawTo(can);
}

function theme() {
  if (dark == 1) {
    document.body.style.backgroundColor = "#000000";
    document.getElementById("title").style.color = "#ffffff";
    document.getElementById("l1").style.color = "#ffffff";
    document.getElementById("l2").style.color = "#ffffff";
    document.getElementById("l3").style.color = "#ffffff";
    document.getElementById("l4").style.color = "#ffffff";
    document.getElementById("img").style.color = "#ffffff";
    dark=0;
  }

  else{
    document.body.style.backgroundColor = "#ffff66";
    document.getElementById("title").style.color = "#000000";
    document.getElementById("l1").style.color = "#000000";
    document.getElementById("l2").style.color = "#000000";
    document.getElementById("l3").style.color = "#000000";
    document.getElementById("l4").style.color = "#000000";
    document.getElementById("img").style.color = "#000000";
    dark=1;
  }
}
