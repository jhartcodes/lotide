# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joelhart89/lotide`

**Require it:**

`const _ = require('@joelhart89/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: : takes an array and returns the first element of the array.
* `tail(arr)`:takes an array and returns a new array where the first element has been removed.
* `middle(arr)`: takes an array and returns the middle element of the array. If the array has an even number of elements, the two middle-most elements are returned.
* `eqArrays(arr1,arr2)`: takes two arrays and returns true if their length and contents are equal.
* `assertEqual(str1,str2)`:takes two strings and usees template literals to compare teh values
* `assertArraysEqual(arr1,arr2)`:taks two arrays and compares the values if the length and contents are the same.