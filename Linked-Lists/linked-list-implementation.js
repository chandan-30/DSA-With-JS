class LinkedList {
    constructor( value ) {
        this.head = {
            value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

}

const myLinkedList = new LinkedList( 1 );
//myLinkedList._append( 2 );
console.log( myLinkedList , myLinkedList.head.next.value );