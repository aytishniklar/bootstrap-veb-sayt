/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Consbus = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.Animation();
				this.videoBox();
				this.NioEigMianSlider();
				this.NioEigStickyHeader();
				this.NioEigMobileMenu();
				this.NioEigcounterUp();
				this.NioEidPortfolioSlide();
				this.NioEigPartnerSlide();
				this.NioEigTeamslider();
				this.NioEigTestimonialSlide();
				this.NioEigBloglider();
				this.NioConMainSlider();
				this.NioConSticky();
				this.NioConMobileMenu();
				this.NioConPortFolioSlider();
				this.NioConTeamSlider();
				this.NioConMemberSocial();
				this.NioConTestimonialSlider();
				this.NioConPartner();
				this.NioConscrollTop();
				this.NioDiaStickyHeader();
				this.NioDiaMobileMenu();
				this.NioDiaSkillProgress();
				this.NioDiaTestimonial();
				this.NioMarkMianSlider();
				this.NioMarkStickyHeader();
				this.NioMarkMobileMenu();
				this.NioMarkSkillProgress();
				this.NioMarkMarketingslide();
				this.bannerParalax();
				this.NioMarkTestimonialslide();
				this.NioMarkGoogleMap();
				this.NioMarkclientSlide();
				this.NioinsStickyHeader();
				this.NioinsStickyHeader();
				this.NioInssearchPopUp();
				this.NioinsMobileMenu();
				this.NioinsSkillProgress();
				this.NioInsTestimonial();

			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				});
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			videoBox: function (){
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
					iframe: {
						patterns: {
						  youtube: {
							index: 'youtube.com/',
							id: 'v=', 
							src: 'https://www.youtube.com/embed/%id%?autoplay=1'
						  },
						},
					}
				});
			},
			NioEigMianSlider: function (){
				jQuery('#nio-eig-main-slider').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: true,
					navSpeed: 800,
					smartSpeed: 1000,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
				});
			},
			NioEigStickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.nio-eig-header-style-eight').addClass('sticky-on')
					} else {
						jQuery('.nio-eig-header-style-eight').removeClass('sticky-on')
					}
				})
				$('.one-page-scroll ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -110
							}, 1000);
							return false;
						}
					}
				});
				$('.one-page-scroll-2 ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -80
							}, 1000);
							return false;
						}
					}
				});
				$('.one-page-scroll-5 ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -80
							}, 1000);
							return false;
						}
					}
				});
			},
			NioEigMobileMenu: function (){
				$('.nio-eig-open_mobile_menu').on("click", function() {
					$('.nio-eig-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.nio-eig-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.nio-eig-mobile_menu li.dropdown ul').length){
					$('.nio-eig-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.nio-eig-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
			NioEigcounterUp: function (){
				jQuery('.nio-count').counterUp({
					delay: 50,
					time: 2000,
				});
			},
			NioEidPortfolioSlide: function (){
				$('#nio-eig-portfolio-slide').owlCarousel({
					margin:0,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					center: true,
					navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,

						}
					},
				});
			},
			NioEigPartnerSlide: function (){
				$('#nio-eig-partner-slide-id').owlCarousel({
					margin: 50,
					autoplay: true,
					loop: true,
					responsiveClass:true,
					nav: false,
					dots: false,
					slideTransition:'linear',
					autoplayTimeout: 10,
					autoplayHoverPause:false,
					autoplaySpeed:4500,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:2,
						},
						700:{
							items:3,
						},
						1000:{
							items:5,

						}
					},
				})
			},
			NioEigTeamslider: function (){
				if ($('#nio-eig-team-slide').length) {
					$('#nio-eig-team-slide').owlCarousel({
						loop:true,
						nav:true,
						margin:30,
						autoplay: 0,
						smartSpeed: 500,
						navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
						responsive:{
							0:{
								items:1
							},
							480:{
								items:1
							},
							600:{
								items:1
							},
							700:{
								items:2
							},
							800:{
								items:2
							},
							900:{
								items:3
							},
							1024:{
								items:4
							}
						}
					});    		
				}
			},
			NioEigTestimonialSlide: function (){
				$('#nio-eig-testimonial-slide').owlCarousel({
					margin:35,
					responsiveClass:true,
					nav: false,
					dots: true,
					autoplay: false,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,
						}
					},
				})
			},
			NioEigBloglider: function (){
				if ($('#nio-eig-blog-slide').length) {
					$('#nio-eig-blog-slide').owlCarousel({
						loop:true,
						nav:false,
						dots: true,
						margin:30,
						autoplay: false,
						responsive:{
							0:{
								items:1
							},
							480:{
								items:1
							},
							600:{
								items:1
							},
							700:{
								items:1
							},
							800:{
								items:2
							},
							900:{
								items:2
							},
							1024:{
								items:3
							}
						}
					});    		
				}
			},
			NioConMainSlider: function (){
				jQuery('#nio-con-slider-id').owlCarousel({
					items: 1,
					loop: true,
					nav: false,
					dots: true,
					autoplay: true,
					navSpeed: 1000,
					smartSpeed: 2000,
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
				});
			},
			NioConSticky: function (){ 
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.header-style-five').addClass('nio-con-sticky-header-overlay')
					} else {
						jQuery('.header-style-five').removeClass('nio-con-sticky-header-overlay')
					}
				})
			},
			NioConMobileMenu: function (){
				$('.nio-con-open_mobile_menu').on("click", function() {
					$('.nio-con-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.nio-con-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.nio-con-mobile_menu li.dropdown ul').length){
					$('.nio-con-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.nio-con-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			NioConPortFolioSlider: function (){
				$('#nio-con-portfolio-slider').owlCarousel({
					margin: 30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					autoplay: false,
					navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:2,
						},
						700:{
							items:2,
						},
						1000:{
							items:3,

						},
						1300:{
							items: 3,

						},
						1600:{
							items: 4,

						},
					},
				})
			},
			NioConTeamSlider: function (){
				$('#nio-con-team-slider').owlCarousel({
					margin: 30,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:2,
						},
						700:{
							items:2,
						},
						1000:{
							items:3,

						},
						1300:{
							items: 3,

						},
						1600:{
							items: 3,

						},
					},
				})
			},
			NioConMemberSocial: function (){
				$('.nio-con-team-img-social').on("click", function() {
					if ( $(this).hasClass('social-show') ) {
						$(this).removeClass('social-show');
					} else {
						$('nio-con-team-img-social.social-show').removeClass('social-show');
						$(this).addClass('social-show');    
					}
				});
			},
			NioConTestimonialSlider: function (){
				jQuery('#nio-con-testimonial-slide').owlCarousel({
					items: 1,
					margin: 0,
					loop: true,
					nav: false,
					dots: true,
					navSpeed: 800,
					autoplay: false,
					smartSpeed: 2000,
					animateOut: 'slideOutLeft',
					animateIn: 'slideInRight',
				});
			},
			NioConPartner: function (){
				$('#nio-con-partner-slide').owlCarousel({
					margin: 125,
					responsiveClass:true,
					nav: false,
					dots: false,
					loop:true,
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:2,
						},
						400:{
							items:2,
						},
						600:{
							items:2,
						},
						700:{
							items:3,
						},
						1000:{
							items:4,

						},
					},
				})
			},
			NioConscrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			NioDiaStickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.nio-dia-header-wrap').addClass('nio-dia-sticky-on')
					} else {
						jQuery('.nio-dia-header-wrap').removeClass('nio-dia-sticky-on')
					}
				})
			},
			NioDiaMobileMenu: function (){
				$('.open_nio-dia-mobile_menu').on("click", function() {
					$('.nio-dia-mobile_menu_wrap').toggleClass("nio-dia-mobile_menu_on");
				});
				$('.open_nio-dia-mobile_menu').on('click', function () {
					$('body').toggleClass('nio-dia-mobile_menu_overlay_on');
				});
				if($('.nio-dia-mobile_menu-dropdown li.dropdown ul').length){
					$('.nio-dia-mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.nio-dia-mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			NioDiaSkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			NioDiaTestimonial: function (){
				$(window).on('load',function(){
					$('.nio-dia-testimonials-slide').owlCarousel({
						margin:30,
						responsiveClass:true,
						nav: false,
						dots: true,
						loop:true,
						autoplay: false,
						smartSpeed: 300,
						responsive:{
							0:{
								items:1,
							},
							400:{
								items:1,
							},
							600:{
								items:1,
							},
							700:{
								items:2,
							},
							1000:{
								items:2,

							},
							1300:{
								items:2,
							}

						},
					})
				});
			},
			NioMarkMianSlider: function (){
				jQuery('#nio-mark-slider-area').owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: true,
					navSpeed: 800,
					smartSpeed: 1000,
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
				});
			},
			NioMarkStickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.nio-mark-header-wrap').addClass('nio-mark-sticky-on')
					} else {
						jQuery('.nio-mark-header-wrap').removeClass('nio-mark-sticky-on')
					}
				})
			},
			NioMarkMobileMenu: function (){
				$('.open_nio-mark-mobile_menu').on("click", function() {
					$('.nio-mark-mobile_menu_wrap').toggleClass("nio-mark-mobile_menu_on");
				});
				$('.open_nio-mark-mobile_menu').on('click', function () {
					$('body').toggleClass('nio-mark-mobile_menu_overlay_on');
				});
				if($('.nio-mark-mobile_menu-dropdown li.dropdown ul').length){
					$('.nio-mark-mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.nio-mark-mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			NioMarkSkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			NioMarkMarketingslide: function (){
				$('#nio-mark-project-slide').owlCarousel({
					margin: 0,
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					autoplay: true,
					animateOut: 'zoomOut',
					animateIn: 'zoomIn',
					transitionStyle : "goDown",
					navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
				})
			},
			bannerParalax: function (){
				$('.banner_parallax').jarallax({
					speed: 0.3,
				});
			},
			NioMarkTestimonialslide: function (){
				$('#nio-mark-test-slider').owlCarousel({
					margin: 0,
					items: 1,
					loop: true,
					nav: false,
					dots: false,
					autoplay: true,
				})
			},
			NioMarkGoogleMap: function (){
				if ( $('#nio-mark_map').length ){
					var $lat = $('#nio-mark_map').data('lat');
					var $lon = $('#nio-mark_map').data('lon');
					var $zoom = $('#nio-mark_map').data('zoom');
					var $marker = $('#nio-mark_map').data('marker');
					var $info = $('#nio-mark_map').data('info');
					var $markerLat = $('#nio-mark_map').data('mlat');
					var $markerLon = $('#nio-mark_map').data('mlon');
					var map = new GMaps({
						el: '#nio-mark_map',
						lat: $lat,
						lng: $lon,
						scrollwheel: false,
						scaleControl: true,
						streetViewControl: false,
						panControl: true,
						disableDoubleClickZoom: true,
						mapTypeControl: false,
						zoom: $zoom,
					});
					map.addMarker({
						lat: $markerLat,
						lng: $markerLon,
						icon: $marker,    
						infoWindow: {
							content: $info
						}
					})
				}
			},
			NioMarkclientSlide: function (){
				$('.nio-mark-slider-wrap').owlCarousel({
					margin: 30,
					loop:true,
					responsiveClass:true,
					nav: false,
					dots: false,
					autoplay: true,
					smartSpeed: 1000,
					responsive:{
						0:{items:2},
						480:{items:2},
						600:{items:3},
						800:{items:4},
						1024:{items:4}
					}
				})
			},
			NioinsStickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.nio-ins-header-main-menu-wrapper').addClass('nio-ins-sticky-on')
					} else {
						jQuery('.nio-ins-header-main-menu-wrapper').removeClass('nio-ins-sticky-on')
					}
				})
			},
			NioInssearchPopUp: function (){
				if($('.search-box-outer').length) {
					$('.search-box-outer').on('click', function() {
						$('body').addClass('nio-ins-search-active');
					});
					$('.nio-ins-close-search').on('click', function() {
						$('body').removeClass('nio-ins-search-active');
					});
				}
			},
			NioinsMobileMenu: function (){
				$('.open_nio-ins-mobile_menu').on("click", function() {
					$('.nio-ins-mobile_menu_wrap').toggleClass("nio-ins-mobile_menu_on");
				});
				$('.open_nio-ins-mobile_menu').on('click', function () {
					$('body').toggleClass('nio-ins-mobile_menu_overlay_on');
				});
				if($('.nio-ins-mobile_menu-dropdown li.dropdown ul').length){
					$('.nio-ins-mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.nio-ins-mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			NioinsSkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}
						
					});
				};
			},
			NioInsTestimonial: function (){
				$(window).on('load',function(){
					$('.nio-ins-testimonial-slide').owlCarousel({
						items: 1,
						nav: false,
						dots: true,
						loop:true,
						autoplay: false,
						smartSpeed: 300,
					})
				});
				if($('.nio-ins-circle').length){
					;(function() {
						var proto = $.circleProgress.defaults,
						originalDrawEmptyArc = proto.drawEmptyArc;

						proto.emptyThickness = 5; 
						proto.drawEmptyArc = function(v) {
							var oldGetThickness = this.getThickness, 
							oldThickness = this.getThickness(),
							emptyThickness = this.emptyThickness || _oldThickness.call(this),
							oldRadius = this.radius,
							delta = (oldThickness - emptyThickness) / 2;

							this.getThickness = function() {
								return emptyThickness;
							};

							this.radius = oldRadius - delta;
							this.ctx.save();
							this.ctx.translate(delta, delta);

							originalDrawEmptyArc.call(this, v);

							this.ctx.restore();
							this.getThickness = oldGetThickness;
							this.radius = oldRadius;
						};
					})();
					$('.nio-ins-circle').circleProgress({
						emptyThickness: 10,
						size: 160,
						thickness: 10,
						lineCap: 'round',
						emptyFill: '#eee5e2',
						fill: {
							gradient: ['#ffe388', ['#fdb153', 0.7]],
							gradientAngle: Math.PI * -0.3
						}  
					});

					$('.first.nio-ins-circle').circleProgress({
						value: .62
					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(62 * progress) + '<span>%</span>');
					});


					$('.second.nio-ins-circle').circleProgress({
						value: .8,

					}).on('circle-animation-progress', function(event, progress) {
						$(this).find('strong').html(Math.round(80 * progress) + '<span>%</span>');
					});
					var el = $('.nio-ins-circle'),
					inited = false;
					el.appear({ force_process: true });

					el.on('appear', function() {
						if (!inited) {
							el.circleProgress();
							inited = true;
						}
					});
				};
			},
			
		}
	}
	jQuery(document).ready(function (){
		Consbus.init();
	});

})();