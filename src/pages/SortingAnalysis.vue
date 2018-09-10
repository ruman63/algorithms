<template>
    <div class="container mx-auto">
        <div class="flex justify-between items-center w-full">
            <div class="flex-1 text-left">
                <router-link to="/" class="px-3 py-2 rounded bg-grey-light hover:bg-teal hover:text-white no-underline text-black inline-flex items-center md:font-bold text-xs md:text-base">
                    <svg class="h-3 md:h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                    Back
                </router-link>
            </div>
            <h1 class="flex-1 text-xl md:text-3xl text-center my-8 w-1/3 whitespace-no-wrap">
                Sorting Analysis
            </h1>
            <div class="flex-1 text-right">
                <a href="https://github.com/ruman63/algorithms/tree/master/src/algorithms" class="inline-flex items-center whitespace-no-wrap text-teal-dark px-3 py-1 rounded no-underline text-xs uppercase font-semibold">
                    <svg class="h-3 md:h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    Source Code
                </a>
            </div>
        </div>
        <div class="flex flex-wrap justify-center text-left items-end mb-8">
            <div class="field flex flex-col mx-1 my-3 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold mb-1">From (N)</label>
                <input class="px-2 py-1 bg-white border rounded w-full focus:border-teal" type="number" v-model.number="start" placeholder="From">
            </div>
            <div class="field flex flex-col mx-1 my-3 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold mb-1">To (N)</label>
                <input class="px-2 py-1 bg-white border rounded w-full focus:border-teal" type="number" v-model.number="end" placeholder="To">
            </div>
            <div class="field flex flex-col mx-1 my-3 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold mb-1">Steps</label>
                <input class="px-2 py-1 bg-white border rounded w-full focus:border-teal" type="number" v-model.number="tickCount" placeholder="Steps">
            </div>
            <div class="field flex flex-col mx-1 my-3 w-32">
                <label for="" class="uppercase text-xs tracking-wide text-grey-dark font-semibold mb-1">Iterations</label>
                <input class="px-2 py-1 bg-white border rounded w-full focus:border-teal" type="number" v-model.number="iterations" placeholder="Iterations">
            </div>
            <div class="field flex flex-col mx-1">
                <button type="button" 
                    :disabled="calculating"
                    class="px-4 py-1 bg-teal my-3 text-white font-semibold uppercase border border-teal-dark rounded" 
                    :class="{'bg-grey-dark': calculating}"
                    @click="analyse"
                    v-text="calculating ? 'Analysing...' : 'Analyse'">
                </button>
            </div>
        </div>
        <div class="legends flex flex-wrap justify-center mb-4">
            <div class="legend flex items-center mx-3 my-3">
                <span class="inline-block bg-teal w-8 h-8 mr-2 border-2 border-grey-dark"></span>
                <span>Quick Sort</span>
            </div>
            <div class="legend flex items-center mx-3 my-3">
                <span class="inline-block bg-blue w-8 h-8 mr-2 border-2 border-grey-dark"></span>
                <span>Insertion Sort</span>
            </div>
            <div class="legend flex items-center mx-3 my-3">
                <span class="inline-block bg-purple w-8 h-8 mr-2 border-2 border-grey-dark"></span>
                <span>Merge Sort</span>
            </div>
        </div>
        <div class="mb-12">
            <div ref="chartarea" class="ct-chart ct-minor-seventh"></div>
        </div>
        <div class="flex justify-center mb-12">
            <table class="table">
                <thead>
                    <tr>
                        <th rowspan="2">Array Size (N)</th>
                        <th colspan="3">Average Comparisons</th>
                    </tr>
                    <tr>
                        <th>Quick</th>
                        <th>Insertion</th>
                        <th>Merge</th>
                    </tr>
                </thead>
                <tbody v-if="comparisons.length">
                    <tr v-for="(value, index) in valuesOfN" :key="index">
                        <td v-text="value" class="font-semibold text-lg"></td>
                        <td class="font-bold text-teal" v-text="comparisons[0].length ? comparisons[0][index] : 0"></td>
                        <td class="font-bold text-blue" v-text="comparisons[1].length ? comparisons[1][index] : 0"></td>
                        <td class="font-bold text-purple" v-text="comparisons[2].length ? comparisons[2][index] : 0"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { Line } from 'chartist';
import QuickSort from './../algorithms/quicksort';
import MergeSort from './../algorithms/mergesort';
import InsertionSort from './../algorithms/insertionsort';
export default {
    data() {
        return {
            start: 25,
            iterations: 20,
            end: 2000,
            tickCount: 25,
            calculating: false,
            graph: null,
            comparisons: [],
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
    watch: {
        comparisons() {
            this.graph.data.series = (this.comparisons);
            this.graph.update();
        }
    },

    computed: {
        stepSize() {
            return Math.ceil((this.end - this.start) / (this.tickCount - 1) );
        },
        valuesOfN() {
            return (new Array(this.tickCount)).fill(0).map((el, index) => {
                return this.start + (index * this.stepSize);
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
            this.$emit('started');
            setTimeout(() => {
                let arrays = this.generate();
                this.graph.data.labels = this.valuesOfN;
                this.graph.data.series = [];
                this.comparisons = Object.keys(this.algorithms).map((key) => {
                    return this.performOperation(arrays, this.algorithms[key]);
                });
                this.$emit('completed');
            }, 0);
        },
        performOperation(arrays, operation) {
            let comparisonArray = [];
            for(let i=0; i< arrays.length; i++) {
                var totalComparisons = 0;
                for(let j=0; j< arrays[i].length; j++) {
                    totalComparisons += operation(arrays[i][j]);
                }
                comparisonArray[i] = totalComparisons/arrays[i].length;
            }
            return comparisonArray;
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
        this.$on('started', () => {
            this.calculating = true;
            console.log('started');
        });
        this.$on('completed', () => {
            this.calculating = false;
            console.log('ended');
        });
        
        this.comparisons = [
            (new Array(this.valuesOfN.length)).fill(0),
            (new Array(this.valuesOfN.length)).fill(0),
            (new Array(this.valuesOfN.length)).fill(0),
        ],
        this.initGraph([(new Array(this.valuesOfN.length)).fill(0)], this.valuesOfN);
        setTimeout(this.analyse, 0);
    }
}
</script>

