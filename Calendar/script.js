// const now = new Date(); // Creates a new Date object with the current date and time
// console.log(now); 
// let month=now.getMonth()
// let year=now.getFullYear()
// let first_day = new Date(year, 10, 1) // 1st day of month
// // months and days output are given in the index form (0-11) & (0-6) respectively
// console.log(first_day)
// console.log(year)
// console.log(month)
// console.log(first_day.getDay())

// alert("hey")

let calendar=document.querySelector('.calendar')

const month_names=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear=(year)=>{
    return ((year%4 ===0 && year%100!==0 && year%400!==0) || (year%100==0 && year%400===0 ))
}

getFebDays=(year)=>{        // no. of days in the feb of the selected year
    return isLeapYear(year)? 29: 28;
}

generateCalendar = (month, year)=>{
    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year') 

    let days_of_month = [31, getFebDays(year) , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML=''

    let currDate = new Date()
    if (!month) month= currDate.getMonth();
    if (!year) year= currDate.getFullYear();

    let curr_month=`${month_names[month]}`;
    month_picker.innerHTML=curr_month;
    calendar_header_year.innerHTML=year;

    // get first day of month --   first_day.getDay()-will get the index of that day (0-6), 0 -sumday , 1 -monday.........
    let first_day=new Date(year, month, 1)

    for(let i=0; i<=days_of_month[month] + first_day.getDay() - 1; i++){
        let day=document.createElement('div');
        if(i>=first_day.getDays()){
            day.classList.add('calendar-day-hover')
            day.innerHTML = i- first_day.getDay() +1;
            day.innerHTML += `<span></span
                            <span></span>
                            <span></span>
                            <span></span>`;
            if(i- first_day.getDay() + 1 === currDate.getDate() && year===currDate.getFullYear() && month=== currDate.getMonth()){
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list');

month_names.forEach((e, index)=>{
    let month = document.createElement('div')
    month.innerHTML=`<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick=()=>{
        month_list.classList.remove('show')
        curr_month.value=index
        generateCalendar(index, curr_year.value)

    }
    month_list.appendChilld(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick=()=>{
    month_list.classList.add('show')
}

let currDate=new Date()

let curr_month={value:currDate.getMonth()}
let curr_year={value:currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick=()=>{
    --curr_year.value
    generateCalendar(curr_month.value , curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')
}

