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

    // Special case for Kung Fu Luffy
    if (thumbId === 5014 || thumbId === 3334)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5014.png';

    // Special case for Garp (N)
    if (thumbId === 5028 || thumbId === 3340)
        return '/tm-planner/assets/img/new-thumbs/5028.png';

    // Special case for Log Vivi
    if (thumbId === 5030 || thumbId === 3348)
        return '/tm-planner/assets/img/new-thumbs/5030.png';

    // Special case for Log Ace
    if (thumbId === 5032 || thumbId === 3350)
        return '/tm-planner/assets/img/new-thumbs/5032.png';

    // Special case for Ivankov (N)
    if (thumbId === 5034 || thumbId === 3352)
        return '/tm-planner/assets/img/new-thumbs/5034.png';

    // Special case for YWB (N)
    if (thumbId === 5036 || thumbId === 3354)
        return '/tm-planner/assets/img/new-thumbs/5036.png';

    // Special case for Duval (N)
    if (thumbId === 5041 || thumbId === 3368)
        return '/tm-planner/assets/img/new-thumbs/5041.png';

    // Special case for Nightmare Luffy (N)
    if (thumbId === 5043 || thumbId === 3357)
        return '/tm-planner/assets/img/new-thumbs/5043.png';

    // Special case for Vergo (N)
    if (thumbId === 5045 || thumbId === 3359)
        return '/tm-planner/assets/img/new-thumbs/5045.png';

    // Special case for Swimsuit Pudding (white)
    if (thumbId === 5047 || thumbId === 3361)
        return '/tm-planner/assets/img/new-thumbs/5047.png';

    // Special case for Usopp & Chopper
    if (thumbId === 5052 || thumbId === 3370)
        return 'https://onepiece-treasurecruise.com/en/wp-content/uploads/sites/2/f5052.png';

    // Special case for Coby (EX)
    if (thumbId === 5055 || thumbId === 3372)
        return '/tm-planner/assets/img/new-thumbs/5055.png';

    // Special case for Helmeppo (EX)
    if (thumbId === 5056 || thumbId === 3373)
        return '/tm-planner/assets/img/new-thumbs/5056.png';

    // Special case for Heracles (N)
    if (thumbId === 5058 || thumbId === 3376)
        return '/tm-planner/assets/img/new-thumbs/5058.png';

    // Special case for Law & Chopper
    if (thumbId === 5064 || thumbId === 3381)
        return '/tm-planner/assets/img/new-thumbs/5064.png';

    // Special case for Local Sea Monster
    if (thumbId === 5065 || thumbId === 3382)
        return '/tm-planner/assets/img/new-thumbs/5065.png';

    // Special case for thumbs not on official website
    if (thumbId > 3086 && thumbId < 3333)
        return '/tm-planner/assets/img/new-thumbs/f' + paddedThumbId + '.png';

    // Special cases for new thumbs
    if (
        thumbId === 9999
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
