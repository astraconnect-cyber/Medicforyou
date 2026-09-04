function handleImageUpload(event) {

  const file = event.target.files[0];

  if (!file) return;

  uploadedImageURL = URL.createObjectURL(file);

  document.getElementById("imagePreview").src =
  uploadedImageURL;

  document.getElementById("scanImage").src =
  uploadedImageURL;

  document.getElementById("uploadSection")
  .style.display = "none";

  document.getElementById("previewSection")
  .style.display = "block";

}


document
.getElementById("cameraInput")
.addEventListener("change", handleImageUpload);


document
.getElementById("fileInput")
.addEventListener("change", handleImageUpload);
