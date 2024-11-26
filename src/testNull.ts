export const testNull = async () => {

  const fetchUserData = async () => {
    // API にリクエストする関数の例
    const response = await fetch("https://jsonplaceholder.typicode.com/users/status", {
      // UserId: 1
    });
    return response.status !== 404;  // true or false だが、 undefined になる可能性がある！
  };

  // null 合体演算子 ?? を使って、 undefined を false に変換する
  const isActive: boolean = await fetchUserData() ?? false; 

  if (!isActive) console.log("ユーザーは非アクティブです");
};
