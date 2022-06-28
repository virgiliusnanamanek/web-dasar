// khusus tombol unduh
function keBawah(){
    document.getElementById("keBawah").classList.toggle("lihat")
}

window.onclick = function(e){
    if(!e.target.matches(".unduh")){
        let keBawahs = document.getElementsByClassName('unduh-list');
        for(let i = 0; i < keBawahs.length; i++){
            let bukaKebawah = keBawahs[i];
            if(bukaKebawah.classList.contains('lihat')){
                bukaKebawah.classList.remove('lihat');
            }
        }
    } 
}