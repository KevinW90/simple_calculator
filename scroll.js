let screen = document.getElementById('screen');

function scroll(){
  //check if div is scrolled to the bottom
  var atBottom = isElementScrolledToBottom(screen);
  
  //if div was at the bottom, scroll to bottom again.
  if(!atBottom) {
    console.log('scrolled')
    scrollToBottom(screen);
  }
};

//function to check if element is scrolled to the bottom
function isElementScrolledToBottom(el) {
  console.log(el.scrollTop)
  console.log(el.scrollHeight)
  console.log(el.offsetHeight)
  if (el.scrollTop >= (el.scrollHeight - el.offsetHeight)) {
      return true;
  }
  return false;
}

//function to scroll to bottom
function scrollToBottom(el) {
  el.scrollTop = el.scrollHeight;
}