import classnames from "classnames"
import Slider from "react-slick"
import FeaturedImage from ".././components/FeaturedImage"
import Title from ".././components/Title"
import Meta from ".././components/Meta"
import Excerpt from ".././components/Excerpt"
import Button from ".././components/Button"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"

class Blog extends React.Component {

	render() {

		const { setAttributes, attributes, className, latestPosts, block_id } = this.props

		const {
			columns,
			tcolumns,
			mcolumns,
			imgPosition,
			postsToShow,
			autoplay,
			pauseOnHover,
			transitionSpeed,
			infiniteLoop,
			arrowSize,
			arrowBorderSize,
			arrowBorderRadius,
			arrowColor,
			arrowDots,
			equalHeight
		} = attributes

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts

		function NextArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" tabIndex="0" role="button" style={{ "borderColor" : arrowColor, "borderRadius" : arrowBorderRadius, "borderWidth" : arrowBorderSize }}>
					{ UAGB_Block_Icons.carousel_right }
				</button>
			)
		}

		function PrevArrow( props ) {

			return (
				<button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" tabIndex="0" role="button" style={{ "borderColor" : arrowColor, "borderRadius" : arrowBorderRadius, "borderWidth" : arrowBorderSize }}>
					{ UAGB_Block_Icons.carousel_left }
				</button>
			)
		}

		function carousel_set_height(props){
			var id = props.clientId
			var equalHeight =  props.attributes.equalHeight
			if( equalHeight ){
				var main_block            = $(".uagb-post__items").parents("#block-"+id)
				var wrap            = main_block.find(".is-carousel")
				wrap.imagesLoaded( function() {
		            uagb_carousel_height(id)
		        })

		        wrap.on( "afterChange", function() {
		           uagb_carousel_height(id)
		        } )
		    }else{

		    }
		}

		let dots = ( "dots" == arrowDots || "arrows_dots" == arrowDots ) ? true : false
		let arrows = ( "arrows" == arrowDots || "arrows_dots" == arrowDots ) ? true : false

		const equalHeightClass = equalHeight ? "uagb-post__carousel_equal-height" : ""

		var current = this
		const settings = {
			slidesToShow : columns,
			slidesToScroll : 1,
			autoplaySpeed : 2000,
			autoplay : autoplay,
			infinite : infiniteLoop,
			pauseOnHover : pauseOnHover,
			speed : transitionSpeed,
			arrows : arrows,
			dots : dots,
			rtl : false,
			afterChange: current  => {
				if( equalHeight ){
					uagb_carousel_height(block_id)
				}
		    },
			nextArrow: <NextArrow arrowSize={arrowSize}/>,
			prevArrow: <PrevArrow arrowSize={arrowSize}/>,
			responsive : [
				{
					breakpoint : 1024,
					settings : {
						slidesToShow : tcolumns,
						slidesToScroll : 1,
					}
				},
				{
					breakpoint : 767,
					settings : {
						slidesToShow : mcolumns,
						slidesToScroll : 1,
					}
				}
			]
		}

		const all_posts = displayPosts.map( ( post, i ) =>
			<article key={ i }>
				<div className="uagb-post__inner-wrap">
					<FeaturedImage post={post} attributes={attributes} />
					<div className="uagb-post__text">
						<Title post={post} attributes={attributes} />
						<Meta post={post} attributes={attributes} />
						<Excerpt post={post} attributes={attributes} />
						<Button post={post} attributes={attributes} />
					</div>
				</div>
			</article>
		)

		if ( columns >= displayPosts.length ) {
			return (
				<div
					className={ classnames(
						className,
						"uagb-post-grid",
						"uagb-post__arrow-outside",
						`uagb-post__image-position-${ imgPosition }`,
						`${ equalHeightClass }`
					) }
					data-blog-id={block_id}
					id={ `uagb-post__carousel-${ block_id }` }
				>
					<div
						className={ classnames(
							"is-carousel",
							`uagb-post__columns-${ columns }`,
							`uagb-post__columns-tablet-${ tcolumns }`,
							`uagb-post__columns-mobile-${ mcolumns }`,
							"uagb-post__items",
						) }
					>
						{ all_posts }
					</div>
				</div>
			)
		} else {

			let style_str = ""

			if ( "dots" == arrowDots ) { style_str = {padding:"0 0 35px 0"} }

			return (

				<div
					className={ classnames(
						className,
						"uagb-post-grid",
						"uagb-post__arrow-outside",
						"uagb-slick-carousel",
						`uagb-post__image-position-${ imgPosition }`,
						`${ equalHeightClass }`
					) }
					data-blog-id={block_id}
					id={ `uagb-post__carousel-${ block_id }` }
					style={ ( "dots" == arrowDots ) ? { padding: "0 0 35px 0" } : {} }
				>
					<Slider
						className={ classnames(
							"is-carousel",
							`uagb-post__columns-${ columns }`,
							"uagb-post__items"
						) }
						{...settings}
					>
						{ all_posts }
					</Slider>
				</div>
			)
		}

	}
}

export default Blog
