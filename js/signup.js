$(()=>{

        // $("#usernameID").blur(function(){
        // // 请输入用户名  手机/邮箱/用户名   登录账号不能全数字 可以全英文   最少四个字符
        // let reg = /^1[3-9]\d{9}$/;
        // let reg2=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        // let reg3=/^.*[^\d].*$/;
        // let val = $.trim($(this).val());
        //  if((reg.test(val)) ||(reg2.test(val))||(reg3.test(val))){
        //     $(this).next().text("");
        //     $(this).parents(".form-item").removeClass("form-group-error").addClass("form-group-success");
        // }   
        // else{
        //     $(this).next().text("用户名不能为纯数字且长度不能少于4位");
        //     $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
        // }
        // });

        //     $("#passwordA").blur(function() {
        //         let reg = /^[a-zA-Z0-9]{6,20}$/;
        //         let val = $.trim($(this).val());
        //         if (reg.test(val)) {
        //             $(this).css("margin-bottom","0px");
        //             $(this).next().text("");
        //             $(this).parents(".form-item").parents(".memberlogin").css("height","360px")
        //             $(this).parents(".form-item").removeClass("form-group-error").addClass("form-group-success");
        //         }else if(val==""){
        //             $(this).css("margin-bottom","15px");
        //             $(this).next().text("请输入密码");
        //             $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
        //             $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
        //         }
        //          else {
        //             $(this).css("margin-bottom","15px");
        //             $(this).next().text("密码长度不能少于6位");
        //             $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
        //             $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
        //         }
        //     });

      
        //     $("#passwordB").blur(function() {
        //         let val = $.trim($(this).val());
        //         if ($.trim($("#passwordA").val()) === val && $.trim($("#passwordA").val())!==""){
        //             $(this).css("margin-bottom","0px");
        //             $(this).next().text("");
        //             $(this).parents(".form-item").parents(".memberlogin").css("height","360px")
        //             $(this).parents(".form-item").removeClass("form-group-error").addClass("form-group-success");
        //         }
        //         else if($.trim($("#passwordA").val()) =="") {
        //             $(this).css("margin-bottom","15px");
        //             $(this).next().text("请输入密码");
        //             $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
        //             $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
        //         }
        //         else{
        //             $(this).css("margin-bottom","15px");
        //             $(this).next().text("两次输入的密码不一致");
        //             $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
        //             $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
        //         }
        //     });

});

$(() => {

    let imgCode;
    let captcha = new Captcha({
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

    captcha.draw(document.querySelector('#captcha'), r => {
        console.log('验证码', r);
        imgCode = r;

       
        $("#imageCode").trigger("blur");
        $("#imageCode").blur(function(){
            if($.trim($("#imageCode").val())==r){
                $(this).next().text("");
                $(this).parents(".form-item").removeClass("form-group-error").addClass("form-group-success");

            }else{
                $(this).next().text("验证码错误!");
                $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error").css("margin-bottom","16px");
                // $(this).next().addClass("form-group-error");

            }

        })
    });
    
    $("#usernameID").blur(function(){
        // 请输入用户名  手机/邮箱/用户名   登录账号不能全数字 可以全英文   最少四个字符
        let reg = /^1[3-9]\d{9}$/;
        let reg2=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        let reg3=/^.*[^\d].*$/;
        let val = $.trim($(this).val());
         if((reg.test(val)) ||(reg2.test(val))||(reg3.test(val))){
            $(this).next().text("");
            $(this).parents(".form-item").removeClass("form-group-error").addClass("form-group-success");
        }   
        else{
            $(this).next().text("用户名不能为纯数字且长度不能少于4位");
            $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
        }
        });

            $("#passwordA").blur(function() {
                let reg = /^[a-zA-Z0-9]{6,20}$/;
                let val = $.trim($(this).val());
                if (reg.test(val)) {
                    $(this).css("margin-bottom","0px");
                    $(this).next().text("");
                    $(this).parents(".form-item").parents(".memberlogin").css("height","360px")
                    $(this).parents(".form-item").removeClass("form-group-error").addClass("form-group-success");
                }else if(val==""){
                    $(this).css("margin-bottom","15px");
                    $(this).next().text("请输入密码");
                    $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
                    $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
                }
                 else {
                    $(this).css("margin-bottom","15px");
                    $(this).next().text("密码长度不能少于6位");
                    $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
                    $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
                }
            });

      
            $("#passwordB").blur(function() {
                let val = $.trim($(this).val());
                if ($.trim($("#passwordA").val()) === val && $.trim($("#passwordA").val())!==""){
                    $(this).css("margin-bottom","0px");
                    $(this).next().text("");
                    $(this).parents(".form-item").parents(".memberlogin").css("height","360px")
                    $(this).parents(".form-item").removeClass("form-group-error").addClass("form-group-success");
                }
                else if($.trim($("#passwordA").val()) =="") {
                    $(this).css("margin-bottom","15px");
                    $(this).next().text("请输入密码");
                    $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
                    $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
                }
                else{
                    $(this).css("margin-bottom","15px");
                    $(this).next().text("两次输入的密码不一致");
                    $(this).parents(".form-item").parents(".memberlogin").css("height","420px")
                    $(this).parents(".form-item").removeClass("form-group-success").addClass("form-group-error");
                }
            });


            $("#registerBtn1").click(function() {
                /* [1] 检查表单验证是否全部都通过，如果有一个没有通过那么就return  */
                $("#usernameID,#passwordA,#passwordB,#imageCode").trigger("blur");
        
                if ($(".form-group-error").length != 0) {
                    return;
                }
        
                /* [2] 检查是否勾选 */
                let isCheck = $("#protocol").is(":checked");
                if (!isCheck) {
                    alert("请阅读并同意用户的注册协议");
                    return;
                }
                let data = {
                    username: $.trim($("#usernameID").val()),
                    password: md5($.trim($("#passwordA").val())).slice(0, 15)
                }

                $.ajax({
                    url: "../server/signup.php",
                    type: "post",
                    data,
                    dataType: "json",
                }).done(data => {
                    if (data.status == "success") {
                        alert("注册成功!");
                        location.href = "../html/konka.html";
                    } else {
                        alert(data.msg);
                    }
                })
            });

        
});
