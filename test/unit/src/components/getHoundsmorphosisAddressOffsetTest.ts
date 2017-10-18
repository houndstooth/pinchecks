import { Address } from '../../../../../../src/components/types/Address'
import { getHoundsmorphosisAddressOffset } from '../../../../src/components/getHoundsmorphosisAddressOffset'

// tslint:disable-next-line:max-line-length
describe('houndsmorphosis address offset deals with set assignment because the axes were eliminated to simplify sizing and positioning but that screws with assignment', () => {
	describe('when both x and y are negative', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ -1, -1 ] as Address })).toEqual([ 2, 1 ])
		})
	})

	describe('when x is negative and y is 0 or positive', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ -1, 0 ] as Address })).toEqual([ 1, 1 ])
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ -1, 1 ] as Address })).toEqual([ 1, 1 ])
		})
	})

	describe('when x is 0 or positive and y is negative', () => {
		it('provides an offset to cause the address to assign its tile the correct colors, etc', () => {
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ 0, -1 ] as Address })).toEqual([ 1, 0 ])
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ 1, -1 ] as Address })).toEqual([ 1, 0 ])
		})
	})

	describe('when both x and y are 0 or positive', () => {
		it('does not offset', () => {
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ 0, 0 ] as Address })).toEqual([ 0, 0 ])
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ 1, 0 ] as Address })).toEqual([ 0, 0 ])
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ 0, 1 ] as Address })).toEqual([ 0, 0 ])
			expect(getHoundsmorphosisAddressOffset({ gridAddress: [ 1, 1 ] as Address })).toEqual([ 0, 0 ])
		})
	})
})
