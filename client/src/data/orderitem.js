import { getRequest } from '../lib/api-request.js';

let OrderitemsData = {};

OrderitemsData.fetch = async function () {
    let data = await getRequest('orderitems');
    return data;
}

export { OrderitemsData };