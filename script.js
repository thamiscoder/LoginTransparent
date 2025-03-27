function login() {
    const inputs = document.querySelectorAll('.input-box input');
    const userName = inputs[0].value;
    const passWord = inputs[1].value;

    alert(`Your Username is ${userName} and your Password is ${passWord}`);
}