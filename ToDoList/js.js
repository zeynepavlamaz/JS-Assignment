// Toast mesajını göster
function showToast(type, message) {
  let toast = document.querySelector("#liveToast");
  toast.className = "toast " + type + " show";
  toast.querySelector(".toast-body").innerText = message;
  //Zamanlayıcı ayarı
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 4000);
}

// Ekleme
function newElement() {
  let inputValue = document.querySelector("#task").value;
  // Değer var mı?
  if (inputValue === "") {
    showToast("error", "Listeye boş ekleme yapamazsınız!"); // Hata toast'ını görüntüle
    return;
  }

  // Yeni bir liste öğesi oluştur
  let createLi = document.createElement("li");
  let textNode = document.createTextNode(inputValue);
  createLi.appendChild(textNode);


  let closeSpan = document.createElement("span");
  closeSpan.className = "close";
  closeSpan.innerText = "x";
  closeSpan.addEventListener("click", function() {
    deleteElement(this);
  });

  createLi.appendChild(closeSpan);
  let taskList = document.querySelector("#list");
  taskList.appendChild(createLi);

  showToast("success", "Listeye eklendi.");
  saveToLocalStorage(inputValue);
  document.querySelector("#task").value = "";
}

function deleteElement(element) {
  element.parentNode.remove();
  showToast("success", "Madde silindi.");
}

function saveToLocalStorage(item) {
  let items = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : []
  items.push(item);
  localStorage.setItem("taskList", JSON.stringify(items));
}
