const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

const {
	createBlock
} = wp.blocks

class Description extends React.Component {

	render() {

		const {
			attributes,
			setAttributes ,
			props
		} = this.props

		if( setAttributes !== "not_set" ){
			return (
				<RichText
	                tagName='div'
	                value={ attributes.descriptionText }
	                placeholder={ __( "Write a Quote" ) }
	                className='uagb-blockquote__content'
	                onChange={ ( value ) => setAttributes( { descriptionText: value } ) }
	                onMerge = { props.mergeBlocks }
	                unstableOnSplit = {
						props.insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								props.insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => props.onReplace( [] ) }
	            />
			)
		}else{
			return (
				<RichText.Content
	                tagName='div'
	                value={ attributes.descriptionText }
	                className='uagb-blockquote__content'
	            />
			)
		}
	}
}

export default Description
