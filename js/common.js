$(() => {
    $('.header:not(.lead)').on('click', event => {
        const $header = $(event.target);
        $header.toggleClass('active')
            .next().next('section').toggleClass('collapsed');
    });
});