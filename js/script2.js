let massa=prompt("введите массу тела:");
if(massa <= 42){
	alert("вы прекрасны!");
}else if(massa > 42 && massa <= 80){
	alert("вы шикарны!");
}else if(massa > 80){
	alert("вы слишком шикарны!");
}

let g = prompt("какая у вас масса тела?");
(g > 80) ? alert("вы слишком шикарны!") : (g > 42 && g <= 80) ? alert("вы шикарны!") : alert("вы прекрасны!");

let mounght=prompt("какой сейчас месяц?");
switch (parseInt(mounght)) {
	case 1:
	case 2:
	case 3:
		alert("первый квартал");
		break;
	case 4:
	case 5:
	case 6:
		alert("второй квартал");
		break;
	case 7:
	case 8:
	case 9:
		alert("третий квартал");
		break;
	case 10:
	case 11:
	case 12:
		alert("четвертый квартал");
		break;
	default:
		alert("месяц введен некорректно");
}

let x = parseInt(prompt("введите число(я прибавлю 1)"));
alert(++x);


let a = 5;
let b = "5";
let c = a == b;
let d = a === b;
alert("a == b " + c + "\na === b " + d);


function Function_Declaration(s,v) {
	let t = s / v;
	alert("время Function_Declaration = " + t);
}
Function_Declaration(1500, 60);

let  Function_Expression = function(s, v){
	let t = s / v;
	alert("время Function_Expression = " + t);
}
Function_Expression(400, 20);

let arrow_function = (s, v) => s / v;
alert("время arrow_function = " + arrow_function(30, 2));
