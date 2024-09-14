class Footer extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = /* html */ `
        <style>
            @import "./js/components/Footer/Footer.css";
        </style>
        
        ` 
    }
}