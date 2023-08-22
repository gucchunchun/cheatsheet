"use strict";
// elements
const rowC = document.getElementById('row-container');
const colC = document.getElementById('col-container');
const item1row = document.getElementById('item1row');
const item2row = document.getElementById('item2row');
const item3row = document.getElementById('item3row');
const item1col = document.getElementById('item1col');
const item2col = document.getElementById('item2col');
const item3col = document.getElementById('item3col');
const ratio1 = document.getElementById('ratio1');
const ratio2 = document.getElementById('ratio2');
const ratio3 = document.getElementById('ratio3');
const grow1 = document.getElementById('grow1');
const grow2 = document.getElementById('grow2');
const grow3 = document.getElementById('grow3');
const shrink1 = document.getElementById('shrink1');
const shrink2 = document.getElementById('shrink2');
const shrink3 = document.getElementById('shrink3');
const fixedRowC = document.getElementById('fixed-row-container');
const fixedColC = document.getElementById('fixed-col-container');
const alignItems = document.querySelectorAll('input[type="radio"][name="align-items"]');
const justifyContents = document.querySelectorAll('input[type="radio"][name="justify-contents"]');
function change_ratio(itemRow, itemCol, ratio) {
    itemRow.style.width = ratio + '%';
    itemCol.style.height = ratio + '%';
}
function change_grow(itemRow, itemCol, factor) {
    itemRow.style.flexGrow = factor;
    itemCol.style.flexGrow = factor;
}
function change_shrink(itemRow, itemCol, factor) {
    itemRow.style.flexShrink = factor;
    itemCol.style.flexShrink = factor;
}
function change_alignItems(value) {
    if (!rowC || !colC) {
        return;
    }
    rowC.style.alignItems = value;
    colC.style.alignItems = value;
}
function change_justifyContents(value) {
    if (!rowC || !colC) {
        return;
    }
    rowC.style.alignItems = value;
    colC.style.alignItems = value;
}
ratio1 === null || ratio1 === void 0 ? void 0 : ratio1.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item1row || !item1col) {
        return;
    }
    const ratio = e.target.value;
    change_ratio(item1row, item1col, ratio);
});
ratio2 === null || ratio2 === void 0 ? void 0 : ratio2.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item2row || !item2col) {
        return;
    }
    const ratio = e.target.value;
    change_ratio(item2row, item2col, ratio);
});
ratio3 === null || ratio3 === void 0 ? void 0 : ratio3.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item3row || !item3col) {
        return;
    }
    const ratio = e.target.value;
    change_ratio(item3row, item3col, ratio);
});
grow1 === null || grow1 === void 0 ? void 0 : grow1.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item1row || !item1col) {
        return;
    }
    const factor = e.target.value;
    change_grow(item1row, item1col, factor);
});
grow2 === null || grow2 === void 0 ? void 0 : grow2.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item2row || !item2col) {
        return;
    }
    const factor = e.target.value;
    change_grow(item2row, item2col, factor);
});
grow3 === null || grow3 === void 0 ? void 0 : grow3.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item3row || !item3col) {
        return;
    }
    const factor = e.target.value;
    change_grow(item3row, item3col, factor);
});
shrink1 === null || shrink1 === void 0 ? void 0 : shrink1.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item1row || !item1col) {
        return;
    }
    const factor = e.target.value;
    change_shrink(item1row, item1col, factor);
});
shrink2 === null || shrink2 === void 0 ? void 0 : shrink2.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item2row || !item2col) {
        return;
    }
    const factor = e.target.value;
    change_shrink(item2row, item2col, factor);
});
shrink3 === null || shrink3 === void 0 ? void 0 : shrink3.addEventListener('change', (e) => {
    e.preventDefault();
    if (!e.target || !item3row || !item3col) {
        return;
    }
    const factor = e.target.value;
    change_shrink(item3row, item3col, factor);
});
alignItems.forEach(item => {
    const input = item;
    input.addEventListener('click', () => {
        if (input.checked) {
            const selectedValue = input.value;
            console.log(selectedValue);
            change_alignItems(selectedValue);
        }
    });
});
justifyContents.forEach(item => {
    const input = item;
    input.addEventListener('click', () => {
        if (input.checked) {
            const selectedValue = input.value;
            console.log(selectedValue);
            change_justifyContents(selectedValue);
        }
    });
});
