const to_date = "30 July 2023 12:00 AM";

let input = document.querySelectorAll("input");

function clock()
{
    const end = new Date(to_date);
    const start = new Date();
    let diff = (end-start)/1000; // converting to sec from millisec
    // let rem_sec=0;
    input[0].value = Math.floor((diff / 3600 / 24)); // days
    
    input[1].value = Math.floor(diff/3600)%24;
    
    input[2].value = Math.floor(diff/60)%60;
   
    input[3].value = Math.floor(diff)%60;
}
// clock();

setInterval (
    ()=>{
    clock();
},1000
)



