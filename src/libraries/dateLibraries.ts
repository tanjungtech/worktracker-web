const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

const day = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const workingDayNum = [1, 2, 3, 4, 5]

export const monthNameList = (m: number) => {
  return months[m]
}

export const dateToDayNameConverter = (d: number) => {
  return day[d]
}

export const dateIdStdFormat = (d: Date) => {
  return `${ dateToDayNameConverter(d.getDay()) }, ${ d.getDate() } ${ monthNameList(d.getMonth()) } ${ d.getFullYear() }`
}

export const limitedWorkingDayObject = () => {
  return true
}

export const setYearByNumber = (base: Date, n: number) => {
  const cleanBase = new Date(base)
  return new Date(cleanBase.setFullYear(cleanBase.getFullYear() + n))
}

export const generateDateArray = (dateFrom: Date, dateTo: Date, descending: Boolean = false, workingDays: Boolean = false) => {
  let dateArr = []
  let initDate = dateFrom
  const incUnit = descending ? -1 : 1
  while (initDate <= dateTo) {
    const incDate = new Date(initDate)
    if (workingDays) {
      const indexWorkingDate = incDate.getDay() 
      if (workingDayNum.indexOf(indexWorkingDate) > -1) dateArr.push(incDate)
    } else {
      dateArr.push(incDate)
    }
    initDate.setDate(initDate.getDate() + incUnit)
  }
  return dateArr
}