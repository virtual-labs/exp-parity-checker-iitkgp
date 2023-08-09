/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

$(document).ready(function () {
  var cnv = new showdown.Converter({tables:true});
  var pt=window.location.pathname;
  var pts=pt.split('/').pop();
  pts=pts.split('.');
  var fn= pts[0]+'.md';
  if(fn=='index.md'){
    fn='aim.md';
  }
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
  $(".Adimd").load(fn, function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success"){
	  var htcm = cnv.makeHtml(responseTxt);
	  $('.Adimd').html(htcm);
    $('h1,h2').addClass('text-primary');
    $('img').addClass('img img-fluid');
	}
    if(statusTxt == "error"){
      $('.Adimd').html(fn+ " Error: " + xhr.status + ": " + xhr.statusText);
    }
  });
});
