
var typed3 = new Typed('#element', {
    strings: ['Web Developer', 'UI/UX', 'Wordpress Developer'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
});

const home = document.getElementById('home1')
const layanan1 = document.getElementById('layanan1');
const kontak1 = document.getElementById('kontak1');
const navbarItems = document.querySelectorAll('.navbar-nav .nav-link');
const navbar1 = document.getElementById('navbar1');

layanan1.addEventListener("click", function () {
    navbar1.style.backgroundColor = "white";


})
home.addEventListener("click", function () {
    navbar1.style.backgroundColor = "black";

})
kontak1.addEventListener("click", function(){
    navbar1.style.backgroundColor = "black";
})



function sendWhatsAppMessage() {
    var email = document.getElementById('email').value;
    var nama = document.getElementById('nama').value;
    var message = document.getElementById('pesan').value;
    
    // Ganti nomor WhatsApp sesuai kebutuhan Anda
    var nomor_whatsapp = "6285694103101";
    var whatsapp_message = "Hallo, perkenalkan nama saya : " + encodeURIComponent(nama)  + "%0A" + "Dengan Email : " + encodeURIComponent(email)  + "%0A" + " saya ingin memberikan Pesan: " + encodeURIComponent(message);


    // Membangun URL WhatsApp
    var whatsapp_url = "https://wa.me/" + nomor_whatsapp + "?text=" + whatsapp_message;

    // Redirect ke WhatsApp
    window.location.href = whatsapp_url;
}
