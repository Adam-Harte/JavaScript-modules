// named imports
import { age, logName } from './namedExport';

console.log(age);
logName();

// combined imports
import * as info from './combinedImports';

console.log(info.job);
console.log(info.location);
console.log(info.hobbies);
