 ( async function fn(params) {
    await setTimeout(function() {
        console.log('xxxxxx');
    }, 1000);
    console.log('我是同步的 和异步没有关系 我不会等 await');
    await setTimeout(function() {
        console.log('尽管我时间段，但是我需要等待');
    }, 500);
})()