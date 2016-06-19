export class ContactPage extends HTMLElement {
    attachedCallback() {
        this.innerHTML = `<p>This is the contact page.</p>`;
    }
}

document.registerElement("contact-page", ContactPage);