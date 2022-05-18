
const calc = function(){

    let calcInputElem = document.querySelector('#calc__input');
    let calcBtnElems = Array.from(document.querySelector('#calc__btns').children);

    let result = [],
        index = 0,
        mathOper = [];

        // let counter = 0,
        //     couter2 = 0;

    

    const reset = function(){

        result = [];
        index = 0;
        mathOper = [];
        // couter2 = 0,
        // counter = 0;
    };

    const inputCalc = function(event){

        if(!/[\+\*\/\-\%1-9.]/.test(event.key))calcInputElem.value = calcInputElem.value.replace(/[^\d\+\-\*\/]/g, '');

        if(/[\+\-\*\/.]{2}/g.test(calcInputElem.value))calcInputElem.value = calcInputElem.value.replace(/([\+\-\*\/.]){1}/g, '');

        // let arr = Array.from(calcInputElem.value);
        // console.log(arr);

        
        // for(; couter2 < arr.length; couter2++, counter++){

        //     if(
        //         arr[couter2] === '+' ||
        //         arr[couter2] === '-' ||
        //         arr[couter2] === '*' ||
        //         arr[couter2] === '/' ||
        //         arr[couter2] === '%' 
        //     )   counter--;

        //         console.log('index ' + couter2)
        //         console.log('counter ' + counter)

                
        //     if(counter != couter2-1){
        //         if(
        //             arr[couter2] === '+' ||
        //             arr[couter2] === '-' ||
        //             arr[couter2] === '*' ||
        //             arr[couter2] === '/' ||
        //             arr[couter2] === '%' 
        //         ){
        //             arr[couter2] = '';
        //         }
        //     }
        // }

        calcInputElem.value = arr.join('');

        // if(/[\+\-\*\/.]/g.test(calcInputElem.value))calcInputElem.value = calcInputElem.value.replace(/[\+\-\*\/]$/, '');
        
    };

    const calculate = function(num = [], mathOp){

        switch(mathOp){

            case '+':
                calcInputElem.value = +num[0] + +num[1];

                reset();
                break;
            
            case '-':
                calcInputElem.value = +num[0] - +num[1];

                reset();
                break;
        
            case '*':
                calcInputElem.value = +num[0] * +num[1];

                reset();
                break;
                
            case '/':
                calcInputElem.value = +num[0] / +num[1];

                reset();
                break;
        
            case '%':
                calcInputElem.value = +num[0] % +num[1];

                reset();
                break;
        }
    };

    calcInputElem.addEventListener('keyup', inputCalc);

    calcBtnElems.forEach(elem => {
        elem.addEventListener('click', function(event){
            if(event.target.dataset.calc <= 9 && event.target.dataset.calc >= 0)calcInputElem.value += event.target.dataset.calc;
            else if(event.target.dataset.calc == '.' && !/[.]/g.test(calcInputElem.value))calcInputElem.value += event.target.dataset.calc;
            else if(event.target.dataset.calc == 'rev')calcInputElem.value *= -1;
            else if(event.target.dataset.calc == 'sqr')calcInputElem.value = Math.pow(calcInputElem.value, 2);
            else if(event.target.dataset.calc == 'c'){
                calcInputElem.value = '';

                reset();
            };

            if(/[\+\*\/\-\%]/.test(event.target.dataset.calc)){

                if(calcInputElem.value == '')return;

                result[index] = calcInputElem.value;
                mathOper[index] = event.target.dataset.calc;
                calcInputElem.value = '';
                index++;
                if(result.length >= 2)calculate(result, mathOper[index-2]);
            }

            if(event.target.dataset.calc == '='){
                result[index] = calcInputElem.value;
                calculate(result, mathOper[index-1]);
            }
        });
    });
};
