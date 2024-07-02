// Create a WeakMap instance and export it
export const weakMap = new WeakMap();

// Export the queryAPI function
export default function queryAPI(endpoint) {
    let count = weakMap.get(endpoint) || 0;
    count += 1;
    
    weakMap.set(endpoint, count);
    if (count >= 5) {
        throw new TypeError('Endpoint load is high');
    }
}
