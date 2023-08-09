/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
var ca=[];
$(document).ready(function () {
    $(".labn").load("../LabName.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success"){
          $('.labn').html(responseTxt);
        }
        if(statusTxt == "error"){
        $('.labn').html(fn+ " Error: " + xhr.status + ": " + xhr.statusText);
      }
      });
      $(".exn").load("ExpName.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success"){
          $('.exn').html(responseTxt);
        }
        if(statusTxt == "error"){
        $('.exn').html(fn+ " Error: " + xhr.status + ": " + xhr.statusText);
        }
      });
    $.getJSON("pretest.json",
            function (data) {
                var prq='';
                var i=0;
        $.each(data.questions, function (key, value) {

            prq += '<h3>'+value.question+'</h3> <br> &nbsp; <div id="adi'+i+'a"> <input type="radio" name="adi'+i+'" > &nbsp;' +
                value.answers.a + ' </div> &nbsp;<div id="adi'+i+'b"> <input type="radio" name="adi'+i+'" >  &nbsp;' +
                value.answers.b + ' </div> &nbsp;<div id="adi'+i+'c"> <input type="radio" name="adi'+i+'" >  &nbsp;' +
                value.answers.c + ' </div> &nbsp; <div id="adi'+i+'d"> <input type="radio" name="adi'+i+'" > &nbsp;' +
                value.answers.d + ' </div> &nbsp;';
            ca[i]= "#adi"+i+value.correctAnswer;
            i+=1;
            
        });
        $('#prequiz').html(prq);
    });
});

function cas(){
    $.each(ca,function(key,value){
        $(value).addClass(" h6 p-1 bg-success text-white");
    });
    
}