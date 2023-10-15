class Node {
    constructor( value ) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor( value ) {
        this.head = {
            value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    _append( value ) {
        if ( this.tail ) {
            const newNode = new Node( value );
            this.tail.next = newNode;
            this.tail = newNode;
            this.length = this.length + 1;
        }
    }

    _prepend( value ) {
        if( this.head ) {
            const newNode = new Node( value );
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while ( currentNode ) {
            arr.push( currentNode.value );
            currentNode = currentNode.next;
        }
        return arr;
    }

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
        newNode.next = tempNode;
        this.length++;
    }

    _traverseToIndex( index ) {
        let counter = 0;
        let currentNode = this.head;
        while ( counter !== index ) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    _remove( index ) {
        if ( index === 0 ) {
            const tempNode = this.head.next;
            this.head = tempNode;
            this.length--;
            return;
        }
        let nodeToMakeChanges = this._traverseToIndex( index - 1 );
        // if ( nodeToMakeChanges.next.next === null ) {
        //     nodeToMakeChanges.next = null;
        // } else {
        //     nodeToMakeChanges.next = nodeToMakeChanges.next.next;
        // }
        let tempNode = nodeToMakeChanges.next;
        nodeToMakeChanges.next = tempNode.next;
        this.length--;
        return;
    }
}

const myLinkedList = new LinkedList( 1 );
myLinkedList._append( 2 );
myLinkedList._prepend( 0 );
myLinkedList._insert( 2, 1.5 );
myLinkedList._insert( 5, 3 );
myLinkedList._insert( 0, -1 );
myLinkedList._remove( 0 );
myLinkedList._remove( 2 );
myLinkedList._remove( 3 );
console.log( myLinkedList.length );
console.log( myLinkedList.printList() );