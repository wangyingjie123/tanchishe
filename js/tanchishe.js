	$(function(){
	// 游戏开始的
		
	 $('.anniu').on('click',function(){
	 	$('.start').addClass('start1')
	 
	    
	 })
	 $('.start').on('click',function(){
	 	$('.start').removeClass('start1');
	 	$('.beijing').animate({width:400,height:400,opacity:1});
	 	$('.jishi').animate({opacity:1});
	 	$('.flag').animate({opacity:1});
	 	$('.zhanting').animate({opacity:1,display:'block'})
	 	$('.anniu').css({display:'none'})
	 	$('.flag').css({display:'block'});
	 })
	/* var min=0;
	 var num=0;
	 var h;
	 function time(){
	 	clearInterval(h)
	 	
	 h=setInterval(function aa(){
	 if(min==59){
	 num+=Math.floor(min/59);	
	 	min=-1;
	 }

	 min+=1;

	 if(min==60){
	 	min=00
	 }
	 console.log(num)
	 $('.jishi').find('span').text(num+':'+min)
	},1000)
	 
	 }*/

	 

	//背景的布置
	for(var i=0;i<20;i++){
		for(var j=0;j<20;j++){
			$('<div>').addClass('shelu').attr('id',i+'-'+j).appendTo('.beijing')
		}
	}
	//蛇的初始化
	var snake=[
	   {x:0,y:0},
	   {x:0,y:1},
	   {x:0,y:2}
	]
	var dict={
		'0-0':true,
		'0-1':true,
		'0-2':true
	}
	var zhuanghua=function(obj){
	   return $('#'+obj.x+'-'+obj.y)
	}
	for(var i=0;i<snake.length;i++){
		zhuanghua(snake[i]).addClass('snake')
	}
	var food=function(){
		var a=Math.floor(Math.random()*19);
		var b=Math.floor(Math.random()*19);
	 if(dict[a+'-'+b]){
	 	a=Math.floor(Math.random()*19);
	 	b=Math.floor(Math.random()*19);
	 }
		zhuanghua({x:a,y:b}).addClass('food')
	    return {x:a,y:b};
	}
	var food1=food();

	var fangxiang='you';
	var move=function(){
		var oldtou=snake[snake.length-1];
		if(fangxiang=='zuo'){
	    var newtou={x:oldtou.x,y:oldtou.y-1};
	    
		}else if(fangxiang=='you'){
	    var newtou={x:oldtou.x,y:oldtou.y+1};
	    
		}else if(fangxiang=='shang'){
	    var newtou={x:oldtou.x-1,y:oldtou.y};
	   
		}else if(fangxiang=='xia'){
	    var newtou={x:oldtou.x+1,y:oldtou.y};
	   
		}
        
		$('#'+newtou.x+'-'+parseInt(newtou.y+1)).animate({left:5}).delay(20).animate({left:0})
		$('#'+newtou.x+'-'+parseInt(newtou.y-1)).animate({left:-5}).delay(20).animate({left:0})
		$('#'+(newtou.x+1)+'-'+parseInt(newtou.y)).animate({top:5}).delay(20).animate({top:0})
		$('#'+(newtou.x-1)+'-'+parseInt(newtou.y)).animate({top:-5}).delay(20).animate({top:0})



		if(newtou.x<0||newtou.x>19||newtou.y<0||newtou.y>19||dict[newtou.x+'-'+newtou.y]){
		    var jiesu=stop();
		    clearInterval(h)
		 $('.end').addClass('donghua1')
	       return;
		}
		 zhuanghua(food1).toggleClass('food1')
		if(newtou.x==food1.x&&newtou.y==food1.y){
	       zhuanghua(food1).removeClass('food');
	       food1=food();
	     $('#'+(food1.x-1)+'-'+parseInt(food1.y)).animate({top:-5}).delay(20).animate({top:0})
		 $('#'+(food1.x+1)+'-'+parseInt(food1.y)).animate({top:5}).delay(20).animate({top:0})
		 $('#'+(food1.x)+'-'+parseInt(food1.y+1)).animate({left:5}).delay(20).animate({left:0})
	     $('#'+(food1.x)+'-'+parseInt(food1.y-1)).animate({left:-5}).delay(20).animate({left:0})	

		}else{
	       var weiba=snake.shift();
		  zhuanghua(weiba).removeClass('snake');
		 delete dict[weiba.x+'-'+weiba.y];
		}
		
		
		snake.push(newtou);
		dict[newtou.x+'-'+newtou.y]=true;
		zhuanghua(newtou).addClass('snake');
		

	 
	}


	$(document).on('keyup',function(e){
		var biao={
			'zuo':37,
			'shang':38,
			'you':39,
			'xia':40
		}
		if(Math.abs(e.keyCode-biao[fangxiang])==2){
			return;
		}
		if(e.keyCode==37){
	     fangxiang='zuo';
		}else if(e.keyCode==38){
	      fangxiang='shang';
		}else if(e.keyCode==39){
	      fangxiang='you';
		}else if(e.keyCode==40){
	      fangxiang='xia';
		}
	})
	var t;
	var tritime=function(){
		clearInterval(t)
		 t=setInterval(move,200)
	}
	var stop=function(){
		clearInterval(t)
	}
	$('.flag').on('click',function(){
		var kaishi=tritime();
		time();


	})
	$('.zhanting').on('click',function(){
		clearInterval(t)
		clearInterval(h)
	})  
	 $('.end').find('span').on('click',function(){
	 	 location.reload();
	 }) 

	})
 var miao=0;
 var fen=0;
 var h;
 var time=function(){
 	clearInterval(h)
  h=setInterval(function(){
   miao++;
    
   if(miao==60){
   fen++;
    if(fen<10){
     $('.jishi .fen').text("0"+fen)
    }else{
      $('.jishi .fen').text(fen)
    }
    
    miao=0;
   }
   if( miao<10){
   $('.jishi .miao').text('0'+miao);
   }else{
     $('.jishi .miao').text(miao);
   }
  
    },1000)


 }