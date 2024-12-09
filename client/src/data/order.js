import { getRequest } from '../lib/api-request.js';

let OrderData = {};

OrderData.fetch = async function (order_status) {
    let data = await getRequest('orders?order_status=' + order_status);
    return data;
}

export { OrderData };