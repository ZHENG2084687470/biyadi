// 参数配置
ajax("get","/team_box").then(res=>{
    var binbin=res;
    var html=``;
    for(var java of binbin){
        html+=`
        <div class="col-lg-3 col-md-6">
              <div class="team_box">
                <div class="team-image"> <img src="${java.img}" alt=""></div>
                <div class="team-list">
                  <div class="team-info">
                    <h5><a href="#">${java.title}</a></h5>
                    <div class="social-icons">
                      <p>${java.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
    }
    // console.log(html);
    document.getElementById("abc").innerHTML=html;
});
ajax("get","/gridcar").then(res=>{
    var bada=res;
    var html=``;
    for(var ha of bada){
        html+=`
        <article class="post">
        <div class="post-thumb"><a href="close.html" target="_blank"><img src="${ha.img}"
              alt=""></a></div>
        <h3><a href="close.html" target="_blank">${ha.title}</a></h3>
        <div class="post-info">${ha.time}</div>
      </article>
        `
    }
document.getElementById("bb").innerHTML=html;
});