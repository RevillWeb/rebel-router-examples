export class UsersPage extends HTMLElement {
    attachedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href="#/user/1?name=Bilbo">Bilbo Baggins</a></li>
                <li><a href="#/user/2?name=Frodo">Frodo Baggins</a></li>
                <li><a href="#/user/3?name=Gandalf">Gandalf the Grey</a></li>
                <li><a href="#/user/4?name=Sam">Samwise Gamgee</a></li>
                <li><a href="#/user/5?name=Merry">Meriadoc brandybuck</a></li>
            </ul>
        `;
    }
}

document.registerElement("users-page", UsersPage);
