var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");



	/*Chargement devis*/
	function PrmUrl() {
		var prm = new Array();
		var tmp = unescape(window.location.search).substr(1).split("&");
		var inter;
		for ( i=0; i<tmp.length; i++) {
			inter=tmp[i].indexOf("=");
			if ( inter>=0 ) {
				prm[tmp[i].substr(0,inter)]=tmp[i].substr(inter+1)
			} else {
				prm[tmp[i]]="";
			}
		}
		return prm;
	}
	
	function buildSrcAll() {
		var src = document.getElementById('iframe').src ;
		
		if (src.indexOf("/chargement-devis-auto.html")>=0){
		src="https://"+window.location.hostname+"/proxidirect/recherche/pages/recherche.do?";
		} else if(src.indexOf("/chargement-devis-moto.html")>=0){
		src="https://"+window.location.hostname+"/proxidirect/recherche/pages/recherche.do?";
		} else if(src.indexOf("/chargement-devis-mrh.html")>=0){
		src="https://"+window.location.hostname+"/proxidirect/recherche/pages/recherche.do?";
		} else if(src.indexOf("/chargement-devis-sante.html")>=0){
		src="https://"+window.location.hostname+"/proxidirect/recherche/pages/recherche.do?";
		} else if(src.indexOf("/chargement-devis-animal.html")>=0){
		src="https://"+window.location.hostname+"/proxidirect/recherche/pages/recherche.do?";
		} else if(src.indexOf("/chargement-devis.html")>=0){
		src="https://"+window.location.hostname+"/proxidirect/recherche/pages/recherche.do?";
		}
		
		var cookieapporteur=readCookie("apporteur");
		if ( window.location.search ) {	
			var $_GET=PrmUrl(); // param??tres dans l'URL
			var site=$_GET["site"];
			if(src.indexOf("site=default") < 0) {
				if((site=="")||(typeof(site)=='undefined') ){  
					src = src + "&site=default";
				}
					src = src + "&" +unescape(window.location.search).substr(1) ; 
			}
			var marque=$_GET["marque"];
			if (src.indexOf("&marque=MAXANCE") < 0 ) {
				if((marque=="")||(typeof(marque)=='undefined')){ 
					  src = src + "&marque=MAXANCE";
				} else if(marque!=""){ src = src.replace(marque,marque.toUpperCase()); }
			}
			
			var apporteur=$_GET["app"];
			if((apporteur!="") && (typeof(apporteur)!='undefined')){
				src = src + "&codeApporteur=" + apporteur;
			}
			

			var codeApporteur=$_GET["codeApporteur"];
			if((codeApporteur!="") && (typeof(codeApporteur)!='undefined')){
				if(src.indexOf("&codeApporteur=") < 0) {
					src = src + "&codeApporteur=" + codeApporteur ;	
				}else {
					src = src.replace(/(codeApporteur=)[^\&]+/, '$1' + codeApporteur);
					src = src.replace(/(codeCourtier=)[^\&]+/, '$1' + codeApporteur);
				}
			}
			
			var express=$_GET["express"];
			if((express!="") && (typeof(express)!='undefined')){
				if (src.indexOf("express=") < 0 ) {
					src = src + "&express=" + express ;
				} else {
					src = src.replace("&express=true",'');
					src = src.replace("&express=false",'');
					src = src + "&express=" + express ;
			} 
			}
			reload = 1;
		}else{
			if(cookieapporteur!='undefined') {
				src = src + "&codeApporteur=" + cookieapporteur ;
			}
		}	
		document.getElementById('iframe').src=src ;
	}
	


$(document).ready(function($){
	/*espace client*/	 
	if (readCookie('utilisateurConnecte') == 'yes') {
		var loc = window.location.pathname;
		var result = loc.indexOf('Proximeo');
		if (result>0) {
			$('.item-165').hide();
			$('.item-184').show();
			$('.item-183').hide();
			
		}else{
		//hors proximeo
			$('.item-165').hide();
			$('.item-184').hide();
			
			$('.item-183').show();

		}
	}else{
		$('.item-165').show();
		$('.item-184').hide();
		$('.item-183').hide();
	}
 	
	// pour le template client-login
	if (document.location.href.indexOf('connexionProspect') > -1 ) {
		$('#onglet_devis').show();
		$('#onglet_client').hide();
	}else{
		$('#onglet_devis').hide();
		$('#onglet_client').show();
	}

	//formulaire connexion espace courtier
	
 	if ($('form#accesCourtier')){
		$('#codeCourtier').val('indiquez votre code ORIAS');
		$('#codeCourtier').focus(function(){
			if($('#codeCourtier').val()=='indiquez votre code ORIAS'){$('#codeCourtier').val('');};
		})
		$('#codeCourtier').blur(function(){
			if($('#codeCourtier').val()==''){$('#codeCourtier').val('indiquez votre code ORIAS');};
		})
		
		$('#submitPro').click(function(){
			  var codeCourtier = $('#codeCourtier').val();
			  if ( (codeCourtier.length >= 6) && (codeCourtier != 'indiquez votre code ORIAS')) { 
				window.location = 'http://web.archive.org/web/20210319130238/http://pro.maxance.com';
			  } else{
				$('.formMessage').css('display', 'block');
			  };
		 
		 })
	}


	$('#cd-vertical-nav a').on('click', function(){
		$('#cd-vertical-nav a').removeClass('is-selected');
		$(this).addClass('is-selected');
	});

	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	contentSections.attr("id", function(i){
		i++;
		return 'section' + i;
	});

	navigationItems.on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});
	//smooth scroll to second section
	$('.cd-scroll-down').on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
		if($(document).width() > 767) {
			var pixelPoint = 80;
		} else if($(document).width() <= 767) {
			var pixelPoint = 50;
		}


		$('body,html').animate(
			{'scrollTop':target.offset().top - pixelPoint},
			600
		);
	}

	$('.cd-nav-trigger').on('click', function(){
		$('#cd-vertical-nav').toggleClass('open');
	});
	// close navigation on touch devices when selecting an element from the list
	$('#cd-vertical-nav a').on('click', function(){
		$('#cd-vertical-nav').removeClass('open');
	});

	
	
});

}
/*
     FILE ARCHIVED ON 13:02:38 Mar 19, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:13:19 Jul 03, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 32.867
  LoadShardBlock: 159.088 (3)
  esindex: 0.016
  RedisCDXSource: 2.416
  captures_list: 185.998
  CDXLines.iter: 19.802 (3)
  exclusion.robots.policy: 0.177
  PetaboxLoader3.datanode: 166.501 (4)
  exclusion.robots: 0.19
  load_resource: 50.689
*/