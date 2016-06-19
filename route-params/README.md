# Accessing route parameters with rebel-router

**Note:** If you haven't already checked out the getting started tutorial then please do as this will show you how to get set-up with **rebel-router**.

This example shows how you can access the route parameters from within a component or template. If you are using a component to render your view then **rebel-router** will automatically add route parameters as attribute on-to your component so you can easily access them as shown below.

```javascript
export class UserPage extends HTMLElement {
    attachedCallback() {
        //Get hold of the ID parameter
        this.id = this.getAttribute("id");
        //Get hold of the name parameter
        this.name = this.getAttribute("name");
        this.innerHTML = `<p>User '${this.name}' with ID '${this.id}' was selected.</p>`;
    }
}
```

It is equally as easy to get hold of the route parameters if you are using templates instead of components:

```html
<rebel-router animation="false" shadow="false">
    <route path="/colour/{name}">
        The colour that was selected is: '${name}'.
    </route>
    <default>
        <ul>
            <li><a href="#/colour/blue">Blue</a></li>
            <li><a href="#/colour/green">Green</a></li>
            <li><a href="#/colour/orange">Orange</a></li>
            <li><a href="#/colour/purple">Purple</a></li>
            <li><a href="#/colour/gold">Gold</a></li>
        </ul>
    </default>
</rebel-router>
```
