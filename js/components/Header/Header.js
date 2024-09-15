class Header extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.showBar()
    }

    render() {
        this.innerHTML = /* html */ `
        <style rel="stylesheet">
          @import "./js/components/Header/style.css";
        </style>
        <header>
        <div class="site-name">
            <h1> <a href="/#"> Art Museum</a> </h1>
        </div>
        <div class="links">
            <a href="/#Exhibitions" class="link"> Exhibitions  </a>
            <a href="/#Gallery" class="link"> Gallery </a>
            <a href="/#Events" class="link"> Events  </a>
            <a href="/#Visit" class="link"> Visit </a>
        </div>
        <i class='bx bx-menu'></i>
        </header>
        `
    }
    showBar() {
        const links = document.querySelector('.links')
        const btn = document.querySelector('.bx-menu').addEventListener('click', () => {
            links.classList.toggle('active')
            
        })
    }
}

customElements.define("custom-header", Header)
export default Header;