function loadHeader() {
    const headerHTML = `
        <!-- Top Utility Bar -->
        <div class="header-utility">
            <div class="header-container utility-container">
                <ul class="utility-links left">
                    <li><a href="about.html">ABOUT US</a></li>
                    <li><a href="#">SOCIAL RESPONSIBILITY</a></li>
                    <li class="utility-dropdown">
                        <a href="#">RESOURCES <span class="arrow-down"></span></a>
                        <ul class="utility-dropdown-menu">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Media</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Download</a></li>
                        </ul>
                    </li>
                    <li><a href="#">CAREERS</a></li>
                    <li><a href="index.html#contact">CONTACT</a></li>
                </ul>
                <ul class="utility-links right">
                    <li><a href="#">SUBSCRIBE</a></li>
                    <li><a href="#"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> GLOBAL | ENGLISH <span class="arrow-down"></span></a></li>
                    <li><a href="#"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> LOGIN</a></li>
                </ul>
            </div>
        </div>
        
        <!-- Main Navigation -->
        <div class="header-main">
            <div class="header-container">
                <div class="header-left">
                    <button class="menu-btn" aria-label="Menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    <a href="index.html" class="header-logo">
                        <img src="https://www.cannyturtle.com/assets/img/logo.png" alt="CannyTurtle Logo" style="height: 38px; width: auto;">
                    </a>
                </div>
                <nav class="header-nav">
                    <ul>
                        <li class="has-dropdown">
                            <a href="#" class="nav-link">Capabilities <span class="arrow-down red"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Business consulting</a></li>
                                <li><a href="#">Marketing communication</a></li>
                                <li class="has-nested">
                                    <a href="#">Digital marketing <span class="arrow-right">&rarr;</span></a>
                                    <ul class="nested-menu">
                                        <li><a href="#">SEO</a></li>
                                        <li><a href="#">Social Media</a></li>
                                        <li><a href="#">Digital PR</a></li>
                                        <li><a href="#">Content Marketing</a></li>
                                        <li><a href="#">Paid Media</a></li>
                                        <li><a href="#">Web Dev</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Content writing</a></li>
                                <li><a href="#">Guest posting</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown">
                            <a href="#" class="nav-link">Solutions <span class="arrow-down red"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Small Business Solution</a></li>
                                <li><a href="#">Startup Solution</a></li>
                                <li><a href="#">Ecommerce Solution</a></li>
                                <li><a href="#">Franchise solutions</a></li>
                            </ul>
                        </li>
                        <li class="has-mega">
                            <a href="#" class="nav-link">Industry <span class="arrow-down red"></span></a>
                            <div class="mega-menu">
                                <div class="mega-container">
                                    <div class="mega-col">
                                        <h4>Consumer & Retail</h4>
                                        <ul>
                                            <li><a href="#">FMCG</a></li>
                                            <li><a href="#">Retail</a></li>
                                            <li><a href="#">Food</a></li>
                                            <li><a href="#">Travel</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-col">
                                        <h4>Tech & Media</h4>
                                        <ul>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">IT</a></li>
                                            <li><a href="#">Media</a></li>
                                            <li><a href="#">Education</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-col">
                                        <h4>Industrial & Energy</h4>
                                        <ul>
                                            <li><a href="#">Solar Power</a></li>
                                            <li><a href="#">Agriculture</a></li>
                                            <li><a href="#">Real Estate</a></li>
                                            <li><a href="#">Interior Design</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-col">
                                        <h4>Services</h4>
                                        <ul>
                                            <li><a href="#">Financial</a></li>
                                            <li><a href="#">Healthcare</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="has-dropdown">
                            <a href="#" class="nav-link">NRI/NRO <span class="arrow-down red"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Business establishment</a></li>
                                <li><a href="#">Outsourcing</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown">
                            <a href="#" class="nav-link">Odisha Special <span class="arrow-down red"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Startup spotlight</a></li>
                                <li><a href="#">Case studies</a></li>
                                <li><a href="#">Interview</a></li>
                                <li><a href="#">Success stories</a></li>
                                <li><a href="#">Local Event</a></li>
                                <li><a href="#">Opportunities</a></li>
                                <li><a href="#">Marketing analysis</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="header-right">
                    <div class="search-wrap">
                        <span class="explore-text">Explore</span>
                        <button class="search-btn" aria-label="Search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('site-header').innerHTML = headerHTML;
}

loadHeader();
