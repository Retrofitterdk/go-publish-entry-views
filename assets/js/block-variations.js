const { getBlockVariations, registerBlockVariation } = wp.blocks;
const { __ } = wp.i18n;
const domReady = wp.domReady;

domReady(() => {

	const VARIATION_NAME     = 'popular-posts';

    registerBlockVariation( 'core/query', {
        name: VARIATION_NAME,
        title: __('Popular posts query block', 'thecopenhagenpost'),
        // icon: 'book',
        description: __('Displays a list of most popular posts', 'thecopenhagenpost'),
        isActive: [ 'namespace' ],
        // Other variation options...
        attributes: {
            namespace: VARIATION_NAME,
            query: {
                postType: 'post',
                perPage: 4,
                offset: 0,
                order: 'desc',
                sticky: 'exclude',
                // orderBy: 'meta_value_num',
                // metaKey: 'cph_post_views_count',
            },
            align: 'wide',
        },
        // ...Previous variation options.
        allowedControls: [
            'sticky',
            // 'order',
            // 'search'
        ],
        // Other variation options...
        innerBlocks: [
            [
                'core/post-template',
                {"layout":{"type":"grid","columnCount":4}},
                [
                    [ 'core/post-featured-image' ],
                    [ 'core/post-title' ]
                ],
            ]
        ]
    } );

});