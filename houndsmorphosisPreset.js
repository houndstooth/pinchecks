const CANVAS_SIZE = 1000

export default {
	state: {
        gridSize: 45,
        canvasSize: CANVAS_SIZE,
		houndsmorphosisMode: true,
        colorConfig: {
            assignment: {
                mode: 'SUPERTILE',
                supertile: [ 
                    [ [ 0, 0 ], [ 0, 1 ] ], 
                    [ [ 1, 1 ], [ 1, 0 ] ]
                ],
                alternateSupertile: [
                    [ [ 0, 0 ], [ 1, 0 ] ], 
                    [ [ 1, 1 ], [ 0, 1 ] ]
                ]
                // for when it is gongram mode
                // supertile: [
                //     [ [ 0, 0 ], [ 0, 1 ] ], 
                //     [ [ 1, 1 ], [ 1, 2 ] ], 
                //     [ [ 2, 2 ], [ 2, 3 ] ], 
                //     [ [ 3, 3 ], [ 3, 4 ] ], 
                //     [ [ 4, 4 ], [ 4, 0 ] ], 
                // ]
            }
        },
        offsetOrigin: [ CANVAS_SIZE / 2, CANVAS_SIZE / 2 ],
        negativeGridToo: true,
        scaleFromGridCenter: false
	}
}