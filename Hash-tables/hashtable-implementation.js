class Hash {
    constructor(size) {
        // Initialize the hash table with the specified size.
        this.hashTable = new Array(size);
    }

    // Private hash function to calculate the index based on the key.
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.hashTable.length;
        }
        return hash;
    }

    // Method to set a key-value pair in the hash table.
    set(key, value) {
        const index = this._hash(key);
        if (!this.hashTable[index]) {
            this.hashTable[index] = [];
        }
        this.hashTable[index].push([key, value]);
    }

    // Method to get the value associated with a key from the hash table.
    get(key) {
        let currentBucket = this.hashTable[this._hash(key)];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined; // Key not found.
    }
}

// Example usage:
let hashTable = new Hash(50); // Create a hash table with a size of 50.
hashTable.set('name', 'sai chandan'); // Set a key-value pair.
console.log(hashTable.get('name')); // Retrieve the value associated with the key 'name'.
