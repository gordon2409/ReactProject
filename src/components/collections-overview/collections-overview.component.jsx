import React from 'react'
import './collections-overview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PreviewCollection from '../preview-collection/preview-collection.component'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview); 