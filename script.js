
let buttons = document.querySelectorAll(".period-btn");
let hoursElements = document.querySelectorAll(".line-2 h1")
let previousHoursElements = document.querySelectorAll(".line-2 p")


let hours={
    'daily':[5,1,1,0,1,0],
    'weekly': [32,10,4,4,5,2],
    'monthly': [103,23,13,11,21,7]
}

let previousHours={
    'daily':[7,2,1,1,1,3,1],
    'weekly': [36,8,7,5,10,2],
    'monthly': [128,29,19,18,23,11]
}


buttons.forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
        let period = e.target.id
		clearSelected();
		element.classList.add("selected");
        
        for(var i = 0; i< hoursElements.length;i++){
            hoursElements[i].innerHTML = hours[period][i] + "hrs"
            switch (period) {
                case 'daily':
                    previousHoursElements[i].innerHTML = 'Last Day - ' + previousHours[period][i] + 'hrs'
                    break;
                case 'weekly':
                    previousHoursElements[i].innerHTML = 'Last Week - ' + previousHours[period][i] + 'hrs'
                    break;
                case 'monthly':
                    previousHoursElements[i].innerHTML = 'Last Month - ' + previousHours[period][i] + 'hrs'
                    break;
            
                
            }
        }
	});
});

function clearSelected() {
	buttons.forEach((element) => {
		element.classList.remove("selected");
	});
}

buttons[0].click()

