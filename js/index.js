$(function(){
	var s='';
	for (var i = 0; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			var id=i+'_'+j;
			s+='<div id="'+id+'"class="block"></div>'
		}
	}
	$('#sense').html(s);
	var snack=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	var ss=snack;
	var data={'0_0':true,'0_1':true,'0_2':false};
	// console.log(snack[0].x)
	var huashe=function(){
		for (var i = 0; i < snack.length; i++) {
			$('#'+snack[i].x+'_'+snack[i].y).css({backgroundSize:"29px 29px",backgroundImage:"url(./img/she.jpg)"})
		}	
	}
	huashe();
	var food=function(){
		var x=Math.floor(Math.random()*20);
		var y=Math.floor(Math.random()*20);
		while(data[x+'_'+y]){
			x=Math.floor(Math.random()*20);
			y=Math.floor(Math.random()*20);
		}
		$('#'+x+'_'+y).css({backgroundSize:"29px 29px",backgroundImage:"url(./img/shiwu.jpg)"})
		return {x:x,y:y}
	}
	
	var score=0;
	var ss=$('#score').text("得分:"+score);
	var foods=food();
	var fangxiang=39;
	var move=function(){
		
		var oldtou=snack[snack.length-1];
		if (fangxiang==39) {
			var newtou={x:oldtou.x,y:oldtou.y+1};
		}
		if (fangxiang==37) {
			var newtou={x:oldtou.x,y:oldtou.y-1};
		}
		if (fangxiang==38) {
			var newtou={x:oldtou.x-1,y:oldtou.y};
		}
		if (fangxiang==40) {
			var newtou={x:oldtou.x+1,y:oldtou.y};
		}
		if (newtou.x<0||newtou.y<0||newtou.x>19||newtou.y>19||data[newtou.x+'_'+newtou.y]) {
			alert("game over!!!");
			clearInterval(t);
			var ab=confirm("are you ready？");
			if(ab){
				location.reload();
			}
			else{
				return false;
			}
			return;
		}
		if(newtou.x==foods.x&&newtou.y==foods.y){
			foods=food();
			score+=10;
			ss=$('#score').text("得分:"+score);
		}
		else{
			var weiba=snack.shift();
			delete data[weiba.x+'_'+weiba.y]
			$('#'+weiba.x+'_'+weiba.y).css({backgroundImage: "url(./img/huaban.png)",backgroundSize: "29px 29px"});
			
		}
		
		snack.push(newtou);
		data[newtou.x+'_'+newtou.y]=true;
		$('#'+newtou.x+'_'+newtou.y).css({backgroundImage: "url(./img/she.jpg)",backgroundSize: "29px 29px"});
		
	}
	// var t=setInterval(move,300);
	$(document).keydown(function(e){
		
		if(Math.abs(e.keyCode-fangxiang)==2){//相反方向不能同时操作
			return;
		}
		if(!(e.keyCode>=37&&e.keyCode<=40)){//如果keyCode不是37到40，不继续
			return;
		}
		fangxiang=e.keyCode;
	})

	
	var t;
	$('#zanting').click(function(){
		clearInterval(t);
	})
	$('#kaishi').click(function(){
		
		t=setInterval(move,300);
		
	})
})