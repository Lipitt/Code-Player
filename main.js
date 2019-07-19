function actualizarSalida() {
		$("iframe").contents().find("html").html("<html><head><style type= 'text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
		document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
	}

	$(".botones").hover(function(){$(this).addClass("botonMarcado")}, function(){ $(this).removeClass("botonMarcado")})

	$(".botones").click(function(){
		$(this).toggleClass("botonActivo") ;
		$(this).removeClass("botonMarcado");
		var  panelId = $(this).attr("id") + "Panel"; 
		$("#" +panelId).toggleClass("oculto");
		var panelesActivos =  4 - $(".oculto").length;

		$(".panel").width($(window).width() / panelesActivos -10);
	})

	$(".panel").height($(window).height() -$("#barra").height());
	$(".panel").width($(window).width()/2 -10);

	actualizarSalida();

	$("textarea").on('change keyup paste', function() {
    	actualizarSalida();

    });
	
     // $("textarea").on('change keyup paste',function(){
       //     $("iframe").contents().find("html").html($("#htmlPanel").val());   
         //  }); 




	/*$("#html").click(function() {
		if (clickHtml == false) {
		$("#html").css("backgroundColor", "#42d9f4");
		clickHtml = true;
	}else {
		$("#html").css("backgroundColor", "#EEEEEE");
		clickHtml = false;
	}
})*/
