import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
	getOffsetDate, getOffsetMonth, getOffsetYear,
	getStartOfMonthDate,
	getStartOfWeekDate,
	isDateInStartDateMonth,
	isDateSelectedDate,
	isDateToday
} from "./date"
import './SelectDateRange.css'

export class SelectDateRange extends Component {

	static propTypes = {
		date: PropTypes.instanceOf(Date)
	}

	static defaultProps = {
		date: new Date(Date.now()),
		onDateSelected: date => console.log(`selected date ${date.toISOString()}`)
	}

	constructor(props) {
		super(props)
		this.state = {
			date: props.date,
			selectedDate: null
		}
	}

	render() {
		return (
			<div className="SelectDateRange">
				<div>
					<button onClick={() => this.previousYear()}>Previous Year</button>
					<span>{this.state.date.getFullYear()}</span>
					<button onClick={() => this.nextYear()}>Next Year</button>
				</div>
				<div>
					<button onClick={() => this.previousMonth()}>Previous Month</button>
					<MonthName date={this.state.date}/>
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
				<div className="calendar">
					<CalendarMonth
						startDate={this.state.date}
						selectedDate={this.state.selectedDate}
						onDateSelected={(date) => this.selectDate(date)}
					/>
				</div>
			</div>
		)
	}

	previousYear() {
		const date = getOffsetYear(this.state.date, -1)
		this.setState({date})
	}

	nextYear() {
		const date = getOffsetYear(this.state.date, 1)
		this.setState({date})
	}

	previousMonth() {
		const date = getOffsetMonth(this.state.date, -1)
		this.setState({date})
	}

	nextMonth() {
		const date = getOffsetMonth(this.state.date, 1)
		this.setState({date})
	}

	selectDate(date) {
		this.setState({selectedDate: date})
		this.props.onDateSelected(date)
	}
}

export function CalendarMonth({startDate, selectedDate, onDateSelected}) {
	const monthStart = getStartOfMonthDate(startDate)
	const weekStart = getStartOfWeekDate(monthStart)
	const weeks = []
	for (let i = 0; i < 6; i++) {
		const offset = i * 7
		const date = getOffsetDate(weekStart, offset)
		weeks.push(
			<CalendarWeek
				key={date}
				startOfWeekDate={date}
				startDate={startDate}
				selectedDate={selectedDate}
				onDateSelected={onDateSelected}
			/>
		)
	}
	return weeks
}

export function CalendarWeek({startOfWeekDate, startDate, selectedDate, onDateSelected}) {
	const week = []
	for (let i = 0; i < 7; i++) {
		const date = getOffsetDate(startOfWeekDate, i)
		week.push(
			<CalendarDay
				key={date}
				date={date}
				startDate={startDate}
				selectedDate={selectedDate}
				onDateSelected={onDateSelected}
			/>
		)
	}
	return (
		<div key={startOfWeekDate} className="week">
			{week}
		</div>
	)
}

export function CalendarDay({date, startDate, selectedDate = null, onDateSelected}) {

	const day = date.getDate()
	const isToday = isDateToday(date)
	const inMonth = isDateInStartDateMonth(date, startDate)
	const classNames = {
		day: true,
		'--is-not-in-start-month': !inMonth,
		'--is-today': isToday
	}
	if (selectedDate instanceof Date) {
		classNames['--is-selected-date'] = isDateSelectedDate(date, selectedDate)
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
		<div
			key={day}
			className={className}
			onClick={() => {
				onDateSelected(date)
			}}
		>
			{day}
		</div>
	)
}

export function MonthName({date}) {
	const month = date && date.getMonth()
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
		default:
			return <span> </span>
	}
}
