let itemName="USB-C Cable";
let unitCost=3.25;
let currentStock=120;
let reorderLevel=100;
let targetStock=200;
let weeklyDemand=45;
let supplierLeadTimeWeeks=2;

let weeksOfCover=
weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;

let stockDefecit=Math.max(0,targetStock-currentStock);
let reorderNow=
currentStock<=reorderLevel     weeksOfCover<supplierLeadTimeWeeks;
let reorderQuantity=reorderNow
?Math.ceil(stockDefecit)
:0;
let estimatedReorderCost=reorderQuantity*unitCost;

console.log("Item Name:",itemName);
console.log("Weeks of Cover:",(weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity).toFixed(2));
console.log("Reorder Now?:",reorderNow);
console.log("Recommended Reorder Quantity:",reorderQuantity);
console.log("Estimated Reorder Cost.toFixed(2))
;

