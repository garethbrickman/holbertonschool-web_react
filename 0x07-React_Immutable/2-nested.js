
import immutable from 'immutable';

const { Map } = immutable;

export default function accessImmutableObject(object, array) {
    let search = object;

    array.forEach(item => {
        const found = search[item];

        if (!found) return undefined;
        search = found;
    });
    return typeof search === 'object' ? Map(search) : search;
}

