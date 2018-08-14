export default class InsertionSort {

    constructor(array) {
        this.array = Array.from(array);
        this.original = Array.from(array);
        this.comparisons = 0;
    }
    sort() {
        let current = 1;
        while(current < this.array.length) {
            this.comparisons++;
            let currentEl = this.array[current];
            let position = current - 1;
            while(position >= 0 && this.array[position] > currentEl) {
                this.comparisons+=2;
                this.array[position+1] = this.array[position];
                position--;
            }
            this.comparisons++;
            this.array[position+1] = currentEl;
            current++;
        }
        this.comparisons++;
        return this;
    }
    
    static perform (array) {
        let algo = new InsertionSort(array)
        algo.sort();
        return algo;        
    }
}