// elements
const flexContainers = document.getElementsByClassName('flex-container');
const item1row = document.getElementById('item1row');
const item2row = document.getElementById('item2row');
const item3row = document.getElementById('item3row');
const item1col = document.getElementById('item1col');
const item2col = document.getElementById('item2col');
const item3col = document.getElementById('item3col');
const ratio1 = document.getElementById('ratio1');
const ratio2 = document.getElementById('ratio2');
const ratio3 = document.getElementById('ratio3');

function change_ratio(itemRow: HTMLElement, itemCol: HTMLElement, ratio: string):void {
    itemRow.style.width = ratio + '%';
    itemCol.style.height = ratio + '%';
}
ratio1?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item1row || !item1col ){
        return;
    }
    const ratio = ( e.target as HTMLInputElement ).value;
    change_ratio(item1row, item1col, ratio);
})
ratio2?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item2row || !item2col ){
        return;
    }
    const ratio = ( e.target as HTMLInputElement ).value;
    change_ratio(item2row, item2col, ratio);
})
ratio3?.addEventListener('change',(e)=>{
    e.preventDefault(); 
    if( !e.target || !item3row || !item3col ){
        return;
    }
    const ratio = ( e.target as HTMLInputElement ).value;
    change_ratio(item3row, item3col, ratio);
})