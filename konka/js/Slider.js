   class Slider {
       constructor(data) {
           this.data = data;
           this.slider = null;
           this.sliderBox = null;
           this.sliderControl = null;
           this.sliderNav = null;
           this.timer = null;
           this.index = 0;
           this.len = this.data.length;
           this.sliderBoxItemWidth = 700;
       }
       init() {
           this.createUI(); //1、创建标签
           this.setSliderItemBackgroundColor(); //2、设置背景颜色
           this.autoPlayer(); //3、自动播放
           this.addEventHandlerWithSlider();
           this.addEventHandlerWithControl();
           this.addEventHandlerWithSliderNavItem();
       }
       autoPlayer() {
           /* 核心：开启定时器，计算位移并设置标签的left */
           /* 注意：考虑临界情况 */
           this.timer = setInterval(() => {
               this.next();
               this.selectSliderNavItem(this.index);
           }, 3000);
       }
       addEventHandlerWithSlider() {
           this.slider.onmouseenter = () => clearInterval(this.timer);
           this.slider.onmouseleave = () => this.autoPlayer();
       }
       addEventHandlerWithControl() {
           this.sliderControl.onclick = (e) => {
               e = e || window.event;
               let target = e.target || e.srcElement;
               if (target.className == "prev") {
                   this.prev();
               }
               if (target.className == "next") {
                   this.next();
               }
               this.selectSliderNavItem(this.index);
           }
       }
       prev() {
           this.index--;
           if (this.index == -1) {
               this.index = this.len - 1;
           }
           this.sliderBox.style.left = -(this.index * this.sliderBoxItemWidth) + "px";
       }
       next() {
           this.index++;
           if (this.index == this.len) {
               this.index = 0;
           }
           this.sliderBox.style.left = -(this.index * this.sliderBoxItemWidth) + "px";
       }
       addEventHandlerWithSliderNavItem() {
           let self = this;
           let navItems = Array.from(this.sliderNav.children);
           navItems.forEach((item, idx) => {
               item.onclick = function() {
                   // console.log(this, idx);
                   /* 当点击焦点的时候：(1) 设置当前标签的选中状态 (2) 切换显示对应的图片 */
                   // navItems.forEach(item => item.classList.remove("active"));
                   // this.classList.add("active");
                   self.selectSliderNavItem(idx);
                   self.index = idx;
                   self.sliderBox.style.left = -(self.index * self.sliderBoxItemWidth) + "px";
               }
           })
       }
       selectSliderNavItem(idx) {
           let navItems = Array.from(this.sliderNav.children);
           navItems.forEach(item => item.classList.remove("active"));
           navItems[idx].classList.add("active");
       }
       createUI() {
           
           this.createSliderNav();
           this.createSliderBox();
           this.createSliderControl();

           this.slider = document.createElement("div");
           this.slider.className = "slider";
           this.slider.appendChild(this.sliderBox);
           this.slider.appendChild(this.sliderControl);
           this.slider.appendChild(this.sliderNav);
           document.body.appendChild(this.slider);
           this.parent();
       }
     
       createSliderBox() {
           this.sliderBox = document.createElement("ul");
           this.sliderBox.className = "slider-box";
           this.sliderBox.innerHTML = this.data.map(item => `<li class="slider-box-item"><img src=${item}></li>`).join("");
       }
       createSliderControl() {
           this.sliderControl = document.createElement("div");
           this.sliderControl.className = "slider-control";
           this.sliderControl.innerHTML = `<span class="prev">&lt;</span> <span class="next">&gt;</span>`;
       }
       createSliderNav() {
           this.sliderNav = document.createElement("ol");
           this.sliderNav.className = "slider-nav";
           this.sliderNav.innerHTML = this.data.map((item, idx) => `<li class="slider-nav-item ${idx == 0 ? "active" :""}">${idx + 1}</li>
                `).join("");
       }
       setSliderItemBackgroundColor() {
           Array.from(this.sliderBox.children).forEach(item => item.style.background = this.getRandomColor())
       }
       getRandomColor() {
           let r = parseInt(Math.random() * 256);
           let g = parseInt(Math.random() * 256)
           let b = parseInt(Math.random() * 256)
           return `rgb(${r},${g},${b})`;
       }
       parent(){
        let carousel= document.getElementById("carousel");
        carousel.appendChild=this.slider;


     }
       
   }

                // $(()=>{
                //     $("#carousel")(function(){
                //         this.appendChild($(".slider"));
                        
                //     })
                // })

