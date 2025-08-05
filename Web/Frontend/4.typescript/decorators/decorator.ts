function log(
   target: Object,
   propertyKey: string | symbol,
   descriptor: PropertyDescriptor
 ) {
   const originalMethod = descriptor.value;
 
   descriptor.value = function (...args: any[]) {
     console.log(`Calling ${propertyKey} with arguments: ${args}`);
     return originalMethod.apply(this, args);
   };
 
   return descriptor;
 }