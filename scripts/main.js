
var id;
var password;

function SetIdPw(){
   id = prompt('당신이 가입할 ID 입력', '');
   password = prompt(id+'가 사용할 초기 비번 입력', '');

   localStorage.setItem('id',id);
   localStorage.setItem('password',password);
}

function SetNull(){
  localStorage.setItem('id',null);
  localStorage.setItem('password',null);
}

SetNull();
SetIdPw();

document.querySelector('html').onclick = function() {

  var gId = prompt('가입한 ID입력', '');
  var  gPw = prompt(gId+'로 로그인 하시겠습니까?? 로그인 하시려면 비밀번호를 입력하세요.', '의 비밀번호 입력');

  if(password == gPw){
    alert('로그인 되었습니다.');
    var myHeading = document.querySelector('h1');
    myHeading.innerHTML = gId + '<br>Homepage';
  
  }else{
    alert('패스워드가 틀렸습니다.');
  }
}
