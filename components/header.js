class simpleHeader extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        
        const header = document.createElement('header')

        header.innerHTML = `
            <h1><a href="#">YOUR NAME</a></h1>
            <button id="btn-nav">
                <img src="assets/icons/fa-menu-bars.svg" alt="burger menu">
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="#">LIVE SHOWS</a>
                    </li>
                    <li>
                        <a href="/contact.html">CONTACT</a>
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
                    height: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    }
                    li {
                        font-size: 4rem;
                        padding: .5em;
                    }
                    :host{
                        display: block;
                        }
                        header{
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
                                position: absolute;
                                top: 7.5%;
                                left: 50%;
                                transform: TranslateX(-50%);
                                width: 100%;
                                height: 100%;
                                background-color: white;
                                }
                @media (min-width: 760px) {
                    h1, a {
                        text-wrap: nowrap;
                    }
                    ul {
                        flex-direction: row;
                        justify-content: end;
                    }
                    button {
                        display: none;    
                    }
                    nav {
                        display: inline-block;
                        position: static;
                        transform: none;
                    }
                    li {
                        font-size: 2rem;
                    }
                }
            </style>
            `;

        shadow.appendChild(header);

        const buttonNav = shadow.getElementById("btn-nav");
        buttonNav.addEventListener("click", BtnNavOnClick);
        
        function BtnNavOnClick() {
            const navMenu = shadow.querySelector("nav");
            const navDisplay = window.getComputedStyle(navMenu).display;
            
            if (navDisplay == "none") {
                buttonNav.style.transform = "rotate(90deg)";
                navMenu.style.display = "block";
            }
            else {
                buttonNav.style.transform = "";
                navMenu.style.display = "none";
            }
        }        
    }
    
}

customElements.define('simple-header', simpleHeader);