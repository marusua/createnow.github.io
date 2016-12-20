var login_field = 'name' // ID поля ввода логина
var password_field = 'password' // ID поля ввода пароля
var login_text = 'Логин' // Текст в поле ввода логина
var password_text = 'Пароль' // Текст в поле ввода пароля
var password_name = 'password' // Имя поля ввода пароля, которое передается скрипту
var field_size = 8 // Длина поля ввода пароля

/*
Преобразует поле типа password в text
*/
function istext(password){
var form = password.parentNode;
var elem = document.createElement('input');
var text = password.value
form.removeChild(password);
form.appendChild(elem);
elem.type='text';
if (text != '') elem.value = text; else elem.value=password_text;;
elem.size=field_size;
elem.name = password_name;
elem.id = password_field;
elem.onfocus=focus;
elem.onblur=blur;
}

/*
Преобразует поле типа text в password
*/
function ispasswd(password){
delete form
delete elem
var text = password.value
var form = password.parentNode;
var elem = document.createElement('input');
elem.size=field_size;
elem.type='password';
if (text != password_text) elem.value = text; else elem,value = '';
form.appendChild(elem);
var form = elem.parentNode;
form.removeChild(password);
elem.name = password_name;
elem.onblur=blur;
setTimeout(elem.focus(), 1000); // IE по-простому не может
elem.onfocus=focus;
elem.id = password_field;

}
/* Вызывается при получении фокуса ввода */
function focus(){
var text = ''
if (this.name == password_name){
ispasswd(this);
} else {
text=login_text;
if (this.value==text){this.value=''};
}
}
/* Вызывается при потере фокуса ввода */
function blur(){
var text = ''
if (this.name == password_name) {
if (this.value == '') istext(this);
}else{
text=login_text;
if (this.value==''){this.value=text};
}
}

function main(){
var password = document.getElementById(password_field);
var name = document.getElementById(login_field);
istext(password);
name.onfocus=focus;
name.onblur=blur;
}

window.onload = main