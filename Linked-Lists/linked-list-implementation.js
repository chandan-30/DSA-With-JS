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
            const newNode = {
                value,
                next: null,
            }
            this.tail.next = newNode;
            this.tail = newNode;
            this.length = this.length + 1;
        }
    }

    _prepend( value ) {
        if( this.head ) {
            const newNode = {
                value,
                next: this.head,
            }
            this.head = newNode;
            this.length++;
        }
    }
}

const myLinkedList = new LinkedList( 1 );
myLinkedList._append( 2 );
myLinkedList._prepend( 0 );
console.log( myLinkedList );