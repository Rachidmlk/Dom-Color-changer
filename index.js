var getRandomColor = function () {
    return Math.floor(Math.random() * 256);
};
var element = document.querySelector('div');
var btn = document.querySelector('button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    element ? element.style.backgroundColor = "rgb(".concat(getRandomColor(), ",").concat(getRandomColor(), ",").concat(getRandomColor(), ")") : undefined;
});
