//This function will change our background-image property for #getImage when the button is clicked

//We're calling this function imagefun() because this is the name we used in the button's onclick event

function imagefun() {

//here we're declaring a VARIABLE called Image_Id that is based on the getImage id from our HTML file
//remember that #getImage is the element that has the CSS background image
//document.getElementById uses the DOM to find the HTML element that has the ID: getImage
const Image_Id = document.getElementById('getImage');

//console.log is naming the current background-image that is being shown every time we click the button
//console.log can help us debug, so highly recommend getting familiar with it
console.log('The image is:', Image_Id.style.backgroundImage)


//this statement is saying that if our variable, Image_Id (which is based on the HTML element getImage)
//IF Image_Id has a background-image of 1.jpg, which is its 'default' because that's the background-image that has been set in the CSS file
//OR if Image_Id has a background-image that is 'undeclared'
//Then change the background-image to 2.jpg
  if (Image_Id.style.backgroundImage === 'url("img/1.jpg")' ||
  !Image_Id.style.backgroundImage) {
  Image_Id.style.backgroundImage = 'url("img/2.jpg")';
        }

//This statement says that the above is not true, and IF background-image is 2.jpg
//then change background-image to 3.jpg
            else if (Image_Id.style.backgroundImage === 'url("img/2.jpg")') {
            Image_Id.style.backgroundImage = 'url("img/3.jpg")';
            }
//Finally, if none of the above statements are true: so image is NOT 1.jpg, or 2.jpg,(so basically, if it's 3.jpg)
//THEN make the background-image 1.jpg which will reset everything and start again at the first statement
            else { Image_Id.style.backgroundImage = 'url("img/1.jpg")';
                }
  }
