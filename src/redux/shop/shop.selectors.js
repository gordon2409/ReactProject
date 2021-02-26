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
    collections => collections ? 
    collections[collectionUrlParam] 
    : null
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => 
        collections ?
            Object.keys(collections).map(key => collections[key])
            :
            []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);