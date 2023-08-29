const enddate = "10 august 2023 08:05 PM";

document.getElementById("end-date").innerHTML = enddate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(enddate);
  const now = new Date();
  const diff = (end - now) / 1000; // in seconds

  if(diff<0)
  {
    return;
  }

  // in days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // in hours
  inputs[1].value = Math.floor(diff / 60 / 60)%24;
  //in minutes
  inputs[2].value = Math.floor(diff/60)%60;
  inputs[3].value = Math.floor(diff)%60;

}

clock()

// 1 day = 24 hours
// 1 hour = 60 min
// 60 min= 3600 sec
setInterval(
    ()=>{
        clock()
    },1000
)