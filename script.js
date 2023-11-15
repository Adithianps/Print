function submitForm() {
  // Get form data
  var formData = new FormData(document.getElementById('printOrderForm'));

  // You can add additional client-side validation here if needed

  // Update the backend URL based on where your server is hosted
  var backendUrl = 'https://adithianps.github.io/Backend/'; // Replace with your actual backend URL

  // Use AJAX to send the form data to the server
  var xhr = new XMLHttpRequest();
  xhr.open('POST', `${backendUrl}/submitOrder`, true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      // Successful response from the server
      alert('Order submitted successfully!');
      // Optionally reset the form after submission
      document.getElementById('printOrderForm').reset();
    } else {
      // Handle errors
      alert('Error submitting order. Please try again later.');
    }
  };

  // Send the FormData to the server
  xhr.send(formData);
}
