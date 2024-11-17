document.addEventListener('DOMContentLoaded', function() {
  function checkPassword() {
      const password = document.getElementById('password-input').value;
      const encryptedPassword = "b66e006887ffc2f80406dab915ecddb2"; // 비밀번호의 MD5 해시

      if (CryptoJS.MD5(password).toString().toLowerCase() === encryptedPassword) {
          document.getElementById('protected-content').style.display = 'block';
          document.getElementById('password-prompt').style.display = 'none';
      } else {
          document.getElementById('error-message').style.display = 'block';
      }
  }

  // 엔터 키로 비밀번호 입력
  document.getElementById('password-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          checkPassword();
      }
  });

  // 버튼 클릭으로 비밀번호 확인
  document.getElementById('password-submit').addEventListener('click', checkPassword);
});
