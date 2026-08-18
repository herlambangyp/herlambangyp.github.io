window.dataServer = {

    versi: "4.2.1",
    changeLog: `
            - Memperbarui logika live writing. Sekarang lebih interaktif
            - Memperbarui tampilan Ui menulis kanji
            - Membuat canvas lebih besar menyesuaikan ukuran layar secara dinamis.
              Sekarang layout menulis membesar secara dinamis di mini-tablet, tablet, 
              desktop touchscreen dan berbagai layar besar lainya

            - Memperbaiki navigasi tombol kembali yang masih terkesan seperti "web-page"
              Sekarang tombol kembali langsung menuju ke home, lalu tekan kembali sekali lagi untuk keluar. 
              Ini mencegah stuck tidak bisa keluar

            - Optimasi server download. Sekarang "download" membuka web halaman download, alih-alih 
              menggunakan background download procesing yang sangat berat

            - Memperbaiki bug "minimal pilih 1 kek" yang kadang muncul di tempat yang salah

            - Optimasi quiz engine agar tidak berat di beberapa perangkat low-end
              saat quiz menulis / live writing

            - ongoing:
              1. Input text agar user bisa memasukan sendiri huruf kana/kanji untuk berlatih
                 menulis (live writing). (Ui sedang aku desain)

            `,

    changeLogVersiLama:`

        3.2 
            - Menambahkan pendeteksi "tombol kembali" bawaan android atau "back" browser
            - Sekarang navigasi halaman quiz bisa dilakukan dengan tombol kembali bawaan
              atau fitur back browser
            - Ui "Kembali ke home" tetap dipertahankan untuk device yang
              tidak memiliki tombol kembali bawaan

        3.1.13 
            - Memperbarui UI quiz matematika IM, agar lebih persis seperti kertas ujian

        3.1.12b 
            - Memperbaiki bug tombol keluar atau kembali ke home yang tidak bisa,
              karena entah kenapa, user selalu diminta memilih setidaknya 1 bab.
              Sekarang sudah normal

        3.1.12a 
            - Memperbaiki bug notifikasi batasan jumlah soal yang muncul di tempat yang salah

        3.1.12 
            - Menambahkan Ui baru untuk menentukan seperti apa bentuk soal di beberapa mode
            - Menghapus tombol reverse mode karena fungsinya yang sudah digantikan 
              Ui baru
            - Mengubah beberapa warna tombol agar lebih seragam
            - Memperbaiki bug, jumlah soal yang tidak sesuai (selalu kurang 1, tetapi quiz
              tiba-tiba sudah selesai) 

        3.1.11 
            - Menambahkan info berapa jumlah soal yang akan dipakai di mode artikan dan baca kanji
            - Menambahkan batasan jumlah soal yang dipakai di quiz. 
              Sekarang user bisa mengatur jumlah soal yang ingin dipakai di quiz, 
              agar tidak terlalu banyak soal yang harus dijawab
            - Memperbaiki bug judul mode yang salah saat di mode reversed  

        3.1.10a 
            - Memperbaiki bug ikon panah keatas tidak muncul di mobile
            - Menambahkan toast sebagai pesan eror, alih-alih alerts web yang kurang stabil   

        3.1.10
            - Menambahkan tabel kotoba buku Minna no Nihonggo
            - Menambahkan teks tombol untuk melihat changelog. Sekarang tidak perlu ada update untuk
              melihat changelog
            - Menghapus footnote di area tabel
            - Menambahkan tombol "back to top" agar memudahkan navigasi scroll ke atas
            - Perbaikan beberapa bug typo nama judul di beberapa mode    

        3.1.9
            - Menambahkan kotoba minna sampai bab 50
            - Menambahkan teks tombol untuk melihat apa yang diupdate (dibawah tombol update). 
              Agar user bisa membaca changelog

        3.1.8
            - Anchor point versi online dibuat`,

            
    versiDataset:`hrfJpnV1-set_2.txt`
};
