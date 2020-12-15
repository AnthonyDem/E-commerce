import React from 'react';
import CollectionComponent from "../../components/collection-component/collection.component";
import { connect } from 'react-redux';
import { createStructuredSelector  } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const Shop = ({ collections }) => {

      return (
         collections.map(collection =>
             <CollectionComponent title={collection.title} key={collection.id} items={collection.items}/>
             )
      );

};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});


export default connect(mapStateToProps)(Shop);
