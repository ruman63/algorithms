export default class QuickSort {
    
    constructor(array) {
        this.array = Array.from(array);
        this.original = Array.from(array);
        this.comparisons = 0;
    }

    partition(beg, end) {
        let up = beg;
        let dwn = end;
        let piv = beg;
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
            }
        }
        this.array[beg] = this.array[dwn];
        this.array[dwn] = pivEl;
        return dwn;
    }
    
    sort(start, end) {
        if(start >= end) {
            return;
        }
        let piv = this.partition(start, end);
        this.sort(start, piv-1);
        this.sort(piv+1, end);
    }
    
    static perform (array) {
        let algo = new QuickSort(array);
        algo.sort(0, array.length-1);
        return algo;
    }
}