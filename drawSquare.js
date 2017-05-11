import ctx from '../shared/ctx'
import { UNIT } from '../shared/customize'
import drawStripedSquare from './drawStripedSquare'
import drawSolidSquare from '../shared/drawSolidSquare'
import calculateChevronification from './calculateChevronification'

export default ({origin, size, squareType, iteration, layer, quarter}) => {
	const chevronification = calculateChevronification({quarter, iteration, layer})

	if (squareType == "STRIPED_A") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, originColor: "WHITE", chevronification })
	} else if (squareType == "STRIPED_B") {
		drawStripedSquare({ ctx, origin, sizedUnit: size * UNIT, originColor: "BLACK", chevronification })
	} else {
		ctx.fillStyle = squareType;
		drawSolidSquare({ ctx, origin, size })
	}
}