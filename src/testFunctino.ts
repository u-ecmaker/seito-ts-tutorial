export const testFunction = () => {
  const name: string = "Mike";
  const age: number = 20;
  const isStudent: boolean = true;
  const hobbies: string[] = ["Sports", "Cooking"]; // array
  const address: object = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  };
  const today: Date = new Date();
  const none: null = null;
  const notDefined: undefined = undefined;
  const random: any = "Hello";
  const gender: "male" | "female" = "male"; // union type
  const value: string | number | null = "Hello"; // union type

  console.log({ name, age, isStudent, hobbies, address, today, none, notDefined, random, gender, value });
  // 問題： 引数に文字数の配列を受け取り、その中身の順番を逆にして返す関数を作成してください。
  // 例： ["a", "b", "c"] => ["c", "b", "a"]
  // 実際にデータ型を定義してみよう：変数、引数、返り値
  // オプション引数

  const abcArray: string[] = ["a", "b", "c"];
  console.log("abcArray", abcArray);
  const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
    const reversedArray: string[] = [];
    let index: number = arr.length - 1;
    while (index >= 0) {
      reversedArray.push(arr[index]);
      index--;
    }
    if (hasTom) reversedArray.push("Tome");

    return reversedArray;
  };
  console.log("reverseArray", reverseArray(abcArray));
  console.log("reverseArray", reverseArray(abcArray, true));
};
