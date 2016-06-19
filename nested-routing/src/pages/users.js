export class UsersPage extends HTMLElement {
    attachedCallback() {
        this.innerHTML = `
            <ul>
                <li><a href="#/user/1/Bilbo">Bilbo Baggins</a></li>
                <li><a href="#/user/2/Frodo">Frodo Baggins</a></li>
                <li><a href="#/user/3/Gandalf">Gandalf the Grey</a></li>
                <li><a href="#/user/4/Sam">Samwise Gamgee</a></li>
                <li><a href="#/user/5/Merry">Meriadoc brandybuck</a></li>
            </ul>
        `;
    }
}

document.registerElement("users-page", UsersPage);
