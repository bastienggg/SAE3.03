import { getRequest } from '../lib/api-request.js';

let ItemData = {};

ItemData.popularItems = async function () {
    let data = await getRequest('items?popular=all');
    return data;
}

ItemData.weakStock = async function () {
    let data = await getRequest('items?stock=weak');
    return data;
}



export { ItemData };