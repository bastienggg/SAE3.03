import { getRequest } from '../lib/api-request.js';

let OrderData = {};

OrderData.fetch = async function () {
    let data = await getRequest('orders');
    return data;
}

export { OrderData };