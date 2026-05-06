function loadFooter() {
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-logo">
                    <a href="index.html"><img src="https://www.cannyturtle.com/assets/img/logo.png" alt="Canny Turtle Logo" style="height: 45px; filter: brightness(0) invert(1);"></a>
                </div>
                <div class="footer-socials">
                    <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                    <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                </div>
            </div>
            
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>Canny Turtle</h4>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="#">Capabilities</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Industry</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Insights</h4>
                    <ul>
                        <li><a href="#">Knowledge Base</a></li>
                        <li><a href="#">Startup Spotlight</a></li>
                        <li><a href="#">Market Analysis</a></li>
                        <li><a href="#">Case Studies</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Odisha Special</h4>
                    <ul>
                        <li><a href="#">NRI / NRO Special</a></li>
                        <li><a href="#">Market Entry</a></li>
                        <li><a href="#">Bhubaneswar Consulting</a></li>
                        <li><a href="#">Local Partnerships</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="index.html#contact">Contact Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Social Responsibility</a></li>
                        <li><a href="#">Subscribe</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2026 Canny Turtle Consulting. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('site-footer').innerHTML = footerHTML;
}

loadFooter();
