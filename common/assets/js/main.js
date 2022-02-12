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
    if (paddedThumbId === '0575')
        paddedThumbId = "0" + paddedThumbId;

    // Special case for PFRR Stussy 3000 with extra _1
    if (paddedThumbId === '3000')
        paddedThumbId = paddedThumbId + "_1";

    // Special case for Kung Fu Luffy
    if (paddedThumbId === '5014' || paddedThumbId === '4987')
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png';

    // Special case for Log Vivi
    if (paddedThumbId === '5030' || paddedThumbId === '4989')
        return '/tm-planner/assets/img/new-thumbs/5030.png';

    // Special case for Log Ace
    if (paddedThumbId === '5032' || paddedThumbId === '4991')
        return '/tm-planner/assets/img/new-thumbs/5032.png';

    // Special case for Swimsuit Pudding (white)
    if (paddedThumbId === '5047' || paddedThumbId === '4993')
        return '/tm-planner/assets/img/new-thumbs/5047.png';

    // Special case for Coby (EX)
    if (paddedThumbId === '5055' || paddedThumbId === '4995')
        return '/tm-planner/assets/img/new-thumbs/5055.png';

    // Special case for Helmeppo (EX)
    if (paddedThumbId === '5056' || paddedThumbId === '4996')
        return '/tm-planner/assets/img/new-thumbs/5056.png';

    // Special case for VS Units
    // Kaido VS Big Mom
    if (paddedThumbId === '9001')
        return '/tm-planner/assets/img/new-thumbs/3135-1.png';
    if (paddedThumbId === '9002')
        return '/tm-planner/assets/img/new-thumbs/3135-2.png';
    // Ace VS Akainu
    if (paddedThumbId === '9003')
        return '/tm-planner/assets/img/new-thumbs/3253-1.png';
    if (paddedThumbId === '9004')
        return '/tm-planner/assets/img/new-thumbs/3253-2.png';
    // Whitebeard VS Shanks
    if (paddedThumbId === '9005')
        return '/tm-planner/assets/img/new-thumbs/3355-1.png';
    if (paddedThumbId === '9006')
        return '/tm-planner/assets/img/new-thumbs/3355-2.png';

    // Special cases for new thumbs
    if (
        paddedThumbId === '3111' ||
        paddedThumbId === '9999' ||
        paddedThumbId === '3543' ||
        paddedThumbId === '3544' ||
        paddedThumbId === '3545' ||
        paddedThumbId === '3546' ||
        paddedThumbId === '3547'
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
