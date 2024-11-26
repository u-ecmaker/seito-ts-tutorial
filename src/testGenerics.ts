export const testGenerics = () => {

  // 普通に定義した関数
  const foo = (arg: string): string => {
    return arg;
  };
  console.log(foo("foo Hello"));

  // ジェネリクスを使った関数
  // この段階では、引数/返り値に何を入れるかは決まっていない
  const bar = <T>(arg: T): T => {
    return arg;
  };

  // この段階では、引数/返り値に何を入れるかは決まっている
  const resultBarString = bar<string>("bar Hello");
  console.log(resultBarString);

  const resultBarNumber = bar<number>(123);
  console.log("bar number", resultBarNumber);
};
