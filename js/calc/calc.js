const calc = function(){

    let calcInputElem = document.querySelector('#calc__input');
    let calcBtnElems = document.querySelector('#calc__btns');
    calcBtnElems = Array.from(calcBtnElems.children);

    let a = [],
        i = 0,
        mo = [];

    const calculate = function(num = [], mathOp){

        let result;
        switch(mathOp){

            case '+':
                result = +num[0]+ +num[1];
                calcInputElem.value = result;

                a = [];
                i = 0;
                mo = [];

            return result;
            
            case '-':
                result = +num[0]- +num[1];
                calcInputElem.value = result;
                a = [];
                i = 0;
                mo = [];
    
                return result;
        
            case '*':
                result = +num[0]* +num[1];
                calcInputElem.value = result;
                a = [];
                i = 0;
                mo = [];
    
                return result;
                
            case '/':
                result = +num[0]/ +num[1];
                console.log(result)
                calcInputElem.value = result;
                a = [];
                i = 0;
                mo = [];
    
                return result;
        
            case '%':
                result = +num[0]% +num[1];
                calcInputElem.value = result;
                a = [];
                i = 0;
                mo = [];
    
                return result;
        }
        
    };

    calcBtnElems.forEach(elem => {
        elem.addEventListener('click', function(event){
            if(event.target.dataset.calc <= 9 && event.target.dataset.calc >= 0)calcInputElem.value += event.target.dataset.calc;
            else if(event.target.dataset.calc == '.' && !/[.]/g.test(calcInputElem.value))calcInputElem.value += event.target.dataset.calc;
            else if(event.target.dataset.calc == 'c'){
                calcInputElem.value = '';
                a = [];
                i = 0;
                mo = [];
            };

            if(/[\+\*\/\-\%]/.test(event.target.dataset.calc)){

                if(calcInputElem.value == '')return;
                a[i] = calcInputElem.value;
                mo[i] = event.target.dataset.calc;
                calcInputElem.value = '';
                i++;
                if(a.length >= 2)calculate(a, mo[i-2]);
            }
            if(event.target.dataset.calc == '='){
                a[i] = calcInputElem.value;
                calculate(a, mo[i-1]);
            }
        });
    });

    console.log(calcInputElem);
};

// \+\-\*\/%\.

// else if(event.target.dataset.calc == 'rev')calcInputElem.value *= -1;
// else if(!/\D$/g.test(calcInputElem.value) && !/\D/g.test(calcInputElem.value))calcInputElem.value += event.target.dataset.calc;