function giaipt() {
    let a = document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    console.log('a = ',a)
    console.log('check = ', a==0)
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById('result').innerHTML = 'Phuong co vo so nghiem'
            } else {
                document.getElementById('result').innerHTML = 'Phuong trinh vo nghiem'
            }
        } else {
            let x = -c / b;
            document.getElementById('result').innerHTML = 'Phuong trinh co 1 nghiem X = ' + x;
        }
    } else {
        let delta = b * b - 4 * a * c;
        if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.getElementById('result').innerHTML = 'Phuong trinh co 2 nghiem X1 = ' + x1 + ' va X2 = ' + x2;
        } else if (delta == 0) {
            let x = -b / 2 * a;
            document.getElementById('result').innerHTML = 'Phuong trinh co nghiem kep X1 = X2 = ' + x;
        } else {
            document.getElementById('result').innerHTML = 'Phuong trinh vo nghiem'
        }
    }
}