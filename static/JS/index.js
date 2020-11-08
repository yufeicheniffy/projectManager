let projectDate={
    "陈宇飞":[
        {"projectName":"项目进度管理系统开发",
            "projectProgress":"主页开发",
        "projectTime":"2020/10/23",
            "finishTime":"暂定",
        }
    ],
    total:1,
};

let saveFlag=false;

function freshTableDate(){
    $('#tbody').html(" <tr id=\"tr_project1\">\
                        <th class=\"table_name\">陈宇飞</th>\
                        <th class=\"table_project\">项目进度管理系统开发</th>\
                        <th class=\"table_progress\">主页开发</th>\
                        <th class=\"table_time\">2020/10/23</th>\
                        <th class=\"table_finishTime\">暂定</th>\
                        <th><a href='detail.html'>查看详情</a></th>\
                    </tr>\
    "

    )
}

function addnewTableData(n,name,project,progress,time,finishTime){
    $('#tbody').html(" <tr id=\"tr_project"+n+"\">\
                        <th class=\"table_name\">"+name+"</th>\
                        <th class=\"table_project\">"+project+"</th>\
                        <th class=\"table_progress\">"+progress+"</th>\
                        <th class=\"table_time\">"+time+"</th>\
                        <th class=\"table_finishTime\">"+finishTime+"</th>\
                        <th><a href='detail.html'>查看详情</a></th>\
                    </tr>\
    "+$('#tbody').html()
    )
}

function addnewTableData2(){
    $('#tbody').html(" <form action='' name='newDataForm'> <tr id=\"tr_project_save\" class='wfInput'>\
                        <th class=\"table_name\">"+"<input type='text' placeholder='请输入姓名' name='name' >"+"</th>\
                        <th class=\"table_project\">"+"<input type='text' placeholder='请输入项目名' name='project'>"+"</th>\
                        <th class=\"table_progress\">"+"<input type='text' placeholder='请输入项目进度' name='progress'>"+"</th>\
                        <th class=\"table_time\">"+"<input type='date' placeholder='请输入本阶段完成时间' name='stageTime'>"+"</th>\
                        <th class=\"table_finishTime\">"+"<input type='date' placeholder='请输入项目完成时间' name='finishTime'>"+"</th>\
                        <th><button class=\"saveButton\" id='saveButton'>保存</button></th>\
                    </tr>\
                    </form>\
    "+$('#tbody').html()
    )
}


freshTableDate();
console.log("initialized done");

$(document).ready(
    function (){
        $("#icon2").bind("click",function () {
            if(saveFlag){
                alert("请一条一条记录逐步添加！")
            }else{
                addnewTableData2();
                 projectDate["total"]+=1; //弹出输入栏
                saveFlag=true;

                $("#saveButton").bind("click",function(){ //保存后相应数据更新
                let name=$('#tr_project_save  input[name="name"]').val();
                let project=$('#tr_project_save  input[name="project"]').val();
                let progress=$('#tr_project_save  input[name="progress"]').val();
                let stageTime=$('#tr_project_save  input[name="stageTime"]').val();
                let finishTime=$('#tr_project_save  input[name="finishTime"]').val();
                addnewTableData(projectDate["total"],name,project,progress,stageTime,finishTime);
                $("#tr_project_save").remove();
                saveFlag=false;
                if(projectDate[name]===undefined){
                    projectDate[name]=[];
                }
                projectDate[name].push({
                      "projectName":project,
                      "projectProgress":project,
                      "projectTime":stageTime,
                       "finishTime":finishTime,
                })
                })

            }
        })}
)