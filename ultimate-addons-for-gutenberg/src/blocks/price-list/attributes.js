/**
 * BLOCK: Price List - Attributes
 */
const { __ } = wp.i18n

const ITEM_COUNT = 4

const rest_menu_block = []

for ( var i = 1; i <= ITEM_COUNT; i++ ) {
	var desc_text = __("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
	var title_text    = __("Menu Item "+i)
	var price_text    = __("$9")
	rest_menu_block.push(
		{
			"description": desc_text,
			"title": title_text,
			"price": price_text,
			"image": "",
		}
	)
}

const attributes = {
	menu_item_count: {
		type: "number",
		default: ITEM_COUNT
	},
	rest_menu_item_arr: {
		type: "array",
		default : rest_menu_block,
	},
	headingAlign: {
		type: "string",
		default: "left",
	},
	descColor: {
		type: "string",
		default: "#333"
	},
	priceColor: {
		type: "string",
		default: "#888888"
	},
	titleColor: {
		type: "string",
		default: "#333"
	},
	imagePosition:{
		type: "string",
		default: "top"
	},
	imageAlignment:{
		type: "string",
		default: "top"
	},
	headingTag: {
		type: "string",
		default: "h4"
	},

	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},

	priceFontSizeType: {
		type: "string",
		default: "px"
	},
	priceFontSize: {
		type: "number",
	},
	priceFontSizeTablet: {
		type: "number",
	},
	priceFontSizeMobile: {
		type: "number",
	},
	priceFontFamily: {
		type: "string",
		default: "Default",
	},
	priceFontWeight: {
		type: "string",
	},
	priceFontSubset: {
		type: "string",
	},
	priceLineHeightType: {
		type: "string",
		default: "em"
	},
	priceLineHeight: {
		type: "number",
	},
	priceLineHeightTablet: {
		type: "number",
	},
	priceLineHeightMobile: {
		type: "number",
	},
	priceLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},

	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeTablet: {
		type: "number",
	},
	descFontSizeMobile: {
		type: "number",
	},
	descFontFamily: {
		type: "string",
		default: "Default",
	},
	descFontWeight: {
		type: "string",
	},
	descFontSubset: {
		type: "string",
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descLineHeight: {
		type: "number",
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
		
	priceSpace: {
		type: "number",
		default : 5
	},
	descSpace: {
		type: "number",
		default : 15
	},
	titleSpace :{
		type: "number",
		default: 10,
	},
	block_id :{
		type : "string",
		default : "not_set"
	},
	imgVrPadding :{
		type: "number",
		default: 0,
	},
	imgHrPadding :{
		type: "number",
		default: 0,
	},
	imgTopPadding :{
		type: "number",
		default: 0,
	},
	imgBottomPadding :{
		type: "number",
		default: 0,
	},
	imageSize:{
		type: "string",
		default: "medium",
	},
	imageWidth :{
		type: "number",
		default: "",
	},
	columns :{
		type: "number",
		default: 2,
	},
	tcolumns :{
		type: "number",
		default: 2,
	},
	mcolumns :{
		type: "number",
		default: 1,
	},
	rowGap: {
		type: "number",
		default : 10
	},
	columnGap: {
		type: "number",
		default : 10
	},
	contentVrPadding: {
		type: "number",
		default : 5
	},
	contentHrPadding: {
		type: "number",
		default : 5
	},
	seperatorStyle : {
		type: "string",
		default: "dashed"
	},
	seperatorWidth : {
		type: "number",
		default: "100"
	},
	seperatorThickness : {
		type: "number",
		default: "1"
	},
	seperatorColor : {
		type: "string",
		default: "#b2b4b5",
	},
	stack: {
		type: "string",
		default: "tablet"
	},
}

export default attributes
