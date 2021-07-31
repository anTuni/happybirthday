$(document).ready(
    function(){
        var audioFile = new Audio('./up.mp3');

        $(".num h1").on("click",(e)=>{
            var num = $(e.target).text();
            $(".passsword").text($(".passsword").text()+num)
        })
        $(".back h2").on("click",(e)=>{
            var text = $(".passsword").text();
            $(".passsword").text(text.substring(0,text.length-1))
        })
        $(".input").on("click",(e)=>{
            var text = $(".passsword").text();
            if(text==3979)
            {
                console.log("gdgd")
                $("#base2").show()
                $("#base2").removeClass("base-hide")
                $("#base2").addClass("base-show")
                $("#base1").addClass("base-hide-up")
            }else{
                $(".passsword").text("")
                alert('다시 입력해주세요 :)')
            }
        })
        $(".arrow").on("click",(e)=>{
                console.log("gdgd")
                $("#base3").show()
                $("#base3").removeClass("base-hide")
                $("#base3").addClass("base-show")
                $("#base2").addClass("base-hide-up")
                $("#base2").removeClass("base-show")
                
                audioFile.play();
        })
        $(".next").on("click",(e)=>{
                console.log("gdgd")
                $("#base4").show()
                $("#base4").removeClass("base-hide")
                $("#base4").addClass("base-show")
                $("#base3").addClass("base-hide-up")
                $("#base3").removeClass("base-show")
        })
        
    }
)