/*global describe, it, expect, beforeEach */
import React from 'react'
import renderer from 'react-test-renderer'
import {CalendarMonth} from "./SelectDateRange";

describe('SelectDateRange/CalendarMonth', () => {
	it('renders', () => {
		expect.assertions(1)
		const tree = renderer.create(
			<CalendarMonth
				startDate={new Date(2017, 9, 10)}
			/>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
