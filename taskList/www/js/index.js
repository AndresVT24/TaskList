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

$("ul li").attr('id', '0');

$("ul li .delete").click(eliminar);
$(".ui-content button").click(editText);
$("ul li .edit").click(edit);

var toEditElement= null;

function addText(){
    let text= prompt("QUE QUIERES AÑADIR?");
    $("ul").append("<li id='0'><h2>" + text + "</h2><button class='delete'>DELETE</button><a href='#page2'><button class='edit'>EDITAR</button></li>");
    $("ul").listview("refresh");
    $("ul li .delete").click(eliminar);
    $("ul li .edit").click(eliminar);
}

function eliminar(event){
    var evento =event.target || event.srcElement;
    $text= $(this).parent("li");
    texto= $text.get(0).value;
    $(evento).parent().remove();
}

function edit(event){
    toEditElement= $(event.target).parent().parent().children().first();
    alert(toEditElement);
}

function editText(){
    let textEdit= $(".ui-content .edit").val();
    $(toEditElement).text(textEdit);
}