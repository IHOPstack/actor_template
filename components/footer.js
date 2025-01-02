class simpleFooter extends HTMLElement {
    connectedCallback() {
        const footer = document.createElement('footer');

        footer.innerHTML = `
            <ul>
				<li>
					<a href="#"><img src="assets/icons/fa-instagram.svg"></a>
				</li>
				<li>
					<a href="#"><img src="assets/icons/fa-tiktok.svg"></a>
				</li>
			</ul>
        `;

        this.appendChild(footer);
    }
}

customElements.define('simple-footer', simpleFooter);
