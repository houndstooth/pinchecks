import { Address, to } from '../../../../../src/indexForTest'
import { getHoundsmorphosisAddressOffset } from '../../../pattern'

// tslint:disable-next-line:max-line-length
describe('houndsmorphosis address offset deals with set assignment because the axes were eliminated to simplify sizing and positioning but that screws with assignment', () => {
	let subject: (_: { address: Address }) => Address
	beforeEach(() => {
		subject = getHoundsmorphosisAddressOffset.default
	})

	describe('when both x and y are negative', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(subject({ address: to.Address([ -1, -1 ]) })).toEqual(to.Address([ 2, 1 ]))
		})
	})

	describe('when x is negative and y is 0 or positive', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(subject({ address: to.Address([ -1, 0 ]) })).toEqual(to.Address([ 1, 1 ]))
			expect(subject({ address: to.Address([ -1, 1 ]) })).toEqual(to.Address([ 1, 1 ]))
		})
	})

	describe('when x is 0 or positive and y is negative', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(subject({ address: to.Address([ 0, -1 ]) })).toEqual(to.Address([ 1, 0 ]))
			expect(subject({ address: to.Address([ 1, -1 ]) })).toEqual(to.Address([ 1, 0 ]))
		})
	})

	describe('when both x and y are 0 or positive', () => {
		it('does not offset', () => {
			expect(subject({ address: to.Address([ 0, 0 ]) })).toEqual(to.Address([ 0, 0 ]))
			expect(subject({ address: to.Address([ 1, 0 ]) })).toEqual(to.Address([ 0, 0 ]))
			expect(subject({ address: to.Address([ 0, 1 ]) })).toEqual(to.Address([ 0, 0 ]))
			expect(subject({ address: to.Address([ 1, 1 ]) })).toEqual(to.Address([ 0, 0 ]))
		})
	})
})
