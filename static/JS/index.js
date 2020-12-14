let saveFlag=false;

function ejectDetails(id){ //id: project id
    let tableString = "#tableWrapper"+id+" .table_cusName";
    console.log(" loading"+$(tableString).html());
    getJson("./static/datafile/"+$(tableString).html()+".txt").then(function(data){
        let detailData=JSON.parse(data);
        for(let i=1;i<detailData.length;i++){
        addSingleDetailWrapper(detailData[i],id);
        }
    },
        function () {
            alert("该客户经理未添加明细信息！请尽快添加！")
        })
}

$(document).ready(
    function() {
        getJson("./mainprojects.txt").then(function (data) {
            let xmjdDate = JSON.parse(data);
            for (let n = 0; n < xmjdDate.length; n++) {  //add all projects
                let ifn = (n > 0 ? 1 : 0);
                freshTableDate(xmjdDate[n], ifn);
            }
             bindEvents();
        })
    }
)


function bindEvents(){
    //details button clicked, add details information.
    $('.detailsButton').bind('click',function(){
        let projectId = Number(this.id.slice(13)) ;//tag id
        ejectDetails(projectId);
    })
    }

function freshTableDate(data,ifAdd){ //add project table
let manager =  data["项目客户经理"];
let cusName = data["客户"];
let product = data["授信/单笔品种"];
let progress = data["项目目前进度"];
let ejectDetails = data["审批待投详情"];
let details = data["目前情况"];
let projectId = data["序号"]-1;
if(ifAdd===0){
     $('#project1').html(" \  <div class=\"tableWrapper\" id='tableWrapper"+projectId+"'>\
                <table class='secondTable'>\
                <thead>\
                <tr>\
                    <th>客户经理</th>\
                    <th>客户名称</th>\
                    <th>授信/单笔品种</th>\
                    <th>项目目前进度</th>\
                    <th>审批待投详情</th>\
                </tr>\
                </thead>\
                    <tr >\
                    <td class=\"table_name\">"+manager+"</td>\
                    <td class=\"table_cusName\">"+cusName+"</td>\
                    <td class=\"table_product\">"+product+"</td>\
                    <td class=\"table_progress\">"+progress+"</td>\
                    <td class=\"table_ejectDetails\">"+ejectDetails+"</td>\
                </tr>\
                \</table>\
                \<table class='secondTable'>\
                \<thead>\
                \   <th>目前情况</th>\
                    <th class='table_edit'>修改/详情</th>\
                <thead>\
                <tr  class='tr_2'>\
                   <td class='table_details'>"+details+"</td>\
                    <td><button  class='detailsButton' id='detailsButton"+projectId+"'>查看详情</button></td>\
                </tr>\
                </table>\
                \ </div>\
"
)}
else{
        $('#project1').html(
            $('#project1').html()  +" \  <div class=\"tableWrapper\" id='tableWrapper"+projectId+"'>\
                <table class='secondTable'>\
                <thead>\
                <tr>\
                    <th>客户经理</th>\
                    <th>客户名称</th>\
                    <th>授信/单笔品种</th>\
                    <th>项目目前进度</th>\
                    <th>审批待投详情</th>\
                </tr>\
                </thead>\
                    <tr >\
                    <td class=\"table_name\">"+manager+"</td>\
                    <td class=\"table_cusName\">"+cusName+"</td>\
                    <td class=\"table_product\">"+product+"</td>\
                    <td class=\"table_progress\">"+progress+"</td>\
                    <td class=\"table_ejectDetails\">"+ejectDetails+"</td>\
                </tr>\
                \</table>\
                \<table class='secondTable'>\
                \<thead>\
                \   <th>目前情况</th>\
                    <th class='table_edit'>修改/详情</th>\
                <thead>\
                <tr  class='tr_2'>\
                   <td class='table_details'>"+details+"</td>\
                    <td><button class='detailsButton' id='detailsButton"+projectId+"' class='detailsButton'>查看详情</button></a></td>\
                </tr>\
                </table>\
                \ </div>\
")
}
}

const getJson=function(url){ //get Json data
    return new Promise(function (resolve,reject){
        const handler = function(){
            if(this.readyState===4){
                if(this.status>=200 && this.status<400){
                    resolve(this.response);
                }else{
                    console.log(this.status)
                    reject(new Error(this.statusText+this.readyState));
                }
            }
        }
        const client = new XMLHttpRequest();
        client.open("GET",url);
        client.onreadystatechange = handler;
        client.send();
    })
}

function addnewTableData2(){
    $('#tbody').html(" <form action='' name='newDataForm'> <tr id=\"tr_project_save\" class='wfInput'>\
                        <td class=\"table_name\">"+"<input type='text' placeholder='请输入姓名' name='name' >"+"</td>\
                        <td class=\"table_project\">"+"<input type='text' placeholder='请输入项目名' name='project'>"+"</td>\
                        <td class=\"table_progress\">"+"<input type='text' placeholder='请输入项目进度' name='progress'>"+"</td>\
                        <td class=\"table_time\">"+"<input type='date' placeholder='请输入本阶段完成时间' name='stageTime'>"+"</td>\
                        <td class=\"table_finishTime\">"+"<input type='date' placeholder='请输入项目完成时间' name='finishTime'>"+"</td>\
                        <td><button class=\"saveButton\" id='saveButton'>保存</button></td>\
                    </tr>\
                    </form>\
    "+$('#tbody').html()
    )
}

function addnewTableData(n,name,project,progress,time,finishTime){
    $('#tbody').html(" <tr id=\"tr_project"+n+"\">\
                        <td class=\"table_name\">"+name+"</td>\
                        <td class=\"table_project\">"+project+"</td>\
                        <td class=\"table_progress\">"+progress+"</td>\
                        <td class=\"table_time\">"+time+"</td>\
                        <td class=\"table_finishTime\">"+finishTime+"</td>\
                        <td><a href='projectDetails.html'>查看详情</a></td>\
                    </tr>\
    "+$('#tbody').html()
    )
}

function addSingleDetailWrapper(currentData,id){
        let date = new Date((currentData["日期"]-365*70-19)*86400000 );
        $("#tableWrapper"+id).html(
        $("#tableWrapper"+id).html()+
        "\<div class='detailsWrapper'>\
        \<div class='eventName'>"+date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日"+"</div>\
        \<div class='detailsTable-Wrapper'>\
        \<div class='eventName'> 客户对接事项</div>\
        \<table class='detailTable'>\
                <thead>\
                <tr>\
                    <th>对接事项</th>\
                    <th>反馈</th>\
                    <th>下一步计划</th>\
                </tr>\
                </thead>\
                    <tr >\
                    <td class=\"Event\">"+currentData["客户对接事项"]+"</td>\
                    <td class=\"Response\">"+currentData["__EMPTY"]+"</td>\
                    <td class=\"Plan\">"+currentData["__EMPTY_1"]+"</td>\
                </tr>\
        \</table> </div> \
        \<div class='detailsTable-Wrapper'>\
        \<div class='eventName'> 部门对接事项</div>\
        \<table class='detailTable'>\
                <thead>\
                <tr>\
                    <th>对接事项</th>\
                    <th>反馈</th>\
                    <th>下一步计划</th>\
                </tr>\
                </thead>\
                    <tr >\
                    <td class=\"Event\">"+currentData["部门对接事项"]+"</td>\
                    <td class=\"Response\">"+currentData["__EMPTY_2"]+"</td>\
                    <td class=\"Plan\">"+currentData["__EMPTY_3"]+"</td>\
                </tr>\
        \</table class='detailTable'> </div>\
        \<div class='detailsTable-Wrapper'>\
        \<div class='eventName'> 分行对接事项</div>\
                \<table>\
                <thead>\
                <tr>\
                    <th>对接事项</th>\
                    <th>反馈</th>\
                    <th>下一步计划</th>\
                </tr>\
                </thead>\
                    <tr >\
                    <td class=\"Event\">"+currentData["分行对接事项"]+"</td>\
                    <td class=\"Response\">"+currentData["__EMPTY_4"]+"</td>\
                    <td class=\"Plan\">"+currentData["__EMPTY_5"]+"</td>\
                </tr>\
        \</table></div> \
        </div>\
        "
    )
}