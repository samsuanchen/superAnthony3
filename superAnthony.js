function drawAnthony(time){
	drawBackground();
	setOrigin([0, 2, -30]);
	rotate([0,1,0], 10*Math.cos(time*9)); // 全景微轉
	
	mvMatrixPush(); // 上半身
		
	rotate([0,1,0], parseInt(rangeVal0.value)+parseInt(amplitude0.value)*Math.sin(time*parseInt(speed0.value))); /*00*/
	cube.draw(.5); // 腰
	translate([0,2,0]);
	cube.draw([1.8,1.8,1.2]); // 胸
	translate([0,2.6,0]);
	cube.draw(1.2); // 頭
	
	mvMatrixPush(); // 右上肢
	
	translate([2.4,-1.2,0]);
	rotate([1,0,0], parseInt(rangeVal5.value)+parseInt(amplitude5.value)*Math.sin(time*parseInt(speed5.value))); /*05*/
	cube.draw(.5); // 右肩
	
	translate([1.2,0,0]);
	rotate([0,0,1], parseInt(rangeVal6.value)+parseInt(amplitude6.value)*Math.sin(time*parseInt(speed6.value))); /*06*/
	cube.draw(.5); // 右臂
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	translate([0,-1.4,0]);
	rotate([1,0,0], parseInt(rangeVal7.value)+parseInt(amplitude7.value)*Math.sin(time*parseInt(speed7.value))); /*07*/
	cube.draw(.5); // 右肘
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	mvMatrixPop(); // 左上肢
	
	translate([-2.4,-1.2,0]);
	rotate([-1,0,0], parseInt(rangeVal12.value)+parseInt(amplitude12.value)*Math.sin(time*parseInt(speed12.value))); /*12*/
	cube.draw(.5); // 左肩
	
	translate([-1.2,0,0]);
	rotate([0,0,-1], parseInt(rangeVal13.value)+parseInt(amplitude13.value)*Math.sin(time*parseInt(speed13.value))); /*13*/
	cube.draw(.5); // 左臂
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	translate([0,-1.4,0]);
	rotate([-1,0,0], parseInt(rangeVal14.value)+parseInt(amplitude14.value)*Math.sin(time*parseInt(speed14.value))); /*14*/
	cube.draw(.5); // 左肘
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	mvMatrixPop(); // 下半身
	
	translate([-.5,-1.8,0]);
	cube.draw(1); // 股
	translate([1,0,0]);
	cube.draw(1); // 股
	
	mvMatrixPush(); // 右下肢
	
	translate([1.7,-.3,0]);
	rotate([0,0,1], parseInt(rangeVal4.value)+parseInt(amplitude4.value)*Math.sin(time*parseInt(speed4.value))); /*5*/
	cube.draw(.5); // 右跨
	
	translate([0,-1.2,0]);
	rotate([1,0,0], parseInt(rangeVal3.value)+parseInt(amplitude3.value)*Math.sin(time*parseInt(speed3.value))); /*06*/
	cube.draw(.5); // 右腿
	translate([0,-1.4,0]);
	cube.draw(.7);

	translate([0,-1.4,0]);
	rotate([1,0,0], parseInt(rangeVal2.value)+parseInt(amplitude2.value)*Math.sin(time*parseInt(speed2.value))); /*6*/
	cube.draw(.5); // 右腳
	translate([0,-1.4,0]);
	cube.draw(.7);

	translate([0,-1.4,0]);
	rotate([0,0,1], parseInt(rangeVal1.value)+parseInt(amplitude1.value)*Math.sin(time*parseInt(speed1.value))); /*6*/
	cube.draw(.5); // 右裸
	translate([0,-.4,0]);
	cube.draw([1.2,.2,1.2]);
	
	mvMatrixPop(); // 左下肢
	
	translate([-2.7,-.3,0]);
	rotate([0,0,-1], parseInt(rangeVal11.value)+parseInt(amplitude11.value)*Math.sin(time*parseInt(speed11.value))); /*7*/
	cube.draw(.5); // 左跨
	
	translate([0,-1.2,0]);
	rotate([-1,0,0], parseInt(rangeVal10.value)+parseInt(amplitude10.value)*Math.sin(time*parseInt(speed10.value))); /*06*/
	cube.draw(.5); // 左腿
	translate([0,-1.4,0]);
	cube.draw(.7);
	
	translate([0,-1.4,0]);
	rotate([-1,0,0], parseInt(rangeVal9.value)+parseInt(amplitude9.value)*Math.sin(time*parseInt(speed9.value))); /*8*/
	cube.draw(.5); // 左腳
	translate([0,-1.4,0]);
	cube.draw(.7);	
	translate([0,-1.4,0]);
	rotate([0,0,-1], parseInt(rangeVal8.value)+parseInt(amplitude8.value)*Math.sin(time*parseInt(speed8.value))); /*8*/
	cube.draw(.5); // 左裸
	translate([0,-.4,0]);
	cube.draw([1.2,.2,1.2]);
}
///////////////// event handlers /////////////////
function onScriptKeyUp(){
	if(event.key == "Enter") onEvalClick();
}
function onEvalClick(){
	f.eval(input.value);
}
function autoRun(){
	if(bAutoRun.innerHTML == "autoRun") bAutoRun.innerHTML="stopRun";
	else								bAutoRun.innerHTML="autoRun";
}
function changeVal0(){
	if(range0.value != rangeVal0.value) range0.value=rangeVal0.value;
	drawScene();
}
function changeRange0(){
	if(rangeVal0.value != range0.value) rangeVal0.value = range0.value;
	drawScene();
}
function changeVal1(){
	if(range1.value != rangeVal1.value) range1.value = rangeVal1.value;
	drawScene();
}
function changeRange1(){
	if(rangeVal1.value != range1.value) rangeVal1.value = range1.value;
	drawScene();
}
function changeVal2(){
	if(range2.value != rangeVal2.value) range2.value = rangeVal2.value;
	drawScene();
}
function changeRange2(){
	if(rangeVal2.value != range2.value) rangeVal2.value = range2.value;
	drawScene();
}
function changeVal3(){
	if(range3.value != rangeVal3.value) range3.value = rangeVal3.value;
	drawScene();
}
function changeRange3(){
	if(rangeVal3.value != range3.value) rangeVal3.value = range3.value;
	drawScene();
}
function changeVal4(){
	if(range4.value != rangeVal4.value) range4.value = rangeVal4.value;
	drawScene();
}
function changeRange4(){
	if(rangeVal4.value != range4.value) rangeVal4.value = range4.value;
	drawScene();
}
function changeVal5(){
	if(range5.value != rangeVal5.value) range5.value = rangeVal5.value;
	drawScene();
}
function changeRange5(){
	if(rangeVal5.value != range5.value) rangeVal5.value = range5.value;
	drawScene();
}
function changeVal6(){
	if(range6.value != rangeVal6.value) range6.value = rangeVal6.value;
	drawScene();
}
function changeRange6(){
	if(rangeVal6.value != range6.value) rangeVal6.value = range6.value;
	drawScene();
}
function changeVal7(){
	if(range7.value != rangeVal7.value) range7.value = rangeVal7.value;
	drawScene();
}
function changeRange7(){
	if(rangeVal7.value != range7.value) rangeVal7.value = range7.value;
	drawScene();
}
function changeVal8(){
	if(range8.value != rangeVal8.value) range8.value = rangeVal8.value;
	drawScene();
}
function changeRange8(){
	if(rangeVal8.value != range8.value) rangeVal8.value = range8.value;
	drawScene();
}
function changeRange9(){
	if(rangeVal9.value != range9.value) rangeVal9.value = range9.value;
	drawScene();
}
function changeVal9(){
	if(range9.value != rangeVal9.value) range9.value = rangeVal9.value;
	drawScene();
}
function changeRange10(){
	if(rangeVal0.value != range0.value) rangeVal0.value = range0.value;
	drawScene();
}
function changeVal0(){
	if(range0.value != rangeVal0.value) range0.value = rangeVal0.value;
	drawScene();
}
function changeRange11(){
	if(rangeVal11.value != range11.value) rangeVal11.value = range11.value;
	drawScene();
}
function changeVal11(){
	if(range11.value != rangeVal11.value) range11.value = rangeVal11.value;
	drawScene();
}
function changeRange12(){
	if(rangeVal12.value != range12.value) rangeVal12.value = range12.value;
	drawScene();
}
function changeVal12(){
	if(range12.value != rangeVal12.value) range12.value = rangeVal12.value;
	drawScene();
}
function changeRange13(){
	if(rangeVal13.value != range13.value) rangeVal13.value = range13.value;
	drawScene();
}
function changeVal13(){
	if(range13.value != rangeVal13.value) range13.value = rangeVal13.value;
	drawScene();
}
function changeRange14(){
	if(rangeVal14.value != range14.value) rangeVal14.value = range14.value;
	drawScene();
}
function changeVal14(){
	if(range14.value != rangeVal14.value) range14.value = rangeVal14.value;
	drawScene();
}