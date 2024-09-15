class HeroSection extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* html */ `
        <style>
            @import  "./js/components/HeroSection/style.css";
        </style>
        <section class="hero-section">
        <h2>Welcome to the Art Museum</h2>
        <p>Explore creativity and human expression through our vast collection of masterpices</p>
        <div class="cta-group">
            <button class="cta__primary"><a href="/#Visit">Plan Your Visit</a></button>
            <button class="cta__secondary"><a href="/#Galley">View Gallery/</a></button>
        </div>
    </section>
        `
    }
}

customElements.define('hero-section', HeroSection)

