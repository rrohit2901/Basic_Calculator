function get_ans(){
	var element = document.getElementById("div1");
	if(element.firstChild){
		var child = document.getElementById("ans");
		element.removeChild(child);
	}
	var x = document.getElementById("first").value;
	var y = document.getElementById("second").value;
	var oper = document.getElementById("drop"),value;
	var ans=0;
	console.log(x);
	console.log(y);
	if(isNaN(x) || isNaN(y)){
		alert("Insert integers only!!!");
		return;
	}
	var a=parseInt(x,10);
	var b=parseInt(y,10);
	if(oper.value=="+"){
		ans = a+b;
	}
	else if(oper.value=="-"){
		ans = x-y;
	}
	else if(oper.value=="*"){
		ans = x*y;
	}
	else if(oper.value=="/"){
		ans = x/y;
		if(y==0){
			alert("Can't divide number by 0!!!");
			return;
		}
	}
	var para = document.createElement("p");
	var node = document.createTextNode(ans);
	para.appendChild(node);
	element.appendChild(para);
	para.setAttribute("id","ans");
}