$(function () {
    // clicked();

    var jsondata = [
        { date: new Date(), "id": "ajson1", "parent": "#", "text": "Simple root node", icon: 'glyphicon glyphicon-folder-open', "a_attr": { type: 'folder' } },
        //    { "id": "ajson2", "parent": "#", "text": "Root node 2", icon: 'glyphicon glyphicon-folder-open', "a_attr": {type:'folder'} },
        //    { "id": "ajson3", "parent": "ajson2", "text": "Child 1", icon: 'glyphicon glyphicon-folder-open', "a_attr": {type:'folder'} },
        //    { "id": "ajson4", "parent": "ajson2", "text": "Child 2", icon: 'glyphicon glyphicon-folder-open', "a_attr": {type:'folder'} },
    ];
    // var $node = $("#SimpleJSTree").jstree("create_node", "#", { "id": "ajson1", "parent": "#", text: "New node ", icon: "glyphicon glyphicon-folder-open", "a_attr": { type: 'folder' } });

    // a = 1;
    // b = 3;
    // function clicked() {

    //     // debugger
    //     $("#SimpleJSTree").remove();
    //     $("#treeView").remove();
    //     let div = document.createElement("div");
    //     div.setAttribute("id", "SimpleJSTree");
    //     document.body.appendChild(div);

    //     let btn = document.createElement("button");
    //     btn.innerHTML = "View More";
    //     btn.setAttribute("id", "treeView");
    //     btn.setAttribute("class", "btn btn-primary");
    //     btn.setAttribute("onclick", " clicked()");
    //     document.body.appendChild(btn);
        // for (i = 1; i <= 5; i++) {
        //     id1 = "rParent" + i
        //     id2 = "#"
        //     id3 = "New Folder " + i;
        //     elem = { "id": id1, "parent": id2, "text": id3, icon: 'glyphicon glyphicon-folder-open', "a_attr": { type: 'folder' } }
        //     var root = jsondata.push(elem);
        //     // var createdNode = tree.get_node(id1);
        //     // createdNode.CreatedTime = new Date();
        // }
    //     a += 3; b += 3;

    createJSTree(jsondata);
    // }
})



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
                        // $node.CreatedTime = new Date();
                        console.log(tree);
                        console.log($node);
                        $node = tree.create_node($node, { date: new Date(), text: 'New File', icon: 'glyphicon glyphicon-file', a_attr: { type: 'file' } });
                        tree.deselect_all();
                        tree.select_node($node);
                        tree.edit($node);
                        var createdNode = tree.get_node($node);

                        createdNode.CreatedTime = new Date().toString();
                        S=tree.show_node($node)
                        console.log(s)
                        // console.log(createdNode.length);

                    }
                },
                "Folder": {
                    "seperator_before": false,
                    "seperator_after": false,
                    "label": "Folder",
                    action: function (obj) {
                        // debugger
                        //    var node = $('#tree').jstree(true).get_node("some_node_id");
                        console.log($node);
                        $node = tree.create_node($node, { text: 'New Folder', icon: 'glyphicon glyphicon-folder-open', a_attr: { type: 'folder' } });
                        // console.log(tree);
                        // console.log(tree.bind);
                        // console.log(tree._cnt);
                        // console.log(tree._cnt);
                        tree.deselect_all();
                        tree.select_node($node);
                        tree.edit($node);
                        // console.log("created node :" + $node)
                        var createdNode = tree.get_node($node);

                        createdNode.CreatedTime = new Date().toString();

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
                var renamedNode = tree.get_node($node.id);
                //renamedNode.CreatedTime = new Date().toString();
                if (renamedNode.ModifiedTime === undefined) {
                    renamedNode.ModifiedTime = new Date().toString();
                } else {
                    renamedNode.ModifiedTime = new Date().toString();
                }
            }
        },
        "Remove": {
            "separator_before": false,
            "separator_after": false,
            "label": "Remove",
            "action": function (obj) {
                tree.delete_node($node);
            }
        },
        "Details": {
            "separator_before": false,
            "separator_after": false,
            "label": "Details",
            "action": function (obj) {
                // XMLDocument
                var id = $node.id;
                console.log("node id :" + id);
                console.log(tree)
                console.log(tree.get_node($node))
                var nodeCreatedDate = tree.get_node(id);
                if (nodeCreatedDate.ModifiedTime === undefined) {
                    alert("Created time :" + nodeCreatedDate.CreatedTime + "\n Type : " + $node.a_attr.type);
                } else {
                    alert("Created Time :" + nodeCreatedDate.CreatedTime + "\n Modified Date : " + nodeCreatedDate.ModifiedTime + "\n Type : " + $node.a_attr.type);
                }

            }
        },
    }
}


function getFileContextMenu($node, tree) {
    return {
        "Rename": {
            "separator_before": false,
            "separator_after": false,
            "label": "Rename",
            "action": function (obj) {
                tree.edit($node);
                var renamedNode = tree.get_node($node.id);
                //renamedNode.CreatedTime = new Date().toString();
                if (renamedNode.ModifiedTime === undefined) {
                    renamedNode.ModifiedTime = new Date().toString();
                } else {
                    renamedNode.ModifiedTime = new Date().toString();
                }
            }
        },
        "Remove": {
            "separator_before": false,
            "separator_after": false,
            "label": "Remove",
            "action": function (obj) {
                tree.delete_node($node);
            }
        },
        "Details": {
            "separator_before": false,
            "separator_after": false,
            "label": "Details",
            "action": function (obj) {
                var id = $node.id;
                console.log("node id :" + id);
                var nodeCreatedDate = tree.get_node(id);
                if (nodeCreatedDate.ModifiedTime === undefined) {
                    alert("Created time :" + nodeCreatedDate.CreatedTime + "\n Type : " + $node.a_attr.type);
                } else {
                    alert("Created Time :" + nodeCreatedDate.CreatedTime + "\n Modified Date : " + nodeCreatedDate.ModifiedTime + "\n Type" + $node.a_attr.type);
                }
            }
        }
    };
}



let a = 1;
function CreateRootMenu($node, tree) {
    for (i = a; i == a; i++) {
        var $node = $("#SimpleJSTree").jstree("create_node", "#", { text: "New Folder " + i, type: "root", icon: "glyphicon glyphicon-folder-open" });
    }
    a++;
    jsondata=$node;
    console.log(jsondata)
    tree.edit($node)
    tree.set_id($node)
    // console.log(tree)
    // console.log(tree.get_node($node))
}


function createJSTree(jsondata) {
    $("#create-btn").click(function ($node, tree) {
        var tree = $("#SimpleJSTree").jstree(true);
        return CreateRootMenu($node,tree)
        console.log(tree)
    });
    $('#SimpleJSTree').jstree({
        "core": {
            "check_callback": true,
            'data': jsondata,
        },
        "plugins": ["contextmenu", "dnd", "search", "state"],
        "search": {
            "case_sensitive": false,
            "show_only_matches": false
        },
        "contextmenu": {
            "items":
                function ($node) {
                    var tree = $("#SimpleJSTree").jstree(true);
                    if ($node.a_attr.type === 'file')
                        return getFileContextMenu($node, tree);
                    else
                        return getFolderContextMenu($node, tree);
                }
        }
    })
}
//fuzzy Searching
$(function () {
    $("#SimpleJSTree").jstree({
        "plugins": ["search"]
    });
    var to = false;
    $('#plugins4_q').keyup(function () {
        if (to) { clearTimeout(to); }
        to = setTimeout(function () {
            var v = $('#plugins4_q').val();
            $('#SimpleJSTree').jstree(true).search(v);
        }, 250);
    });
});




