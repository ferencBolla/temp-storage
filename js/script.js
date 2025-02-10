/* js/script.js */

// Function to show fruit details in the modal
function showFruitDetail(fruitName, detail) {
    var modal = document.getElementById('fruitModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalContent = document.getElementById('modalContent');
  
    modalTitle.textContent = fruitName;
    modalContent.textContent = detail;
    modal.style.display = "block";
  }
  
  // If the modal exists on the page, set up the close functionality
  var modal = document.getElementById('fruitModal');
  if (modal) {
    var span = document.querySelector('.modal .close');
  
    // Close the modal when the user clicks the (x)
    span.onclick = function() {
      modal.style.display = "none";
    };
  
    // Close the modal if the user clicks outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
  