//创建链表
const createList = value => {
    return createNode(value);
}

//创建链点----
const createNode = value => {
    return {
        data: value,
        next: null
    }
}
//添加链点----节点
const appendList = (list, value) => {
    const node = createNode(value); //创建一个新节点
    //list.next!==null
    while (list.next) {//这是遍历找到最后一个节点，从最后一个节点添加，如果是最后一个节点next=null，如果不是继续找
        list = list.next;
    }
    //跳出了循环就是找到了最后一个节点，才会走下面代码
    //list.next===null
    list.next = node;
    return node;//这里不需要返回根节点，而是返回创建的新节点
}


//删除节点   搞清楚list是整个链还是个啥
const removeFromList = (list, node) => {
    if (list === null) {
        return undefined;
    } else if (list === node) {
        let root = list.next;
        list.next = null;
        return root;
    } else {
        let index = list.next;
        let last;
        while (index !== node) {
             last = index;//一定要记录上一个
            index = index.next;
        }
        last.next = node.next;
        return list;
    }
}


//遍历节点
const travelList = (list, fn) => {
    while (list !== null) {//从第一个节点开始
        fn(list);
        list = list.next;
    }
}


const list = createList(10);//只是一时的根节点，并不是一整条链，每个节点都认为自己是根节点

const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
// console.log(list);
let result = removeFromList(list, node3);
// console.log(result);
// console.log(list);


// travelList( list, node => {console.log(node.data);} );
