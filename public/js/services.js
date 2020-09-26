ajax("get","/car_services").then(res=>{
    var car=res;
    var html=``;
    for(var ol of car){
        html+=`
        <div class="col-lg-4 col-md-6">
        <div class="service_box">
          <div class="serviceImg"><img src="${ol.img}" alt=""></div>
          <h3><a href="#">${ol.title}</a></h3>
          <p>${ol.content}</p>
        </div>
      </div>
        `
    }
    document.getElementById("add").innerHTML=html;
});