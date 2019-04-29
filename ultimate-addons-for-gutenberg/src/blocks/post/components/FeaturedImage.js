const { decodeEntities } = wp.htmlEntities
const { __ } = wp.i18n

class FeaturedImage extends React.Component {

	render() {

		const { post, attributes } = this.props

		let target = ( attributes.newTab ) ? "_blank" : "_self"

		if (
			attributes.displayPostImage &&
			undefined !== post.uagb_featured_image_src &&
			attributes.imgSize &&
			post.uagb_featured_image_src[attributes.imgSize]
		) {
			var src = post.uagb_featured_image_src[attributes.imgSize]

			return (
				<div className='uagb-post__image'>
					<a href={ post.link } target={ target } rel ="noopener noreferrer">
						<img
							src={ src[0] }
							alt={ decodeEntities( post.title.rendered.trim() ) || __( "(Untitled)" ) }
						/>
					</a>
				</div>
			)
		} else {

			return null
		}
	}
}

export default FeaturedImage
