let n=5

function repeatAction(n, action) {
    for (let i = 1; i <= n; i++) {
        action(i);
    }
}
    
repeatAction(n, (step) => {
    console.log(`шаг номер ${step}`);
});