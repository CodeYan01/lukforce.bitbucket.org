var filter_map_ca = {
    'slot-pos':                 /makes ([^".]+?)orbs beneficial for ([^".]+?)characters?/i,
    'bind-red':                 /(?:reduces|removes)(?: |[^."]+?, |[^."]+? and )bind[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))( (?:for|on) \w+ characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'desp-red':                 /(?:reduces|removes)(?: |[^."]+? and |[^."]+?, )despair[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'cd-red':                   /restores.+special cooldowns?.+rewinded/i,
    'silence-red':              /(?:reduces|removes)[^."]+?silence[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'para-red':                 /(?:reduces|removes)[^."]+?paralysis[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i
};
