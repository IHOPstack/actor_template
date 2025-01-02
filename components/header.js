class simpleHeader extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        
        const header = document.createElement('header')

        header.innerHTML = `
            <h1><a href="#">YOUR NAME</a></h1>
            <button>
                <img src="assets/icons/fa-menu-bars.svg" alt="burger menu">
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="/contact.html">LIVE SHOWS</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </nav>
            <style>
                h1, a {
                    font-weight: 400;
                    padding: 0%;
                    margin: 0%;
                }
                a {
                color: var(--text-color);
                text-decoration: none;
                width: fit-content;
                }

                ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                }
                :host{
                    display: block;
                }
                header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5%;
                margin: 0%;
                button {
                    background-color: var(--bg-color);
                    border: none;
                }
                img {
                    height: 2rem;
                }
                }
                nav {
                    display: none;
                }
            </style>
            `;

        shadow.appendChild(header);

        let css = new CSSStyleSheet();
        css.replaceSync("@import url(css/style.css)");
        
        shadow.adoptedStyleSheets = [css]
        
        console.log(`html: ${shadow.innerHTML}`);
    }
    
}

customElements.define('simple-header', simpleHeader);