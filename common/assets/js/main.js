function imgError(img) {
    img.onerror = '';
    img.src = 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';

    return true;
}

function getThumb(thumbId) {
    // Special case for 1 Turn Dmg Ranking
    if (thumbId === '1_turn_dmg_rank')
        return '/optc-cal/assets/img/1_turn_dmg_rank.jpg';

    // Special case for Universal SP Book
    if (thumbId === 'univ_sp')
        return '/optc-cal/assets/img/univ_sp.png';

    // Zero pad IDs to get correct thumb
    var paddedThumbId = ('0000' + thumbId).slice(-4);

    // Special case for Aokiji 575 with extra 0
    if (thumbId === 575)
        paddedThumbId = "0" + paddedThumbId;

    // Special case for Doffy v2
    if (thumbId === 5012 || thumbId === 2263)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5012.png';

    // Special case for Kung Fu Luffy
    if (thumbId === 5014 || thumbId === 2503)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png';

    // Special case for Croc & Daz
    if (thumbId === 5015 || thumbId === 2504)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5015.png';

    // Special case for Lucci v2 6+
    if (thumbId === 5016 || thumbId === 2505)
        return '/tm-planner/assets/img/new-thumbs/5016.png';

    // Special case for Sengoku & Garp
    if (thumbId === 5018 || thumbId === 2507)
        return '/tm-planner/assets/img/new-thumbs/5018.png';

    // Special cases for new thumbs
    if (thumbId === 2363 ||
        thumbId === 2365 ||
        thumbId === 2367 ||
        thumbId === 2369 ||
        thumbId === 2371 ||
        thumbId === 2372 ||
        thumbId === 2373 ||
        thumbId === 2377 ||
        thumbId === 2383 ||
        thumbId === 2384 ||
        thumbId === 2385 ||
        thumbId === 2387
    )
        return '/tm-planner/assets/img/new-thumbs/' + thumbId + '.png';

    return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + paddedThumbId + '.png';
}

function createImgHtml(imgSrc, size, floatLeft) {
    var imgHtml = $('<img></img>');
    imgHtml.attr('src', imgSrc);
    imgHtml.attr('height', size);
    imgHtml.attr('width', size);
    imgHtml.attr('onerror', 'imgError(this)');

    if (floatLeft)
        imgHtml.css('float', 'left');

    return imgHtml;
}

$(document).ready(function() {
    $('#header').load('/common/header.html', function() {
        if (typeof highlightNavbar !== 'undefined')
            highlightNavbar();
    });

    $('#footer').load('/common/footer.html', function() {
        if (typeof showFooter !== 'undefined')
            showFooter();
    });
});
