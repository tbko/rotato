// test for babel transpiler with webpack

function* genFunc() {
    console.log('First');
    yield;
    console.log('Second');
}

const genObj = genFunc();

genObj.next();
genObj.next();

console.log(Object.is(NaN, NaN));

export default 'test ES6';