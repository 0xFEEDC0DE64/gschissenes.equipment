jQuery(document).ready(function($){
    $('#mainCarousel').on('slide.bs.carousel', function (e) {
        console.log(e.to);
        if (e.to == 0) {
            $('#mainCarousel .carousel-inner .carousel-item:last')
                .remove();
            $.get('api.php', function(data) {
                $('#mainCarousel .carousel-inner')
                    .prepend(
                        $('<div>')
                            .addClass('carousel-item')
                            .append($('<img />')
                                .attr('src', data)
                            )
                    );
            });
        } else if (e.to == 2) {
            $('#mainCarousel .carousel-inner .carousel-item:first')
                .remove();
            $.get('api.php', function(data) {
                $('#mainCarousel .carousel-inner')
                    .append(
                        $('<div>')
                            .addClass('carousel-item')
                            .append($('<img />')
                                .attr('src', data)
                            )
                    );
            });
        }
    });

    $.get('api.php', function(data) {
        $('#mainCarousel .carousel-inner')
            .prepend(
                $('<div>')
                    .addClass('carousel-item')
                    .append($('<img />')
                        .attr('src', data)
                    )
            );
    });

    $.get('api.php', function(data) {
        $('#mainCarousel .carousel-inner')
            .append(
                $('<div>')
                    .addClass('carousel-item')
                    .append($('<img />')
                        .attr('src', data)
                    )
            );
    });
})
