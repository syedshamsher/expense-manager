var user_data = JSON.parse(localStorage.getItem("h1"));
console.log(user_data);

window.addEventListener("load", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", handleRegister);
});
function handleRegister() 
{
    event.preventDefault();
    var form = new FormData(event.target);
    var email = form.get("email");
    var password = form.get("password");

    var cont = document.getElementById("container");
    cont.innerHTML = "";
    var counter = 0;
    
    for(var i = 0; i < user_data.length;i++)
    {
        if(user_data[i].email == email ){
            //redirects here
            if(user_data[i].password == password)
            { //counter++;
                var user = JSON.stringify(user_data[i]);
                //console.log("user");
                localStorage.setItem("active_user", user);

                window.location.href =
                "C:/Users/user/masai/module-III/project_m/dashboard.html";

            }

            else{
                var h1 = document.createElement("h3");
                h1.textContent = "password doesn't match";
                cont.append(h1);

                console.log("wrong password")
                //counter++
            }
            
            //break
        }

        else if(user_data[i].email != email){
            counter++
        }

    }
    

    if(counter == user_data.length){
        var h1 = document.createElement("h3");
        h1.textContent = "Account doesn't exists";
        cont.append(h1);
        console.log("account doesn't exists")
    }


}

//upon successful login it should redirects to dashboard
