import { genericRenderer } from "../../lib/utils.js";

const templateFile = await fetch("./ui/selectMounth/template.html");
const template = await templateFile.text();


let MounthsView = {

    render: function (data) {
        let html = "";
        for (let obj of data) {
            html += genericRenderer(template, obj);
        }
        return html;
    }

}

export { MounthsView };