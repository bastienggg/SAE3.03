import { genericRenderer } from "../../lib/utils.js";

const templateFile = await fetch("./ui/selectProduct/template.html");
const template = await templateFile.text();


let ProductsView = {

    render: function (data) {
        let html = "";
        for (let obj of data) {
            html += genericRenderer(template, obj);
        }
        return html;
    }

}

export { ProductsView };