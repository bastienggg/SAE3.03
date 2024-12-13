import { genericRenderer } from "../../lib/utils.js";

const templateFile = await fetch("./src/ui/selectClient/template.html");
const template = await templateFile.text();


let CustomerView = {

    render: function (data) {
        let html = "";
        for (let obj of data) {
            html += genericRenderer(template, obj);
        }
        return html;
    }

}

export { CustomerView };