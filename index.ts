// elements
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
const alignRowC = document.getElementById('align-row-container');
const alignColC = document.getElementById('align-col-container');
const alignItems = document.querySelectorAll('input[type="radio"][name="align-items"]');
const justifyContents = document.querySelectorAll('input[type="radio"][name="justify-contents"]');

function change_ratio(itemRow: HTMLElement, itemCol: HTMLElement, ratio: string):void {
    itemRow.style.width = ratio + '%';
    itemCol.style.height = ratio + '%';
}
function change_grow(itemRow: HTMLElement, itemCol: HTMLElement, factor: string):void {
    itemRow.style.flexGrow = factor;
    itemCol.style.flexGrow = factor;
}
function change_shrink(itemRow: HTMLElement, itemCol: HTMLElement, factor: string):void {
    itemRow.style.flexShrink = factor;
    itemCol.style.flexShrink= factor;
}
function change_alignItems(value: string):void {
    if( !alignRowC || !alignColC ){
        return;
    }
    alignRowC.style.alignItems = value;
    alignColC.style.alignItems = value;
}
function change_justifyContents(value: string):void {
    if( !alignRowC || !alignColC ){
        return;
    }
    alignRowC.style.justifyContent = value;
    alignColC.style.justifyContent = value;
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
grow1?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item1row || !item1col ){
        return;
    }
    const factor = ( e.target as HTMLInputElement ).value;
    change_grow(item1row, item1col, factor);
})
grow2?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item2row || !item2col ){
        return;
    }
    const factor = ( e.target as HTMLInputElement ).value;
    change_grow(item2row, item2col, factor);
})
grow3?.addEventListener('change',(e)=>{
    e.preventDefault(); 
    if( !e.target || !item3row || !item3col ){
        return;
    }
    const factor = ( e.target as HTMLInputElement ).value;
    change_grow(item3row, item3col, factor);
})
shrink1?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item1row || !item1col ){
        return;
    }
    const factor = ( e.target as HTMLInputElement ).value;
    change_shrink(item1row, item1col, factor);
})
shrink2?.addEventListener('change',(e)=>{
    e.preventDefault();
    if( !e.target || !item2row || !item2col ){
        return;
    }
    const factor = ( e.target as HTMLInputElement ).value;
    change_shrink(item2row, item2col, factor);
})
shrink3?.addEventListener('change',(e)=>{
    e.preventDefault(); 
    if( !e.target || !item3row || !item3col ){
        return;
    }
    const factor = ( e.target as HTMLInputElement ).value;
    change_shrink(item3row, item3col, factor);
})
alignItems.forEach(item => {
    const input = item as HTMLInputElement;
    input.addEventListener('click', () => {
      if (input.checked) {
        const selectedValue = input.value;
        console.log(selectedValue)
        change_alignItems(selectedValue);
      }
    });
  });
justifyContents.forEach(item => {
    const input = item as HTMLInputElement;
    input.addEventListener('click', () => {
      if (input.checked) {
        const selectedValue = input.value;
        console.log(selectedValue)
        change_justifyContents(selectedValue);
      }
    });
  });