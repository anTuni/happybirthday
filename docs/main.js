$(document).ready(
    function(){
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
                $("#base2").addClass("base-show")
                $("#base1").addClass("base-hide-up")
            }else{
                $(".passsword").text("")
                alert('다시 입력해주세요 :)')
            }
        })
    }
)