jQuery(document).ready(function($) {
	"use strict";
	
	$('.matrixClick').click( function() {

		$("#btnMatrixOptionClose").click(function(){
			$('.matrixTooltip').remove();
		});
					
		//Color Changes
		$('.upC1').click( function() {
			$('.upC1').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingCallFold').removeClass('upswingRaiseCall').addClass('upswingC1');
			$('.matrixTooltip').remove();
		});
		$('.upC2').click( function() {
			$('.upC2').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingCallFold').removeClass('upswingRaiseCall').addClass('upswingC2');
			$('.matrixTooltip').remove();
		});
		$('.upC3').click( function() {
			$('.upC3').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingCallFold').removeClass('upswingRaiseCall').addClass('upswingC3');
			$('.matrixTooltip').remove();
		});
		$('.upC4').click( function() {
			$('.upC4').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingCallFold').removeClass('upswingRaiseCall').addClass('upswingC4');
			$('.matrixTooltip').remove();
		});
		$('.upNotInRange').click( function() {
			$('.upNotInRange').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingCallFold').removeClass('upswingRaiseCall').addClass('upswingNIR');
			$('.matrixTooltip').remove();
		});
		$('.upFlushdraw').click( function() {
			$('.upNotInRange').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingCallFold').removeClass('upswingRaiseCall').addClass('upswingFlushdraw');
			$('.matrixTooltip').remove();
		});
		//Added 2-24-17
		$('.upCallFold').click( function() {
			$('.upNotInRange').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingRaiseCall').addClass('upswingCallFold');
			$('.matrixTooltip').remove();
		});
		$('.upRaiseCall').click( function() {
			$('.upNotInRange').closest( 'div.upswingMatrixCell' ).removeClass('upswingC1').removeClass('upswingC2').removeClass('upswingC3').removeClass('upswingC4').removeClass('upswingNIR').removeClass('upswingFlushdraw').removeClass('upswingCallFold').addClass('upswingRaiseCall');
			$('.matrixTooltip').remove();
		});
		//END Added 2-24-17
    });
	
	$( ".matrixClick" ).mouseup(function() {
  		if ( !$( ".matrixTooltip" ).length ) {
			$(this).addClass('matrixSelected');
			$(this).append('<div class="matrixTooltip"><span class="btnMatrixOptionClose"><img id="btnMatrixOptionClose" src="/wp-content/plugins/upswing-matrix/assets/images/red-check-close.png" width="30px" height="30px"></span><div class="matrixCellPadding upC1">C1</div><div class="matrixCellPadding upC2">C2</div><div class="matrixCellPadding upC3">C3</div><div class="matrixCellPadding upC4">C4</div><div class="matrixCellPadding upFlushdraw">Flushdraw</div><div class="matrixCellPadding upNotInRange">Not in range</div><div class="matrixCellPadding upCallFold">Call or Fold</div><div class="matrixCellPadding upRaiseCall">Raise or Call</div></div>');
		}
	});
	
	
	//Question #1
	$("#btnSaveCardMatrix1").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix1").hide();
		$(".showhide1").show();
		var cardMatrixAnswer1 = $("#matrixContainer1").html();
		$("#cardMatrixLegend1").after('<div id="userAnswer1"></div>');
		$("#userAnswer1").append('<h3 id="userAnswerHeading1">Your Answers</h3>');
		$("#userAnswerHeading1").append('<div id="userAnswerBreak1" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak1").append(cardMatrixAnswer1);
		$("#matrixContainer1").hide();
	});
	$("#btnBackCardMatrix1").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer1').remove();
		$("#btnSaveCardMatrix1").show();
		$(".showhide1").hide();
		$("#matrixContainer1").show();
	});
    
	//Question #2
	$("#btnSaveCardMatrix2").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix2").hide();
		$(".showhide2").show();
		var cardMatrixAnswer2 = $("#matrixContainer2").html();
		$("#cardMatrixLegend2").after('<div id="userAnswer2"></div>');
		$("#userAnswer2").append('<h3 id="userAnswerHeading2">Your Answers</h3>');
		$("#userAnswerHeading2").append('<div id="userAnswerBreak2" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak2").append(cardMatrixAnswer2);
		$("#matrixContainer2").hide();
	});
	$("#btnBackCardMatrix2").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer2').remove();
		$("#btnSaveCardMatrix2").show();
		$(".showhide2").hide();
		$("#matrixContainer2").show();
	});
	
	
	//Question #3
	$("#btnSaveCardMatrix3").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix3").hide();
		$(".showhide3").show();
		var cardMatrixAnswer3 = $("#matrixContainer3").html();
		$("#cardMatrixLegend3").after('<div id="userAnswer3"></div>');
		$("#userAnswer3").append('<h3 id="userAnswerHeading3">Your Answers</h3>');
		$("#userAnswerHeading3").append('<div id="userAnswerBreak3" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak3").append(cardMatrixAnswer3);
		$("#matrixContainer3").hide();
	});
	$("#btnBackCardMatrix3").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer3').remove();
		$("#btnSaveCardMatrix3").show();
		$(".showhide3").hide();
		$("#matrixContainer3").show();
	});
	
	//Question #4
	$("#btnSaveCardMatrix4").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix4").hide();
		$(".showhide4").show();
		var cardMatrixAnswer4 = $("#matrixContainer4").html();
		$("#cardMatrixLegend4").after('<div id="userAnswer4"></div>');
		$("#userAnswer4").append('<h3 id="userAnswerHeading4">Your Answers</h3>');
		$("#userAnswerHeading4").append('<div id="userAnswerBreak4" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak4").append(cardMatrixAnswer4);
		$("#matrixContainer4").hide();
	});
	$("#btnBackCardMatrix4").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer4').remove();
		$("#btnSaveCardMatrix4").show();
		$(".showhide4").hide();
		$("#matrixContainer4").show();
	});
	
	//Question #5
	$("#btnSaveCardMatrix5").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix5").hide();
		$(".showhide5").show();
		var cardMatrixAnswer5 = $("#matrixContainer5").html();
		$("#cardMatrixLegend5").after('<div id="userAnswer5"></div>');
		$("#userAnswer5").append('<h3 id="userAnswerHeading5">Your Answers</h3>');
		$("#userAnswerHeading5").append('<div id="userAnswerBreak5" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak5").append(cardMatrixAnswer5);
		$("#matrixContainer5").hide();
	});
	$("#btnBackCardMatrix5").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer5').remove();
		$("#btnSaveCardMatrix5").show();
		$(".showhide5").hide();
		$("#matrixContainer5").show();
	});
	
	//Question #6
	$("#btnSaveCardMatrix6").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix6").hide();
		$(".showhide6").show();
		var cardMatrixAnswer6 = $("#matrixContainer6").html();
		$("#cardMatrixLegend6").after('<div id="userAnswer6"></div>');
		$("#userAnswer6").append('<h3 id="userAnswerHeading6">Your Answers</h3>');
		$("#userAnswerHeading6").append('<div id="userAnswerBreak6" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak6").append(cardMatrixAnswer6);
		$("#matrixContainer6").hide();
	});
	$("#btnBackCardMatrix6").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer6').remove();
		$("#btnSaveCardMatrix6").show();
		$(".showhide6").hide();
		$("#matrixContainer6").show();
	});
	
	//Question #7
	$("#btnSaveCardMatrix7").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix7").hide();
		$(".showhide7").show();
		var cardMatrixAnswer7 = $("#matrixContainer7").html();
		$("#cardMatrixLegend7").after('<div id="userAnswer7"></div>');
		$("#userAnswer7").append('<h3 id="userAnswerHeading7">Your Answers</h3>');
		$("#userAnswerHeading7").append('<div id="userAnswerBreak7" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak7").append(cardMatrixAnswer7);
		$("#matrixContainer7").hide();
	});
	$("#btnBackCardMatrix7").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer7').remove();
		$("#btnSaveCardMatrix7").show();
		$(".showhide7").hide();
		$("#matrixContainer7").show();
	});
	
	//Question #8
	$("#btnSaveCardMatrix8").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix8").hide();
		$(".showhide8").show();
		var cardMatrixAnswer8 = $("#matrixContainer8").html();
		$("#cardMatrixLegend8").after('<div id="userAnswer8"></div>');
		$("#userAnswer8").append('<h3 id="userAnswerHeading8">Your Answers</h3>');
		$("#userAnswerHeading8").append('<div id="userAnswerBreak8" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak8").append(cardMatrixAnswer8);
		$("#matrixContainer8").hide();
	});
	$("#btnBackCardMatrix8").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer8').remove();
		$("#btnSaveCardMatrix8").show();
		$(".showhide8").hide();
		$("#matrixContainer8").show();
	});
	
	//Question #9
	$("#btnSaveCardMatrix9").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix9").hide();
		$(".showhide9").show();
		var cardMatrixAnswer9 = $("#matrixContainer9").html();
		$("#cardMatrixLegend9").after('<div id="userAnswer9"></div>');
		$("#userAnswer9").append('<h3 id="userAnswerHeading9">Your Answers</h3>');
		$("#userAnswerHeading9").append('<div id="userAnswerBreak9" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak9").append(cardMatrixAnswer9);
		$("#matrixContainer9").hide();
	});
	$("#btnBackCardMatrix9").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer9').remove();
		$("#btnSaveCardMatrix9").show();
		$(".showhide9").hide();
		$("#matrixContainer9").show();
	});
	
	//Question #10
	$("#btnSaveCardMatrix10").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix10").hide();
		$(".showhide10").show();
		var cardMatrixAnswer10 = $("#matrixContainer10").html();
		$("#cardMatrixLegend10").after('<div id="userAnswer10"></div>');
		$("#userAnswer10").append('<h3 id="userAnswerHeading10">Your Answers</h3>');
		$("#userAnswerHeading10").append('<div id="userAnswerBreak10" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak10").append(cardMatrixAnswer10);
		$("#matrixContainer10").hide();
	});
	$("#btnBackCardMatrix10").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer10').remove();
		$("#btnSaveCardMatrix10").show();
		$(".showhide10").hide();
		$("#matrixContainer10").show();
	});
	
	//Question #11
	$("#btnSaveCardMatrix11").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix11").hide();
		$(".showhide11").show();
		var cardMatrixAnswer11 = $("#matrixContainer11").html();
		$("#cardMatrixLegend11").after('<div id="userAnswer11"></div>');
		$("#userAnswer11").append('<h3 id="userAnswerHeading11">Your Answers</h3>');
		$("#userAnswerHeading11").append('<div id="userAnswerBreak11" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak11").append(cardMatrixAnswer11);
		$("#matrixContainer11").hide();
	});
	$("#btnBackCardMatrix11").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer11').remove();
		$("#btnSaveCardMatrix11").show();
		$(".showhide11").hide();
		$("#matrixContainer11").show();
	});
	
	//Question #12
	$("#btnSaveCardMatrix12").click(function(){
		$('.matrixTooltip').remove();
		$("#btnSaveCardMatrix12").hide();
		$(".showhide12").show();
		var cardMatrixAnswer12 = $("#matrixContainer12").html();
		$("#cardMatrixLegend12").after('<div id="userAnswer12"></div>');
		$("#userAnswer12").append('<h3 id="userAnswerHeading12">Your Answers</h3>');
		$("#userAnswerHeading12").append('<div id="userAnswerBreak12" style="clear:both">&nbsp;</div>');
		$("#userAnswerBreak12").append(cardMatrixAnswer12);
		$("#matrixContainer12").hide();
	});
	$("#btnBackCardMatrix12").click(function(){
		$('.matrixTooltip').remove();
		$('#userAnswer12').remove();
		$("#btnSaveCardMatrix12").show();
		$(".showhide12").hide();
		$("#matrixContainer12").show();
	});
	
	$('#btnNewMatrix').click(function(){
		window.scrollTo(0, 0);
		location.reload();
		 
	});
	
	//Print as PNG
	$('#btnExportMatrix').click(function(){
    html2canvas($('#upswingMatrixSavePNGContainer'), 
    {
      onrendered: function (canvas) {
        var a = document.createElement('a');
        // Defaults to PNG. Uncomment line below for jpg.
        a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		var userFilename = $('#userAssignedFilename').val() + '.png';
        //a.download = 'filename.png';
		a.download = userFilename;
        a.click();
      }
    });
  });
});