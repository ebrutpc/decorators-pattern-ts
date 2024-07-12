// function reversePre(str: string): string{
//     return str.split('').reverse().join('');
// }

/**
 * 
 * @param target which is holds a reference 
 * to the decorator so in this case the target 
 * will be the prototype pf StringManager class
 * @param propertKey which is the decarator name
 *  in this case this is print() 
 */
// function split(target: any, propertKey: string, descriptor: PropertyDescriptor){
//     const originalMethod = descriptor.value;

//     descriptor.value = function(...args: any[]){
//         args[0] = args[0].split('');
//         // apply() because we need to keep the
//         // same scope as the original class
//         originalMethod.apply(this, args);
//     }
// }

function split(target: any, propertKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        const [arg] = args;
        const argSplitted = arg.split('')
        // apply() because we need to keep the
        // same scope as the original class
        //originalMethod.apply(this, argSplitted); return only 'e'
        originalMethod.apply(this, [argSplitted]);
    }
}

// function reverse(targer: any, prototype: string, descriptor:PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function(...args: any[]){
//         args[0] = args[0].reverse();
//         originalMethod.apply(this, args);
//     }

// }

function reverse(target: any, propertKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        const [arg] = args;
        const argReversed = arg.reverse()
        originalMethod.apply(this, [argReversed]);
    }
}

// function join(target: any, propertKey: string, descriptor: PropertyDescriptor){
//     const originalMethod = descriptor.value;

//     descriptor.value = function(...args: any[]){
//         const [arg] = args;
//         const argJoined = arg.join('')
//         originalMethod.apply(this, [argJoined]);
//     }
// }


function join(char: string) {
    return (target: any, propertKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
    
        descriptor.value = function(...args: any[]){
            const [arg] = args;
            const argJoined = arg.join(char)
            originalMethod.apply(this, [argJoined]);
        }
    }
}



class StringManager {
    @split
    @reverse
   // @join // without parameter
   @join('') // with parameter
    print(str: string){
        // 1. split 
        console.log(str);
    }
}

const stringManager = new StringManager()
stringManager.print('');