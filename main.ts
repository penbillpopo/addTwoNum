class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*產生ListNode的陣列 */
function madeNodeLink(numArr:Array<number>):Array<ListNode>{
    let nodeArr:Array<ListNode> = []
    for(let i = 0;i<numArr.length;i++){
        nodeArr.push(new ListNode(numArr[i],null))
    }
    for(let i = 0;i<nodeArr.length;i++){
        if(i<nodeArr.length-1){
            nodeArr[i].next = nodeArr[i+1]
        }
    }
    return nodeArr
}

/* 題目從此開始 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null):ListNode | null {
    return combineListNode(l1,l2)
};

/* 解答 */
let nodeArr1 = madeNodeLink([9,9,9,9,9,9,9])
let nodeArr2 = madeNodeLink([9,9,9,9])

function combineListNode(node1:ListNode|null,node2:ListNode|null,isCarry = false):ListNode|null{
    if(!node1&&!node2){
        if(isCarry){
            const lastSumNode = new ListNode(1,null)
            lastSumNode.next = null;
            return lastSumNode
        }else{
            return null
        }
    }
    const sum = (node1?.val||0)+(node2?.val||0)+Number(isCarry)
    const newSumNode = new ListNode(sum%10,null)
    newSumNode.next = combineListNode((node1?.next||null),(node2?.next||null),sum>=10);
    return newSumNode
}
