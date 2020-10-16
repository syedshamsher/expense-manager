var globalArr;

window.addEventListener("load", function () {
    globalArr = loadData("h1") || [];
    var form = document.getElementById("form");
    form.addEventListener("submit", handleRegister);
});
function handleRegister() {
    event.preventDefault();
    var form = new FormData(event.target);
    var name = form.get("name");
    var email = form.get("email");
    var password = form.get("password");
    var payload = { name: name, email: email, password: password};

   

    var cont = document.getElementById("container");
    cont.innerHTML = "";
    var flag = true;
    console.log(globalArr);
    for (let i = 0; i < globalArr.length; i++) {
        console.log(i);
        console.log(globalArr[i]["email"] == email);
        console.log(email);
        if (globalArr[i]["email"] == email) {
            flag = false;
            var h1 = document.createElement("h1");
            h1.textContent = "Account already exists";
            cont.append(h1);
            
        }

        
    }

    if (flag) {
        globalArr.push(payload);
        window.location.href = "C:/Users/user/project-expense-manager/test-expense/login.html"
    }

    console.log(globalArr, "hii");

    saveData("h1", globalArr);
}
function loadData(key) {
    return JSON.parse(localStorage.getItem(key));
}
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
