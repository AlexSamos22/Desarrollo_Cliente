/*
$(() =>{
    $("#parrafo3").css("background-color", "red");
    $(".articulo1").css("background-color", "yellow");
    $("p:nth-last-child(2)").text("El texto del parrafo ha cambiado");
    //firts,last, odd, even, password, submit
    $("p:last").css("font-size", "2rem");
    $("article").css("border", "3px solid blue");
    $("article").css("margin", "10px 0");
});

//eventos

$(()=>{
    //raton
    
    $("#eventos_raton").click(()=>{
        $("#eventos_raton p:first").text("evento click lanzado");
    });
    
    $("#eventos_raton button:first").hover(function(){
        $(this).addClass("fondo-rojo");
        //$("#eventos_raton button:first").addClass("fondo-rojo");
    });

    $("#eventos_raton button:first").mouseleave(function (){
        $(this).removeClass("fondo-rojo");
       // $("#eventos_raton button:first").removeClass("fondo-rojo");
    });

    $("#eventos_raton button:last").dblclick(()=>{
        $("#eventos_raton > p").css("font-size", "2rem");
    });


    //teclado
    let i = 0;
    let j = 0;
    let k = 0;
    $("input[name='nombre']").keypress(()=>{
        $("#eventos_raton p:first").text("keypressed " + i++);
    });

    $("input[name='nombre']").keyup((evento)=>{
        $("#eventos_raton p:nth-child(3)").text("keyup " + j++);
        console.log(evento.target)
    });

    $("input[name='nombre']").keydown(()=>{
        $("#eventos_raton p:last").text("keydown " + k++);
    });

    //formulario
    $("select").change(function(){
        let ciudad = $(this).find(":selected").val();
        $("#eventos_raton p:first").text("seleccionado: " + ciudad);
    });

    $("input").focus(function(){
        $(this).addClass("borde-rojo");
    });

    $("input").blur(function(){
        $(this).removeClass("borde-rojo");
    })

    //venatana
    $(window).scroll(() =>{
        console.log(window.scrollY + "px")
    })
})


//EFECTOS
$("#show-hide-toggle").click((evento) =>{
    switch (evento.target.id) {
        case "btn_show":
            $("#show-hide-toggle p").show();
            break;
        case "btn_hide":
            $("#show-hide-toggle p.super-slow").hide(2000, () =>{
                alert("se han ocultado ya todos los parrafos");
            });
            $("#show-hide-toggle p.slow").hide("slow");
            $("#show-hide-toggle p.regular").hide();
            $("#show-hide-toggle p.fast").hide("fast");
            $("#show-hide-toggle p-super-fast").hide(50);
            break;
        case "btn_toggle":
            $("#show-hide-toggle p").toggle();
            break;
    
       
    }
});

let opacidad = "0.3";

$("#in-out-toggle").click((evento) =>{
    switch (evento.target.id) {
        case "btn_fadein":
            $("#in-out-toggle p.super-slow").fadeIn(2000, () =>{
                alert("se han mostrado ya todos los parrafos");
            });
            $("#in-out-toggle p.slow").fadeIn("slow");
            $("#in-out-toggle p.regular").fadeIn();
            $("#in-out-toggle p.fast").fadeIn("fast");
            $("#in-out-toggle p-super-fast").fadeIn(50);
            break;
        case "btn_fadeout":
            $("#in-out-toggle p.super-slow").fadeOut(2000, () =>{
                alert("se han ocultado ya todos los parrafos");
            });
            $("#in-out-toggle p.slow").fadeOut("slow");
            $("#in-out-toggle p.regular").fadeOut();
            $("#in-out-toggle p.fast").fadeOut("fast");
            $("#in-out-toggle p-super-fast").fadeOut(50);
            break;
        case "btn_fadeto":
            $("#in-out-toggle p.super-slow").fadeTo(2000, opacidad, () =>{
                alert("se han ocultado ya todos los parrafos");
            });
            $("#in-out-toggle p.slow").fadeTo("slow",opacidad);
            $("#in-out-toggle p.regular").fadeTo(100, opacidad);
            $("#in-out-toggle p.fast").fadeTo("fast", opacidad);
            $("#in-out-toggle p-super-fast").fadeTo(50, opacidad);
            break;
        case "btn_slideup":
            $("#in-out-toggle p.super-slow").slideUp(2000, () =>{
                alert("se han ocultado ya todos los parrafos");
            });
            $("#in-out-toggle p.slow").slideUp("slow");
            $("#in-out-toggle p.regular").slideUp(100);
            $("#in-out-toggle p.fast").slideUp("fast");
            $("#in-out-toggle p-super-fast").slideUp(50);
            break;
        case "btn_slidedown":
            $("#in-out-toggle p.super-slow").slideDown(2000, () =>{
                alert("se han ocultado ya todos los parrafos");
            });
            $("#in-out-toggle p.slow").slideDown("slow");
            $("#in-out-toggle p.regular").slideDown(100);
            $("#in-out-toggle p.fast").slideDown("fast");
            $("#in-out-toggle p-super-fast").slideDown(50);
            break;
        case "btn_slidetoggle":
            $("#in-out-toggle p.super-slow").slideToggle(2000, () =>{
                alert("se han ocultado ya todos los parrafos");
            });
            $("#in-out-toggle p.slow").slideToggle("slow");
            $("#in-out-toggle p.regular").slideToggle(100);
            $("#in-out-toggle p.fast").slideToggle("fast");
            $("#in-out-toggle p-super-fast").slideToggle(50);
            break;
        case "btn_fadetoggle":
            $("#in-out-toggle p").fadeToggle();
            break;
    }
});

let retraso = 5000;

$("#move_right").click(() =>{
    $("#move_right").animate({
        left:600
    }, retraso);
});

$("#multiple").click(() =>{
    $("#multiple").animate({
        with: "100px",
        height: "+=100px",
        opacity: 0.2,
        left:"500px"
    }, retraso, () =>{
        alert("la animacion a terminado");
    });
});

$("#encadenar").click(() =>{
    $("#encadenar")
        .animate({width: "100px"}, retraso/3)
        .animate({height: "+=100px"}, retraso/ 3)
        .animate({left: 500}, retraso/3)
    
});

$("#caja").click(() =>{
    $("#caja").stop().slideToggle(retraso);
});

$("#btn_parar").click(() =>{
    $("#move_right").stop();
});
*/

//TEXT



$(()=>{

    $("form").submit((evento) =>{
        evento.preventDefault();
    });

    $("#modificar-dom").click((evento) =>{
        switch (evento.target.id) {
            case "set-text":
                $("#setters-getters p:first").text("esto es <strong>un texto</strong>  insertado");
                break;
            case "get-text":
                console.log($("#setters-getters p:first").text());
                break;
            case "set-html":
                $("#setters-getters p:first").html("esto es <strong>un texto</strong>  insertado");
                break;
            case "get-html":
                console.log($("#setters-getters p:first").html());
                break;
            case "set-attr":
                $("#setters-getters a").attr("href", "https://plugins.jquery.com/");
                break;
            case "get-attr":
                console.log($("#setters-getters a").attr("href"));
                break;
            case "btn_enviar":
                console.log($("input[name='nombre']").val());
                break;
            case "btn_rellenar":
                $("input[name='nombre']").val("un valor");
                break;
            case "insertar":
                $("#modificar-dom").append("esto es <strong>un texto</strong>  insertado");
                break;
            case "pre-insertar":
                $("#modificar-dom").prepend("esto es <strong>un texto</strong>  insertado");
                break;

            case "before":
                $("#modificar-dom").before("esto es <strong>un texto</strong>  insertado");
                break;

            case "after":
                $("#modificar-dom").after("esto es <strong>un texto</strong>  insertado");
                break;
            case "wrap":
                $("#modificar-dom p:first").wrap("<div class='destacado'></div>");
                break;
        }
    })

})
