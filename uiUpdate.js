window.ElUpdate = {
    uiAdaUpdateQuiz:o=>`

    <span class="gagalCek" style="margin-top:5px;">
      Terdapat file terbaru di server : Quiz v${dataServer.versi}.html
    </span>

    <a class="adaUpdate"
      href="${serverLink}download.html?file=quiz.html"
      target="_blank">
      Klik untuk download Quiz v${dataServer.versi}.html (320kb)
    </a>

    <span class="gagalCek">
      <a style='color:darkgray' href='${serverLink}versi.js'>*Klik disini</a> untuk melihat apa yang di update
    </span>
    
    `,

    uiNoUpdateQuiz:o=>`
      <span class="gagalCek"style="position:relative; top:15px;">
        Tidak ditemukan ada update. File kamu sudah terbaru.
        <br><a style='color:darkgray' href='${serverLink}versi.js'>*Klik disini</a> untuk melihat riwayat pembaruan
      </span>
      `,
      
};
