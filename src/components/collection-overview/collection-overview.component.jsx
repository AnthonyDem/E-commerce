import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionComponent from "../collection-component/collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import 'collection-overview.styles.scss';

const collectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        { collections.map(collection =>
            <CollectionComponent title={collection.title} key={collection.id} items={collection.items}/>
        )}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionOverview)
