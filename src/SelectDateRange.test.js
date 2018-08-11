/*global describe, it, expect, jest, beforeEach */
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDomTestUtils from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { SelectDateRange } from './SelectDateRange'

describe('SelectDateRange', () => {
	let props
	beforeEach(() => {
		props = {
			date: new Date(2017, 9, 14, 0, 0, 0),
			selectedDate: new Date(2017, 9, 12, 0, 0, 0),
			onDateSelected: jest.fn()
		}
	})
	it('renders', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<SelectDateRange
				date={props.date}
				selectedDate={props.selectedDate}
				onDateSelected={props.onDateSelected}
			/>
		)
		expect(tree.toJSON()).toMatchSnapshot()
	})
	it('calls default onDateSelected prop', () => {
		expect.assertions(1)
		const spy = jest.spyOn(console, 'log')
		const div = document.createElement('div')
		ReactDOM.render(
			<SelectDateRange date={props.date} selectedDate={props.selectedDate} />,
			div
		)
		const day = div.querySelectorAll('.day')[10]
		ReactDomTestUtils.Simulate.click(day, {})
		expect(spy).toBeCalledWith('selected date 2017-10-04T04:00:00.000Z')
		spy.mockRestore()
	})
	it('calls onDateSelected callback', () => {
		expect.assertions(1)
		const div = document.createElement('div')
		ReactDOM.render(<SelectDateRange {...props} />, div)
		const day = div.querySelectorAll('.day')[10]
		ReactDomTestUtils.Simulate.click(day, {})
		expect(props.onDateSelected).toHaveBeenCalledWith(new Date(2017, 9, 4))
	})
	it('calls previousYear()', () => {
		expect.assertions(1)
		const div = document.createElement('div')
		ReactDOM.render(<SelectDateRange {...props} />, div)
		const button = div.querySelectorAll('button')[0]
		ReactDomTestUtils.Simulate.click(button, {})
		expect(div.innerHTML).toMatchSnapshot()
	})
	it('calls nextYear()', () => {
		expect.assertions(1)
		const div = document.createElement('div')
		ReactDOM.render(<SelectDateRange {...props} />, div)
		const button = div.querySelectorAll('button')[1]
		ReactDomTestUtils.Simulate.click(button, {})
		expect(div.innerHTML).toMatchSnapshot()
	})
	it('calls previousMonth()', () => {
		expect.assertions(1)
		const div = document.createElement('div')
		ReactDOM.render(<SelectDateRange {...props} />, div)
		const button = div.querySelectorAll('button')[2]
		ReactDomTestUtils.Simulate.click(button, {})
		expect(div.innerHTML).toMatchSnapshot()
	})
	it('calls nextMonth()', () => {
		expect.assertions(1)
		const div = document.createElement('div')
		ReactDOM.render(<SelectDateRange {...props} />, div)
		const button = div.querySelectorAll('button')[3]
		ReactDomTestUtils.Simulate.click(button, {})
		expect(div.innerHTML).toMatchSnapshot()
	})
})
