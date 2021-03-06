requirejs.config({
    paths: {
        "jquery": "lib/jquery",
        "ui.jquery": "lib/jquery-ui-1.11.4.custom.min",
        "select2": "lib/select2-4.0.2/dist/js/select2.min",
        "underscore": "lib/underscore",
        "backbone_base": "lib/backbone",
        "backbone_sync": "lib/backbone_sync",
        "backbone_collectionsubset": "lib/backbone.collectionsubset",
        "backbone_subviews": "lib/backbone.subviews",
        "backbone": "lib/backbone.shim",
        "better_file_input": "lib/better_file_input",
        "remote_submit": "lib/remote_submit",
        "pen": "lib/pen-0.0.1.min",
        "handlebars": "lib/templates"
    },
    shim: {
        "underscore": {
            "exports": "_"
        },
        "backbone_base": {
            "deps": ["underscore", "jquery", "ui.jquery", "pen",
                   "better_file_input", "remote_submit"],
            "exports": "Backbone"
        },
        "backbone_sync": {
            "deps": ["backbone_base"],
            "exports": "Backbone"
        },
        "backbone_collectionsubset": {
            "deps": ["backbone_base"],
            "exports": "Backbone"
        },
        "backbone": {
            "deps": ["backbone_sync", "backbone_collectionsubset"],
            "exports": "Backbone"
        },
        "pen": {
            "exports": "Pen"
        },
        "ui.jquery": ["jquery"],
        "backbone_subviews": ["backbone_base"],
        "handlebars": {
            "deps": ["lib/handlebars.runtime"],
            "exports": "Handlebars"
        }
    }
});
