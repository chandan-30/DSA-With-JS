class Node {
    constructor( value ) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor( value ) {
        this.head = {
            value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    // Append a new node with the given value to the end of the linked list.
    _append( value ) {
        if ( this.tail ) {
            const newNode = new Node( value );
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
        }
    }

    // Prepend a new node with the given value to the beginning of the linked list.
    _prepend( value ) {
        if ( this.head ) {
            const newNode = new Node( value );
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode;
            this.length++;
        }
    }

    // Print the values of all nodes in the linked list as an array.
    printList(  ) {
        const arr = [];
        let currentNode = this.head;
        while ( currentNode ) {
            arr.push( currentNode.value );
            currentNode = currentNode.next;
        }
        return arr;
    }

    // Insert a new node with the given value at the specified index in the linked list.
    _insert( index, value ) {
        if ( index > this.length ) {
            this._append( value );
            return;
        }

        if ( index === 0 ) {
            this._prepend( value );
            return;
        }

        const newNode = new Node( value );
        let nodeToMakeChanges = this._traverseToIndex( index - 1 );
        const tempNode = nodeToMakeChanges.next;
        nodeToMakeChanges.next = newNode;
        newNode.prev = nodeToMakeChanges;
        newNode.next = tempNode;
        tempNode.prev = newNode;
        this.length++;
    }

    // Traverse to the node at the specified index in the linked list.
    _traverseToIndex( index ) {
        let counter = 0;
        let currentNode = this.head;
        while ( counter !== index ) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    // Remove the node at the specified index from the linked list.
    _remove( index ) {
        if ( index === 0 ) {
            const tempNode = this.head.next;
            this.head = tempNode;
            this.length--;
            return;
        }
        if ( index === this.length - 1 ) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return;
        }

        let nodeToMakeChanges = this._traverseToIndex( index - 1 );
        let tempNode = nodeToMakeChanges.next;
        nodeToMakeChanges.next = tempNode.next;
        tempNode.next.prev = nodeToMakeChanges;
        this.length--;
        return;
    }
}

// Example usage:
const myLinkedList = new LinkedList( 1 );
myLinkedList._append( 2 );
myLinkedList._prepend( 0 );
myLinkedList._insert( 2, 1.5 );
myLinkedList._insert( 5, 3 );
myLinkedList._insert( 0, -1 );
myLinkedList._remove( 0 );
myLinkedList._remove( 2 );
myLinkedList._remove( 3 );

console.log( myLinkedList.length ); // Output the length of the linked list.
console.log( myLinkedList.printList() ); // Output the values in the linked list.
