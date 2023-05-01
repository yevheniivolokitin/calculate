const OPERATIOS = {
   sum: "+",

   substract: "-",

   multiply: "*",

   divison: "/",
};
function calculate({ a, b, operation }) {
   let result = null;
   switch (operation) {
      case OPERATIOS.sum:
         result = sum(a, b);
         break;
      case OPERATIOS.substract:
         result = substract(a, b);
         break;
      case OPERATIOS.multiply:
         result = multiply(a, b);
         break;
      case OPERATIOS.divison:
         result = divison(a, b);
         break;
      default:
         break;
   }
   return result;
}
