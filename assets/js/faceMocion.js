(function($) {
	$.fn.extend({
		faceMocion: function(opciones) {

			var faceMocion = this;
			var NombreSelector = "Selector";
			var DescripcionFace = "--";
			defaults = {
				emociones: [
					{"emocion":"amo","TextoEmocion":"I love"}, 
					{"emocion":"divierte","TextoEmocion":"I enjoy"}, 
					{"emocion":"asombro","TextoEmocion":"It amazes me"}, 
					{"emocion":"triste","TextoEmocion":"It saddens"}, 
					{"emocion":"molesto","TextoEmocion":"It bothers me"}
				],
				callback: function() {
					//callbackhere
				}
			};
			var opciones = $.extend({}, defaults, opciones);

			$(faceMocion).each(function(index) {
				var UnicoID = Date.now();
				$(this).attr("class", $(faceMocion).attr("class") + " " + UnicoID);
				var EstadoInicial = "alegre";
				if ($(this).val() != "") {
					EstadoInicial = $(this).val();
				} else {
					$(this).val('alegre');
				}
				DescripcionFace = EstadoInicial;
				ElementoIniciar = '';
				ElementoIniciar = ElementoIniciar + '<div dato-descripcion="' + DescripcionFace + '" ';
				ElementoIniciar = ElementoIniciar + 'id-referencia="' + UnicoID;
				ElementoIniciar = ElementoIniciar + '"  class="' + NombreSelector;
				ElementoIniciar = ElementoIniciar + ' selectorFace ' + EstadoInicial + '"></div>';
				$(this).before(ElementoIniciar);
			});


			$(document).ready(function() {
				BarraEmociones = '<div class="faceMocion">';
				$.each(opciones.emociones, function(index, emo) {
					BarraEmociones = BarraEmociones + '<div dato-descripcion="' + emo.TextoEmocion;
					BarraEmociones = BarraEmociones + '" class="' + emo.emocion + '"></div>';
				});
				BarraEmociones = BarraEmociones + '</div>';
				$(document.body).append(BarraEmociones);
				$('.faceMocion div').hover(function() {
					var title = $(this).attr('dato-descripcion');
					$(this).data('tipText', title).removeAttr('dato-descripcion');
					$('<p class="MensajeTexto"></p>').text(title).appendTo('body').fadeIn('slow');
				}, function() {
					$(this).attr('dato-descripcion', $(this).data('tipText'));
					$('.MensajeTexto').remove();
				}).mousemove(function(e) {
					var RatonX = e.pageX - 20;
					var RatonY = e.pageY - 60;
					$('.MensajeTexto').css({
						top: RatonY,
						left: RatonX
					})
				});
			});
			$('.' + NombreSelector).hover(function(e) {
				SelectorEmocion = $(this);
				var RatonX = e.pageX - 20;
				var RatonY = e.pageY - 60;
				$(".faceMocion").css({
					top: RatonY,
					left: RatonX
				});
				$(".faceMocion").show();
			});
			$(document).on("click", ".faceMocion div", function() {

				SelectorEmocion.attr("class", NombreSelector + " selectorFace  " + $(this).attr('class'));

				ElInputSeleccionado = SelectorEmocion.attr("id-referencia");
				$("." + ElInputSeleccionado).val($(this).attr('class'));

				if (typeof opciones.callback == "function") {
					opciones.callback(this);
				}


			});
			$(document).mouseup(function(e) {
				$(".faceMocion").hide();
			});
			$(faceMocion).hide();

		}
	});
})(jQuery);