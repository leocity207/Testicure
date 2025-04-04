import App_Container from "./app_container.js";
import Requirement_App from "./app/requirement-app.js";
import Parameter_App from "./app/parameter-app.js"
import Test_App from "./app/test-app.js"
import Test_Case_App from "./app/test-case-app.js"

document.addEventListener("DOMContentLoaded", () => {

    const container = new App_Container();
    document.body.appendChild(container);

    container.addApp(new Requirement_App());
    container.addApp(new Test_Case_App());
    container.addApp(new Parameter_App());
    container.addApp(new Test_App());
});
