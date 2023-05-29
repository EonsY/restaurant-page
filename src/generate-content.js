const contentAll = document.getElementById('content')

export function generateBaseContent () {
    contentAll.innerHTML = `
        <div class="background-img">
            <div class="nav-bar">
                <div class="nav-bar-title">
                    <h1>Al-Qahirah</h1>
                </div>
                <div class="nav-bar-bottom">
                    <div id="about" nav-bar-bottom-elements>About</div>
                    <div id="menu" nav-bar-bottom-elements>Menu</div>
                    <div id="contact" nav-bar-bottom-elements>Contact</div>
                </div>
            </div>
            <div class="main-content" id="about" main-content></div>
        </div>
    `
}

export function aboutContent () {
    document.querySelector('[main-content]').innerHTML = `
        <hr>
        <div class="about-page">
            <div class="img-container">
                <img src="https://www.bbcgoodfoodme.com/assets/var/app/current/features/329/original/Greg.jpg"/>
                <p>Egyptian cuisine made with passion since 1964</p>
            </div>
        </div>
    `
}

function menuContent() {
    document.querySelector('[main-content]').innerHTML = `
        <hr>
        <div class="menu-grid">
            <div class="menu-column col-1">
                <div class="menu-titles-container">
                    <h1>Cuisines</h1>
                </div>
                <div class="menu-list-container">
                    <ol>
                        <li>Shwarma ... $5.99</li>
                        <li>Full Medames ... $5.99</li>
                        <li>Tamiya ... $5.99</li>
                        <li>Koshari ... $5.99</li>
                        <li>Mulukhiyah ... $5.99</li>
                        <li>Feteer Meshalet ... $5.99</li>
                        <li>Baba Ganoush ... $5.99</li>
                        <li>Fatteh ... $5.99</li>
                        <li>Mahshi ... $5.99</li>
                        <li>Alexandrian Kebdah ... $5.99</li>
                        <li>Sayadiyah Fish ... $5.99</li>
                        <li>Molokhia ... $5.99</li>
                        <li>Shakshuka ... $5.99</li>
                        <li>Eggah ... $5.99</li>
                    </ol>
                </div>
            </div>
            <div class="menu-column col-2">
                <div class="menu-titles-container">
                    <h1>Drinks</h1>
                </div>
                <div class="menu-list-container">
                    <ol>
                        <li>Lemongrass ... $5.99</li>
                        <li>Lemon tea ... $5.99</li>
                        <li>Honey Lemon ... $5.99</li>
                        <li>Apple Juice ... $5.99</li>
                        <li>Orange Juice ... $5.99</li>
                        <li>Carrot Milk ... $5.99</li>
                        <li>American Coffee ... $5.99</li>
                        <li>Latte ... $5.99</li>
                        <li>Mocha ... $5.99</li>
                        <li>Cappuchino ... $5.99</li>
                    </ol>
                </div>
            </div>
            <div class="menu-column col-3">
                <div class="menu-titles-container">
                    <h1>Desserts</h1>
                </div>
                <div class="menu-list-container">
                    <ol>
                        <li>Basbousa ... $5.99</li>
                        <li>Harissa ... $5.99</li>
                        <li>Kunafa ... $5.99</li>
                        <li>Baked Sweet Potato ... $5.99</li>
                        <li>Zalabya ... $5.99</li>
                        <li>Sweet Feteer ... $5.99</li>
                        <li>Om Ali ... $5.99</li>
                        <li>Rice pudding ... $5.99</li>
                        <li>Sweet goulash ... $5.99</li>
                        <li>Qatayef ... $5.99</li>
                        <li>Kahk ... $5.99</li>
                        <li>Jalebi ... $5.99</li>
                    </ol>
                </div>
            </div>
        </div>
    `
}

function contactContent () {
    document.querySelector('[main-content]').innerHTML = `
        <hr>
        <div class="contact-flex-div">
            <div class="contact-container">
                <div>
                    <p>Tel: 555-555-5555</p>
                </div>
                <div>
                    <p>Email: totallyrealemai.@gmail.com</p>
                </div>
            </div>
        </div>
    `
}

export function generateContent (contentType) {
    if (contentType === 'about') {
        aboutContent()
    } else if (contentType === 'menu') {
        menuContent()
    } else if (contentType === 'contact') {
        contactContent()
    }
}