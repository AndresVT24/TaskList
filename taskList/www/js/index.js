/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

let addButton= document.getElementById("addButton");
addButton.addEventListener("click",addText)

$(document).ready(memory());

$("ul li .delete").click(eliminar2);
$(".ui-content button").click(editText);
$("ul li .edit").click(edit);


var toEditElement= null;
var toListElement= null;
var toTextELement= null;

function memory(){
    let newList= JSON.parse(localStorage.getItem("taskList"));
    let contador= 0;
    newList.forEach(element => {
        $("ul").append("<li id="+ contador +"><h2>" + element + "</h2><button class='delete' data-role='none'>DELETE</button><button class='edit' data-role='none'>EDITAR</button></li>");
        contador++;
    });
}

function addText(){
    let text= prompt("QUE QUIERES AÑADIR?");
    if(localStorage.getItem("taskList")==null){
        localStorage.setItem("taskList",JSON.stringify([text]));
    }
    else{
        let list= JSON.parse(localStorage.getItem("taskList"));
        list.push(text);
        localStorage.setItem("taskList",JSON.stringify(list));
    }
    memory();
    location.reload(); 

}

function eliminar(event){
    var evento =event.target || event.srcElement;
    console.log(evento);
}

function eliminar2(event){
    let newList= JSON.parse(localStorage.getItem("taskList"));
    var evento =event.target || event.srcElement;
    var x= $(evento).parent().attr("id");
    var y= $(evento).parent();
    $(y).remove();
    x= parseInt(x);
    newList.splice(x,1);
    localStorage.setItem("taskList",JSON.stringify(newList));
    location.reload();

}

function edit(event){
    location.href= '#page2'
    toTextELement= $(event.target).parent();
    toEditElement= $(event.target).parent().children().first();
    toListElement= $(event.target).parent().attr("id");
    var x= $(toTextELement).children().first().text();
    $(".edit").val(x);

}

function editText(){
    location.href= '#homePage';
    let newList= JSON.parse(localStorage.getItem("taskList"));
    let textEdit= $(".ui-content .edit").val();
    $(toEditElement).text(textEdit);
    toListElement= parseInt(toListElement);
    newList[toListElement]= textEdit;
    localStorage.setItem("taskList",JSON.stringify(newList));
}