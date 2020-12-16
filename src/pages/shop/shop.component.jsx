import React from 'react';
import collectionOverview from '../../components/collection-overview/collection-overview.component';
import {BrowserRouter, Route} from "react-router-dom";
import CollectionPage from "../collection/collection-page.component";

const Shop = ({ match }) => (
    <BrowserRouter>
        <Route exact path={`${match.path}`} component={collectionOverview} />
        <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
    </BrowserRouter>
);



export default Shop;
