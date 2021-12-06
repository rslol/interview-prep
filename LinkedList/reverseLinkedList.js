// Reverse a linked list 
// If single node or null: return null if null, return single node if single node is given 

const reverseLinkedList = head => {
    let prev = null;
    let current = head; 

    while (current) {
        let next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next;
    }

    return prev;
}