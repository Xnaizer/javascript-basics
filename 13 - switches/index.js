// switch = can be an efficient replacement to many else if statements

let day = 17;

// daripada menggunakan banyak else if 
// if(age3 < 0){
//     result.textContent = "ga bisa 0"
//     }
//     else if(age3 >= 100){
//         result.textContent = "gelooo masih hidup";
//     }
//     else if(age3 >= 18){
//         result.textContent = "approved";
//     }
   
//     else{
//         result.textContent = "WHAT YOU DOING HERE!!!!";
//     }
// lebih baik menggukan switch supaya menghemat kata dalam penulisan

switch(day){
    case 1 :
        console.log("mon");
        break
    case 2 :
        console.log("tue");
        break
    case 3 :
        console.log("wed");
        break
    case 4 :
        console.log("thu");
        break
    case 5 :
        console.log("fri");
        break
    case 6 :
        console.log("sat");
        break
    case 7 :
        console.log("sun");
        break
    default :
        console.log(`the ${day} is not a number or case only limit up to 7 cases`)
}