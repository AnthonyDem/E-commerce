import React from 'react';
import SHOP_DATA from "./shop_data";
import CollectionComponent from "../../components/collection-component/collection.component";

class Shop extends React.Component{
  constructor() {
      super();
      this.state = {
          collections: SHOP_DATA
      }
  }

  render() {
      const {collections} = this.state;

      return (
         collections.map(collection =>
             <CollectionComponent title={collection.title} key={collection.id} items={collection.items}/>
             )
      );
  }
};

export default Shop;
