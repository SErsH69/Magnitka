const Header = class Header {
    constructor({isMobileMenuOpened}){
        this.isMobileMenuOpened = false;
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
    closeMobileMenu() {
        this.isMobileMenuOpened = false;
    }
    setEventListener() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.header__burger--body') || event.target.closest('.header__burger')) return;
            this.closeMobileMenu();
        }) 
    }
    paralaxBlock() {
        if (innerWidth > 1023) {
            document.addEventListener('DOMContentLoaded', () => {
                let stars = document.querySelector('.mouse-parallax-fog-2');
                let cap = document.querySelector('.footer__anim');
                let tube = document.querySelector('.main_menus__icon');
                
                
                window.addEventListener('mousemove', function(e) {
                    let x = e.clientX / window.innerWidth;
                    let y = e.clientY / window.innerHeight;  
                    stars.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
                    cap.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
                    tube.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
                });
            });
        }
    }
    init() {
        this.setEventListener();
        this.paralaxBlock();
    }
}

export default Header;