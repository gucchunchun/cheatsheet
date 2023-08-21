// elements
const flexContainers = document.getElementsByClassName('flex-container');
const item1row = document.getElementById('item1row');
const item2row = document.getElementById('item2row');
const item3row = document.getElementById('item3row');
const item1col = document.getElementById('item1col');
const item2col = document.getElementById('item2col');
const item3col = document.getElementById('item3col');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

function change_ratio(itemRow: HTMLElement, itemCol: HTMLElement, ratio: string):void {
    itemRow.style.width = ratio + '%';
    itemCol.style.height = ratio + '%';
}
input1?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item1row || !item1col ){
        return;
    }
    const ratio = ( e.target as HTMLInputElement ).value;
    change_ratio(item1row, item1col, ratio);
})
input2?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item2row || !item2col ){
        return;
    }
    const ratio = ( e.target as HTMLInputElement ).value;
    change_ratio(item2row, item2col, ratio);
})
input3?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item3row || !item3col ){
        return;
    }
    const ratio = ( e.target as HTMLInputElement ).value;
    change_ratio(item3row, item3col, ratio);
})