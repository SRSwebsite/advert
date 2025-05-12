// تعیین آدرس پیش‌فرض برای آیفریم
document.addEventListener('DOMContentLoaded', function() {
    let iframe = document.getElementById('iframe_2');
    iframe.src = "Elevation/s1/1.html";  // آدرس پیش‌فرض
});

// تغییر آدرس آیفریم با کلیک روی دکمه‌ها
function openTab(iframeId, tabIndex) {
    let iframe = document.getElementById(iframeId);
    if (iframeId === "iframe_2") {
        let urls1 = [
            "Elevation/s1/1.html", 
            "Elevation/s2/2.html", 
            "Elevation/s3/3.html",
            "Elevation/s4/4.html",
            "Elevation/s5/5.html"
        ];
        iframe.src = urls1[tabIndex];  // تغییر آدرس آیفریم
    } 
}
