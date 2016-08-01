var oContainer = document.getElementById('container');
var oTab = document.getElementById('tab');
var aLi = oTab.getElementsByTagName('li');
var oContent = document.getElementById('content');
var aImg = oContent.getElementsByTagName('img');
var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');	
var index = 0;	
	for(var i=0; i<aLi.length; i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			index = this.index;
			switchImg( this.index );
		};
	}

	function switchImg(idx){
		for(var i=0; i<aLi.length; i++){
			aLi[i].className = "";
			aImg[i].className = "";
		}
		// elem.className = "selected";
		aLi[idx].className = 'selected';
		aImg[idx].className = 'selected';
	}

	oPrev.onclick = function(){
		index--;
		if(index < 0){
			index = aLi.length - 1;
		}
		switchImg( index );
	};
	oNext.onclick = function(){
		index++;
		if(index > aLi.length - 1){
			index = 0;
		}
		switchImg( index );
	};

	var timer = setInterval(function(){
		oNext.onclick();
	}, 2000);

	oContainer.onmouseover = function(){
		clearInterval(timer);
	};

	oContainer.onmouseout = function(){
		timer = setInterval(function(){
			oNext.onclick();
		}, 2000);
	};