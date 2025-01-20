# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: memory leaks if the unsubscribe function isn't called when the listener is no longer needed.  The `authBug.js` file shows the problem, while `authSolution.js` provides the corrected code.

## Problem

The `onAuthStateChanged` method returns an unsubscribe function. Failing to call this function when you are finished with the listener will cause a memory leak as the listener continues to run even if it's no longer required.

## Solution

Always store the returned unsubscribe function and call it when you no longer need to listen for authentication changes.  This is crucial for robust application behavior and to prevent memory issues.