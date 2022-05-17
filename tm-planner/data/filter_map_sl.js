var filter_map_sl = {
    'slot-pos':                 /makes ([^".]+?)orbs beneficial for ([^".]+?)characters?/i,
    'cd-red':                   /restores.+special cooldowns?.+rewinded/i,
    'silence-red':              /(?:reduces|removes)[^."]+?silence[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'para-red':                 /(?:reduces|removes)[^."]+?paralysis[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'blind-red':                /(?:reduces|removes)[^."]+?(?:blindness|selected debuffs?)[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i
};
