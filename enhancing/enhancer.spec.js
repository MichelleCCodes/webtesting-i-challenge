const { repair, success, fail } = require('./enhancer')

describe('Repair function works', () => {

    test('Item repairs to full durability (100)', () => {
      const item = {
        name: 'wand',
        enhancement: 20,
        durability: 50
      }
      expect(repair(item)).toEqual({...item, durability: 100 })
    })
})

describe('Success function works', ()=> {
    test('adds 1 to enhancement when enhancement < 20', () => {
      const item = {
        name: 'wand',
        enhancement: 15,
        durability: 75
      }
      expect(success(item)).toEqual({...item, enhancement: 16})
    })
    test('enhancement does not change when enhancement = 20', () => {
        const item = {
          name: 'wand',
          enhancement: 20,
          durability: 75
        }
        expect(success(item)).toEqual({...item, enhancement: 20})
      })
})
  
describe('Fail function works', ()=> {

    test('durability decreases by 5 when enhancement < 15 ', () => {
      const item = {
        name: 'wand',
        enhancement: 10,
        durability: 100
      }
      expect(fail(item)).toEqual({...item, durability: 95})
    })
    
    test('durability decreases by 10 when enhancement >= 15 && <16. Enhancement does not change', () => {
        const item = {
            name:'wand', 
            enhancement: 16, 
            durability: 100            
        }
        expect(fail(item)).toEqual({...item, durability: 90, enhancement: 16})
    })

    test('durability decreases by 10 and enhancement decreases by 1 when enhancement >16', ()=> {
        const item = {
            name:'wand',
            enhancement: 18, 
            durability: 100
        } 
        expect(fail(item)).toEqual({...item, durability: 90, enhancement: 17})
    })
})
  
  
  