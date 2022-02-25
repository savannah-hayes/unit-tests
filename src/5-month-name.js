const months = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June',
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
]

months.unshift(null)

export const monthName = (monthNumber) => monthNumber === 0 || monthNumber > 12 ? null : months[monthNumber];
