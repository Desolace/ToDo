//ToDoList

var taskList = [];
var tasks = 0;
var visToggle = 2;

function updateView(){
  var htmlTaskList = "";
  for (m in taskList) {
    var thisTask = taskList[m];
    var check = "&nbsp;";
    var taskDisplay = "block"
    if (thisTask.complete === true) {
      check = "&#x274C;";
      if(visToggle === 0) {
        taskDisplay = "none";
      }
    }
    if (thisTask.complete === false && visToggle === 1) {
      taskDisplay = "none";
    }

    var newTask = '<li id="'+thisTask.divID+'" class="taskline" style="display:'+taskDisplay+';"><span class="taskbox" onclick="updateTask('+m+')">'+check+'</span><span class="task">'+thisTask.divString+'</span><span class="delete" onclick="deleteTask('+m+')"></span></li>';
    //console.log(newTask);
    htmlTaskList = htmlTaskList + newTask;
  }
  //console.log(htmlTaskList);
  $('#tasklist').html(htmlTaskList);
};
/*
*/

//nth task management f^n

//  css selector nth-of-type wheel

//  generate div id=taskN

function createTask() {
  var divString = prompt("Name of task:");

  var newTask = new Object();
  newTask.taskNum = tasks;
  tasks++;
  newTask.divID = "task" + this.taskNum;
  newTask.divString = divString;
  newTask.complete = false;

  taskList.push(newTask);

  /*
  var $newTask = $('<li id="'+newTask.divID+'" class="taskline"><span class="taskbox" onclick="updateTask('+(taskList.length-1)+')"></span><span class="task">'+newTask.divString+'</span><span class="delete" onclick="deleteTask('+(taskList.length-1)+')"></span></li>');
  $('#tasklist').append($newTask);
  /*
  */
  updateView();
};
/*
*/


function updateTask(spanNum) {
  //getNum from divID, num--
  //taskList[num].complete
  var taskSelector = "#task" + spanNum + " > .taskbox";
  if(taskList[spanNum].complete === false) {
    taskList[spanNum].complete = true;
    //$(taskSelector).html('&#x274C;');
  } else if(taskList[spanNum].complete === true) {
    taskList[spanNum].complete = false;
    //$(taskSelector).html('&nbsp;');
  } else {
    console.log('Err:UpdateTask, '+spanNum);
  }
  updateView();
};
/*
*/

function deleteTask(spanNum) {
  //taskList.splice(position, remove, add0, add1, addn...);
  //var taskIndex = parseInt(divID.charAt(4)) - 1;
  //taskList.splice(taskIndex, 1);
  console.log(spanNum);
  taskList.splice(spanNum, 1);
  updateView();
}
/*
*/

//filter tasks (toggle visibility)


function filterTask(filterType) {
  switch (filterType) {
    case "complete":
      visToggle = 1;
      break;
    case "incomplete":
      visToggle = 0;
      break;
    case "all":
      visToggle = 2;
      break;
    default:
      console.log("ERR,filterTask,default, "+n);
    }
    updateView();
};
/*
*/
/*
//function filterTask (filterType) {
function filterTaskDeprecated (filterType) {
  //onMouseClick show filterType

  for (n in taskList) {
    switch (filterType) {
      case "complete":
        if (taskList[n].complete === true) {
          $(".taskline:nth-of-type("+n+")").show();
          console.log(n+' true ' + taskList[n].complete);
        }
        else if (taskList[n].complete === false) {
          $(".taskline:nth-of-type("+n+")").hide();
          console.log(n+' false ' + taskList[n].complete);
        }
        else {
          alert("filterTask,complete, "+n);
        }
        break;
      case "incomplete":
        if (taskList[n].complete === true) {
          $(".taskline").hide();
          console.log(n+' true ' + taskList[n].complete);
        }
        else if (taskList[n].complete === false) {
          $(".taskline").show();
          console.log(n+' false ' + taskList[n].complete);
        }
        else {
          alert("ERR,filterTask,incomplete, " + n);
        }
        break;
      case "all":
        if (taskList[n].complete === true || taskList[n].complete === false) {
          $(".taskline:nth-of-type("+n+")").show();
        }
        else {
          alert("ERR,filterTask,all, " + n);
        }
        break;
      default:
        console.log("ERR,filterTask,default, " + n);
        break;
    }
  }
};
/*
*/
//Model View Controller
//Array HTML Functions

function lol(){
  alert("LOL");
}
/*
*/
