'user strict';
var d = document,
	w = window;
var container_text_font_label = document.getElementsByTagName('label');
var container_text_font = document.getElementsByClassName("container_text_font");
var container_btn = document.getElementsByTagName('button')[0];
var container_form= document.getElementsByTagName('form')[0];
var type = document.getElementById('type');
var teacher = document.getElementById('teacher');
var boo = false;
var Date={
	"web":[
		"冯骏",
		"张玲",
		"张天",
		"柴冰倩"
	],
	"java":[
		"李洪涛",
		"杨志军"
	],
	"嵌入式":[
		"李涛",
		"冯婷"
	]
};
//点击变色
for (var i=0;i<container_text_font_label.length;i++) {
	container_text_font_label[i].onclick=function(){
		var length = this.parentElement.children.length;
		for (var j=1;j<length;j++) {
			this.parentElement.children[j].style.color='#000';
		}
		this.style.color='blue';
	}
}
//联动
for (var i in Date) {
	var Option=document.createElement("option");
	Option.innerHTML=i;
	type.appendChild(Option);
}
function init(obj){   
	obj.innerText=" ";
	var Option=document.createElement("option");
	obj.appendChild(Option);
	Option.innerHTML="请选择";
}
type.onchange=function(){
	init(teacher);
	for (var j in Date[this.value]) {
		var Option=document.createElement("option");
		Option.innerHTML=Date[this.value][j];
		teacher.appendChild(Option);
	}
}
//点击提交判断
container_btn.onclick=function(){
	var ipts = document.getElementsByTagName('input');
	var ipt = [];
	for (var x=0;x<ipts.length;x++) {
		if(ipts[x].type == 'radio'){
			ipt.push(ipts[x]);
		}
	}
	var ipt_length = ipt.length;
	var ipt_arr = [];
	for (var i=0;i<ipt_length;i++) {
		if(ipt[i].checked){
			ipt_arr.push(ipt[i]);
		}
	}
	if(ipt_arr.length == 10){
		boo = true;
		container_form.submit();
	}
}
container_form.onsubmit=function(){
	return boo;
}

