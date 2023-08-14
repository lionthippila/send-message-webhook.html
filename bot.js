function sendMessage() {
  var username = document.getElementById("username").value;
  var content = document.getElementById("content").value;

  var imageInput = document.getElementById("fileInput");
  var imageFile = imageInput.files[0];

  var formData = new FormData();
  formData.append("username", username);
  formData.append("content", content);
  formData.append("file", imageFile);

  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1140565500787691551/1TeFefHZxt3kktCpJ7ZDZj6l12MuiioSl6RAzfst8XO9YL_w20shTctMZAgxQw-VCU6p");

  request.send(formData);
}
