/*global describe, it, expect, beforeEach*/

import {
	getOffsetDate,
	getOffsetMonth,
	getOffsetYear,
	getStartOfMonthDate,
	getStartOfWeekDate,
	isDateInStartDateMonth,
	isDateSelectedDate,
	isDateToday
} from './date'

describe('date', () => {
	let date
	beforeEach(() => {
		date = new Date(2017, 9, 15, 0, 0, 0)
	})
	describe('getOffsetYear(date, offsetYear)', function() {
		;[
			{
				offsetYear: -1,
				expected: new Date(2016, 9, 15, 0, 0, 0)
			},
			{
				offsetYear: 0,
				expected: new Date(2017, 9, 15, 0, 0, 0)
			},
			{
				offsetYear: 1,
				expected: new Date(2018, 9, 15, 0, 0, 0)
			}
		].forEach(({ offsetYear, expected }) => {
			it(`${offsetYear} === ${expected}`, () => {
				expect.assertions(1)
				expect(getOffsetYear(date, offsetYear)).toEqual(expected)
			})
		})
	})
	describe('getOffsetMonth(date, offsetMonth)', function() {
		;[
			{
				offsetMonth: -1,
				expected: new Date(2017, 8, 15, 0, 0, 0)
			},
			{
				offsetMonth: 0,
				expected: new Date(2017, 9, 15, 0, 0, 0)
			},
			{
				offsetMonth: 1,
				expected: new Date(2017, 10, 15, 0, 0, 0)
			}
		].forEach(({ offsetMonth, expected }) => {
			it(`${offsetMonth} === ${expected}`, () => {
				expect.assertions(1)
				expect(getOffsetMonth(date, offsetMonth)).toEqual(expected)
			})
		})
	})
	describe('getOffsetDate(date, offsetDate)', function() {
		;[
			{
				offsetDate: -1,
				expected: new Date(2017, 9, 14, 0, 0, 0)
			},
			{
				offsetDate: 0,
				expected: new Date(2017, 9, 15, 0, 0, 0)
			},
			{
				offsetDate: 1,
				expected: new Date(2017, 9, 16, 0, 0, 0)
			}
		].forEach(({ offsetDate, expected }) => {
			it(`${offsetDate} === ${expected}`, () => {
				expect.assertions(1)
				expect(getOffsetDate(date, offsetDate)).toEqual(expected)
			})
		})
	})
	describe('isDateInStartDateMonth(date, startDate)', function() {
		;[
			{
				startDate: new Date(2017, 8, 15, 0, 0, 0),
				expected: false
			},
			{
				startDate: new Date(2017, 9, 15, 0, 0, 0),
				expected: true
			},
			{
				startDate: new Date(2017, 10, 15, 0, 0, 0),
				expected: false
			}
		].forEach(({ startDate, expected }) => {
			it(`${startDate} === ${expected}`, () => {
				expect.assertions(1)
				expect(isDateInStartDateMonth(date, startDate)).toEqual(expected)
			})
		})
	})
	describe('isDateToday(date)', function() {
		;[
			{
				date: new Date(2017, 8, 15, 0, 0, 0),
				expected: false
			},
			{
				date: new Date(),
				expected: true
			},
			{
				date: new Date(2017, 10, 15, 0, 0, 0),
				expected: false
			}
		].forEach(({ date, expected }) => {
			it(`${date} === ${expected}`, () => {
				expect.assertions(1)
				expect(isDateToday(date)).toEqual(expected)
			})
		})
	})
	describe('isDateSelectedDate(date, selectedDate)', function() {
		;[
			{
				selectedDate: null,
				expected: false
			},
			{
				selectedDate: new Date(2017, 8, 15, 0, 0, 0),
				expected: false
			},
			{
				selectedDate: new Date(2017, 9, 15),
				expected: true
			},
			{
				selectedDate: new Date(2017, 10, 15, 0, 0, 0),
				expected: false
			}
		].forEach(({ selectedDate, expected }) => {
			it(`${selectedDate} === ${expected}`, () => {
				expect.assertions(1)
				expect(isDateSelectedDate(date, selectedDate)).toEqual(expected)
			})
		})
	})
	describe('getStartOfWeekDate(date)', function() {
		;[
			{
				date: new Date(2017, 8, 15, 0, 0, 0),
				expected: new Date(2017, 8, 10, 0, 0, 0)
			},
			{
				date: new Date(2017, 9, 15, 0, 0, 0),
				expected: new Date(2017, 9, 15, 0, 0, 0)
			},
			{
				date: new Date(2017, 10, 15, 0, 0, 0),
				expected: new Date(2017, 10, 12, 0, 0, 0)
			}
		].forEach(({ date, expected }) => {
			it(`${date} === ${expected}`, () => {
				expect.assertions(1)
				expect(getStartOfWeekDate(date)).toEqual(expected)
			})
		})
	})
	describe('getStartOfMonthDate(date)', function() {
		;[
			{
				date: new Date(2017, 8, 15, 0, 0, 0),
				expected: new Date(2017, 8, 1, 0, 0, 0)
			},
			{
				date: new Date(2017, 9, 15, 0, 0, 0),
				expected: new Date(2017, 9, 1, 0, 0, 0)
			},
			{
				date: new Date(2017, 10, 15, 0, 0, 0),
				expected: new Date(2017, 10, 1, 0, 0, 0)
			}
		].forEach(({ date, expected }) => {
			it(`${date} === ${expected}`, () => {
				expect.assertions(1)
				expect(getStartOfMonthDate(date)).toEqual(expected)
			})
		})
	})
})
