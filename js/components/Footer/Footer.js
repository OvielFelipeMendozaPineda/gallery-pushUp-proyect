class Footer extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.innerHTML = /* html */ `
        <style>
            @import "./js/components/Footer/style.css";
        </style>
            <footer id="Visit">
        <h2 class="footer-title"> Plan your visit </h2>
        <div class="footer-items">
            <div class="item">
                <div class="item-icon">
                    <i class='bx bx-time-five'></i>
                </div>
                <div class="item-title">
                    <h2> Opening hours </h2>
                </div>
                <div class="item-info">
                    <p>
                        Tuesday - Sunday 10am - 5pm
                    </p>
                </div>
                <div class="item-compl">
                    <p>Closed on Mondays</p>
                </div>
            </div>
            <div class="item">
                <div class="item-icon">
                    <i class='bx bxs-edit-location' ></i>
                </div>
                <div class="item-title">
                    <h2>  Location </h2>
                </div>
                <div class="item-info">
                    <p>
                        123 Art Street
                    </p>
                </div>
                <div class="item-compl">
                    <p>CityVille, State 12345</p>
                </div>
            </div>
            <div class="item">
                <div class="item-icon">
                    <i class='bx bx-image-alt' ></i>
                </div>
                <div class="item-title">
                    <h2>  Current Exhibition </h2>
                </div>
                <div class="item-info">
                    <p>
                        "Modern Master"
                    </p>
                </div>
                <div class="item-compl">
                    <p>Until September 30, 2023</p>
                </div>
            </div>
        </div>
    </footer>
    <div class="copyright">
        <p>@2024 CampusLands. All Rights Reserved</p>
        <div class="copy-group">
            <p> Terms Of Service</p>
            <p> Privacy</p>
        </div>
    </div>
        ` 
    }
}


customElements.define('custom-footer', Footer)