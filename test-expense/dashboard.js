
var json = JSON.parse(localStorage.getItem('active_user'))
console.log(json);
var p = document.querySelector('p');
p.textContent =  `Welcome  ${json['name']}`

window.addEventListener('load', () => {

})
function submission() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
  
    
  
    
  
    // cell1.innerHTML =
    // cell2.innerHTML = 
    // cell3.innerHTML =
    // cell4.innerHTML =
  
  }

  var globalArr;

window.addEventListener("load", function () {
    globalArr = loadData("h1") || [];
    var form = document.getElementById("form");
    form.addEventListener("submit", dashboard);
});
function dashboard() {
    event.preventDefault();
    var form = new FormData(event.target);
    var title = form.get("title");
    var type = form.get("type");
    var amount = form.get("amount");
    var payload = { title: title, type: type, amount: amount };

   

    var cont = document.getElementById("container");
    cont.innerHTML = "";
    // var flag = true;
    // for (let i = 0; i < globalArr.length; i++) {
    //     console.log(i);
    //     console.log(globalArr[i]["email"] == email);
    //     console.log(email);
    //     if (globalArr[i]["email"] == email) {
    //         flag = false;
    //         var h1 = document.createElement("h1");
    //         h1.textContent = "Account already exists";
    //         cont.append(h1);
            
    //     }

        
    // }

    // if (flag) {
    //     globalArr.push(payload);
    // }

    console.log(globalArr, "hii");

    saveData("h1", globalArr);
}
function loadData(key) {
    return JSON.parse(localStorage.getItem(key));
}
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


