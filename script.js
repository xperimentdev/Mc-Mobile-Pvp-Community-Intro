// Loading Screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loading-screen");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 1200);
});

// Navbar Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(10,10,10,.90)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(10,10,10,.65)";
        header.style.boxShadow = "none";
    }
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card").forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);
});

// Button Ripple Effect
document.querySelectorAll(".btn").forEach((button) => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";

        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.35)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";
        ripple.style.pointerEvents = "none";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

// Floating Cards
document.querySelectorAll(".card").forEach((card, index) => {

    card.animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-8px)" },
        { transform: "translateY(0px)" }
    ], {
        duration: 3000 + (index * 300),
        iterations: Infinity
    });

});

// Dynamic Footer Year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Ripple Animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes ripple{
0%{
transform:scale(0);
opacity:.8;
}
100%{
transform:scale(4);
opacity:0;
}
}
`;

document.head.appendChild(style);

console.log("⚔ MC Mobile Tier List Loaded Successfully!");
function animateValue(id, end, speed){

const element = document.getElementById(id);

if(!element) return;

let start = 0;

const timer = setInterval(()=>{

start++;

element.textContent = start;

if(start>=end){

clearInterval(timer);

}

},speed);

}

animateValue("members",1200,2);
animateValue("tests",850,3);
animateValue("ranks",420,5);
animateValue("staff",35,50);
// Mouse Glow Effect
document.addEventListener("mousemove",(e)=>{

let glow=document.getElementById("cursorGlow");

if(!glow){

glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

Object.assign(glow.style,{
position:"fixed",
width:"220px",
height:"220px",
borderRadius:"50%",
pointerEvents:"none",
background:"radial-gradient(circle, rgba(34,197,94,.15), transparent 70%)",
transform:"translate(-50%,-50%)",
zIndex:"0"
});

}

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// Search placeholder (for future use)
console.log("MC Mobile Tier List V10 Loaded");
