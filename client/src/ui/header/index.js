
const templateFile = await fetch("src/ui/header/template.html");
const template = await templateFile.text();


let HeaderView = {};

HeaderView.render = function(){
    return template;
}



export {HeaderView};