window.addEventListener("load", function () {
    var json = JSON.parse(localStorage.getItem("active_user"));
    console.log(json)
    h1 = JSON.parse( localStorage.getItem("h1") )
    console.log(h1)
    transactions = loadData("h1").find((user)=>user.email==json.email).user_transactions || [];
    console.log(transactions)

    var btnCredit = document.getElementById("credit")
    btnCredit.addEventListener("click", handleSortByCredit)

    var btnDebit = document.getElementById("debit")
    btnDebit.addEventListener("click", handleSortByDebit)

    var btnAll = document.getElementById("all")
    btnAll.addEventListener("click", handleSortByAll)
    
    })

function handleSortByCredit(){
    var table = document.getElementById("myTable");
    table.textContent = ""
    var tr = document.createElement('tr')
    var th1 = document.createElement('th')
    var th2 = document.createElement('th')
    var th3 = document.createElement('th')
    var th4 = document.createElement('th')

    th1.textContent = "Title"
    th2.textContent = "Type"
    th3.textContent = "Amount"
    th4.textContent = "Date"

    tr.append(th1,th2,th3,th4)

    table.append(tr)

    for( let i = 0; i < transactions.length; i++ ){
            if(transactions[i].type === "Credit"){
               
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
        
                cell1.innerHTML = transactions[i].title
                cell2.innerHTML = transactions[i].type
                cell3.innerHTML = transactions[i].amount
                cell4.innerHTML = transactions[i].date
            }
    }
}

function handleSortByDebit(){
    var table = document.getElementById("myTable");
    table.textContent = ""
    var tr = document.createElement('tr')
    var th1 = document.createElement('th')
    var th2 = document.createElement('th')
    var th3 = document.createElement('th')
    var th4 = document.createElement('th')

    th1.textContent = "Title"
    th2.textContent = "Type"
    th3.textContent = "Amount"
    th4.textContent = "Date"

    tr.append(th1,th2,th3,th4)

    table.append(tr)
    for( let i = 0; i < transactions.length; i++ ){
        if(transactions[i].type === "Debit"){
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
    
            cell1.innerHTML = transactions[i].title
            cell2.innerHTML = transactions[i].type
            cell3.innerHTML = transactions[i].amount
            cell4.innerHTML = transactions[i].date
        }
    }
   
}

function handleSortByAll(){
    var table = document.getElementById("myTable");
    table.textContent = ""
    var tr = document.createElement('tr')
    var th1 = document.createElement('th')
    var th2 = document.createElement('th')
    var th3 = document.createElement('th')
    var th4 = document.createElement('th')

    th1.textContent = "Title"
    th2.textContent = "Type"
    th3.textContent = "Amount"
    th4.textContent = "Date"

    tr.append(th1,th2,th3,th4)

    table.append(tr)

    for( let i = 0; i < transactions.length; i++ ){
            if( transactions[i].type === "Credit" || transactions[i].type === "Debit"){
                var table = document.getElementById("myTable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
        
                cell1.innerHTML = transactions[i].title
                cell2.innerHTML = transactions[i].type
                cell3.innerHTML = transactions[i].amount
                cell4.innerHTML = transactions[i].date
            }
    }

}



function loadData(key) {
    return JSON.parse(localStorage.getItem(key));
}
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}