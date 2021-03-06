// superAnthony.js @ https://github.com/samsuanchen/superAnthony3
function drawAnthony(time){
	drawBackground();
	setOrigin([0, 2, -30]);
	var vSpeed = parseInt(iSpeed.value);
	
	var vBgn = parseInt(iValBgn15.value), vEnd=parseInt(iValEnd15.value);
	rotateY(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); // 轉舞台
	
	mvMatrixPush(); // 上半身
	var vBgn = parseInt(iValBgn0.value), vEnd=parseInt(iValEnd0.value);
	rotateY(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*00*/
	cube.draw(.5); // 腰
	translate([0,1.6,0]);
	cube.draw([1.8,1.8,1.2]); // 胸
	translate([0,2.8,0]);
	cube.draw(.9); // 頭
	
	mvMatrixPush(); // 右上肢
	
	translate([2.4,-1.4,0]);
	var vBgn = parseInt(iValBgn5.value), vEnd=parseInt(iValEnd5.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*05*/
	cube.draw(.5); // 右肩
	
	translate([1.2,0,0]);
	var vBgn = parseInt(iValBgn6.value), vEnd=parseInt(iValEnd6.value);
	rotateZ(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*06*/
	cube.draw(.5); // 右臂
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	translate([0,-1.4,0]);
	var vBgn = parseInt(iValBgn7.value), vEnd=parseInt(iValEnd7.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*07*/
	cube.draw(.5); // 右肘
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	mvMatrixPop(); // 左上肢
	
	translate([-2.4,-1.4,0]);
	var vBgn = parseInt(iValBgn12.value), vEnd=parseInt(iValEnd12.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*12*/
	cube.draw(.5); // 左肩
	
	translate([-1.2,0,0]);
	var vBgn = parseInt(iValBgn13.value), vEnd=parseInt(iValEnd13.value);
	rotateZ(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*13*/
	cube.draw(.5); // 左臂
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	translate([0,-1.4,0]);
	var vBgn = parseInt(iValBgn14.value), vEnd=parseInt(iValEnd14.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*14*/
	cube.draw(.5); // 左肘
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	mvMatrixPop(); // 下半身
	
	translate([-.5,-1.8,0]);
	cube.draw(1); // 股
	translate([1,0,0]);
	cube.draw(1); // 股
	
	mvMatrixPush(); // 右下肢
	
	translate([1.7,0,0]);
	var vBgn = parseInt(iValBgn4.value), vEnd=parseInt(iValEnd4.value);
	rotateZ(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*4*/
	cube.draw(.5); // 右跨
	
	translate([0,-.8,0]);
	var vBgn = parseInt(iValBgn3.value), vEnd=parseInt(iValEnd3.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*03*/
	cube.draw(.5); // 右腿
	translate([0,-1.4,0]);
	cube.draw(.7);

	translate([0,-1.4,0]);
	var vBgn = parseInt(iValBgn2.value), vEnd=parseInt(iValEnd2.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*2*/
	cube.draw(.5); // 右腳
	translate([0,-1.4,0]);
	cube.draw(.7);

	translate([0,-1.4,0]);
	var vBgn = parseInt(iValBgn1.value), vEnd=parseInt(iValEnd1.value);
	rotateZ(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*1*/
	cube.draw(.5); // 右裸
	translate([0,-.4,0]);
	cube.draw([1.2,.2,1.2]);
	
	mvMatrixPop(); // 左下肢
	
	translate([-2.7,0,0]);
	var vBgn = parseInt(iValBgn11.value), vEnd=parseInt(iValEnd11.value);
	rotateZ(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*11*/
	cube.draw(.5); // 左跨
	
	translate([0,-.8,0]);
	var vBgn = parseInt(iValBgn10.value), vEnd=parseInt(iValEnd10.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*10*/
	cube.draw(.5); // 左腿
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	translate([0,-1.4,0]);
	var vBgn = parseInt(iValBgn9.value), vEnd=parseInt(iValEnd9.value);
	rotateX(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*9*/
	cube.draw(.5); // 左腳
	translate([0,-1.4,0]);
	cube.draw(.7);	
	translate([0,-1.4,0]);
	var vBgn = parseInt(iValBgn8.value), vEnd=parseInt(iValEnd8.value);
	rotateZ(vBgn+(vEnd-vBgn)*(1-Math.cos(time*vSpeed))/2); /*8*/
	cube.draw(.5); // 左裸
	translate([0,-.4,0]);
	cube.draw([1.2,.2,1.2]);
}
var lastTime = 0;
var delayTime = 0;
function drawScene() {
	var time = new Date().getTime() / 1000;
	delayTime = time - lastTime;
	if(bAuto.innerHTML == "自動"){
		return;
	}
	lastTime = time; 
	time -= delayTime;
	drawAnthony(time);
}
function animate(){
	requestAnimFrame(animate); // the function requestAnimFrame is in webgl-utils.js
	drawScene()
}