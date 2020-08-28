$(() => {

    let imgCode2;
    let captchaB = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 2, //线条数量
        // dotR: 200, //点的半径
        // dotNum: 1000, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 18, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'stroke', //字体绘制方法，有fill和stroke
        content: '0123456789', //验证码内容
        length: 4 //验证码长度
    });

    captchaB.draw(document.querySelector('#captchaB'), r => {
        console.log('验证码', r);
        imgCode2 = r;

       
        $("#imageCode2").trigger("blur");
        $("#imageCode2").blur(function(){
            if($.trim($("#imageCode2").val())==r){
                $(this).next().text("");
                $(this).parents(".form-item2").removeClass("form-group-error").addClass("form-group-success");

            }else{
                $(this).next().text("验证码错误!");
                $(this).parents(".form-item2").removeClass("form-group-success").addClass("form-group-error").css("margin-bottom","16px");
                // $(this).next().addClass("form-group-error");

            }

        })
    });

    /* 获取登录按钮，添加事件 */
    $("#loginBtn2").click(function() {
        console.log("1");
        $("#username-ID,#password-ID,#imageCode").trigger("blur");
        
                if ($(".form-group-error").length != 0) {
                    return;
                }
        let username = $.trim($("#username-ID").val());
        let password = $.trim($("#password-ID").val());
        console.log(username,password)
        /* 先检查用户名和密码和是否勾选，都满足则发请求 */
        if (username.length == 0) {
            alert("用户名不能为空");
            return
        }

        if (password.length == 0) {
            alert("密码不能为空");
            return;
        }

        // if (!$("#protocol").is(":checked")) {
        //     alert("请阅读并同意用户协议");
        //     return;
        // }

        $.ajax({
            type: "post",
            url: "../server/login.php",
            dataType: "json",
            data: `username=${username}&password=${md5(password).slice(0,15)}`
        }).done(data => {
            // alert(data.msg);
            /* 如果 */
            if (data.status == "success") {
                // alert(data.msg);

                localStorage.setItem("userid", data.data.userId);
                localStorage.setItem("username", data.data.username);
                /* 跳转 */
                location.href = "../html/tvitem.html";
            } else {
                alert(data.msg);
            }
        })

    })

})