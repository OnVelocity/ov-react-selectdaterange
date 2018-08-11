/**
 * create a new date offset by give year
 * @param date
 * @param offsetYear
 * @returns {Date}
 */
export function getOffsetYear(date, offsetYear) {
	return new Date(date.getFullYear() + offsetYear, date.getMonth(), date.getDate())
}

/**
 * create a new date offset by given month
 * @param date
 * @param offsetMonth
 * @returns {Date}
 */
export function getOffsetMonth(date, offsetMonth) {
	return new Date(date.getFullYear(), date.getMonth() + offsetMonth, date.getDate())
}

/**
 * create a new date offset by given day
 * @param date
 * @param offsetDate
 * @returns {Date}
 */
export function getOffsetDate(date, offsetDate) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() + offsetDate)
}

/**
 * determine if given date is in the same year and month as startDate
 * @param date
 * @param startDate
 * @returns {boolean}
 */
export function isDateInStartDateMonth(date, startDate) {
	return (
		startDate.getMonth() === date.getMonth() &&
		startDate.getFullYear() === date.getFullYear()
	)
}

/**
 * determine if given date is today
 * @param date
 * @returns {boolean}
 */
export function isDateToday(date) {
	const today = new Date(Date.now())
	return (
		today.getFullYear() === date.getFullYear() &&
		today.getMonth() === date.getMonth() &&
		today.getDate() === date.getDate()
	)
}

/**
 * determine if give date is same day, month and year as selectedDate
 * @param selectedDate
 * @param date
 * @returns {boolean}
 */
export function isDateSelectedDate(date, selectedDate) {
	if (selectedDate) {
		return (
			selectedDate.getFullYear() === date.getFullYear() &&
			selectedDate.getMonth() === date.getMonth() &&
			selectedDate.getDate() === date.getDate()
		)
	}
	return false
}

/**
 * create a new date representing the day that starts the week of the given date
 * @param date
 * @returns {Date}
 */
export function getStartOfWeekDate(date) {
	const offset = date.getDay()
	return getOffsetDate(date, -offset)
}

/**
 * create a new date representing the day that starts the month of the given date
 * @param date
 * @returns {Date}
 */
export function getStartOfMonthDate(date) {
	const offset = 1 - date.getDate()
	return getOffsetDate(date, offset)
}
