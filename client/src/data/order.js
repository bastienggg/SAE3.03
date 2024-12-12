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
OrderData.OrderByCustomer = async function (id) {
    let data = await getRequest(`orders?customer=${id}`);
    return data;
}
OrderData.Allclient = async function () {
    let data = await getRequest('orders?customer=all');
    return data;
}
OrderData.AllMounth = async function () {
    let data = await getRequest('orders?mouth=all');
    return data;
}
OrderData.Radial = async function (id) {
    let data = await getRequest(`orders?country=${id}`);
    return data;
}
export { OrderData };