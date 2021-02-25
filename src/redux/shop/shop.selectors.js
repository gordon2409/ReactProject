import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';



const selectShop = state => state.shop;

export const selectCollections = memoize(createSelector(
    [selectShop],
    shop => shop.collections
));

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)