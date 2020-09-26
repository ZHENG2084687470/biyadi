// 交友论坛
ajax("get","/article").then(res=>{
    var article=res;
    var html=``;
    for(var artic of article){
        html+=`
        <li>
        <div class="blog_list">
          <div class="row">
            <div class="col-lg-4">
              <div class="blogImg"><img alt="" src="${artic.img}">
                <div class="blog_date">${artic.time}</div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="blog_sec">
                <h3><a href="#">${artic.title}</a></h3>
                <p>${artic.p}</p>
                <a href="#">${artic.span}</a>
              </div>
            </div>
          </div>
        </div>
      </li>
        `
    }
    document.getElementById("article").innerHTML=html;
});
ajax("get","/sale").then(res=>{
    var sale=res;
    var html=``;
    for(var sa of sale){
        html+=`
        <article class="post">
        <div class="post-thumb"><a href="close.html" target="_blank"><img src="${sa.img}" alt=""></a>
        </div>
        <h3><a href="close.html" target="_blank">${sa.content}</a></h3>
        <div class="post-info">${sa.time}</div>
      </article>
        `
    }
    document.getElementById("sale").innerHTML=html;
});