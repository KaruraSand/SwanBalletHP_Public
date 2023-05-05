/**
 * フォントサイズを調整する関数
 */
function adjust_font_size() {
    let td = document.querySelectorAll(".scroll_table td"); // scroll_tableクラスのtd要素を取得
    let table = document.getElementById("scroll_table_id"); // scroll_table_idのtable要素を取得
    let table_width = table.clientWidth; // table要素の幅を取得
    //console.log(table_width);
    for (let i = 0; i < td.length; i++) {
        td[i].style.fontSize = `${Math.max(10 ,Math.floor(table_width / 8 / 7))}px`; // 適切なフォntサイズを設定(7は文字数，8は列数)，10以下は小さすぎるため10以下の場合は10に設定
    }
}


window.onload = function() {
    adjust_font_size(); // ウィンドウがロードされた時にフォントサイズを調整
    window.addEventListener("resize", adjust_font_size); // ウィンドウがリサイズされた時にフォントサイズを調整
};