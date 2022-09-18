const textObj = new String("Hello World");
const text = "Hello World";
console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));
//위아래 둘 다 똑같은 것이다.

console.log(text.length);
console.log(text.indexOf("l")); // 뒤에도 l이 있지만 처음것을 찾자마자 반환하기 때문이다.
console.log(text.lastIndexOf("l"));

console.log(text.includes("h"));
console.log(text.includes("H")); // 대소문자 구분함

console.log(text.startsWith("He"));
console.log(text.endsWith("He"));
console.log(text.endsWith("d"));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2)); // 0부터 1자리 까지만 출력 (2는 포함되지 않음)
console.log(text.slice(2)); //0부터 1자리를 뺀 나머지를 출력
console.log(text.slice(-2));

const space = "              space           ";
console.log(space.trim()); // 공백을 제거

const longText = "Get to the, point";
console.log(longText.split(" "));
console.log(longText.split(","));
console.log(longText.split(" ", 2));
console.log(longText.split(", ", 2));
