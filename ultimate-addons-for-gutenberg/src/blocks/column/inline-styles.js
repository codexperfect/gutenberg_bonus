/**
 * Returns Dynamic Generated CSS
 */

import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function inlineStyles( props, isEditor ) {

	const {
		backgroundPosition,
		backgroundColor,
		backgroundOpacity,
		backgroundRepeat,
		backgroundType,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		backgroundImageColor,
		borderStyle,
		borderRadius,
		overlayType,
		gradientOverlayColor1,
		gradientOverlayColor2,
		gradientOverlayType,
		gradientOverlayLocation1,
		gradientOverlayLocation2,
		gradientOverlayAngle,
	} = props.attributes

	var style = {}

	var position = backgroundPosition.replace( "-", " " )

	if ( "image" === backgroundType ) {
		if( "color" == overlayType ){
			style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""
			style["background-color"] = backgroundImageColor
		}else{
			style["background-color"] = "transparent"
			style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""

			if ( "linear" === gradientOverlayType ) {

				style["background-image"] = `linear-gradient(${ gradientOverlayAngle }deg, ${ gradientOverlayColor1 } ${ gradientOverlayLocation1 }%, ${ gradientOverlayColor2 } ${ gradientOverlayLocation2 }%)`
			} else {

				style["background-image"] = `radial-gradient( at center center, ${ gradientOverlayColor1 } ${ gradientOverlayLocation1 }%, ${ gradientOverlayColor2 } ${ gradientOverlayLocation2 }%)`
			}
		}

	} else if ( "gradient" === backgroundType ) {
		style["background-color"] = "transparent"
		style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""

		if ( "linear" === gradientType ) {

			style["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		} else {

			style["background-image"] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		}
	} else if ( "color" == backgroundType ) {

		style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""
		style["background-color"] = backgroundColor
	}

	style["border-radius"] = generateCSSUnit( borderRadius, "px" )

	return style
}

export default inlineStyles
