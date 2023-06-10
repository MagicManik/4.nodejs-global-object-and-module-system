// (function moduleWrapperFunction(require, module, __filename, __dirname) {
const people = ['manik', 'amena', 'monir', 'arafat'];
const a = 40;
function test() {
    console.log('test');
}
module.exports = {
    people,
    test,
    a,
};
// return module.exports;
// })();
