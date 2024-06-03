const MainGallery = class MainGallery {
    constructor(){}
    initBtn() {
        if (innerWidth > 1023) {
            document.addEventListener("DOMContentLoaded", function() {
                const btn = document.querySelector('.main_gallery__btn');
                const blocks = document.querySelectorAll('.main_gallery__block');
                
                const showMoreBlocks = () => {
                    const activeBlocks = document.querySelectorAll('.main_gallery__block.isActive');
                    const startIndex = activeBlocks.length;
                    const endIndex = Math.min(startIndex + 11, blocks.length);
                    
                    for (let i = startIndex; i < endIndex; i++) {
                        blocks[i].classList.add('isActive');
                    }
                    
                    if (endIndex === blocks.length) {
                        btn.style.display = 'none';
                    }
                    
                    const wrappedBlocks = document.querySelectorAll('.main_gallery__item');
                    if (wrappedBlocks.length === 0 || wrappedBlocks[wrappedBlocks.length - 1].children.length >= 11) {
                        const newWrapper = document.createElement('div');
                        newWrapper.classList.add('main_gallery__item');
                        document.querySelector('.main_gallery__blocks').appendChild(newWrapper);
                    }
                    
                    const activeWrappedBlocks = document.querySelectorAll('.main_gallery__item');
                    const currentWrapper = activeWrappedBlocks[activeWrappedBlocks.length - 1];
                    for (let i = startIndex; i < endIndex; i++) {
                        currentWrapper.appendChild(blocks[i]);
                    }
                };
                
                btn.addEventListener('click', showMoreBlocks);
                
                showMoreBlocks();
            });
        }

        if (innerWidth < 1023) {
            document.addEventListener("DOMContentLoaded", function() {
                const btn = document.querySelector('.main_gallery__btn');
                const blocks = document.querySelectorAll('.main_gallery__block');
                
                const showMoreBlocks = () => {
                    const activeBlocks = document.querySelectorAll('.main_gallery__block.isActive');
                    const startIndex = activeBlocks.length;
                    const endIndex = Math.min(startIndex + 6, blocks.length);
                    
                    for (let i = startIndex; i < endIndex; i++) {
                        blocks[i].classList.add('isActive');
                    }
                    
                    if (endIndex === blocks.length) {
                        btn.style.display = 'none';
                    }
                    
                    const wrappedBlocks = document.querySelectorAll('.main_gallery__item');
                    if (wrappedBlocks.length === 0 || wrappedBlocks[wrappedBlocks.length - 1].children.length >= 6) {
                        const newWrapper = document.createElement('div');
                        newWrapper.classList.add('main_gallery__item');
                        document.querySelector('.main_gallery__blocks').appendChild(newWrapper);
                    }
                    
                    const activeWrappedBlocks = document.querySelectorAll('.main_gallery__item');
                    const currentWrapper = activeWrappedBlocks[activeWrappedBlocks.length - 1];
                    for (let i = startIndex; i < endIndex; i++) {
                        currentWrapper.appendChild(blocks[i]);
                    }
                };
                
                btn.addEventListener('click', showMoreBlocks);
                
                showMoreBlocks();
            });
        }

    }
    init() {
        this.initBtn();
    }
}

export default MainGallery;
