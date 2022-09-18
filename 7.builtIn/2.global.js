console.log(globalThis);
console.log(this); // JS에서 this는 대체적으로 전역객체를 가리킨다
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat("12.43"));
console.log(parseInt("12.43"));
console.log(parseInt("11"));

// URL (URI, Uniform Resource Identifier(리소스를 나타낼 수 있는 고유한, 단 하나의 ID나 주소를 뜻함, 웹 사이트를 나타내는 유일한게 URL(주소)) 의 하위 개념)
// 아스키 문자로만 구성되어야 한다
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = "https://짱쫑.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = "짱쫑.com";
console.log(encodeURIComponent(part));
