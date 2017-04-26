'user strict';
var d = document,
	w = window;
var container_text_font_label = document.querySelectorAll('label');
var container_text_font = document.querySelectorAll('.container_text_font');
for (let i=0;i<container_text_font_label.length;i++) {
	container_text_font_label[i].onclick=function(){
		var length = this.parentElement.children.length;
		for (let j=1;j<length;j++) {
			this.parentElement.children[j].style.color='#000';
		}
		this.style.color='blue';
	}
}

