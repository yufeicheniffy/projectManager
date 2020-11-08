let projectDate={
    "陈宇飞":[
        {"projectName":"项目进度管理系统开发",
            "projectProgress":"主页开发",
        "projectTime":"2020/10/23",
            "finishTime":"暂定",
            totalStage:1,
            "stageDetails":[
                {"projectProgress":"主页开发",
                 "projectTime":"2020/10/23",
                "projectState":"已完成",
                "projectDetails":"已按要求完成"},
            ]

        }
    ],
    total:1,
};



for(key in projectDate){
        if(key==="total"){
            break;
        }
    console.log(key);  //分别输出a b c
}
function freshTableDate(){
    $('#namesList').html( "<li id='name1'  class='clickNames'>陈宇飞</li>"
    )
}
freshTableDate();
console.log("initialized done");

$("#name1").bind("click",function () {
   let personalData=projectDate[$("#name1").html()];
   let stage=0;
   let project = personalData[0]["projectName"];
   let stageName = personalData[0]["stageDetails"][0]["projectProgress"];
   let state = personalData[0]["stageDetails"][0]["projectState"];
   let time = personalData[0]["stageDetails"][0]["projectTime"];
   let projectDetails = personalData[0]["stageDetails"][0]["projectDetails"];
    addnewTableData(stage,project,stageName,state,time,projectDetails);
})

function addnewTableData(stage,project,stageName,state,time,projectDetails){
    $('#tbody').html(" <tr id=\"tr_stage"+stage+"\">\
                        <th class=\"table_project\">"+project+"</th>\
                        <th class=\"table_stage\">"+stageName+"</th>\
                        \<th class=\"table_state\">"+state+"</th>\
                        \<th class=\"table_time\">"+time+"</th>\
                        <th class=\"table_finishTime\">"+projectDetails+"</th>\
                        <th><button class=\"editButton\">修改</button></th>\
                    </tr>\
    "+$('#tbody').html()
    )
}

