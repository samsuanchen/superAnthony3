// eventHandlers.js @ https://github.com/samsuanchen/superAnthony3
function save(key){
	key = key || iFile.value;
	var inputs = document.getElementsByClassName("number");
	var json={};for(i=0;i<inputs.length;i++){e=inputs[i];json[e.id]=e.value};
	localStorage.setItem("anthony_"+key, JSON.stringify(json));
	preloadAction();
}
function load(key){
	if( ! key ) key = iFile.value;
	else if( iFile.value != key ) iFile.value = key
	key = key || iFile.value;
	var json = JSON.parse(localStorage.getItem("anthony_"+key));
	Object.keys(json).forEach(function(id){
		eval(id+'.value='+json[id]);
	});
}
function onScriptPasted(){
	setTimeout( function(){ // 兩個以上 (含兩個) 空白, 第一個自動替換為換行
		f.eval(input.value.replace(/ ( +)/g,function(_,m){return "\n"+m;}));
		input.value = "";
	}, 0)
}
function onScriptKeyUp(){
	if(event.key == "Enter") onEvalClick();
}
function onEvalClick(){
	f.eval(input.value);
	input.value = "";
}
function toAuto(){
	if(bAuto.innerHTML == "自動") bAuto.innerHTML = "暫停";
	else						  bAuto.innerHTML = "自動";
}
function incVal(){
	var incElement = event.path[0], m = incElement.id.match(/((Bgn|End)\d+)$/);
	if( !m ) return;
	var valElement = document.getElementById('iVal' + m[0]);
	valElement.value = parseInt(valElement.value) + parseInt(iDelta.value);
}
function decVal(){
	var incElement = event.path[0], m = incElement.id.match(/((Bgn|End)\d+)$/);
	if( !m ) return;
	var valElement = document.getElementById('iVal' + m[0]);
	valElement.value = parseInt(valElement.value) - parseInt(iDelta.value);
}
function toChangeVal(){
	if(bAuto.innerHTML != "自動") return;
	var curElement = event.path[0], m = curElement.id.match(/(Bgn|End)\d+$/);
	if( !m ) return;
	drawAnthony(m[1]=="Bgn"?0:180);
}
function toBgn(){
	bAuto.innerHTML = "自動";
	drawAnthony(0/parseInt(iSpeed.value));
}
function toEnd(){
	bAuto.innerHTML = "自動";
	drawAnthony(180/parseInt(iSpeed.value));
}