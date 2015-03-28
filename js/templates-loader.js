$(function() {
    var templates = [
        "templateBody",
        "sideNav",
        "about",
        "campaign",
        "concept",
        "faq",
        "howto",
        "privacy",
        "recruit", 
        "recruit/recruit-form",
        "recruit/recruit-manager",
        "recruit/recruit-merit",
        "recruit/recruit-oshiete",
        "recruit/recruit-parttimer",
        "recruit/recruit-pts",
        "recruit/recruit-voice",        
        "recruit/recruit-work",
        "recruitForm",
        "service",
        "shop"
    ];
    var templateCaches = {};

    /* cache elements */
    var $main = $('#main');
    var $side = $('#side');

    $.get('js/templates/recruit/recruit-parttimer.hbs').then(function(data) {
        $main.html(Handlebars.compile(data));
    });
    $.get('js/templates/sideNav.hbs').then(function(data) {
        $side.html(Handlebars.compile(data));
    });

    var hbs = {
        cache: {},
        initialize: function() {
            this.cacheTemplate(templates);
            this.cache = templateCaches;
        },
        /* 將所有 template.hbs 塞到 templateCaches 裡面 */
        cacheTemplate: function(templates) {
            $.each(templates, function(index, value) {
                $.get('js/templates/' + value + '.hbs').then(function(data) {
                    var o = {};
                    o[value] = data;
                    $.extend(templateCaches, o);
                });
            });
        },
        /* 點擊按鈕後切換 template */
        change: function(target) {
            $main.html(Handlebars.compile(this.cache[target]));
            console.log("change page\: handlebars template loaded [" + target + "]." );
        },
        laugth: function(e) {
            console.log(e);
        }
    };
    window.hbs = hbs;
    hbs.initialize();
});
