var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
/*產生ListNode的陣列 */
function madeNodeLink(numArr) {
    var nodeArr = [];
    for (var i = 0; i < numArr.length; i++) {
        nodeArr.push(new ListNode(numArr[i], null));
    }
    for (var i = 0; i < nodeArr.length; i++) {
        if (i < nodeArr.length - 1) {
            nodeArr[i].next = nodeArr[i + 1];
        }
    }
    return nodeArr;
}
/* 題目 */
function addTwoNumbers(l1, l2) {
    return combineListNode(l1, l2);
}
;
/* 解答 */
var nodeArr1 = madeNodeLink([9, 9, 9, 9, 9, 9, 9]);
var nodeArr2 = madeNodeLink([9, 9, 9, 9]);
console.log(addTwoNumbers(nodeArr1[0], nodeArr2[0]));
function combineListNode(node1, node2, isCarry) {
    if (isCarry === void 0) { isCarry = false; }
    if (!node1 && !node2) {
        if (isCarry) {
            var lastSumNode = new ListNode(1, null);
            lastSumNode.next = null;
            return lastSumNode;
        }
        else {
            return null;
        }
    }
    var sum = ((node1 === null || node1 === void 0 ? void 0 : node1.val) || 0) + ((node2 === null || node2 === void 0 ? void 0 : node2.val) || 0) + Number(isCarry);
    var newSumNode = new ListNode(sum % 10, null);
    newSumNode.next = combineListNode(((node1 === null || node1 === void 0 ? void 0 : node1.next) || null), ((node2 === null || node2 === void 0 ? void 0 : node2.next) || null), sum >= 10);
    return newSumNode;
}
