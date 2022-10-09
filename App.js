const GCD = (m, n) => {
    if (n == 0) return m;
    else return GCD(n, m % n);
}

const LCM = (m, n) => {
    return m * n / GCD(m, n);
}

const Calculate = () => {
    let A1 = parseInt(document.getElementById("A1").value);
    let A2 = parseInt(document.getElementById("A2").value);
    let B1 = parseInt(document.getElementById("B1").value);
    let B2 = parseInt(document.getElementById("B2").value);
    let gcdA = GCD(A1, A2);
    A1 /= gcdA;
    A2 /= gcdA;
    let gcdB = GCD(B1, B2);
    B1 /= gcdB;
    B2 /= gcdB;
    console.log(A1, A2, B1, B2);
    let lcm = LCM(A2, B2);
    A1 = A1 * lcm / A2;
    B1 = B1 * lcm / B2;
    let avg;
    if ((A1 + B1) % 2 != 0) {
        avg = A1 + B1;
        A1 *= 2;
        B1 *= 2;
        lcm *= 2;
    } else {
        avg = (A1 + B1) / 2;
    }
    document.getElementById("result1").innerHTML = `甲方: ${A1}/${lcm}`;
    document.getElementById("result2").innerHTML = `乙方: ${B1}/${lcm}`;
    document.getElementById("result3").innerHTML = `平均: ${avg}/${lcm}`;

    if (A1 >= B1) {
        document.getElementById("result4").innerHTML = `甲方要給乙方 ${A1-avg}/${lcm}`;
    } else {
        document.getElementById("result4").innerHTML = `乙方要給甲方 ${B1-avg}/${lcm}`;
    }
}