window.onload = function() {
  var userData = JSON.parse(localStorage.getItem("userInfo"));
  if (userData) {
    var table = document.getElementById("userInfoTable").getElementsByTagName('tbody')[0];
    for (var i = 0; i < userData.length; i++) {
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
      var cell6 = newRow.insertCell(5);
      
      cell1.innerHTML = userData[i].name;
      cell2.innerHTML = userData[i].email;
      cell3.innerHTML = userData[i].marks;
      cell4.innerHTML = userData[i].age;
      cell5.innerHTML = userData[i].degree;
      cell6.innerHTML = '<button class="actionBtn" onclick="editRow(this)"><img src="assets/edit-icon.png" alt=""></button><button class="actionBtn" onclick="deleteRow(this)"><img src="assets/trashcan-icon.png" alt=""></button>';
    }
  }
};

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var marks = document.getElementById("marks").value;
  var age = document.getElementById("age").value;
  var degree = document.getElementById("degree").value;
  
  var table = document.getElementById("userInfoTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  
  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = marks;
  cell4.innerHTML = age;
  cell5.innerHTML = degree;
  cell6.innerHTML = '<button class="actionBtn" onclick="editRow(this)"><img src="assets/edit-icon.png" alt=""></button><button class="actionBtn" onclick="deleteRow(this)"><img src="assets/trashcan-icon.png" alt=""></button>';
  
  // Save data to local storage
  var userData = JSON.parse(localStorage.getItem("userInfo")) || [];
  userData.push({ name: name, email: email, marks: marks, age: age, degree: degree });
  localStorage.setItem("userInfo", JSON.stringify(userData));
  
  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("age").value = "";
  document.getElementById("degree").value = "";
});

function deleteRow(row) {
  var rowIndex = row.parentNode.parentNode.rowIndex;
  document.getElementById("userInfoTable").deleteRow(rowIndex);
  
  // Update data in local storage
  var userData = JSON.parse(localStorage.getItem("userInfo"));
  userData.splice(rowIndex - 1, 1);
  localStorage.setItem("userInfo", JSON.stringify(userData));
}

function editRow(row) {
  let val = document.getElementById('submit-btn');
  val.value = 'Edit Student';
  var rowIndex = row.parentNode.parentNode.rowIndex;
  var table = document.getElementById("userInfoTable");
  var name = table.rows[rowIndex].cells[0].innerHTML;
  var email = table.rows[rowIndex].cells[1].innerHTML;
  var marks = table.rows[rowIndex].cells[2].innerHTML;
  var age = table.rows[rowIndex].cells[3].innerHTML;
  var degree = table.rows[rowIndex].cells[4].innerHTML;
  
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("marks").value = marks;
  document.getElementById("age").value = age;
  document.getElementById("degree").value = degree;
  
  table.deleteRow(rowIndex);
  
  // Update data in local storage
  var userData = JSON.parse(localStorage.getItem("userInfo"));
  userData.splice(rowIndex - 1, 1);
  localStorage.setItem("userInfo", JSON.stringify(userData));
}

document.getElementById("searchInput").addEventListener("keyup", function() {
  var searchValue = this.value.toLowerCase();
  var table = document.getElementById("userInfoTable");
  var rows = table.getElementsByTagName("tr");
  
  for (var i = 1; i < rows.length; i++) {
    var name = rows[i].cells[0].innerHTML.toLowerCase();
    var email = rows[i].cells[1].innerHTML.toLowerCase();
    var degree = rows[i].cells[4].innerHTML.toLowerCase();
    
    if (name.indexOf(searchValue) > -1 || email.indexOf(searchValue) > -1 || degree.indexOf(searchValue) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
function changeBtn(){
  let val = document.getElementById('submit-btn');
  val.value = 'Add Student';
}