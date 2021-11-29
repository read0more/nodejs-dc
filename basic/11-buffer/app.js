const buf = Buffer.from("Hi 한글");
console.log(buf); //
console.log(buf.toString());

// create buffer
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(1); // 버퍼 초기화 없이 공간 확보해서 빠르지만 데이터가 들어 있을수도 있음.
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

const newBuf = Buffer.concat([buf2, buf3]);
console.log(newBuf.toString());
