/*
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed 
list.
*/

const reversedMNLink = (head, left, right) => {
    let prev = null; 
    let current = head; 
    let start = head;
    // This is how we track what node we are on
    let count = 1;
    while (count < left) {
        // slide everything else forward by 1 till count equals left 
        start = current; 
        current = current.next; 
        count++;
    }
    let newList = null; 
    let tail = current;
    while (count >= left && count <= right) {
        const next = current.next; 
        current.next = newList; 
        newLest = current; 
        current = next;
        count++;
    }

    start.next = newList; 
    tail.next = current; 

    if (left >  1) {
        return head;
    } else {
        return newList;
    }
}