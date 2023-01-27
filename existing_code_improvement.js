

const newFunction = (param) => {

    const getMatchRgx = () => {
        if (!param) {
            console.log("Error: some error text...");
            return ''
        }

        if (param.split(' ').length === 1) return param.charAt(0);

        const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
        const rgxResult = [...param.matchAll(rgx)] || [];
        const resultVal = `${ rgxResult.shift()?.[1] || '' }${ rgxResult.pop()?.[1] || '' }`
        
        return resultVal;
    }

    return getMatchRgx().toUpperCase();
}



// const someMysticMethod = (param) => {
//     let resultVal;
   
//     if (!param) {
//       console.log("Error: some error text...");
//       return ''
//     }
//     const splattedParam = param.split(' ');
//     const amount = splattedParam.length;
   
   
//     if(amount > 1){
//         let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
//         resultVal = [...param.matchAll(rgx)] || [];
   
   
//         resultVal = (
//         (resultVal.shift()?.[1] || '') + (resultVal.pop()?.[1] || '')
//         );           
//     }else{
//         if(param.length > 0){
//             resultVal = param.charAt(0)
//         }else{
//             resultVal = '';
//         }
//     }
   
   
//     return resultVal.toUpperCase();
// }
   