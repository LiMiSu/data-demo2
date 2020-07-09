const createTree = value =>{
    return {
        data:value,
        children:null,
        parent:null
    };
};

const addChild = (node,value) =>{
    const newNode = {
        data: value,
        children: null,
        parent: node
    };
    node.children=node.children||[];//如果有孩子就保留，如果null就建房间
    node.children.push.call(node.children,newNode);
    return newNode;
}

const travel =(tree,fn) =>{
    fn(tree);
    if (!tree.children){
        return;
    }
    for (let i=0; i<tree.children.length;i++){
        travel(tree.children[i],fn);
    }
}

const find=(tree,node)=>{
    if (tree===node){
        return tree;
    }else if (tree.children){
        for (let i=0;i<tree.children.length;i++){
            const result=find(tree.children[i],node);
            if (result){
                return result;
            }
        }
        return undefined;
    }
    return undefined;
}
const removeNode=(node)=>{
    if (!node.parent){
        return node=null
    }
    const siblings=node.parent.children;
    for (let i=1;i<siblings.length;i++){
        if (siblings[i]===node){
            siblings.splice(i,1);//是一个数组，所以要把房间给删掉，不能直接等于null
        }
    }
}
const tree = createTree(10);
const node2=addChild(tree,20);
const node3=addChild(tree,30);
const node4=addChild(tree,40);
const node5=addChild(tree,50);
//
// const node6=addChild(node4,100);
// const node7=addChild(node4,200);
// const node8=addChild(node4,300);
// console.log(tree);
// const fn=node=>{
//     console.log(node.data);
// }
// removeNode(node4,node7);
// travel(tree,fn);
// const result=find(tree,node6);
removeNode(tree);
console.log(tree)