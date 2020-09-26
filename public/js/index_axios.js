ajax("get","/indexcart").then(result=>{
  var [p]=result;
  var html=`
  <div class="col-lg-5">
  <div class="car_box">
    <div class="carImg wow fadeInLeft"><img src="${p.img}"></div>
  </div>
</div>
<div class="col-lg-7">
<div class="about_box">
  <div class="title">
    <h1><span>${p.title}</span> <strong>${p.strong}</strong></h1>
  </div>
  <p>
   ${p.content}  
  </p>
  <!--Counter Start-->
  <div id="counter">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-4 counter-item">
        <div class="counterbox">
          <span class="counter-number" data-from="1" data-to="605" data-speed="2000">605</span> <span
            class="counter-text">DEDC续航(KM)</span> </div>
      </div>
      <div class="col-lg-4 col-md-4 col-4 counter-item">
        <div class="counterbox">
          <span class="counter-number" data-from="1" data-to="80" data-speed="2000">80</span> <span
            class="counter-text">麋鹿测试(KM/H)</span> </div>
      </div>
      <div class="col-lg-4 col-md-4 col-4 counter-item">
        <div class="counterbox">
          <span class="counter-number" data-from="1" data-to="33" data-speed="2000">33</span> <span
            class="counter-text">制动距离(M)</span> </div>
      </div>

    </div>
  </div>
  <!--Counter End-->
  <div class="readmore"><a href="blog.html">了解更多&gt;&gt;</a></div>
</div>
</div>
  `
  // 将拼接好的html片段放入div id为box的内容中
  document.getElementById("box").innerHTML=html;
});
ajax("get","/newcar").then(result=>{
  var b=result;
  // 定义一个空的html
  var html=``;
  // 遍历b数组中每个对象
  for(var c of b){
    //每遍历一个商品就向html中添加html片段
    html+=`
    <div class="col-lg-4">
    <div class="service_box">
      <div class="serviceImg"><img src="${c.img}" alt=""></div>
      <h3><a href="#">${c.title}</a></h3>
      <p>${c.p}</p>
    </div>
  </div>
    `;
  }
  // console.log(html);
  document.getElementById("lg").innerHTML=html;
});
// 紧急服务部分
ajax("get","/servic").then(res=>{
  var [servic]=res;
  var html=`
  <div class="col-lg-6">
    <div class="emergencyImg"><img src="${servic.img}"></div>
  </div>
  <div class="col-lg-6">
            <div class="emergency_box">
              <div class="emer_info emergency_sec">
                <div class="title">
                  <h1><span>${servic.span}</span></h1>
                </div>
                <div class="sub_title">${servic.title}</div>
                <p>
                 ${servic.p1}
                </p>
                <p>
                  ${servic.p2}
                </p>
                <div class="emer_phone">服务热线:<span> <img src="images/phoneicon.png">${servic.emer_phone} </span> </div>
                <div class="readmore"><a href="service_details.html">了解更多&gt;&gt;</a></div>
              </div>
            </div>
          </div>
  `
  // 将拼接好的html片段放入div id为box的内容中
  document.getElementById("servic").innerHTML=html;
});
//新车速递
ajax("get","/team").then(res=>{
  var team=res;
  var html=``;
  for(var li of team){
    html+=`
    <div class="col-lg-3 col-md-6">
            <div class="team_box">
              <div class="team-image"> <img src="${li.img}" alt=""></div>
              <div class="team-list">
                <div class="team-info">
                  <h5><a href="#">${li.username}</a></h5>
                  <div class="designation">${li.country}</div>
                  <div class="social-icons">
                    <ul class="experts">
                      <li>${li.content}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
  }
  // console.log(html);
document.getElementById("ex").innerHTML=html;
});
