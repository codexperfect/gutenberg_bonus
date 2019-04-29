const {
	RichText,
} = wp.editor

const { __ } = wp.i18n

const {
	createBlock
} = wp.blocks

class AuthorText extends React.Component {

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
	                value={ attributes.author }
	                placeholder={ __( "Author" ) }
	                className='uagb-blockquote__author'
	                onChange={ ( value ) => setAttributes( { author: value } ) }
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
	                tagName='cite'
	                value={ attributes.author }
	                className='uagb-blockquote__author'
	            />
			)
		}
	}
}

export default AuthorText
