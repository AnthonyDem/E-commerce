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
                  .map(item => (<CollectionItem key={item.id} item={item}/>))}
          </div>
      </div>
  );

};

export default CollectionComponent;
