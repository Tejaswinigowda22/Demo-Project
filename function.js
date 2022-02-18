$(function () {

    var jsondata = [
        { "id": "ajson1", "parent": "#", "text": "Simple root node", icon: 'glyphicon glyphicon-folder-open', "a_attr": { type: 'folder' } },
        //    { "id": "ajson2", "parent": "#", "text": "Root node 2", icon: 'glyphicon glyphicon-folder-open', "a_attr": {type:'folder'} },
        //    { "id": "ajson3", "parent": "ajson2", "text": "Child 1", icon: 'glyphicon glyphicon-folder-open', "a_attr": {type:'folder'} },
        //    { "id": "ajson4", "parent": "ajson2", "text": "Child 2", icon: 'glyphicon glyphicon-folder-open', "a_attr": {type:'folder'} },
    ];
    for (i = 1; i <= 20000; i++) {
        id1 = "rParent" + i
        id2 = "#"
        id3 = "RootNode"
        elem = { "id": id1, "parent": id2, "text": id3, icon: 'glyphicon glyphicon-folder-open', "a_attr": { type: 'folder' } }
        var root = jsondata.push(elem);
    }

    createJSTree(jsondata);
});

function getFolderContextMenu($node, tree) {
    return {
        "Create": {
            "separator_before": false,
            "separator_after": true,
            "label": "Create",
            "action": false,

            "submenu": {
                "File": {
                    "seperator_before": false,
                    "seperator_after": false,
                    "label": "File",
                    action: function (obj) {
                        $node = tree.create_node($node, { text: 'New File', icon: 'glyphicon glyphicon-file', a_attr: { type: 'file' } });
                        tree.deselect_all();
                        tree.select_node($node);
                        tree.edit($node);
                    }
                },
                "Folder": {
                    "seperator_before": false,
                    "seperator_after": false,
                    "label": "Folder",
                    action: function (obj) {
                        $node = tree.create_node($node, { text: 'New Folder', icon: 'glyphicon glyphicon-folder-open', a_attr: { type: 'folder' } });
                        tree.deselect_all();
                        tree.select_node($node);
                        tree.edit($node);
                    }
                }
            }
        },
        "Rename": {
            "separator_before": false,
            "separator_after": false,
            "label": "Rename",
            "action": function (obj) {
                tree.edit($node);
            }
        },
        "Remove": {
            "separator_before": false,
            "separator_after": false,
            "label": "Remove",
            "action": function (obj) {
                tree.delete_node($node);
            }
        }
    };
}

function getFileContextMenu($node, tree) {
    return {
        "Rename": {
            "separator_before": false,
            "separator_after": false,
            "label": "Rename",
            "action": function (obj) {
                tree.edit($node);
            }
        },
        "Remove": {
            "separator_before": false,
            "separator_after": false,
            "label": "Remove",
            "action": function (obj) {
                tree.delete_node($node);
            }
        }
    };
}

function createJSTree(jsondata) {
    $('#SimpleJSTree').jstree({
        "core": {
            "check_callback": true,
            'data': jsondata

        },
        "plugins": ["contextmenu"],
        "contextmenu": {
            "items": function ($node) {
                var tree = $("#SimpleJSTree").jstree(true);
                if ($node.a_attr.type === 'file')
                    return getFileContextMenu($node, tree);
                else
                    return getFolderContextMenu($node, tree);
            }
        }
    });
}
