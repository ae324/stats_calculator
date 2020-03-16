Random = require("./modules/Random");
Descriptive = require("./modules/Descriptive");
Sampling = require("./modules/Sampling");

class StatsCalculator {
    constructor() {
        this.result = null;
    }

    randomIntNoSeed(min, max) {
        this.result = Random.randomIntNoSeed(min, max);
    }
    randomFlNoSeed(min, max) {
        this.result = Random.randomFlNoSeed(min, max);
    }
    randomIntSeed(seed, min, max) {
        this.result = Random.randomIntSeed(seed, min, max);
    }
    randomFlSeed(seed, min, max) {
        this.result = Random.randomFlSeed(seed, min, max);
    }
    randomFlListSeeded(seed, min, max, n) {
        this.result = Random.randomFlListSeeded(seed, min, max, n);
    }
    randomIntListSeeded(seed, min, max, n) {
        this.result = Random.randomIntListSeeded(seed, min, max, n);
    }
    selectRandomItem(arrList) {
        this.result = Random.selectRandomItem(arrList);
    }
    selectRandomSeededItem(seed, arrList) {
        this.result = Random.selectRandomSeededItem(seed, arrList);
    }
    selectNItems(arrList, n) {
        this.result = Random.selectNItems(arrList, n);
    }
    selectNItemsSeeded(seed, arrList, n) {
        this.result = Random.selectNItemsSeeded(seed, arrList, n);
    }

    mean(array) {
        this.result = Descriptive.mean(array);
    }
    median(array) {
        this.result = Descriptive.median(array);
    }
    mode(array) {
        this.result = Descriptive.mode(array);
    }
    variance(array, sample=true) {
        this.result = Descriptive.variance(array, sample=true);
    }
    stdDev(array, sample=true) {
        this.result = Descriptive.stdDev(array, sample=true);
    }
    quartiles(array) {
        this.result = Descriptive.quartiles(array);
    }
    skewness(array) {
        this.result = Descriptive.skewness(array);
    }
    sample_correlation(xArray, yArray) {
        this.result = Descriptive.sample_correlation(xArray, yArray);
    }
    population_correlation(xArray, yArray) {
        this.result = Descriptive.population_correlation(xArray, yArray);
    }
    z_score(x, xMean, xStdDev) {
        this.result = Descriptive.z_score(x, xMean, xStdDev);
    }
    meanDeviation(array) {
        this.result = Descriptive.meanDeviation(array);
    }

    getZFromConfidence(confidence) {
        this.result = Sampling.getZFromConfidence(confidence);
    }
    simpleRandSample(arrList, sampleSize, seed=100) {
        this.result = Sampling.simpleRandSample(arrList, sampleSize, seed=100);
    }
    systematicSample(arrList, sampleSize) {
        this.result = Sampling.systematicSample(arrList, sampleSize);
    }
    marginOfError(sampleArr, confidence=95) {
        this.result = Sampling.marginOfError(sampleArr, confidence=95);
    }
    confidenceInterval(sampleArr, confidence=95) {
        this.result = Sampling.confidenceInterval(sampleArr, confidence=95);
    }
    cochranFormula(confidence, error, p=0.5, N=null) {
        this.result = Sampling.cochranFormula(confidence, error, 0.5, null);
    }
    findSampleSizeNoStdDev(confidence, width, p=0.5) {
        this.result = Sampling.findSampleSizeNoStdDev(confidence, width, 0.5);
    }
    findSampleSizeWithStdDev(confidence, width, stdDev) {
        this.result = Sampling.findSampleSizeWithStdDev(confidence, width, stdDev);
    }
}

module.exports = StatsCalculator;