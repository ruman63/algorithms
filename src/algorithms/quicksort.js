export default class QuickSort {
    
    constructor(array) {
        this.array = Array.from(array);
        this.original = Array.from(array);
        this.comparisons = 0;
    }

    partition(beg, end) {
        let localComparisons = 0;
        let up = beg;
        let dwn = end;
        let piv = beg;
        let pivEl = this.array[piv];
        while( up < dwn ) {
            while( this.array[up] <= pivEl) {
                up = up + 1;
                localComparisons++;
            }
            localComparisons++;
            while( this.array[dwn] > pivEl) {
                dwn = dwn - 1;
                localComparisons++;
            }
            localComparisons++;
            if(up < dwn ){
                this.array.swap(up, dwn);
            }
        }
        this.array[beg] = this.array[dwn];
        this.array[dwn] = pivEl;
        return [dwn, localComparisons];
    }
    
    sort(start, end) {
        if(start >= end) {
            return 0;
        }
        let values = this.partition(start, end);
        let piv = values[0];
        let comparisons = values[1];

        return comparisons + this.sort(start, piv-1) + this.sort(piv+1, end);
    }
    
    static perform (array) {
        let algo = new QuickSort(array);
        algo.comparisons = algo.sort(0, array.length-1);
        return algo;
    }
}