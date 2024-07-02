// Update all values that are equal to `1` to become `100`
export default function updateUniqueItems(map) {
    try {
      for (const [key, value] of map) {
        if (value === 1) {
          map.set(key, 100);
        }
      }
  
      return map;
    } catch {
      throw Error('Cannot process');
    }
  }