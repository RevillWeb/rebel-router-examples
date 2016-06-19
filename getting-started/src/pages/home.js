export class HomePage extends HTMLElement {
    attachedCallback() {
        this.innerHTML = `<p>This is the home page.</p>`;
    }
}

document.registerElement("home-page", HomePage);
