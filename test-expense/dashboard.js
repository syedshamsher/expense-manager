var transactions;
var h1;  
var json = JSON.parse(localStorage.getItem("active_user"));


function logOut(message)
{
    alert(message)
    localStorage.removeItem('active_user')
    window.location.href = "login.html"
}



function display_name()
{
    //var json = JSON.parse(localStorage.getItem("active_user"));
    if(!json){
        logOut("unauthorised")
        return
    }
    var p = document.querySelector("p");
    p.textContent = `Welcome  ${json["name"]}`;

}




//var transactions = [];

window.addEventListener("load", function () {
    display_name()

    h1 = JSON.parse( localStorage.getItem("h1") )

    transactions = loadData("h1").find((user)=>user.email==json.email).user_transactions || [];
    console.log(transactions)

    var form = document.getElementById("form");
    form.addEventListener("submit", dashboard);

    var btn = document.getElementById('logout');
    btn.addEventListener('click',function(){
        logOut("logging out")
    })

    
    renderDispalyIncome();
    display_transaction();
   
});

<<<<<<< HEAD
function ledgerPage(){
    window.location.href = "C:/Users/shams/Desktop/project-expense-manager/test-expense/ledger.html"
}

function logOut(message)
{
    alert(message)
    localStorage.removeItem('active_user')
    window.location.href = "login.html"
}



function display_name()
{
    //var json = JSON.parse(localStorage.getItem("active_user"));
    if(!json){
        logOut("unauthorised")
        return
    }
    var p = document.querySelector("p");
    p.textContent = `Welcome  ${json["name"]}`;

}

=======
>>>>>>> 0467b48c394452b5823ad58fcfd8fb5047cb03f5
function dashboard() {
    event.preventDefault();
    var form = new FormData(event.target);
    var title = form.get("title");
    var type = form.get("type");
    var amount = form.get("amount");
    var date = new Date()
    //date.toDateString();
    var payload = { title: title, type: type, amount: amount, date: date.toDateString() };
   
    
    //console.log(type);
    if(type == "Debit")
    {
        var get_balance = document.getElementById('balance')
        var current_balance = get_balance.textContent;
        if(Number(amount) > Number(current_balance))
        {
            alert(" Oops! Not Enough Balance To Debit")
            return
        }
    }
    transactions.push(payload);


    for(var i = 0; i < h1.length;i++)
     {
         if(json.email == h1[i].email)
         {
             h1[i].user_transactions = transactions;
             console.log(h1[i].user_transactions,"hii")
             var active_user_transactions = h1[i].user_transactions || []
             console.log(active_user_transactions);

         }

     }
  

    display_transaction()

    saveData("h1", h1);

    renderDispalyIncome();

   

    //var cont = document.getElementById("mytable");
    //cont.innerHTML = "";
}



function loadData(key) {
    return JSON.parse(localStorage.getItem(key));
}
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

var display_income = document.getElementById("totalIncome");
var display_expense = document.getElementById("totalExpense");
var display_balance = document.getElementById("balance");

function renderDispalyIncome() {
    let total_income = 0; //sum of all credits
    let total_expense = 0; // sum of debit
    
    for (var k = 0; k < transactions.length; k++) {
        if (transactions[k].type == "Credit") {
            total_income += Number(transactions[k].amount);
        }

        if (transactions[k].type == "Debit") {
            
            total_expense += Number(transactions[k].amount);
        }
    }
    let balance = total_income - total_expense
    if(balance < 0){
        //return
        //alert("balance is zero")
    }

    

    display_income.textContent = total_income;
    display_expense.textContent = total_expense;
    display_balance.textContent = balance;
}


function display_transaction()
{
    var table = document.getElementById("myTable");
    var tbody = document.querySelector('tbody')
    tbody.textContent = "";
    
    //console.log()
    if (transactions.length == 0) {
        console.log("no transactions to show");
        var row = document.createElement('tr');
        row.append(col1,col2,col3,col4)
        tbody.append(row)
        row.textContent = "no transactions to show"
    } 

    else if(transactions.length > 0 && transactions.length <= 5)
    {
        console.log(transactions,"inside display_Transactions");
        //var j = 0;
        for(var i = transactions.length-1; i>=0; i--)
        {
            //display_in_table()
            var row = document.createElement('tr');
            var col1 = document.createElement('td');
            var col2 = document.createElement('td');
            var col3 = document.createElement('td');
            var col4 = document.createElement('td');

            col1.textContent = transactions[i].title;
            col2.textContent = transactions[i].type;
            col3.textContent = transactions[i].amount;
            col4.textContent = transactions[i].date


            row.append(col1,col2,col3,col4)
            tbody.append(row)

        }
    }
    else {

        //console.log(transactions.length);
        let n = transactions.length;
        
        for( var i = n-1; i >= n - 5; i--  )
        {
            //display_in_table()
            var row = document.createElement('tr');
            var col1 = document.createElement('td');
            var col2 = document.createElement('td');
            var col3 = document.createElement('td');
            var col4 = document.createElement('td');

            col1.textContent = transactions[i].title;
            col2.textContent = transactions[i].type;
            col3.textContent = transactions[i].amount;
            col4.textContent = transactions[i].date


            row.append(col1,col2,col3,col4)
            tbody.append(row)

            
            


        }

        
    }
       
}


