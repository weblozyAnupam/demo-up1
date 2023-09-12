function toggle() {
  var btn = document.getElementById("btn");
  btn.style.display = (btn.style.display === "none" || btn.style.display === "") ? "block" : "none";
}
toggle(1)

function showTab(tabIndex) {
  var tabs = document.querySelectorAll(".tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tabs[tabIndex - 1].style.display = "block";
   // Subtract 1 to match the new starting index
}

// Call showTab(1) to open the first tab by default
showTab(1);


// counter

function updateCounter() {
  const vernabilityTitles = document.querySelectorAll('.vernability_title');
  const counterElement = document.getElementById('counter');
  counterElement.textContent = `${vernabilityTitles.length}`;
}

// Initial call to update the counter when the page loads
updateCounter();


// color

// Get all elements with class 'nav' and 'li'
var elements = document.querySelectorAll('.showTab_disp .vernability_title');

// Add a click event listener to each element
elements.forEach(function(element) {
    element.addEventListener('click', function() {
        // Remove the 'active' class from all elements with class 'nav' and 'li'
        elements.forEach(function(el) {
            el.classList.remove('active');
        });

        // Add the 'active' class to the clicked element
        this.classList.add('active');
    });
});






