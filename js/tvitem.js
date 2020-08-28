$(()=>{
    // console.log(111);

    getDataAndRenderUI("default");

    getPageCount();

    function getPageCount() {
        $.ajax({
            type: "get",
            url: "../server/getPageCount.php",
            success: function(response) {
                // console.log("页码", response);

               
                let pageStr = "";
                for (let i = 0; i < response; i++) {
                    pageStr += `<li class='p-class ${i == 0 ? "active":""}'><a href="javascript:void(0)">${i+1}</a></li>`;
                }
                $(pageStr).insertBefore("#nextPage");
            }
        });
    }

    function getDataAndRenderUI(sort, page = 0) {
        $.ajax({
            // contentType: "application/x-www-form-urlencoded; charset=utf-8",
            url: "../server/getList.php",
            type: "POST",
            data: {
                sort,
                page: page
            },
            dataType: "json",
            
        }).done(data => {
            let html = data.map(item => {
                // console.log(item.title)
                return `
                <li class="item1" data-id=${item.goodid}>
                        <div class="tvitem-box" data-id=${item.goodid}>
                            <img src=${item.src}>
                                <div class="tv-title">${item.title}</div>
                                <div class="tv-dis">${item.dis}</div>
                                <div class="tv-price">￥${item.price}</div>
                                <div class="shopcart2 addCart">加入购物车</div>                                 
                        </div>
                         
                </li>
                `
            }).join("");
            $(".row-3").html(html);
        })

    }


    $(".row-3").on("mouseenter",".tvitem-box",function(){
 
    $(this).children(".shopcart2").css("opacity","1")  
    
    })

    $(".row-3").on("mouseleave",".tvitem-box" ,function(){
    
    $(this).children(".shopcart2").css("opacity","0")                     

    })


    /* 加入购物车的点击事件 */
    $(".row-3").on("click", ".addCart", function() {
        console.log("++")
            /* user_id user_name */
        let user_id = localStorage.getItem("userid") || "";
        let user_name = localStorage.getItem("username") || "";
        let good_id = $(this).parent().attr("data-id");

        console.log(user_id, user_name,good_id);
        if (user_id && user_name) {
            /* 发请求，执行添加到购物车 */
            $.ajax({
                url: "../server/addCart.php",
                data: { user_id, good_id }
            }).done(data => {
                console.log("返回值:", data);
            })

        } else {
            /* 跳转去登录 */
            location.href = "./login.html"
        }
    })


        /* 3、点击按钮的时候加入购物车 */
        $("#cart").click(function() {
            location.href = "./shopcart.html"
        })

        
    /* 4、排序功能 */
    $(".sort >li").click(function() {

        /* 设置选中状态 */
        $(this).addClass("cur").siblings().removeClass("cur");
        // let sortType = $(this).attr("data-sort");
        let sortType = $(this).data().sort;
        // console.log("sortType", sortType);

        getDataAndRenderUI(sortType);

  
    })


       /* 5、分页功能 */
       $(".pagination").on("click", ".p-class", function(e) {

        /* 排除上一页和下一页的页面点击事件 */
        // if ($(this).parent()[0].id == "prevPage" || $(this).parent()[0].id == "nextPage") return;

        /* 设置选中状态的切换 */
        $(this).addClass("active").siblings().removeClass("active");
        let page = $(this).text() * 1 - 1;
        // console.log(page);
        getDataAndRenderUI($(".cur").data().sort, page)
    })

    $("#prevPage,#nextPage").click(function() {

        /* 设置选中状态 */
        let page = $(".active").text() * 1 - 1;
        if (this.id == "prevPage") {
            page--;
        } else if (this.id == "nextPage") {
            page++;
        }

        $(".p-class").eq(page).addClass("active").siblings().removeClass("active")
        getDataAndRenderUI($(".cur").data().sort, page)
    })


})