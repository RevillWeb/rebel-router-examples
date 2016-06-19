export class UserPage extends HTMLElement {
    attachedCallback() {
        this.id = this.getAttribute("id");
        this.name = this.getAttribute("name");
        this.innerHTML = `<p>User '${this.name}' with ID '${this.id}' was selected.</p>`;
    }
}

document.registerElement("user-page", UserPage);