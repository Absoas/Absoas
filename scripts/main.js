var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Cloud Service<br>2018-1';
function getIdPw() {
    var id = prompt('ID 입력', '');
    alert(id + '가 로그인함.');
    var passwordSystem = '12345';
    var password = prompt('PW 입력', '');
    if (password === passwordSystem) alert('정상 로그인!');
    else alert('비밀번호 오류');
}

document.querySelector('h1').onclick = function () {
    getIdPw();
}

var myImg = document.querySelector('img');
myImg.onclick = function () {
    var src = myImg.getAttribute('src');
    if (src === 'images/firefox-icon.png')
        myImg.setAttribute('src', 'images/mokwon.png');
    else
        myImg.setAttribute('src', 'images/firefox-icon.png');
}