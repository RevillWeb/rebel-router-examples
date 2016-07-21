export class UserPage extends HTMLElement {
    attachedCallback() {
        this.id = this.getAttribute("id");
        this.name = this.getAttribute("name");
        this.innerHTML = `
            <p>User '${this.name}' with ID '${this.id}' was selected.</p>
            <nav>
                <a href="#/user/${this.id}/${this.name}/details">Details</a> | <a href="#/user/${this.id}/${this.name}/shipping">Shipping</a> | <a href="#/user/${this.id}/${this.name}/billing">Billing</a>
            </nav>
            <rebel-router inherit="true">
                <rebel-route path="/details">
                    <p>General details for ${this.name}.</p>
                </rebel-route>
                <rebel-route path="/shipping">
                    <p>Shipping details for ${this.name}.</p>
                </rebel-route>
                <rebel-route path="/billing">
                    <p>Billing details for ${this.name}.</p>
                </rebel-route>
                <rebel-default><p>Use the nav above.</p></rebel-default>
            </rebel-router>
        `;
    }
}

document.registerElement("user-page", UserPage);