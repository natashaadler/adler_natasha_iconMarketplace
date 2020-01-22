//js DOCUMENT

// Selects all icons
const allSVGS = document.querySelectorAll(".icon");


// For all the SVG's do this function
allSVGS.forEach((item) => {
   // Makes each icon a button
   item.addEventListener('click', function iconBtn() {
      // Logs the ID
      console.log(item.id);
      // Toggles Class
      item.classList.toggle('selected');
   })
});
