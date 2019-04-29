// Import block dependencies and components.
import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

import map from "lodash/map"
// Import icon.
import styling from "./styling"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
} = wp.editor

const {
	withSelect
} = wp.data

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ToggleControl,
	Placeholder,
	Spinner,
	ButtonGroup,
	TabPanel
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

class UAGBCF7 extends Component {

	constructor() {
		super( ...arguments )
		this.onSelectForm = this.onSelectForm.bind( this )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectForm( id ) {
		const { formId } = this.props.attributes
		const { setAttributes, setState } = this.props

		if ( ! id ) {
			setAttributes( { isHtml: false } )
			setAttributes( { formId: null } )
			return
		}

		setAttributes( { isHtml: false } )
		setAttributes( { formId: id } )
	}


	render() {

		const { isSelected, className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace, cf7Posts, formHTML } = this.props

		// Setup the attributes.
		const {
			block_id,
			formId,
			align,
			isHtml,
			formJson,
			fieldStyle,
			fieldVrPadding,
			fieldHrPadding,
			fieldBgColor,
			fieldLabelColor,
			fieldInputColor,
			fieldBorderStyle,
			fieldBorderWidth ,
			fieldBorderRadius,
			fieldBorderColor,
			fieldBorderFocusColor,
			buttonAlignment,
			buttonVrPadding,
			buttonHrPadding,
			buttonTextColor,
			buttonBgColor,			
			buttonTextHoverColor,
			buttonBgHoverColor,
			buttonBorderStyle,
			buttonBorderWidth,
			buttonBorderRadius,
			buttonBorderColor,
			buttonBorderHoverColor,
			fieldSpacing,
			fieldLabelSpacing,
			labelFontSize,
			labelFontSizeType,
			labelFontSizeTablet,
			labelFontSizeMobile,
			labelFontFamily,
			labelFontWeight,
			labelFontSubset,
			labelLineHeightType,
			labelLineHeight,
			labelLineHeightTablet,
			labelLineHeightMobile,
			labelLoadGoogleFonts,
			inputFontSize,	
			inputFontSizeType,
			inputFontSizeTablet,
			inputFontSizeMobile,
			inputFontFamily,
			inputFontWeight,
			inputFontSubset,
			inputLineHeightType,
			inputLineHeight,
			inputLineHeightTablet,
			inputLineHeightMobile,
			inputLoadGoogleFonts,			
			buttonFontSize,
			buttonFontSizeType,
			buttonFontSizeTablet,
			buttonFontSizeMobile,
			buttonFontFamily,
			buttonFontWeight,
			buttonFontSubset,
			buttonLineHeightType,
			buttonLineHeight,
			buttonLineHeightTablet,
			buttonLineHeightMobile,
			buttonLoadGoogleFonts,
			enableOveride,
			radioCheckSize,
			radioCheckBgColor,
			radioCheckSelectColor,
			radioCheckLableColor,
			radioCheckBorderColor,
			radioCheckBorderWidth,
			radioCheckBorderRadius,
			radioCheckFontSize,
			radioCheckFontSizeType,
			radioCheckFontSizeTablet,
			radioCheckFontSizeMobile,
			radioCheckFontFamily,
			radioCheckFontWeight,
			radioCheckFontSubset,
			radioCheckLineHeightType,
			radioCheckLineHeight,
			radioCheckLineHeightTablet,
			radioCheckLineHeightMobile,
			radioCheckLoadGoogleFonts,
			validationMsgPosition, 
			validationMsgColor, 
			validationMsgBgColor, 
			enableHighlightBorder,
			highlightBorderColor, 
			validationMsgFontSize, 
			validationMsgFontSizeType,
			validationMsgFontSizeTablet,
			validationMsgFontSizeMobile,
			validationMsgFontFamily,
			validationMsgFontWeight,
			validationMsgFontSubset,
			validationMsgLineHeightType,
			validationMsgLineHeight,
			validationMsgLineHeightTablet,
			validationMsgLineHeightMobile,
			validationMsgLoadGoogleFonts,	
			successMsgColor, 
			successMsgBgColor, 
			successMsgBorderColor, 
			errorMsgColor, 
			errorMsgBgColor, 
			errorMsgBorderColor, 
			msgBorderSize, 
			msgBorderRadius, 
			msgVrPadding, 
			msgHrPadding, 
			msgFontSize,
			msgFontSizeType,
			msgFontSizeTablet,
			msgFontSizeMobile,	
			msgFontFamily,
			msgFontWeight,
			msgFontSubset,
			msgLineHeightType,
			msgLineHeight,
			msgLineHeightTablet,
			msgLineHeightMobile,
			msgLoadGoogleFonts,
			radioCheckBorderRadiusType,
			msgBorderRadiusType,
			fieldBorderRadiusType,
			buttonBorderRadiusType
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-cf7-styler-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		let html = ""

		if ( formJson && formJson.data.html ) {
			html = formJson.data.html
		}

		//Register controls
		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		let loadInputGoogleFonts
		let loadButtonGoogleFonts
		let loadLabelGoogleFonts
		let loadRadioGoogleFonts
		let loadValidationGoogleFonts
		let loadMsgGoogleFonts

		if( labelLoadGoogleFonts == true ) {
					
			const labelconfig = {
				google: {
					families: [ labelFontFamily + ( labelFontWeight ? ":" + labelFontWeight : "" ) ],
				},
			}

			loadLabelGoogleFonts = (
				<WebfontLoader config={ labelconfig }>
				</WebfontLoader>
			)
		}

		if( inputLoadGoogleFonts == true ) {
					
			const inputconfig = {
				google: {
					families: [ inputFontFamily + ( inputFontWeight ? ":" + inputFontWeight : "" ) ],
				},
			}

			loadInputGoogleFonts = (
				<WebfontLoader config={ inputconfig }>
				</WebfontLoader>
			)
		}

		if( buttonLoadGoogleFonts == true ) {
					
			const buttonconfig = {
				google: {
					families: [ buttonFontFamily + ( buttonFontWeight ? ":" + buttonFontWeight : "" ) ],
				},
			}

			loadButtonGoogleFonts = (
				<WebfontLoader config={ buttonconfig }>
				</WebfontLoader>
			)
		}

		if( radioCheckLoadGoogleFonts == true ) {
					
			const radioCheckconfig = {
				google: {
					families: [ radioCheckFontFamily + ( radioCheckFontWeight ? ":" + radioCheckFontWeight : "" ) ],
				},
			}

			loadRadioGoogleFonts = (
				<WebfontLoader config={ radioCheckconfig }>
				</WebfontLoader>
			)
		}

		if( validationMsgLoadGoogleFonts == true ) {
					
			const validationMsgconfig = {
				google: {
					families: [ validationMsgFontFamily + ( validationMsgFontWeight ? ":" + validationMsgFontWeight : "" ) ],
				},
			}

			loadValidationGoogleFonts = (
				<WebfontLoader config={ validationMsgconfig }>
				</WebfontLoader>
			)
		}

		if( msgLoadGoogleFonts == true ) {
					
			const msgconfig = {
				google: {
					families: [ msgFontFamily + ( msgFontWeight ? ":" + msgFontWeight : "" ) ],
				},
			}

			loadMsgGoogleFonts = (
				<WebfontLoader config={ msgconfig }>
				</WebfontLoader>
			)
		}
		
		const field_border_setting = (
			<PanelBody title={ __( "Field Style & Border" ) } initialOpen = { false } > 	
				<SelectControl
					label={ __( "Field Style" ) }
					value={ fieldStyle }
					onChange={ ( value ) => setAttributes( { fieldStyle: value } ) }
					options={ [
						{ value: "box", label: __( "Box" ) },
						{ value: "underline", label: __( "Underline" ) },							
					] }
				/>						
				{ fieldStyle == "box" && 
						<SelectControl
							label={ __( "Border Style" ) }
							value={ fieldBorderStyle }
							onChange={ ( value ) => setAttributes( { fieldBorderStyle: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "solid", label: __( "Solid" ) },
								{ value: "dotted", label: __( "Dotted" ) },
								{ value: "dashed", label: __( "Dashed" ) },
								{ value: "double", label: __( "Double" ) },
								{ value: "groove", label: __( "Groove" ) },
								{ value: "inset", label: __( "Inset" ) },
								{ value: "outset", label: __( "Outset" ) },
								{ value: "ridge", label: __( "Ridge" ) },
							] }
						/>
				} 
				{ ( "none" != fieldBorderStyle || fieldStyle == "underline" )&& (
					<RangeControl
						label={ __( "Border Width (px)" ) }
						value={ fieldBorderWidth }
						onChange={ ( value ) => setAttributes( { fieldBorderWidth: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
				) }
				<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
					<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ fieldBorderRadiusType === "px" } aria-pressed={ fieldBorderRadiusType === "px" } onClick={ () => setAttributes( { fieldBorderRadiusType: "px" } ) }>{ "px" }</Button>
					<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ fieldBorderRadiusType === "%" } aria-pressed={ fieldBorderRadiusType === "%" } onClick={ () => setAttributes( { fieldBorderRadiusType: "%" } ) }>{ "%" }</Button>
				</ButtonGroup>
				<RangeControl
					label={ __( "Border Radius" ) }
					value={ fieldBorderRadius }
					onChange={ ( value ) => setAttributes( { fieldBorderRadius: value } ) }
					min={ 0 }
					max={ 100 }
					allowReset
				/>
				{ ( "none" != fieldBorderStyle || fieldStyle == "underline" ) && (
					<Fragment>
						<p className="uagb-setting-label">{ __( "Border Color" ) }
							<span className="components-base-control__label">
								<span className="component-color-indicator" style={{ backgroundColor: fieldBorderColor }} ></span></span></p>
						<ColorPalette
							value={ fieldBorderColor }
							onChange={ ( colorValue ) => setAttributes( { fieldBorderColor: colorValue } ) }
							allowReset
						/>						
							
					</Fragment>
				) }
				<p className="uagb-setting-label">{ __( "Active Border Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: fieldBorderFocusColor }} ></span></span></p>
				<ColorPalette
					value={ fieldBorderFocusColor }
					onChange={ ( colorValue ) => setAttributes( { fieldBorderFocusColor: colorValue } ) }
					allowReset
				/>
			</PanelBody>
		)

		const typography_settings = (			
			<PanelBody title={ __( "Content" ) } initialOpen = { false } > 
				<h2>{ __( "Label" ) }</h2>			
				<TypographyControl
					label={ __( "Typography" ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: labelLoadGoogleFonts, label: __( "labelLoadGoogleFonts" ) } }
					fontFamily = { { value: labelFontFamily, label: __( "labelFontFamily" ) } }
					fontWeight = { { value: labelFontWeight, label: __( "labelFontWeight" ) } }
					fontSubset = { { value: labelFontSubset, label: __( "labelFontSubset" ) } }
					fontSizeType = { { value: labelFontSizeType, label: __( "labelFontSizeType" ) } }
					fontSize = { { value: labelFontSize, label: __( "labelFontSize" ) } }
					fontSizeMobile = { { value: labelFontSizeMobile, label: __( "labelFontSizeMobile" ) } }
					fontSizeTablet= { { value: labelFontSizeTablet, label: __( "labelFontSizeTablet" ) } }
					lineHeightType = { { value: labelLineHeightType, label: __( "labelLineHeightType" ) } }
					lineHeight = { { value: labelLineHeight, label: __( "labelLineHeight" ) } }
					lineHeightMobile = { { value: labelLineHeightMobile, label: __( "labelLineHeightMobile" ) } }
					lineHeightTablet= { { value: labelLineHeightTablet, label: __( "labelLineHeightTablet" ) } }
				/>
				<p className="uagb-setting-label">{ __( "Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: fieldLabelColor }} ></span></span></p>
				<ColorPalette
					value={ fieldLabelColor }
					onChange={ ( colorValue ) => setAttributes( { fieldLabelColor: colorValue } ) }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Input" ) }</h2>
				<TypographyControl
					label={ __( "Typography" ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: inputLoadGoogleFonts, label: __( "inputLoadGoogleFonts" ) } }
					fontFamily = { { value: inputFontFamily, label: __( "inputFontFamily" ) } }
					fontWeight = { { value: inputFontWeight, label: __( "inputFontWeight" ) } }
					fontSubset = { { value: inputFontSubset, label: __( "inputFontSubset" ) } }
					fontSizeType = { { value: inputFontSizeType, label: __( "inputFontSizeType" ) } }
					fontSize = { { value: inputFontSize, label: __( "inputFontSize" ) } }
					fontSizeMobile = { { value: inputFontSizeMobile, label: __( "inputFontSizeMobile" ) } }
					fontSizeTablet= { { value: inputFontSizeTablet, label: __( "inputFontSizeTablet" ) } }
					lineHeightType = { { value: inputLineHeightType, label: __( "inputLineHeightType" ) } }
					lineHeight = { { value: inputLineHeight, label: __( "inputLineHeight" ) } }
					lineHeightMobile = { { value: inputLineHeightMobile, label: __( "inputLineHeightMobile" ) } }
					lineHeightTablet= { { value: inputLineHeightTablet, label: __( "inputLineHeightTablet" ) } }
				/>	
				<p className="uagb-setting-label">{ __( "Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: fieldInputColor }} ></span></span></p>
				<ColorPalette
					value={ fieldInputColor }
					onChange={ ( colorValue ) => setAttributes( { fieldInputColor: colorValue } ) }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<p className="uagb-setting-label">{ __( "Field Background Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: fieldBgColor }} ></span></span></p>
				<ColorPalette
					value={ fieldBgColor }
					onChange={ ( colorValue ) => setAttributes( { fieldBgColor: colorValue } ) }
					allowReset
				/>								
			</PanelBody>
		)	

		const field_settings = (			
			<PanelBody title={ __( "General" ) } >
				<SelectControl
					label={ __( "Select Form" ) }
					value={ formId }
					onChange={ this.onSelectForm }
					options={ uagb_blocks_info.cf7_forms }
				/>													
			</PanelBody>			
		)

		if ( formId == 0 ) {
			return (
				<Fragment>
					
					<Placeholder
						icon="admin-post"
						label={ __( "Select a Contact Form 7" ) }
					>
						<SelectControl				
							value={ formId }
							onChange={ this.onSelectForm }
							options={ uagb_blocks_info.cf7_forms }
						/>	
					</Placeholder>
				</Fragment>
			)
		}

		//Submit button settings.
		const btn_border_setting = (
			<Fragment>				
				<SelectControl
					label={ __( "Border Style" ) }
					value={ buttonBorderStyle }
					onChange={ ( value ) => setAttributes( { buttonBorderStyle: value } ) }
					options={ [
						{ value: "none", label: __( "None" ) },
						{ value: "solid", label: __( "Solid" ) },
						{ value: "dotted", label: __( "Dotted" ) },
						{ value: "dashed", label: __( "Dashed" ) },
						{ value: "double", label: __( "Double" ) },
						{ value: "groove", label: __( "Groove" ) },
						{ value: "inset", label: __( "Inset" ) },
						{ value: "outset", label: __( "Outset" ) },
						{ value: "ridge", label: __( "Ridge" ) },
					] }
				/>
				{ "none" != buttonBorderStyle && (
					<RangeControl
						label={ __( "Border Width (px)" ) }
						value={ buttonBorderWidth }
						onChange={ ( value ) => setAttributes( { buttonBorderWidth: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
				) }
				<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
					<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ buttonBorderRadiusType === "px" } aria-pressed={ buttonBorderRadiusType === "px" } onClick={ () => setAttributes( { buttonBorderRadiusType: "px" } ) }>{ "px" }</Button>
					<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ buttonBorderRadiusType === "%" } aria-pressed={ buttonBorderRadiusType === "%" } onClick={ () => setAttributes( { buttonBorderRadiusType: "%" } ) }>{ "%" }</Button>
				</ButtonGroup>
				<RangeControl
					label={ __( "Border Radius" ) }
					value={ buttonBorderRadius }
					onChange={ ( value ) => setAttributes( { buttonBorderRadius: value } ) }
					min={ 0 }
					max={ 100 }
					allowReset
				/>									
			</Fragment>
		)

		const buttonNormalSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( "Text Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: buttonTextColor }} ></span></span></p>
				<ColorPalette
					value={ buttonTextColor }
					onChange={ ( colorValue ) => setAttributes( { buttonTextColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Background Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: buttonBgColor }} ></span></span></p>
				<ColorPalette
					value={ buttonBgColor }
					onChange={ ( colorValue ) => setAttributes( { buttonBgColor: colorValue } ) }
					allowReset
				/>
				{ "none" != buttonBorderStyle && (
					<Fragment>
						<p className="uagb-setting-label">{ __( "Border Color" ) }
							<span className="components-base-control__label">
								<span className="component-color-indicator" style={{ backgroundColor: buttonBorderColor }} ></span></span></p>
						<ColorPalette
							value={ buttonBorderColor }
							onChange={ ( colorValue ) => setAttributes( { buttonBorderColor: colorValue } ) }
							allowReset
						/>
					</Fragment>
				) }		
			</Fragment>
		)

		const buttonHoverSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( "Text Hover Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: buttonTextHoverColor }} ></span></span></p>
				<ColorPalette
					value={ buttonTextHoverColor }
					onChange={ ( colorValue ) => setAttributes( { buttonTextHoverColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Background Hover Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: buttonBgHoverColor }} ></span></span></p>
				<ColorPalette
					value={ buttonBgHoverColor }
					onChange={ ( colorValue ) => setAttributes( { buttonBgHoverColor: colorValue } ) }
					allowReset
				/>
				{ "none" != buttonBorderStyle && (
					<Fragment>
						<p className="uagb-setting-label">{ __( "Border Hover Color" ) }
							<span className="components-base-control__label">
								<span className="component-color-indicator" style={{ backgroundColor: buttonBorderHoverColor }} ></span></span></p>
						<ColorPalette
							value={ buttonBorderHoverColor }
							onChange={ ( colorValue ) => setAttributes( { buttonBorderHoverColor: colorValue } ) }
							allowReset
						/>
					</Fragment>
				) }		
			</Fragment>
		)

		const btn_setting = (
			<PanelBody title={ __( "Submit Button" ) } initialOpen={ false }>
				<SelectControl
					label={ __( "Button Alignment" ) }
					value={ buttonAlignment }
					onChange={ ( value ) => setAttributes( { buttonAlignment: value } ) }
					options={ [
						{ value: "center", label: __( "Center" ) },
						{ value: "left", label: __( "Left" ) },
						{ value: "right", label: __( "Right" ) },
						{ value: "justify", label: __( "Justified" ) },
					] }
				/>
				<h2>{ __( "Button Font" ) }</h2>
				<TypographyControl
					label={ __( "Typography" ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: buttonLoadGoogleFonts, label: __( "buttonLoadGoogleFonts" ) } }
					fontFamily = { { value: buttonFontFamily, label: __( "buttonFontFamily" ) } }
					fontWeight = { { value: buttonFontWeight, label: __( "buttonFontWeight" ) } }
					fontSubset = { { value: buttonFontSubset, label: __( "buttonFontSubset" ) } }
					fontSizeType = { { value: buttonFontSizeType, label: __( "buttonFontSizeType" ) } }
					fontSize = { { value: buttonFontSize, label: __( "buttonFontSize" ) } }
					fontSizeMobile = { { value: buttonFontSizeMobile, label: __( "buttonFontSizeMobile" ) } }
					fontSizeTablet= { { value: buttonFontSizeTablet, label: __( "buttonFontSizeTablet" ) } }
					lineHeightType = { { value: buttonLineHeightType, label: __( "buttonLineHeightType" ) } }
					lineHeight = { { value: buttonLineHeight, label: __( "buttonLineHeight" ) } }
					lineHeightMobile = { { value: buttonLineHeightMobile, label: __( "buttonLineHeightMobile" ) } }
					lineHeightTablet= { { value: buttonLineHeightTablet, label: __( "buttonLineHeightTablet" ) } }
				/>
				<hr className="uagb-editor__separator" />								
				{ btn_border_setting }
				<hr className="uagb-editor__separator" />
				<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
					activeClass="active-tab"
					tabs={ [
						{
							name: "normal",
							title: __( "Normal" ),
							className: "uagb-normal-tab",
						},
						{
							name: "hover",
							title: __( "Hover" ),
							className: "uagb-focus-tab",
						},
					] }>
					{
						( tabName ) => {
							let tabout
							if( "normal" === tabName.name ) {
								tabout = buttonNormalSettings
							}else {
								tabout = buttonHoverSettings
							}
							return <div>{ tabout }</div>
						}
					}
				</TabPanel>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Button Padding (px)" ) }</h2>
				<RangeControl
					label={ UAGB_Block_Icons.vertical_spacing }
					className={ "uagb-margin-control" }
					value={ buttonVrPadding }
					onChange={ ( value ) => setAttributes( { buttonVrPadding: value } ) }
					min={ 0 }
					max={ 200 }
					initialPosition={10}
				/>					
				<RangeControl
					label={ UAGB_Block_Icons.horizontal_spacing }
					className={ "uagb-margin-control" }
					value={ buttonHrPadding }
					onChange={ ( value ) => setAttributes( { buttonHrPadding: value } ) }
					min={ 0 }
					max={ 200 }
					initialPosition={10}
				/>		
			</PanelBody>
		)

		const spacing = (
			<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
				<RangeControl
					label={ __( "Label & Input Space" ) }
					value={ fieldLabelSpacing }
					onChange={ ( value ) => setAttributes( { fieldLabelSpacing: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>

				<RangeControl
					label={ __( "Fields Space" ) }
					value={ fieldSpacing }
					onChange={ ( value ) => setAttributes( { fieldSpacing: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>

				<hr className="uagb-editor__separator" />
				<h2>{ __( "Field Padding (px)" ) }</h2>
				<RangeControl
					label={ UAGB_Block_Icons.vertical_spacing }
					className={ "uagb-margin-control" }
					value={ fieldVrPadding }
					onChange={ ( value ) => setAttributes( { fieldVrPadding: value } ) }
					min={ 0 }
					max={ 200 }
					initialPosition={10}
				/>
				<RangeControl
					label={ UAGB_Block_Icons.horizontal_spacing }
					className={ "uagb-margin-control" }
					value={ fieldHrPadding }
					onChange={ ( value ) => setAttributes( { fieldHrPadding: value } ) }
					min={ 0 }
					max={ 200 }
					initialPosition={10}
				/>				
			</PanelBody>
		)

		const radio_check_setting = (
			<PanelBody title={ __( "Radio & Checkbox" ) } initialOpen={ false }>
				<ToggleControl
					label={ __( "Override Current Style" ) }
					checked={ enableOveride }
					onChange={ ( value ) => setAttributes( { enableOveride: ! enableOveride } ) }
				/>
				{ enableOveride && <Fragment>
					<RangeControl
						label={ __( "Size" ) }
						value={ radioCheckSize }
						onChange={ ( value ) => setAttributes( { radioCheckSize: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Radio & Checkbox Label" ) }</h2>
					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						loadGoogleFonts = { { value: radioCheckLoadGoogleFonts, label: __( "radioCheckLoadGoogleFonts" ) } }
						fontFamily = { { value: radioCheckFontFamily, label: __( "radioCheckFontFamily" ) } }
						fontWeight = { { value: radioCheckFontWeight, label: __( "radioCheckFontWeight" ) } }
						fontSubset = { { value: radioCheckFontSubset, label: __( "radioCheckFontSubset" ) } }
						fontSizeType = { { value: radioCheckFontSizeType, label: __( "radioCheckFontSizeType" ) } }
						fontSize = { { value: radioCheckFontSize, label: __( "radioCheckFontSize" ) } }
						fontSizeMobile = { { value: radioCheckFontSizeMobile, label: __( "radioCheckFontSizeMobile" ) } }
						fontSizeTablet= { { value: radioCheckFontSizeTablet, label: __( "radioCheckFontSizeTablet" ) } }
						lineHeightType = { { value: radioCheckLineHeightType, label: __( "radioCheckLineHeightType" ) } }
						lineHeight = { { value: radioCheckLineHeight, label: __( "radioCheckLineHeight" ) } }
						lineHeightMobile = { { value: radioCheckLineHeightMobile, label: __( "radioCheckLineHeightMobile" ) } }
						lineHeightTablet= { { value: radioCheckLineHeightTablet, label: __( "radioCheckLineHeightTablet" ) } }
					/>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Label Color" ) }
						<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: radioCheckLableColor }} ></span></span></p>
					<ColorPalette
						value={ radioCheckLableColor }
						onChange={ ( colorValue ) => setAttributes( { radioCheckLableColor: colorValue } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Background Color" ) }
						<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: radioCheckBgColor }} ></span></span></p>
					<ColorPalette
						value={ radioCheckBgColor }
						onChange={ ( colorValue ) => setAttributes( { radioCheckBgColor: colorValue } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Selected Color" ) }
						<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: radioCheckSelectColor }} ></span></span></p>
					<ColorPalette
						value={ radioCheckSelectColor }
						onChange={ ( colorValue ) => setAttributes( { radioCheckSelectColor: colorValue } ) }
						allowReset
					/>	
					
					{ fieldBorderStyle !=="none" && <Fragment>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Radio & Checkbox Border" ) }</h2>
						<RangeControl
							label={ __( "Border Width (px)" ) }
							value={ radioCheckBorderWidth }
							onChange={ ( value ) => setAttributes( { radioCheckBorderWidth: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
						<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
							<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ radioCheckBorderRadiusType === "px" } aria-pressed={ radioCheckBorderRadiusType === "px" } onClick={ () => setAttributes( { radioCheckBorderRadiusType: "px" } ) }>{ "px" }</Button>
							<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ radioCheckBorderRadiusType === "%" } aria-pressed={ radioCheckBorderRadiusType === "%" } onClick={ () => setAttributes( { radioCheckBorderRadiusType: "%" } ) }>{ "%" }</Button>
						</ButtonGroup>
						<RangeControl
							label={ __( "Border Radius" ) }
							value={ radioCheckBorderRadius }
							onChange={ ( value ) => setAttributes( { radioCheckBorderRadius: value } ) }
							min={ 0 }
							max={ 100 }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Border Color" ) }
							<span className="components-base-control__label">
								<span className="component-color-indicator" style={{ backgroundColor: radioCheckBorderColor }} ></span></span></p>
						<ColorPalette
							value={ radioCheckBorderColor }
							onChange={ ( colorValue ) => setAttributes( { radioCheckBorderColor: colorValue } ) }
							allowReset
						/>
					</Fragment>
					}		
								
				</Fragment>
				}
			</PanelBody>
		)

		const msg_settings = (			
			<PanelBody title={ __( "Success / Error Message" ) } initialOpen={ false }>
				<p className="uagb-settings-notice">{ __( "Note: This styling can be only seen at frontend" ) }</p>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Field Validation" ) }</h2>					

				<SelectControl
					label={ __( "Validation Message Position" ) }
					value={ validationMsgPosition }
					onChange={ ( value ) => setAttributes( { validationMsgPosition: value } ) }
					options={ [
						{ value: "default", label: __( "Default" ) },
						{ value: "bottom_right", label: __( "Bottom Right Side of Field" ) },								
					] }
				/>
				<h2>{ __( "Validation Font" ) }</h2>
				<TypographyControl
					label={ __( "Typography" ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: validationMsgLoadGoogleFonts, label: __( "validationMsgLoadGoogleFonts" ) } }
					fontFamily = { { value: validationMsgFontFamily, label: __( "validationMsgFontFamily" ) } }
					fontWeight = { { value: validationMsgFontWeight, label: __( "validationMsgFontWeight" ) } }
					fontSubset = { { value: validationMsgFontSubset, label: __( "validationMsgFontSubset" ) } }
					fontSizeType = { { value: validationMsgFontSizeType, label: __( "validationMsgFontSizeType" ) } }
					fontSize = { { value: validationMsgFontSize, label: __( "validationMsgFontSize" ) } }
					fontSizeMobile = { { value: validationMsgFontSizeMobile, label: __( "validationMsgFontSizeMobile" ) } }
					fontSizeTablet= { { value: validationMsgFontSizeTablet, label: __( "validationMsgFontSizeTablet" ) } }
					lineHeightType = { { value: validationMsgLineHeightType, label: __( "validationMsgLineHeightType" ) } }
					lineHeight = { { value: validationMsgLineHeight, label: __( "validationMsgLineHeight" ) } }
					lineHeightMobile = { { value: validationMsgLineHeightMobile, label: __( "validationMsgLineHeightMobile" ) } }
					lineHeightTablet= { { value: validationMsgLineHeightTablet, label: __( "validationMsgLineHeightTablet" ) } }
				/>
				<p className="uagb-setting-label">{ __( "Validation Message Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: validationMsgColor }} ></span></span></p>
				<ColorPalette
					value={ validationMsgColor }
					onChange={ ( colorValue ) => setAttributes( { validationMsgColor: colorValue } ) }
					allowReset
				/>

				{ validationMsgPosition ==="bottom_right" && <Fragment>
					<p className="uagb-setting-label">{ __( "Message Background Color" ) }
						<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: validationMsgBgColor }} ></span></span></p>
					<ColorPalette
						value={ validationMsgBgColor }
						onChange={ ( colorValue ) => setAttributes( { validationMsgBgColor: colorValue } ) }
						allowReset
					/>						
				</Fragment>
				}
				<hr className="uagb-editor__separator" />
				<ToggleControl
					label={ __( "Highlight Borders" ) }
					checked={ enableHighlightBorder }
					onChange={ ( value ) => setAttributes( { enableHighlightBorder: ! enableHighlightBorder } ) }
				/>

				{ enableHighlightBorder && <Fragment>
					<p className="uagb-setting-label">{ __( "Highlight Border Color" ) }
						<span className="components-base-control__label">
							<span className="component-color-indicator" style={{ backgroundColor: highlightBorderColor }} ></span></span></p>
					<ColorPalette
						value={ highlightBorderColor }
						onChange={ ( colorValue ) => setAttributes( { highlightBorderColor: colorValue } ) }
						allowReset
					/>						
				</Fragment>
				}					
					
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Form Success / Error Validation" ) }</h2>
				<TypographyControl
					label={ __( "Typography" ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: msgLoadGoogleFonts, label: __( "msgLoadGoogleFonts" ) } }
					fontFamily = { { value: msgFontFamily, label: __( "msgFontFamily" ) } }
					fontWeight = { { value: msgFontWeight, label: __( "msgFontWeight" ) } }
					fontSubset = { { value: msgFontSubset, label: __( "msgFontSubset" ) } }
					fontSizeType = { { value: msgFontSizeType, label: __( "msgFontSizeType" ) } }
					fontSize = { { value: msgFontSize, label: __( "msgFontSize" ) } }
					fontSizeMobile = { { value: msgFontSizeMobile, label: __( "msgFontSizeMobile" ) } }
					fontSizeTablet= { { value: msgFontSizeTablet, label: __( "msgFontSizeTablet" ) } }
					lineHeightType = { { value: msgLineHeightType, label: __( "msgLineHeightType" ) } }
					lineHeight = { { value: msgLineHeight, label: __( "msgLineHeight" ) } }
					lineHeightMobile = { { value: msgLineHeightMobile, label: __( "msgLineHeightMobile" ) } }
					lineHeightTablet= { { value: msgLineHeightTablet, label: __( "msgLineHeightTablet" ) } }
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Success Message" ) }</h2>
				<p className="uagb-setting-label">{ __( "Message Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: successMsgColor }} ></span></span></p>
				<ColorPalette
					value={ successMsgColor }
					onChange={ ( colorValue ) => setAttributes( { successMsgColor: colorValue } ) }
					allowReset
				/>

				<p className="uagb-setting-label">{ __( "Message Background Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: successMsgBgColor }} ></span></span></p>
				<ColorPalette
					value={ successMsgBgColor }
					onChange={ ( colorValue ) => setAttributes( { successMsgBgColor: colorValue } ) }
					allowReset
				/>

				<p className="uagb-setting-label">{ __( "Message Border Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: successMsgBorderColor }} ></span></span></p>
				<ColorPalette
					value={ successMsgBorderColor }
					onChange={ ( colorValue ) => setAttributes( { successMsgBorderColor: colorValue } ) }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Error Message" ) }</h2>
				<p className="uagb-setting-label">{ __( "Message Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: errorMsgColor }} ></span></span></p>
				<ColorPalette
					value={ errorMsgColor }
					onChange={ ( colorValue ) => setAttributes( { errorMsgColor: colorValue } ) }
					allowReset
				/>

				<p className="uagb-setting-label">{ __( "Message Background Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: errorMsgBgColor }} ></span></span></p>
				<ColorPalette
					value={ errorMsgBgColor }
					onChange={ ( colorValue ) => setAttributes( { errorMsgBgColor: colorValue } ) }
					allowReset
				/>

				<p className="uagb-setting-label">{ __( "Message Border Color" ) }
					<span className="components-base-control__label">
						<span className="component-color-indicator" style={{ backgroundColor: errorMsgBorderColor }} ></span></span></p>
				<ColorPalette
					value={ errorMsgBorderColor }
					onChange={ ( colorValue ) => setAttributes( { errorMsgBorderColor: colorValue } ) }
					allowReset
				/>

				<hr className="uagb-editor__separator" />					
				<RangeControl
					label={ __( "Message Border Width (px)" ) }
					value={ msgBorderSize }
					onChange={ ( value ) => setAttributes( { msgBorderSize: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>			
				<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
					<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ msgBorderRadiusType === "px" } aria-pressed={ msgBorderRadiusType === "px" } onClick={ () => setAttributes( { msgBorderRadiusType: "px" } ) }>{ "px" }</Button>
					<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ msgBorderRadiusType === "%" } aria-pressed={ msgBorderRadiusType === "%" } onClick={ () => setAttributes( { msgBorderRadiusType: "%" } ) }>{ "%" }</Button>
				</ButtonGroup>
				<RangeControl
					label={ __( "Message Border Radius" ) }
					value={ msgBorderRadius }
					onChange={ ( value ) => setAttributes( { msgBorderRadius: value } ) }
					min={ 0 }
					max={ 100 }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Message Padding (px)" ) }</h2>
				<RangeControl
					label={ UAGB_Block_Icons.vertical_spacing }
					className={ "uagb-margin-control" }
					value={ msgVrPadding }
					onChange={ ( value ) => setAttributes( { msgVrPadding: value } ) }
					min={ 0 }
					max={ 100 }
					allowReset
				/>					
				<RangeControl
					label={ UAGB_Block_Icons.horizontal_spacing }
					className={ "uagb-margin-control" }
					value={ msgHrPadding }
					onChange={ ( value ) => setAttributes( { msgHrPadding: value } ) }
					min={ 0 }
					max={ 100 }
					allowReset
				/>
			</PanelBody>
		)

		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ align }
						onChange={ ( value ) => setAttributes( { align: value } ) }
					/>
				</BlockControls>
				<InspectorControls>
					{ field_settings }
					{ field_border_setting }
					{ typography_settings }				
					{ radio_check_setting }
					{ btn_setting }
					{ msg_settings }
					{ spacing }
				</InspectorControls>
				<div
					className = { classnames(
						className,	
						"uagb-cf7-styler__outer-wrap",					
					) }
					id={ `uagb-cf7-styler-${ this.props.clientId }` }>
					<div className = {  classnames(
						`uagb-cf7-styler__align-${align}`,
						`uagb-cf7-styler__field-style-${fieldStyle}`,
						`uagb-cf7-styler__btn-align-${buttonAlignment}`,
						`uagb-cf7-styler__highlight-style-${validationMsgPosition}`,
						( enableOveride ? "uagb-cf7-styler__check-style-enabled" : "" ),
						( enableHighlightBorder ? "uagb-cf7-styler__highlight-border" : "" ),
					) }>
						{ isHtml &&
							<div dangerouslySetInnerHTML={ { __html: html } } />
						}
						{ isHtml == false &&
							<Placeholder
								icon="admin-post"
								label={ __( "Loading" ) }
							>
								<Spinner />
							</Placeholder>
						}
					</div>
				</div>
				{ loadInputGoogleFonts }
				{ loadButtonGoogleFonts }
				{ loadLabelGoogleFonts }
				{ loadRadioGoogleFonts }
				{ loadValidationGoogleFonts }
				{ loadMsgGoogleFonts }
			</Fragment>
		)
	}

	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes( { isHtml: false } )
		this.props.setAttributes( { block_id: this.props.clientId } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-cf7-styler-" + this.props.clientId )
		document.head.appendChild( $style )
	}
	componentDidUpdate(){				
		$(".wpcf7-submit").click( function(event) {
			event.preventDefault()
		})
	}
}

export default withSelect( ( select, props ) => {
	const { setAttributes, setState } = props
	const { formId, isHtml } = props.attributes
	let json_data = ""

	if ( formId && -1 != formId && 0 != formId && ! isHtml ) {

		$.ajax({
			url: uagb_blocks_info.ajax_url,
			data: {
				action: "uagb_cf7_shortcode",
				formId : formId,
			},
			dataType: "json",
			type: "POST",
			success: function( data ) {
				setAttributes( { isHtml: true } )
				setAttributes( { formJson: data } )
				json_data = data
			}
		})
	}

	return {
		formHTML: json_data
	}
} )( UAGBCF7 )
