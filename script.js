// ==========================
// السراية للمفروشات الراقية
// script.js
// ==========================

// رسالة ترحيب عند فتح الموقع
window.addEventListener("load", function () {
    console.log("مرحبًا بك في موقع السراية للمفروشات الراقية");
});

// تمرير ناعم للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// إظهار زر العودة للأعلى عند التمرير (إذا وجد)
const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}