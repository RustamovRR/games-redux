// Base URL
const base_url = 'https://api.rawg.io/api/'

//Getting the month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

//Getting the day
const getCurrentDay = () => {
    const day = new Date().getDay()
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

//Curren day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentDay}-${currentMonth}-${currentYear}`
const lastYear = `${currentDay}-${currentMonth}-${currentYear - 1}`
const nextYear = `${currentDay}-${currentMonth}-${currentYear + 1}`