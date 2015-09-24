// data 	: 2015-09-13
// author	: zhe13
// email	: wutianzhe123@gmail.com
// name		: js barrage

$(document).ready(function(){
    
    var time = getTime();
	console.log(time);
    
	// css type

    $("#website").height( $(window).height() );
    $(".mask").height( $(window).height() );


	$(".menuHandle").mouseover(function(){
        $(".line1").addClass("OneHover");
        $(".line3").addClass("ThreeHover");
    });

    $(".menuHandle").mouseout(function(){
        $(".line1").removeClass("OneHover");
        $(".line3").removeClass("ThreeHover");
    });

    var b = true;
    $(".menuHandle").click(function(){
        if(b){b=false;}
        else{b=true;}

        if(b){
            $(".line2").addClass("TwoClick");
            $(".line1").addClass("OneClick");
            $(".line3").addClass("ThreeClick");
        }else{
            $(".line2").removeClass("TwoClick");
            $(".line1").removeClass("OneClick");
            $(".line3").removeClass("ThreeClick");
        }
    });
	//css type end

    //清除输入框
    $(".sendText").click(function(){
        $(".sendText").val("");
    });


	// barrage
    $(".menuHandle").click(function(){
        $(".barrage").toggle("slow");
        console.log("yes");
    })
	$(".send .sendBtn").click(function () {
        var text = $(".sendText").val();
        if(text === ""){
            return;
        }
        var barrage = $("<div style=‘right:20px;top:0px;opacity:1;color:#fff9f8;font-family:Monospace;font-weight:normal;'>"+text+"</div>");
        $(".mask").append(barrage.show());
        console.log(text);
        initBarrage();
    })
	
})

function getTime() {
    var date = new Date();
    var Y = date.getFullYear();
    var M = date. getMonth();
    var D = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ss = date.getMilliseconds();
    var t = Y+'/'+M+'/'+D+'/'+h+'/'+m+'/'+s+'/'+ss;
    return t;
}

function initBarrage(){
    var top = 0;
    $(".mask div").show().each(function(){
        var left = $(window).width()-$(this).width();
        var height = $(window).height();
        
        top +=75;
        if (top >= height-200){
            top = 0;
        }
        $(this).css({
            left:left,
            top:top,
        });
        
        var time = 5000;
        if($(this).index()%2 === 0){
            time = 10000;
            console.log("see what happen"+$(this).index());
        }
        $(this).animate({
            left:"-"+$(this).width()
        },time,function(){
            $(this).remove();
        });
    });
}