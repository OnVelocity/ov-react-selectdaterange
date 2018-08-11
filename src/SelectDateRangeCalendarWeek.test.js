/*global describe, it, expect, beforeEach */
import React from 'react'
import renderer from 'react-test-renderer'
import {CalendarWeek} from "./SelectDateRange";

describe('SelectDateRange/CalendarWeek', () => {
	it('renders', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<CalendarWeek
				startOfWeekDate={new Date(2017, 9, 10)}
				startDate={new Date(2017, 9, 10)}
			/>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
