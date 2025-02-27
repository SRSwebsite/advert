// تعیین آدرس پیش‌فرض برای آیفریم
document.addEventListener('DOMContentLoaded', function() {
    let iframe = document.getElementById('iframe_2');
    iframe.src = "interior/s1/1.html";  // آدرس پیش‌فرض
});

// تغییر آدرس آیفریم با کلیک روی دکمه‌ها
function openTab(iframeId, tabIndex) {
    let iframe = document.getElementById(iframeId);
    if (iframeId === "iframe_2") {
        let urls1 = [
            "interior/s1/1.html", 
            "interior/s2/2.html",
            "interior/s3/3.html",
            "interior/s4/4.html",
            "interior/s5/5.html"
        ];
        iframe.src = urls1[tabIndex];  // تغییر آدرس آیفریم
    } 
}
