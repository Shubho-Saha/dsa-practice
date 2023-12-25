console.log('HashTable');

class HashTable {
    constructor(size=5) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME =  31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let elem of this.keyMap[index]) {
                if (elem[0] === key) return elem[1];
            }
        }
        return undefined;
    }

    //Doesn't avoid duplicate keys
    keys() {
        let keysArr = [];
        for (let elem of this.keyMap) {
            if (elem) {
                for (let item of elem) {
                    keysArr.push(item[0]);
                }
            }
        }
        return keysArr;
    }

    //Avoid Duplicate Values
    values() {
        let valuesArr = [];
        for (let element of this.keyMap) {
            if (element) {
                for (let item of element) {
                    if (!valuesArr.includes(item[1])) {
                        valuesArr.push(item[1]);
                    }
                }
            }
        }

        return valuesArr;
    }
}

let htable = new HashTable();
htable.set('red', 'color of blood');
htable.set('blue', 'color of sky');
htable.set('pin', 'inky pinky ponky');
htable.set('green', 'color of grass');
htable.set('greens', 'color of grass');

console.log(htable)
console.log(htable.get('green'));
console.log(htable.keys());
console.log(htable.values());