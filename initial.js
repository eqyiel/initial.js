(function($) {
    $.fn.initial = function(options) {
        return this.each(function() {
            var e = $(this);
            var settings = $.extend({
                name: "Jane Doe",
                textColor: "#ffffff",
                backgroundColor: "#222222",
                height: 100,
                width: 100,
                fontSize: 50,
                fontFamily: "sans-serif"
            }, options);

            // Override from "data-" attributes, if any
            settings = $.extend(settings, e.data());

            var canvas = $("<canvas>").attr({
                width: settings.width + "px",
                height: settings.height + "px"
            }).get(0);

            var initials = settings.name.match(/^(\b[A-Z])[\w\s]+(\b[A-Z])\w+$/);
            initials = (initials[1] + initials[2]).toUpperCase();
            var ctx = canvas.getContext("2d");
            ctx.font = settings.fontSize + "px " + settings.fontFamily;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = settings.backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = settings.textColor;
            ctx.fillText(initials, canvas.width / 2, canvas.height / 2);
            e.attr("src", canvas.toDataURL());
        });
    };
}(jQuery));
