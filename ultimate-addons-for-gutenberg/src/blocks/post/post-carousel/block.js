/**
 * BLOCK: UAGb - post-carousel
 */

// Import block dependencies and components
import edit from "./edit"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import ".././style.scss"
import ".././editor.scss"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/post-carousel", {
	title: uagb_blocks_info.blocks["uagb/post-carousel"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-carousel"]["description"],
	icon: UAGB_Block_Icons.post_carousel,
	category: uagb_blocks_info.category,
	keywords: [
		__( "post" ),
		__( "carousel" ),
		__( "uag" ),
	],
	edit,
	// Render via PHP
	save() {
		return null
	},
} )
