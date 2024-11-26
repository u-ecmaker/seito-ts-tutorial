export const optionalChain = async () => {

  const fetchUserData = async () => {
    // API にリクエストする関数の例
    const response = await fetch("https://jsonplaceholder.typicode.com/users/info", {
      // UserId: 1
    });
    return response.json();
  };

  const userInfoData = await fetchUserData();
  // {
  //   userId: 1,
  //   name: "John Doe",
  //   age: 25,
  //   email: "",
  //   family: {
  //     mother: "", //入力していないパターンもある
  //     father: "Jane",
  //   },
  // }

  const fetcherNameBad = userInfoData.family.father; // "John"が取れないパターンもある
  const fetcherName = userInfoData?.family?.father; // オプションチェインを使って、"John"が取れないパターンもある

  console.log(fetcherNameBad);
  console.log(fetcherName);
};
