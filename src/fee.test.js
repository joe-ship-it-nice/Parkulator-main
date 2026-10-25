import { test, expect } from 'vitest'
import { parkingFee } from './fee.js'

test.each([
  [0, 0],
  [14, 0],
  [15, 3],
  [60, 3],
  [61, 5],
  [120, 5],
  [121, 7],
  [360, 13],
  [361, 15],
  [600, 15],
])('parkingFee(%i minutes) returns RM %i', (minutes, expectedFee) => {
  expect(parkingFee(minutes)).toBe(expectedFee)
})
