export default class QuickSort {
    
    constructor(array) {
        this.array = Array.from(array);
        this.original = Array.from(array);
        this.comparisons = 0;
    }

    partition(beg, end) {
        let up = beg;
        let dwn = end;
        let piv = Math.round(Math.random() * this.array.length * 10) % (end-beg+1) + beg;    //pivot element
        let pivEl = this.array[piv];
        while( up < dwn ) {
            while( this.array[up] <= pivEl) {
                up = up + 1;
                this.comparisons++;
            }
            this.comparisons++;
            while( this.array[dwn] > pivEl) {
                dwn = dwn - 1;
                this.comparisons++;
            }
            this.comparisons++;
            if(up < dwn ){
                this.array.swap(up, dwn);
                this.comparisons++;
            }
            this.comparisons++;
        }
        this.comparisons++;
        this.array[beg] = this.array[dwn];
        this.array[dwn] = pivEl;
        this.comparisons++;
        return dwn;
    }
    
    sort() {
        let stack = [];
        stack.push({beg: 0, end: this.array.length - 1});
        while( stack.length > 0 ) {
            let args = stack.pop();
            let split = this.partition(args.beg, args.end);
            if(split - 1 > args.beg) {
                stack.push({beg: args.beg, end: split-1});
            }
            if(split + 1 < args.end) {
                stack.push({beg: split+1, end: args.end});
            }
        }
    }
    
    static perform (array){
        let algo = new QuickSort(array);
        algo.sort(0, array.length-1);
        return algo;
    }
}