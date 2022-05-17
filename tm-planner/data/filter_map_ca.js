var filter_map_ca = {
    'slot-pos':                 /makes ([^".]+?)orbs beneficial for ([^".]+?)characters?/i,
    'dmg-eot':                  /Deals (?:([?\d]+) hits? of )?(random(?: large)?|([?.\d]+)x(?:-([?.\d]+)x)? (character's ATK|the amount of HP subtracted|the damage taken from enemies (?:before the special is activated|in the previous turn)|the damage dealt (?:in (?:Overkill Damage in )?the previous turn|by this character with normal attacks)|Excess Healing done before the special is activated)|([?.\d]+)%(?:-([?.\d]+)%)? of enemies' current HP|([?,\d]+)(?:-([?,\d]+))?) (?:in )?((?:typeless|\[\w+\]|character's type) )?(Fixed )?(True )?damage(, ignoring Normal Attack Only,?)? to (all enemies|random enemies|one enemy|the enemy)(?=((?: with the highest current HP)?))\15 at the end of (?:the|each|every) (?:turn|stage)/i,
    'bind-red':                 /(?:reduces|removes)(?: |[^."]+?, |[^."]+? and )bind[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))( (?:for|on) \w+ characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'desp-red':                 /(?:reduces|removes)(?: |[^."]+? and |[^."]+?, )despair[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'cd-red':                   /restores.+special cooldowns?.+rewinded/i,
    'silence-red':              /(?:reduces|removes)[^."]+?silence[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i,
    'para-red':                 /(?:reduces|removes)[^."]+?paralysis[^."]+?duration (?:by ([?\d]+)(?:-([?\d]+))? turns?|(completely))(?: on ([^."]+?)characters?)?(?:, by ([?\d]+)(?:-([?\d]+))? turns?)?/i
};
