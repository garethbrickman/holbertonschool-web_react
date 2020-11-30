import immutable from 'immutable';

const { Map } = immutable;

export default function accessImmutableObject(object, array) {
    let searchKey = object;

    array.forEach(item => {
        const foundValue = searchKey[item];

        if (!foundValue) return undefined;
        searchKey = foundValue;
    });

    if (typeof searchKey === 'object') {
        return Map(searchKey);
    } else {
        return searchKey;
    }
}
