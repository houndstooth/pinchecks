// tslint:disable:max-line-length no-unused-expression

import { to } from '../../../../../../src'
import { getHoundsmorphosisTileOriginAndSize } from '../../../../src/components/getHoundsmorphosisTileOriginAndSize'

let actual

describe('houndsmorphosis tile origin and size', () => {
	describe('if either x or y are 0', () => {
		it('returns undefineds', () => {
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 0, 1 ]) })).toEqual(undefined)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 0 ]) })).toEqual(undefined)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 0, -1 ]) })).toEqual(undefined)
			expect(getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 0 ]) })).toEqual(undefined)
		})
	})

	describe('when both x and y are positive', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(6))
			})

			it('is staying stably at 0, vertical position wise', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(9))
			})

			it('is shifting downwards, by 1 each time, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(4))
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(5))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(9))
			})

			it('is shifting downwards, by 1 each time, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(5))
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(7))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(12))
			})

			it('is shifting downwards, by 2 each time, starting at 4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(8))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(10))
			})
		})
	})

	describe('when x is negative and y is positive', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-10))
			})

			it('is staying stably at 0, vertical position wise', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(0))
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-10))
			})

			it('is shifting downwards, by 1 each time, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(4))
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(5))
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-9))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-14))
			})

			it('is shifting downwards, by 1 each time, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(5))
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-9))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-14))
			})

			it('is shifting downwards, by 2 each time, starting at 4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(8))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, 4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(10))
			})
		})
	})

	describe('when x is positive and y is negative', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(6))
			})

			it('is shifting upwards, by 1 each time, starting at -1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-4))
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(9))
			})

			it('is shifting upwards, by 1 each time, starting at -2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-5))
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(5))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(9))
			})

			it('is shifting upwards, by 2 each time, starting at -4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-8))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-10))
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
			})

			it('is shifting rightwards, by 1 more each time, starting at 0, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(0))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(7))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(12))
			})

			it('is shifting upwards, by 2 each time, starting at -6', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 1, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 2, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-8))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 3, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-10))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ 4, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-12))
			})
		})
	})

	describe('when both x and y are negative', () => {
		describe('first row', () => {
			it('grows by 1 each column, starting at 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -1 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -1 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-10))
			})

			it('is shifting upwards, by 1 each time, starting at -1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -1 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-4))
			})
		})

		describe('second row', () => {
			it('starts and stays at size 1', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -2 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(1))
			})

			it('is shifting leftwards, by 1 more each time, starting at -1, starting with a move of 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-1))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -2 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-10))
			})

			it('is shifting upwards, by 1 each time, starting at -2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -2 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-5))
			})
		})

		describe('third row', () => {
			it('grows by 1 each column, starting at 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(3))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -3 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(5))
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-9))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -3 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-14))
			})

			it('is shifting upwards, by 2 each time, starting at -4', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-4))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-8))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -3 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-10))
			})
		})

		describe('fourth row', () => {
			it('starts and stays at size 2', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -4 ]) })
				actual && expect(actual.tileSize).toEqual(to.Unit(2))
			})

			it('is shifting leftwards, by 1 more each time, starting at -2, starting with a move of 3', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-2))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-5))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-9))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -4 ]) })
				actual && expect(actual.tileOrigin[ 0 ]).toEqual(to.Unit(-14))
			})

			it('is shifting upwards, by 2 each time, starting at -6', () => {
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -1, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-6))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -2, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-8))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -3, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-10))
				actual = getHoundsmorphosisTileOriginAndSize({ gridAddress: to.Address([ -4, -4 ]) })
				actual && expect(actual.tileOrigin[ 1 ]).toEqual(to.Unit(-12))
			})
		})
	})
})
