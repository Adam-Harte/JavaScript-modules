// named imports
import { age, logName } from './namedExport';

console.log(age);
logName();

// combined imports
import * as info from './combinedImports';
import { job as occupation } from './combinedImports';

console.log(info.job);
console.log(info.location);
console.log(info.hobbies);

console.log(occupation);

// default exports and imports
import log from './defaultExport';

log();

// dynamic imports
setTimeout(() => {
	import('./dynamicImports').then((module) => {
		console.log(module.pet);
		module.dynamicLog();
	});
}, 5000);
