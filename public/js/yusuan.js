$(function() {
    var provinceArr = ["2020款 两驱 超长续航版 豪华型 ","2020款 两驱 超长续航版 尊贵型 ","2020款 四驱 高性能版 旗舰型 "];
    var cityArr = [
        ["豪华型"],
        ["尊贵型"],
        ["旗舰型"]
    ];
    var areaArr = [
        [
            ["22.98万"],
        ],
        [
			["25.58万"],
        ],
        [
             ["27.95万"]
        ]
    ];

    var provinceObj = $("#province");
    var cityObj = $("#city");
    var areaObj = $("#area");

    //省的ID要声明在这里，这样就可以在其他事件中使用了。
    //但是不要设置初始值，包括市ID也不用设置初始值。因为下拉列表默认选择第一项
    var provinceId;

    for (var i = 0; i < provinceArr.length; i++) {
        provinceObj.append("<option value='" + i + "'>" + provinceArr[i] + "</option>");
    }

    provinceObj.change(function() {
        cityObj.empty();
        provinceId = $(this).val();
        for (var i = 0; i < cityArr[provinceId].length; i++) {
            cityObj.append("<option value='" + i + "'>" + cityArr[provinceId][i] + "</option>");
        }
        cityObj.trigger("change");
    });

    cityObj.change(function() {
        areaObj.empty();
        var cityId = $(this).val();
        for (var i = 0; i < areaArr[provinceId][cityId].length; i++) {
            areaObj.append("<option value='" + i + "'>" + areaArr[provinceId][cityId][i] + "</option>");
        }
    });
    //页面加载后，就让下拉列表中有值
    provinceObj.trigger("change");
});