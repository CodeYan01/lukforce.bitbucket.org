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

    // Special case for Generic thumb
    if (thumbId === 'generic')
        return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';

    // Zero pad IDs to get correct thumb
    var paddedThumbId = ('0000' + thumbId).slice(-4);

    // Special case for Aokiji 575 with extra 0
    if (thumbId === 575)
        paddedThumbId = "0" + paddedThumbId;

    // Special case for PFRR Stussy 3000 with extra _1
    if (thumbId === 3000)
        paddedThumbId = paddedThumbId + "_1";

    // Special case for Kung Fu Luffy
    if (thumbId === 5014)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png';

    // Special case for Log Vivi
    if (thumbId === 5030 || thumbId === 4989)
        return '/tm-planner/assets/img/new-thumbs/5030.png';

    // Special case for Log Ace
    if (thumbId === 5032 || thumbId === 4991)
        return '/tm-planner/assets/img/new-thumbs/5032.png';

    // Special case for Swimsuit Pudding (white)
    if (thumbId === 5047 || thumbId === 4993)
        return '/tm-planner/assets/img/new-thumbs/5047.png';

    // Special case for Coby (EX)
    if (thumbId === 5055 || thumbId === 4995)
        return '/tm-planner/assets/img/new-thumbs/5055.png';

    // Special case for Helmeppo (EX)
    if (thumbId === 5056 || thumbId === 4996)
        return '/tm-planner/assets/img/new-thumbs/5056.png';

    // Special case for VS Units
    // Kaido VS Big Mom
    if (thumbId === 9001)
        return '/tm-planner/assets/img/new-thumbs/3135-1.png';
    if (thumbId === 9002)
        return '/tm-planner/assets/img/new-thumbs/3135-2.png';
    // Ace VS Akainu
    if (thumbId === 9003)
        return '/tm-planner/assets/img/new-thumbs/3253-1.png';
    if (thumbId === 9004)
        return '/tm-planner/assets/img/new-thumbs/3253-2.png';
    // Whitebeard VS Shanks
    if (thumbId === 9005)
        return '/tm-planner/assets/img/new-thumbs/3355-1.png';
    if (thumbId === 9006)
        return '/tm-planner/assets/img/new-thumbs/3355-2.png';

    // Special cases for new thumbs
    if (
        thumbId === 3111 ||
        thumbId === 3153 ||
        thumbId === 9999 ||
        thumbId === 3467
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
