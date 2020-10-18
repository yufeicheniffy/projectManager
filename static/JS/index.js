let projectDate={
    "陈宇飞":[
        {"projectName":"项目进度管理系统开发",
            "projectProgress":"主页开发",
        "projectTime":"2020/10/23",
            "finishTime":"暂定",
        }
    ],
}

function freshTableDate(){
    $('#tbody').html(" <tr id=\"tr_project1\">\
                        <th class=\"table_name\">陈宇飞</th>\
                        <th class=\"table_project\">项目进度管理系统开发</th>\
                        <th class=\"table_progress\">主页开发</th>\
                        <th class=\"table_time\">2020/10/23</th>\
                        <th class=\"table_finishTime\">暂定</th>\
                        <th><button class=\"editButton\">查看详情</button></th>\
                    </tr>\
    "

    )
}

function addnewTableData(n,name,project,progress,time,finishTime){
    $('#tbody').html(($('#tbody').html())+" <tr id=\"tr_project"+n+"\">\
                        <th class=\"table_name\">"+name+"</th>\
                        <th class=\"table_project\">"+project+"</th>\
                        <th class=\"table_progress\">"+progress+"</th>\
                        <th class=\"table_time\">"+time+"</th>\
                        <th class=\"table_finishTime\">"+finishTime+"</th>\
                        <th><button class=\"editButton\">查看详情</button></th>\
                    </tr>\
    "
    )

}
freshTableDate()
console.log("in")
$(document).ready(
    function (){$("#icon2").bind("click",function () {
    alert("暂未开发")
})}
)