class Carousel extends HTMLElement {
    constructor() {
        super();
        this.images = [];
        this.currentIndex = 0; 
        this.render();
    }

    async connectedCallback() {
        await this.fetchImages();
        this.updateCarousel(); 
        this.handleClick(); 
    }

    render() {
        this.innerHTML = /* html */ `
        <style>
            @import "./js/components/Carousel/style.css";
            /* Agrega estilos aquí si no quieres usar un archivo externo */
        </style>
        <div class='template-bg'>
            <div class="template">
                <i id="previous" class="bx arrow bx-chevron-left"></i>
                <div id="image-container"></div>
                <i id="next" class="bx arrow bx-chevron-right"></i>
            </div>
        </div>
        `;
    }

    
    async fetchImages() {
        try {
            const response = await fetch('./assets/data.json');
            if (!response.ok) {
                throw new Error('No se pudo encontrar el archivo');
            }
            const data = await response.json();
            this.images = data.CarouselImages;
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

   
    updateCarousel() {
        if (this.images.length > 0) {
            const template = this.querySelector('.template');
            template.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;
        }
    }

    
    handleClick() {
        const previousButton = this.querySelector('#previous');
        const nextButton = this.querySelector('#next');

        previousButton.addEventListener('click', () => {
            if (this.images.length > 0) {
                this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
                this.updateCarousel();
            }
            if (this.currentIndex == 0) {
                this.currentIndex == this.images.length
            }
        });

        nextButton.addEventListener('click', () => {
            if (this.images.length > 0) {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
                this.updateCarousel();
            }
            if (this.currentIndex == this.images.length) {
                this.currentIndex == 0
            }
        });
    }
}

customElements.define('carousel-element', Carousel);
