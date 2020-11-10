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
                    "stageFinishTime":"2020/11/11",
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


   let personalData=projectDate["陈宇飞"];
   let stageName = personalData[0]["stageDetails"][0]["projectProgress"];
   let state = personalData[0]["stageDetails"][0]["projectState"];
   let time = personalData[0]["stageDetails"][0]["projectTime"];
   let projectDetails = personalData[0]["stageDetails"][0]["projectDetails"];
   let stageFinishTime = personalData[0]["stageDetails"][0]["stageFinishTime"];
    freshTitleData("项目进度系统","陈宇飞","2020/11/22");
     addnewTableData(stageName,state,time,stageFinishTime,projectDetails);
console.log("initialized done");


function freshTitleData(projectName,projectManager,finishTime){
    $("#projectName").html(projectName);
    $("#projectManager").html(projectManager);
    $("#finishTime").html(finishTime);
}
function addnewTableData(stageName,state,time,finishTime,projectDetails){
    $('#tbody').html(" <tr> <td class=\"table_stage\">"+stageName+"</td>\
                       <td class=\"table_state\">"+state+"</td>\
                        \<td class=\"table_time\">"+time+"</td>\
                        \<td class=\"table_finishTime\">"+finishTime+"</td>\
                        <td class=\"table_projectDetails\">"+projectDetails+"</td>\
                        <td><button class=\"editButton\">修改</button></td>\
                    </tr>\
    "
    );
    console.log("addTableData Done");
}