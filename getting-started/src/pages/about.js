export class AboutPage extends HTMLElement {
    attachedCallback() {
        this.innerHTML = `<p>This is the about page.</p>`;
    }
}

document.registerElement("about-page", AboutPage);
