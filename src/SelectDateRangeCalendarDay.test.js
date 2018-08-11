/*global describe, it, expect, beforeEach */
import React from 'react'
import renderer from 'react-test-renderer'
import {CalendarDay} from "./SelectDateRange";

describe('SelectDateRange/CalendarDay', () => {
	it('selected date not given', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<CalendarDay
				date={new Date(2017, 9, 15)}
				startDate={new Date(2017, 9, 15)}
				selectedDate={null}
			/>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
	it('selected date given', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<CalendarDay
				date={new Date(2017, 9, 15)}
				startDate={new Date(2017, 9, 15)}
				selectedDate={new Date(2017, 9, 15)}
			/>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
	it('day is before the start of month', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<CalendarDay
				date={new Date(2017, 8, 15)}
				startDate={new Date(2017, 9, 15)}
				selectedDate={new Date(2017, 9, 15)}
			/>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
	it('day is after the start of month', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<CalendarDay
				date={new Date(2017, 10, 15)}
				startDate={new Date(2017, 9, 15)}
				selectedDate={new Date(2017, 9, 15)}
			/>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
	it('day is today', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<CalendarDay
				date={new Date()}
				startDate={new Date()}
			/>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
	it('day is today', () => {
		expect.assertions(1)
		const onDateSelected = jest.fn()
		const tree = renderer.create(
			<CalendarDay
				date={new Date(2017, 10, 15)}
				startDate={new Date(2017, 10, 15)}
				onDateSelected={onDateSelected}
			/>
		)
		const {rendered: {props}} = tree.toTree()
		props.onClick()
		expect(onDateSelected).toBeCalledWith(new Date(2017, 10, 15))
	})
})
