const { select, subscribe } = wp.data;
import { Component } from 'react';
const { __ } = wp.i18n;

class TableOfContents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headers: props.headers,
			deregister: null
		};
	}

	componentDidMount() {
		const getHeaderBlocks = () =>
			select('core/editor')
				.getBlocks()
				.filter(block => block.name === 'core/heading');


		const getData = ( headerData, a ) => {

			headerData.map( ( header ) => {

				let innerBlock = header.innerBlocks;

				if( innerBlock.length > 0 ) {
					innerBlock.forEach(function(element) {
						if( element.innerBlocks.length > 0 ) {
							getData( element.innerBlocks, a );
						} else {
							a.push( element.attributes );
						}
					});
				} else {
					if( header.name === 'core/heading' ) {
						a.push( header.attributes );
					}
				}

			});

			return a; 
		}

		const setHeaders = () => {
			let a = [];
			const headers = getData( select('core/editor').getBlocks(), a );

			if( typeof headers != 'undefined' ) {
				headers.forEach((heading, key) => {
					const headingAnchorEmpty =
						typeof heading.anchor === 'undefined' ||
						heading.anchor === '';
					const headingContentEmpty =
						typeof heading.content === 'undefined' ||
						heading.content === '';
					const headingDefaultAnchor =
						!headingAnchorEmpty &&
						heading.anchor.indexOf(key + '-') === 0;
					if (
						!headingContentEmpty &&
						(headingAnchorEmpty || headingDefaultAnchor)
					) {
						heading.anchor =
							key +
							'-' +
							heading.content
								.toString()
								.toLowerCase()
								.replace(/( |<.+?>|&nbsp;)/g, '-');
						heading.anchor = heading.anchor.replace(
							/[^\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s-]/g,
							''
						);
					}
				});
			}

			this.setState({ headers });
		};

		setHeaders();

		const deregister = subscribe(() => {
			setHeaders();
		});
		this.setState({ deregister });
	}

	componentWillUnmount() {
		this.state.deregister();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			JSON.stringify(prevProps.headers) !==
			JSON.stringify(prevState.headers)
		) {
			this.props.blockProp.setAttributes({
				headerLinks: JSON.stringify(this.state.headers)
			});
		}
	}

	render() {
		const { mappingHeaders, blockProp, style } = this.props;

		const { headers } = this.state;

		const makeHeaderArray = origHeaders => {
			let arrays = [];

			origHeaders
				.filter(header => mappingHeaders[header.level - 1])
				.forEach(header => {
					let last = arrays.length - 1;
					if (
						arrays.length === 0 ||
						arrays[last][0].level < header.level
					) {
						arrays.push([header]);
					} else if (arrays[last][0].level === header.level) {
						arrays[last].push(header);
					} else {
						while (arrays[last][0].level > header.level) {
							if (arrays.length > 1) {
								arrays[arrays.length - 2].push(arrays.pop());
								last = arrays.length - 1;
							} else break;
						}
						if (arrays[last][0].level === header.level) {
							arrays[last].push(header);
						}
					}
				});

			while (
				arrays.length > 1 &&
				arrays[arrays.length - 1][0].level >
					arrays[arrays.length - 2][0].level
			) {
				arrays[arrays.length - 2].push(arrays.pop());
			}
			return arrays[0];
		};

		const parseList = list => {
			let items = [];
			list.forEach(item => {
				if (Array.isArray(item)) {
					items.push(parseList(item));
				} else {
					items.push(
						<li>
							<a
								href={`#${item.anchor}`}
								dangerouslySetInnerHTML={{
									__html: item.content.replace(
										/(<a.+?>|<\/a>)/g,
										''
									)
								}}
							/>
						</li>
					);
				}
			});
			return <ul className="uagb-toc__list" >{items}</ul>;
		};

		if (
			typeof mappingHeaders != undefined && headers.length > 0 && headers.filter(header => mappingHeaders[header.level - 1]).length > 0
		) {

			return (
				<div style={style} className="uagb-toc__list-wrap">
					{parseList(makeHeaderArray(headers))}
				</div>
			);
		} else {
			return (
				blockProp && (
					<p className="ub_table-of-contents-placeholder">
						{__(
							'Add a header to begin generating the table of contents'
						)}
					</p>
				)
			);
		}
	}
}

export default TableOfContents;
