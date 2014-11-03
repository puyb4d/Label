WAF.define('Label', ['waf-core/widget', 'Text'], function(widget, Text) {
    "use strict";

    var Label = widget.create('Label', Text, {
        tagName: 'label',
        getWidget: function() {
            return widget.get(this.node.getAttribute('for'));
        },
        setWidget: function(widget) {
            this.node.setAttribute('for', widget.node.id);
        }
    });

    return Label;
});
