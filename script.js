// TANGGAL DAN WAKTU
let waktuDiv = document.querySelector('#waktu');

setInterval(() => {
    let sekarang = new Date();
    let tanggal = sekarang.getDate();
    let bln = sekarang.getMonth();
    let tahun = sekarang.getFullYear();
    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
    const namaBulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

    let hari = namaHari[sekarang.getDay()];
    let bulan = namaBulan[bln];

    tanggal = (tanggal <= 9 ? '0' + tanggal : tanggal);
    jam = (jam <= 9 ? '0' + jam : jam);
    menit = (menit <= 9 ? '0' + menit : menit);
    detik = (detik <= 9 ? '0' + detik : detik);

    waktuDiv.innerHTML = `${hari}, ${tanggal} ${bulan} ${tahun} - ${jam}:${menit}:${detik} WITA`;
}, 1000);

// WAKTU SHOLAT
const renderJadwalSholat = () => {
    let jadwalSholat = document.querySelector('#jadwal-sholat-hari');
    let waktuSholatCard = "";
    var waktuSholat = [
        {
            waktu: "Subuh",
            jam: "04:29"
        },
        {
            waktu: "Terbit",
            jam: "05:49"
        },
        {
            waktu: "Dzuhur",
            jam: "11:53"
        },
        {
            waktu: "Ashar",
            jam: "15:14"
        },
        {
            waktu: "Maghrib",
            jam: "17:57"
        },
        {
            waktu: "Isya",
            jam: "19:09"
        },
    ]
    
    waktuSholat.forEach(function(ws){
        waktuSholatCard += `<div class="waktu-sholat" id="${ws.waktu.toLocaleLowerCase()}">
                        <span class="nama-sholat">${ws.waktu.toUpperCase()}</span>
                        <span class="jam-sholat">${ws.jam}</span>
                    </div>`;
    });

    jadwalSholat.innerHTML += waktuSholatCard;
}

// MENU
const renderMenu = () => {
    let navbar = document.querySelector('.navbar');
    let navbarLink = "";
    var menu = [
        {
            nama: "Beranda",
            link: "index.html"
        },
        {
            nama: "Tentang",
            link: "tentang.html"
        },
        {
            nama: "Agenda",
            link: "agenda.html"
        },
        {
            nama: "Jadwal Jumat",
            link: "jadwal-jumat.html"
        },
        {
            nama: "Tausyiah",
            link: "tausyiah.html"
        },
        {
            nama: "Laporan",
            link: "laporan.html"
        },
        {
            nama: "Lainnya",
            link: "lainnya.html"
        },
        {
            nama: "Download",
            link: "download.html"
        },
    ]
    
    menu.forEach(function(mn){
        navbarLink += `<a href="${mn.link}" class="navbar-link">${mn.nama}</a>`;
    });

    navbar.innerHTML += navbarLink;
}

renderJadwalSholat();
renderMenu();