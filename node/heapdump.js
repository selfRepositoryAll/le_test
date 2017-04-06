const heapdump = require('../node-heapdump/lib/main');

const save = function () {
    gc();
    heapdump.writeSnapshot('./' + Date.now() + '.heapsnapshot');
};
save()