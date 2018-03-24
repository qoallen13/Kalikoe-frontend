/* Template	:	ICO Crypto v1.0.0 */ ! function(e) {
    "use strict";
    var a = e(window),
        t = (e(document), e("body")),
        n = e(".navbar");

    function s() {
        return a.width()
    }
    "ontouchstart" in document.documentElement || t.addClass("no-touch");
    var i = s();
    a.on("resize", function() {
        i = s()
    });
    var l = e(".is-sticky");
    if (l.length > 0) {
        var o = e("#mainnav").offset();
        a.scroll(function() {
            var e = a.scrollTop();
            a.width() > 991 && e > o.top ? l.hasClass("has-fixed") || l.addClass("has-fixed") : l.hasClass("has-fixed") && l.removeClass("has-fixed")
        })
    }
    e('a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var a = e(this.hash),
                t = !!this.hash.slice(1) && e("[name=" + this.hash.slice(1) + "]"),
                s = i >= 992 ? n.height() - 1 : 0;
            if ((a = a.length ? a : t).length) return e("html, body").animate({
                scrollTop: a.offset().top - s
            }, 1e3, "easeInOutExpo"), !1
        }
    });
    var r = window.location.href,
        d = r.split("#"),
        c = e(".nav li a");
    c.length > 0 && c.each(function() {
        r === this.href && "" !== d[1] && e(this).closest("li").addClass("active").parent().closest("li").addClass("active")
    });
    var h = e(".dropdown");
    h.length > 0 && (h.on("mouseover", function() {
        a.width() > 991 && (e(".dropdown-menu", this).not(".in .dropdown-menu").stop().fadeIn("400"), e(this).addClass("open"))
    }), h.on("mouseleave", function() {
        a.width() > 991 && (e(".dropdown-menu", this).not(".in .dropdown-menu").stop().fadeOut("400"), e(this).removeClass("open"))
    }), h.on("click", function() {
        if (a.width() < 991) return e(this).children(".dropdown-menu").fadeToggle(400), e(this).toggleClass("open"), !1
    })), a.on("resize", function() {
        e(".navbar-collapse").removeClass("in"), h.children(".dropdown-menu").fadeOut("400")
    }), e(".menu-link").on("click", function() {
        e(".navbar-collapse").collapse("hide")
    });
    var u = e(".token-countdown");
    u.length > 0 && u.each(function() {
        var a = e(this),
            t = a.attr("data-date");
        a.countdown(t).on("update.countdown", function(a) {
            e(this).html(a.strftime('<div class="col"><span class="countdown-time">%D</span><span class="countdown-text">Days</span></div><div class="col"><span class="countdown-time">%H</span><span class="countdown-text">Hours</span></div><div class="col"><span class="countdown-time">%M</span><span class="countdown-text">Minutes</span></div><div class="col"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">Seconds</span></div>'))
        })
    });
    var m = e(".content-popup");
    m.length > 0 && m.magnificPopup({
        type: "inline",
        preloader: !0,
        removalDelay: 400,
        mainClass: "mfp-fade bg-team-exp"
    });
    var p = e(".video-play");
    p.length > 0 && p.magnificPopup({
        type: "iframe",
        removalDelay: 160,
        preloader: !0,
        fixedContentPos: !1,
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
            }
        }
    });
    var f = e(".imagebg");
    f.length > 0 && f.each(function() {
        var a = e(this),
            t = a.parent(),
            n = a.data("overlay"),
            s = a.children("img").attr("src"),
            i = void 0 !== n && "" !== n && n.split("-");
        void 0 !== s && "" !== s && (t.hasClass("has-bg-image") || t.addClass("has-bg-image"), "" !== i && "dark" === i[0] && (t.hasClass("light") || t.addClass("light")), a.css("background-image", 'url("' + s + '")').addClass("bg-image-loaded"))
    });
    var g = e("#contact-form"),
        v = e("#subscribe-form");
    if (g.length > 0 || v.length > 0) {
        if (!e().validate || !e().ajaxSubmit) return console.log("contactForm: jQuery Form or Form Validate not Defined."), !0;
        if (g.length > 0) {
            var b = g.find("select.required"),
                y = g.find(".form-results");
            g.validate({
                invalidHandler: function() {
                    y.slideUp(400)
                },
                submitHandler: function(a) {
                    y.slideUp(400), e(a).ajaxSubmit({
                        target: y,
                        dataType: "json",
                        success: function(t) {
                            var n = "error" === t.result ? "alert-danger" : "alert-success";
                            y.removeClass("alert-danger alert-success").addClass("alert " + n).html(t.message).slideDown(400), "error" !== t.result && e(a).clearForm().find(".input-field").removeClass("input-focused")
                        }
                    })
                }
            }), b.on("change", function() {
                e(this).valid()
            })
        }
        if (v.length > 0) {
            var w = v.find(".subscribe-results");
            v.validate({
                invalidHandler: function() {
                    w.slideUp(400)
                },
                submitHandler: function(a) {
                    w.slideUp(400), e(a).ajaxSubmit({
                        target: w,
                        dataType: "json",
                        success: function(t) {
                            var n = "error" === t.result ? "alert-danger" : "alert-success";
                            w.removeClass("alert-danger alert-success").addClass("alert " + n).html(t.message).slideDown(400), "error" !== t.result && e(a).clearForm()
                        }
                    })
                }
            })
        }
    }
    var C = e(".input-line");
    C.length > 0 && C.each(function() {
        var a = e(this);
        e(this).val().length > 0 && a.parent().addClass("input-focused"), a.on("focus", function() {
            a.parent().addClass("input-focused")
        }), a.on("blur", function() {
            a.parent().removeClass("input-focused"), e(this).val().length > 0 && a.parent().addClass("input-focused")
        })
    });
    var x = e(".animated");
    e().waypoint && x.length > 0 && a.on("load", function() {
        x.each(function() {
            var a = e(this),
                t = a.data("animate"),
                n = a.data("duration"),
                s = a.data("delay");
            a.waypoint(function() {
                a.addClass("animated " + t).css("visibility", "visible"), n && a.css("animation-duration", n + "s"), s && a.css("animation-delay", s + "s")
            }, {
                offset: "93%"
            })
        })
    });
    var k = e(".navbar-toggler");
    k.length > 0 && k.on("click", function() {
        e(".remove-animation").removeClass("animated")
    });
    var _ = e("#preloader"),
        D = e("#loader");
    _.length > 0 && a.on("load", function() {
        D.fadeOut(300), t.addClass("loaded"), _.delay(700).fadeOut(300)
    }), e("#particles-js").length > 0 && particlesJS("particles-js", {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#2b56f5"
            },
            shape: {
                type: "circle",
                opacity: .08,
                stroke: {
                    width: 0,
                    color: "#2b56f5"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .15,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .12,
                    sync: !1
                }
            },
            size: {
                value: 6,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .08,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#2b56f5",
                opacity: .15,
                width: 1.3
            },
            move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "repulse"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    })
}(jQuery);
