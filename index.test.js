import { calc } from './calculator'

it('should sum number by number', () => {
  const result = calc('2 + 2')
  expect(result).toEqual('2 + 2 = 4')
})

it('should subtract a number by a number', () => {
  const result = calc('2 - 2')
  expect(result).toEqual('2 - 2 = 0')
})

it('should multiply a number by a number', () => {
  const result = calc('2 * 2')
  expect(result).toEqual('2 * 2 = 4')
})

it('should divide a number by a number', () => {
  const result = calc('2 / 2')
  expect(result).toEqual('2 / 2 = 1')
})
