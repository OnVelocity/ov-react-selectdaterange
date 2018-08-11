/*global describe, it, expect, beforeEach */
import React, { Fragment } from 'react'
import renderer from 'react-test-renderer'
import { MonthName } from './SelectDateRange'

describe('SelectDateRange/MonthName', () => {
	let monthDates
	beforeEach(() => {
		monthDates = [
			new Date(2017, 0, 1, 0, 0, 0),
			new Date(2017, 1, 1, 0, 0, 0),
			new Date(2017, 2, 1, 0, 0, 0),
			new Date(2017, 3, 1, 0, 0, 0),
			new Date(2017, 4, 1, 0, 0, 0),
			new Date(2017, 5, 1, 0, 0, 0),
			new Date(2017, 6, 1, 0, 0, 0),
			new Date(2017, 7, 1, 0, 0, 0),
			new Date(2017, 8, 1, 0, 0, 0),
			new Date(2017, 9, 1, 0, 0, 0),
			new Date(2017, 10, 1, 0, 0, 0),
			new Date(2017, 11, 1, 0, 0, 0),
			null
		]
	})
	it('renders month names for dates', () => {
		expect.assertions(1)
		const monthNames = (
			<Fragment>
				{monthDates.map(date => (
					<MonthName key={date} date={date} />
				))}
			</Fragment>
		)
		const tree = renderer.create(monthNames).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
