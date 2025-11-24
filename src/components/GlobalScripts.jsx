"use client";

import { useEffect } from "react";

export default function GlobalScripts() {
  useEffect(() => {
    const $ = window.$ || window.jQuery;

    const onLoad = () => {
      (function () {
        "use strict";

        // ==========================
        // Parsley Form Validation
        // ==========================
        if ($("#form").length) {
          $("#form").parsley();
          $("#form")
            .parsley()
            .on("field:success", function () {
              $("ul.parsley-errors-list").not(":has(li)").remove();
            });
        }

        // ==========================
        // Preloader Animations
        // ==========================
        $(document).ready(function () {
          const timeout = 1000;
          $("html").addClass("is-animating");

          if ($(".mry-loader").length) {
            $(".mry-loader").animate({ width: "100%" }, timeout);
          }

          setTimeout(() => $(".mry-preloader").removeClass("mry-active"), timeout);
          setTimeout(() => $("html").removeClass("is-animating"), timeout);
        });

        // ==========================
        // Smooth Scrollbar
        // ==========================
        if (document.querySelector("#scroll")) {
          Scrollbar.use(OverscrollPlugin);
          const scrollbar = Scrollbar.init(document.querySelector("#scroll"), {
            damping: 0.07,
            renderByPixel: true,
            continuousScrolling: true,
            plugins: {
              overscroll: { effect: "bounce", damping: 0.15, maxOverscroll: 80 },
              mobile: { speed: 0.2, alwaysShowTracks: false },
            },
          });

          $(".mry-scroll-hint").on("click", function () {
            scrollbar.scrollTo(0, 550, 1800);
          });
        }

        // ==========================
        // Portfolio Filter & Isotope
        // ==========================
        if ($(".mry-masonry-grid").length) {
          $(".mry-filter a").on("click", function () {
            $(".mry-filter .mry-current").removeClass("mry-current");
            $(this).addClass("mry-current");

            const selector = $(this).data("filter");
            $(".mry-masonry-grid").isotope({ filter: selector });
            return false;
          });

          $(".mry-masonry-grid").isotope({
            filter: "*",
            itemSelector: ".mry-masonry-grid-item",
            percentPosition: true,
            masonry: { columnWidth: ".mry-grid-sizer" },
          });

          // Auto apply filter from URL
          const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
          const categoryMap = {
            "automation-smart-control": ".automation-smart-control",
            "lighting-solutions": ".lighting-solutions",
            "smart-security": ".smart-security",
            "non-smart-electrical": ".non-smart-electrical",
          };
          if (categoryMap[currentPage]) {
            const selector = categoryMap[currentPage];
            $(".mry-masonry-grid").isotope({ filter: selector });
            $(".mry-filter a").removeClass("mry-current");
            $(`.mry-filter a[data-filter="${selector}"]`).addClass("mry-current");
          }
        }

        // ==========================
        // Fancybox
        // ==========================
        if ($('[data-fancybox="works"]').length) {
          $('[data-fancybox="works"]').fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 600,
            transitionDuration: 1000,
            buttons: ["zoom", "slideShow", "thumbs", "close"],
          });
        }

        if ($('[data-fancybox="works-slider"]').length) {
          $('[data-fancybox="works-slider"]').fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 600,
            transitionDuration: 1000,
            buttons: ["zoom", "slideShow", "thumbs", "close"],
          });
        }

        $.fancybox.defaults.hash = false;

        // ==========================
        // Menu Toggle
        // ==========================
        if ($(".mry-menu-btn").length) {
          $(".mry-menu-btn").on("click", function () {
            $(".mry-menu-btn , .mry-menu").toggleClass("mry-active");
          });

          $(".menu-item").on("click", function () {
            $(this).toggleClass("mry-active");
            $(this).children(".sub-menu").toggleClass("mry-active");
          });

          $(document).on("click", function (e) {
            const el = ".mry-menu , .mry-menu-btn-frame , .mry-menu-btn";
            if ($(e.target).closest(el).length) return;
            $(".mry-menu , .mry-menu-btn-frame , .mry-menu-btn").removeClass("mry-active");
          });
        }

        // ==========================
        // Cursor
        // ==========================
        const cursorEl = document.querySelector(".mry-ball");
        if (cursorEl) {
          class Cursor {
            constructor(el) {
              this.el = el;
              document.addEventListener("mousemove", this.move.bind(this), false);
            }
            move(e) {
              const cursorPosition = { left: e.clientX, top: e.clientY };
              TweenMax.to(this.el, 0.3, { left: cursorPosition.left - 20, top: cursorPosition.top - 20 });
            }
          }
          new Cursor(cursorEl);
        }

        // ==========================
        // Swiper Sliders
        // ==========================
        if (document.querySelector(".mry-main-slider")) {
          new Swiper(".mry-main-slider", {
            autoplay: { delay: 10000, disableOnInteraction: false },
            loop: true,
            parallax: true,
            speed: 1200,
            navigation: { nextEl: ".mry-button-next", prevEl: ".mry-button-prev" },
            pagination: { el: ".mry-slider-pagination", clickable: true },
          });
        }

        if (document.querySelector(".mry-team-slider")) {
          new Swiper(".mry-team-slider", { slidesPerView: 3, spaceBetween: 30, loop: true, speed: 1200 });
        }

        if (document.querySelector(".mry-testimonials-slider")) {
          new Swiper(".mry-testimonials-slider", { slidesPerView: 1, spaceBetween: 30, loop: true, speed: 1200 });
        }

        if (document.querySelector(".mry-blog-slider")) {
          new Swiper(".mry-blog-slider", { slidesPerView: 3, spaceBetween: 60, loop: true, speed: 1200 });
        }

        // ==========================
        // ScrollMagic Animations
        // ==========================
        const foElements = document.querySelectorAll(".mry-fo");
        if (foElements.length) {
          const controller = new ScrollMagic.Controller();
          foElements.forEach((el) => {
            new ScrollMagic.Scene({ triggerElement: el, offset: -400 })
              .setTween(el, 0.6, { opacity: 1, y: 0, scale: 1 })
              .addTo(controller);
          });
        }

        // ==========================
        // Mapbox
        // ==========================
        if (document.querySelector("#map-dark")) {
          mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN";
          new mapboxgl.Map({ container: "map-dark", style: "mapbox://styles/stoscar/ckk75h29r02ol17rrilp215vd", center: [-79.3949, 43.6431], zoom: 11 });
        }

        if (document.querySelector("#map-light")) {
          mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN";
          new mapboxgl.Map({ container: "map-light", style: "mapbox://styles/stoscar/ckkb5d37l0euf17r0wws7op4i", center: [-79.3949, 43.6431], zoom: 11 });
        }
      })();
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
