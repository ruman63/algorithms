export default class MergeSort {
    
    constructor(array) {
      this.array  = Array.from(array);
      this.original  = Array.from(array);
      this.comparisons  = 0;
    }
    
    merge(start, mid, end) {
        let merged = [];
        let localComparisons = 0;
        let i = start, j = mid+1, k = 0;
        while ( i <= mid && j <= end ) {
            if ( this.array[i] < this.array[j] ) {
                merged.push(this.array[i++]);
            }
            else {
                merged.push(this.array[j++]);
            }
            localComparisons++;
        }
        // Copy Contents of First Array, if left Out 
        while ( i <= mid ) {
            merged.push(this.array[i++]);
        }
        // Copy Content of Second Array, if left Out
        while ( j <= end ) {
            merged.push(this.array[j++]);
        }

        // Copy merged array to the same array.
        for ( let i=start; i<=end; i++ ) {
            this.array[i] = merged[k++];
        }

        return localComparisons;
    }

    sort(beg = 0, end = this.array.length-1) {
        let comp = 0;
        if(beg >= end) {
            return comp;
        }
        let mid = Math.floor( (beg + end) / 2 );
        comp += this.sort(beg, mid) + this.sort(mid+1, end);
        return comp + this.merge(beg, mid, end);
    }

    static perform(array) {
        let algo = new MergeSort(array);
        algo.comparisons = algo.sort(0, array.length-1);
        return algo;
    }
}
