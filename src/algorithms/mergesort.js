export default class MergeSort {
    
    constructor(array) {
      this.array  = Array.from(array);
      this.original  = Array.from(array);
      this.comparisons  = 0;
    }
    
    merge(start, mid, end) {
        let merged = []
        let i = start, j = mid+1, k = 0;
        while ( i <= mid && j <= end ) {
            if ( this.array[i] < this.array[j] ) {
                merged.push(this.array[i++]);
            }
            else {
                merged.push(this.array[j++]);
            }
            this.comparisons++;
        }
        while ( i <= mid ) {
            merged.push(this.array[i++]);
        }
        while ( j <= end ) {
            merged.push(this.array[j++]);
        }
        for ( let i=start; i<=end; i++ ) {
            this.array[i] = merged[k++];
        }
    }

    sort(beg = 0, end = this.array.length-1) {
        if(beg >= end) {
            return;
        }
        let mid = Math.floor( (beg + end) / 2 );
        this.sort(beg, mid);
        this.sort(mid+1, end);
        this.merge(beg, mid, end);
    }

    static perform(array) {
        let algo = new MergeSort(array);
        algo.sort(0, array.length-1);
        return algo;
    }
}
