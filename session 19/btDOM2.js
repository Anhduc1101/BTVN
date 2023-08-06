// 1. Mục tiêu

// Giới thiệu các phương thức select HTML element

// Giới thiệu và làm quen 1 số phương thức cơ bản để thao tác với các HTML element

// Thực hành với phương thức setInterval(), clearInterval(), setTimeout(), clearTimeout()

// 2. Mô tả

// Tạo ra một đồng hồ số hiển thị thời gian: Giờ - Phút - Giây









// let gio = document.getElementById("gio")
// let phut = document.getElementById("phut")
// let giay = document.getElementById("giay")

// let thoiGian;
// // console.log(thoiGian.getHours());
// // console.log(thoiGian.getMinutes());
// // console.log(thoiGian.getSeconds());


// // Yêu cầu đồng hồ chạy với thời gian thực
// let idClock = setInterval(() => {
//     let thoiGian = new Date();
//     gio.innerHTML = thoiGian.getHours();
//     phut.innerHTML = thoiGian.getMinutes();
//     giay.innerHTML = thoiGian.getSeconds();
// }, 1000);

// // Sau mỗi 5 phút sẽ bật một bài hát
// let idChao = setInterval(() => {
//     console.log("xin chao");
// }, 10000);

// // Sau mỗi 10 phút sẽ đổi ảnh nền
// let idMau = setInterval(() => {
//     let mau = Math.floor(Math.random() * 999);
//     document.getElementById("anh_nen_1").style.background = `#${mau}`
// }, 2000);

// function stopClock() {
//     clearInterval(idClock);
// }

// function stopChao() {
//     clearInterval(idChao);
// }

// function stopChao() {
//     clearInterval(idMau);
// }

//         =========================================           //


let gio = document.getElementById("gio2")
let phut = document.getElementById("phut2")
let giay = document.getElementById("giay2")
let diem = document.getElementById("diem")

let gioBanDau = 0;
let phutBanDau = 0;
let giayBanDau = 1;
let diemBanDau = 0;

gio.innerHTML = gioBanDau;
phut.innerHTML = phutBanDau;
giay.innerHTML = giayBanDau;

let id

id = setInterval(() => {

    if (giayBanDau == 0) {
        giayBanDau = 59
        phutBanDau--
    } else {
        giayBanDau--
    }

    if (giayBanDau == 0 && phutBanDau == 0 && gioBanDau == 0) {
        clearInterval(id)
    }

    gio.innerHTML = gioBanDau;
    phut.innerHTML = phutBanDau;
    giay.innerHTML = giayBanDau;
}, 1000)



let ga = document.getElementById("ga")

ga.addEventListener("mouseover", () => {
    ga.style.border = `1px solid blue`
})

ga.addEventListener("mouseout", () => {
    ga.style.border = `1px solid black`
})

ga.addEventListener("click", () => {
    diemBanDau += 10
    diem.innerHTML = diemBanDau
    ga.style.display = "none"
})

let kichThuoc
setInterval(() => {
    ga.style.display = "block"
}, 3000)