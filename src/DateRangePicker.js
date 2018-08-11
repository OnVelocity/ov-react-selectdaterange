import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './DateRangePicker.css'

export default class DateRangePicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			date: props.date,
			selectedDate: null
		}
	}

	getOffsetYear(date, offsetYear) {
		return new Date(date.getFullYear() + offsetYear, date.getMonth(), date.getDate())
	}

	getOffsetMonth(date, offsetMonth) {
		return new Date(date.getFullYear(), date.getMonth() + offsetMonth, date.getDate())
	}

	getOffsetDate(date, offsetDate) {
		return new Date(date.getFullYear(), date.getMonth(), date.getDate() + offsetDate)
	}

	isDateInStartDateMonth(date) {
		const start = this.state.date
		return (
			start.getMonth() === date.getMonth() &&
			start.getFullYear() === date.getFullYear()
		)
	}

	isDateToday(date) {
		const start = new Date(Date.now())
		return (
			start.getFullYear() === date.getFullYear() &&
			start.getMonth() === date.getMonth() &&
			start.getDate() === date.getDate()
		)
	}

	isDateSelectedDate(date) {
		if (this.state.selectedDate) {
			const start = this.state.selectedDate
			return (
				start.getFullYear() === date.getFullYear() &&
				start.getMonth() === date.getMonth() &&
				start.getDate() === date.getDate()
			)
		}
	}

	getStartOfWeekDate(date) {
		const offset = date.getDay()
		return this.getOffsetDate(date, -offset)
	}

	getStartOfMonthDate(date) {
		const offset = 1 - date.getDate()
		return this.getOffsetDate(date, offset)
	}

	renderDay(date) {
		const day = date.getDate()
		const isToday = this.isDateToday(date)
		const inMonth = this.isDateInStartDateMonth(date)
		const classNames = {
			day: true,
			'--out-of-start-month': !inMonth,
			'--is-today': isToday
		}
		if (this.state.selectedDate instanceof Date) {
			classNames['--is-selected-date'] = this.isDateSelectedDate(date)
		}
		const className = Object.keys(classNames)
			.reduce((classes, name) => {
				if (classNames[name]) {
					classes.push(name)
				}
				return classes
			}, [])
			.join(' ')
		return (
			<div key={day} className={className} onClick={() => this.selectDate(date)}>
				{day}
			</div>
		)
	}

	renderMonthName(date) {
		const month = date.getMonth()
		switch (month) {
			case 0:
				return <span>January</span>
			case 1:
				return <span>February</span>
			case 2:
				return <span>March</span>
			case 3:
				return <span>April</span>
			case 4:
				return <span>May</span>
			case 5:
				return <span>June</span>
			case 6:
				return <span>July</span>
			case 7:
				return <span>August</span>
			case 8:
				return <span>September</span>
			case 9:
				return <span>October</span>
			case 10:
				return <span>November</span>
			case 11:
				return <span>December</span>
		}
	}

	renderWeek(startOfWeekDate) {
		const week = []
		for (let i = 0; i < 7; i++) {
			const date = this.getOffsetDate(startOfWeekDate, i)
			week.push(this.renderDay(date))
		}
		return (
			<div key={startOfWeekDate} className="week">
				{week}
			</div>
		)
	}

	renderMonth() {
		const monthStart = this.getStartOfMonthDate(this.state.date)
		const weekStart = this.getStartOfWeekDate(monthStart)
		const weeks = []
		for (let i = 0; i < 6; i++) {
			const offset = i * 7
			const date = this.getOffsetDate(weekStart, offset)
			weeks.push(this.renderWeek(date))
		}
		return weeks
	}

	render() {
		return (
			<div className="DateRangePicker">
				<div>
					<button onClick={() => this.previousYear()}>Previous Year</button>
					<span>{this.state.date.getFullYear()}</span>
					<button onClick={() => this.nextYear()}>Next Year</button>
				</div>
				<div>
					<button onClick={() => this.previousMonth()}>Previous Month</button>
					{this.renderMonthName(this.state.date)}
					<button onClick={() => this.nextMonth()}>Next Month</button>
				</div>
				<div className="week">
					<div className="day">Sun</div>
					<div className="day">Mon</div>
					<div className="day">Tue</div>
					<div className="day">Wed</div>
					<div className="day">Thu</div>
					<div className="day">Fri</div>
					<div className="day">Sat</div>
				</div>
				<div className="calendar">{this.renderMonth()}</div>
			</div>
		)
	}

	previousYear() {
		const date = this.getOffsetYear(this.state.date, -1)
		this.setState({ date })
	}

	nextYear() {
		const date = this.getOffsetYear(this.state.date, 1)
		this.setState({ date })
	}

	previousMonth() {
		const date = this.getOffsetMonth(this.state.date, -1)
		this.setState({ date })
	}

	nextMonth() {
		const date = this.getOffsetMonth(this.state.date, 1)
		this.setState({ date })
	}

	selectDate(date) {
		this.setState({ selectedDate: date }, () => {
			this.props.onDateSelected(date)
		})
	}
}

DateRangePicker.propTypes = {
	date: PropTypes.instanceOf(Date),
	onDateSelected: PropTypes.func
}

DateRangePicker.defaultProps = {
	date: new Date(Date.now()),
	onDateSelected: date => console.log('selected date', date)
}
