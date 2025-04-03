import App from "./app.js";
import App_Container from "./app_container.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = new App_Container();
    document.body.appendChild(container);

    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.innerHTML = '<circle cx="10" cy="10" r="10" fill="blue" />';

    const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg2.innerHTML = '<circle cx="10" cy="10" r="10" fill="green" />';

    const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg3.innerHTML = '<circle cx="10" cy="10" r="10" fill="yellow" />';

    const app1 = new App("App1", svg1, "<h2>Welcome to App 1</h2>");
    const app2 = new App("App2", svg2, "<h2>This is App 2</h2>");
    const app3 = new App("App3", svg3, "<h2>App 3 is here!</h2>");

    container.addApp(app1);
    container.addApp(app2);
    container.addApp(app3);
});
