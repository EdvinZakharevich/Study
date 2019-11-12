let str = "Здесь что-то написано";
document.write(str, "</br>");
document.write("Кол-во слов в предложении: ", str.split(" ").length, "</br>");
document.write("Кол-во букв в предложении: ", str.length - str.split(" ").length +1, "</br>");

document.write("URL: ", document.URL,"</br>");
document.write("Имя протокола: ", document.location.protocol,"</br>");
document.write("Имя файла: ", document.location.pathname.split('.')[0],"</br>");
document.write("Расширение: ", document.location.pathname.split('.')[1],"</br>");

let strGET = document.location.search.replace( '?', '');
document.write("Подстрока параметров: ", strGET,"</br>");


let abc = "Anchor +1";
document.write("Новый анкор: ", abc.anchor('ban'), '<br>');
document.write("Новый анкор2: ", abc.anchor('ban2'), '<br>');

document.write('<a href="http://ifmo.ru/ru">Сайт ИТМО</a><br>')
document.write('<a href="https://www.youtube.com/watch?v=87De1CW32nY">Крутой клип</a><br>')

document.write('<img src="https://media.gettyimages.com/photos/andean-cock-of-the-rock-picture-id186891548?s=2048x2048" style="width: 20%" id="new">')
document.write('<img src="https://media.gettyimages.com/photos/steel-worker-cleaning-large-ladle-in-an-industrial-foundry-picture-id180404139?s=2048x2048" style="width: 30%; height: 150px" id="new2"><br>')

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');
document.write('id первой ссылки: ', document.links[0].id,'<br>');
document.write('Название документа: ', document.title,'<br>');


forms = document.getElementsByTagName("form");

document.write("Even forms = ");
for (i = 0; i < forms.length; i++) {
	if (((i + 1) % 2) == 0) {
		document.write(forms[i].getAttribute('name'), ", ");
	}
}



function onClickButton(j) {
	for (i = 0; i < forms[j].childNodes.length; i++) {
		if ((forms[j].childNodes[i].tagName == "BUTTON") && (forms[j].childNodes[i].innerHTML == "Show the form name")) {
			alert(forms[j].childNodes[i].innerHTML);
			break;
		}
	}
	return false;
}
function formID (j) {
	alert (forms[j].getAttribute('id')); 
	return false;
}
function reset (j) {
	forms[j].reset();
}
function quantityInputs(j) {
	let qInputs = 0;
	for (i = 0; i < forms[j].childNodes.length; i++) {
		if (forms[j].childNodes[i].tagName == "INPUT") {
			qInputs++;
		}
	}
	alert (qInputs);
	return false; 
}