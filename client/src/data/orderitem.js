import { getRequest } from '../lib/api-request.js';

let OrderitemsData = {};

OrderitemsData.fetch = async function () {
    let data = await getRequest('orderitems');
    return data;
}

OrderitemsData.mouthlyamount = async function () {
    let data = await getRequest('orderitems?amout=mounthly');
    return data;
}

export { OrderitemsData };