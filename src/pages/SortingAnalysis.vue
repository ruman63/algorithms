<template>
    <div class="container mx-auto">
        <div class="flex justify-between items-center w-full">
            <div class="flex-1 text-left">
                <router-link to="/" class="px-3 py-2 rounded bg-grey-light hover:bg-teal hover:text-white no-underline text-black inline-flex items-center font-bold">
                    <svg class="h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                    Back
                </router-link>
            </div>
            <h1 class="flex-1 text-center my-8 w-1/3">
                Sorting Analysis
            </h1>
            <div class="flex-1"></div>
        </div>
        <div class="flex justify-center text-left items-end mb-8">
            <div class="field flex flex-col mx-1 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold">From (N)</label>
                <input class="px-2 py-1 bg-white border rounded" type="text" v-model="start" placeholder="From">
            </div>
            <div class="field flex flex-col mx-1 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold">To (N)</label>
                <input class="px-2 py-1 bg-white border rounded" type="text" v-model="end" placeholder="To">
            </div>
            <div class="field flex flex-col mx-1 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold">Steps</label>
                <input class="px-2 py-1 bg-white border rounded" type="text" v-model.number="tickCount" placeholder="Steps">
            </div>
            <div class="field flex flex-col mx-1 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold">Iterations</label>
                <input class="px-2 py-1 bg-white border rounded" type="text" v-model="iterations" placeholder="Iterations">
            </div>
            <div class="field flex flex-col mx-1">
                <button type="button" 
                    :disabled="calculating"
                    class="px-4 py-1 bg-teal text-white font-semibold uppercase border border-teal-dark rounded" 
                    :class="{'bg-grey-dark': calculating}"
                    @click="analyse"
                    v-text="calculating ? 'Analysing...' : 'Analyse'">
                </button>
            </div>
        </div>
        <div ref="chartarea" class="ct-chart ct-minor-seventh"></div>
    </div>
</template>
<script>
import { Line } from 'chartist';
import "chartist/dist/chartist.css";
import QuickSort from './../algorithms/quicksort';
import MergeSort from './../algorithms/mergesort';
import InsertionSort from './../algorithms/insertionsort';
export default {
    data() {
        return {
            start: 10,
            iterations: 20,
            end: 500,
            tickCount: 50,
            calculating: false,
            graph: null,
            algorithms: {
                quickSort(array) {
                    return QuickSort.perform(array).comparisons;
                },
                insertionSort(array) {
                    return InsertionSort.perform(array).comparisons;
                },
                mergeSort(array) {
                    return MergeSort.perform(array).comparisons;
                }
            }
        }
    },

    computed: {
        stepSize() {
            return Math.ceil((this.end - this.start) / (this.tickCount - 1) );
        },
        valuesOfN() {
            return (new Array(this.tickCount)).fill(0).map((el, index) => {
                return parseInt(this.start) + (index * this.stepSize);
            });
        }
    },
    
    methods: {
        generate() {
            return this.valuesOfN.map((n) => {
                return (new Array(this.iterations)).fill().map(() => {
                    return Array.random(n);
                });
            });
        },
        analyse() {
            let arrays = this.generate();
            this.graph.data.labels = this.valuesOfN;
            this.graph.data.series = [];
            Object.keys(this.algorithms).forEach((key) => {
                this.performOperation(arrays, this.algorithms[key]).then( comparisons => {
                    this.calculating = false;
                    this.graph.data.series.push(comparisons);
                    this.graph.update();
                })
            });
        },
        performOperation(arrays, operation) {
            return new Promise((resolve, reject) => {
                try {
                    let comparisonArray = [];
                    for(let i=0; i< arrays.length; i++) {
                        var totalComparisons = 0;
                        for(let j=0; j< arrays[i].length; j++) {
                            totalComparisons += operation(arrays[i][j]);
                        }
                        comparisonArray[i] = totalComparisons/arrays[i].length;
                    }
                    resolve(comparisonArray);
                } catch(e) {
                    reject();
                }
            });
        },
        initGraph(series, labels) {
            this.graph = new Line(this.$refs.chartarea, { labels, series }, {
                low: 0,
                showArea: true,
                showPoint: true,
            });

            this.graph.on('draw', function(data) {
                if(data.type === 'line') {
                    let length = data.element._node.getTotalLength();
                    data.element.attr({
                        style: `stroke-dasharray: ${length}`
                    })
                    data.element.animate({
                        'stroke-dashoffset': {
                            from: length,
                            dur: 900,
                            to: 0
                        }
                    });
                }
                if(data.type === 'point') {
                    data.element.animate({
                        opacity: {
                            begin: 1000,
                            from: 0,
                            to: 1,
                            dur: 200,
                        }
                    })
                }
            });
        }
    },
    mounted() {
        this.initGraph([(new Array(this.valuesOfN.length)).fill(0)], this.valuesOfN);
        this.analyse();
    }
}
</script>

