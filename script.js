// let typeBtn = document.getElementById('typeButton');
let avance = document.getElementById('avance');
let salary = document.getElementById('salary');
let type = document.getElementsByName("typeName");
let typeBox = document.getElementById("typeBox");
let profit = document.getElementById("profit");
addEventListener('click', function (e) {
    let a = this.document.createElement('div');
    if(e.target.type == 'radio'){
        switch (e.target.id) {
            case 'avance':
                a.id = 'avanceResult';
                profit.removeChild(profit.lastChild);
                profit.appendChild(a);    
                console.log(profit); 
                break;
            case 'salary':

                a.id = 'salaryResult';
                profit.removeChild(profit.lastChild);
                profit.appendChild(a);    
                console.log(profit); 
                break;
            default:
                break;
        }
    }
    else return;
})