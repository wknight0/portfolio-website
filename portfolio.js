// animated blob on intro page
const blobs = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
);

blobs.start();

// scroll animation behavior
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// scroll behavior for parallax effect
window.scroll({top: 0, behavior: "smooth"})

const objects = document.querySelectorAll('.objects');

let scrollAmount = 0;
let oldScrollAmount = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    objects.forEach(object => {
        if (scrollTop + window.innerHeight > object.offsetTop) {
            if (scrollTop > oldScrollAmount) {
                scrollAmount--;
            } else if (scrollTop < oldScrollAmount) {
                scrollAmount++;
            }
            object.style.transform = `translateY(${scrollAmount * 0.5}px)`;
        }  
    })
    oldScrollAmount = scrollTop;    
});