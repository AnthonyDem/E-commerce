import React from 'react';
import './colletcion.style.scss';
import CollectionItem from "../collection-item/collection-item.component";


const CollectionComponent = (props) => {
  return (
      <div className="collection-preview">
          <h1 className="title">{props.title.toUpperCase()}</h1>
          <div className="preview">
              {props.items
                  .filter((item, id) => id < 4)
                  .map(({id, ...otherItemProps}) => (<CollectionItem key={id} {...otherItemProps}/>))}
          </div>
      </div>
  );

};

export default CollectionComponent;
