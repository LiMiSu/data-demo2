//链表倒置


function Node(value) {
    this.value = value;
    this.next = null;
}

let node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    node4 = new Node(4),
    node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

//能找到最后一个节点
// function reverse(list) {
//     if (list.next !== null) {
//         return reverse(list.next);
//     } else {
//         return list;//递归出口
//     }
// }//但是最后一个节点根本找不到上一个节点，因为没有任何引用指向上一个节点


//所以得找倒数第二个节点
function reverse(list) {
    if (list.next.next === null) {    //如果是空，那么list就是倒数第二个节点，list.next就是最后一个节点，倒置第一步就是找到最后一个节点让它的的next指向倒数第二个节点。
        let list1 = list.next;
        list1.next = list;     //最后一个节点的next指向倒数第二个节点
        list.next = null;      //这里也需要指向null，当链表只有两个节点时
        return list1;      //最后要返回的是根节点，倒置了最后一个变根
    } else {
        let result = reverse(list.next);//递归  下一个指向null了前一个还指向它呢
        list.next.next = list;    //如果不是倒数第二个节点，不管是第几个，规律都是让自己的下一个节点的next指向自己，然后自己的next指向null，不然它还是指向自己的下一个节点，你指我我指你死循环。
        list.next = null;    //主要是想让原来链表的第一个节点next指向null，也就是新链表的最后一个节点指向null
        return result;
    }
}


//遍历一下结果  递归---一定要理解递归思想，上面也是用了递归
function look(list) {
    if (list === null) return;
    console.log(list.value);
    look(list.next);
}


let newList = reverse(node1);
look(newList);



