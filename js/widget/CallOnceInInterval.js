/**
 * 防重复点击
 * @type {boolean}
 */
let isCalled = false, timer;
export default callOnceInInterval = (functionTobeCalled, interval = 600) => {
    if (!isCalled) {
        isCalled = true;
        clearTimeout(timer);
        timer = setTimeout(() => {
            isCalled = false;
        }, interval);
        return functionTobeCalled();
    }
};