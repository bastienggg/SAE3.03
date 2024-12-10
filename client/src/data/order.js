import { getRequest } from '../lib/api-request.js';

let OrderData = {};

OrderData.status = async function () {
    let data = await getRequest('orders');
    return data;
}
OrderData.mounthlyAmount = async function () {
    let data = await getRequest('orders?amount=all');
    return data;
}
OrderData.mounthlyAmountCat = async function () {
    let data = await getRequest('orders?amount=categorie');
    return data;
}

export { OrderData };