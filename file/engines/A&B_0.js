// تعیین آدرس پیش‌فرض برای آیفریم
document.addEventListener('DOMContentLoaded', function() {
    let iframe = document.getElementById('iframe_2');
    iframe.src = "A&B_1.html";  // آدرس پیش‌فرض
});

// تغییر آدرس آیفریم با کلیک روی دکمه‌ها
function openTab(iframeId, tabIndex) {
    let iframe = document.getElementById(iframeId);
    if (iframeId === "iframe_2") {
        let urls1 = [
            "A&B_1.html", 
            "A&B_2.html", 
            "A&B_3.html",
            "A&B_4.html",
            "A&B_5.html"
        ];
        iframe.src = urls1[tabIndex];  // تغییر آدرس آیفریم
    } 
}
