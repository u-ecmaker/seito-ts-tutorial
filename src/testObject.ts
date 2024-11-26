export const testObject = () => {

  const user = {
    userId: 1,
    name: "John",
    age: 30,
    email: "john@example.com",
    isActive: false,
  };
  console.log(user);

  interface UserProps {
    userId: number;
    name: string;
    age: number;
    email?: string;
    isActive: boolean;
  }

  const createAccount = (accountInfo: UserProps) => {
    // データベースにアカウントを作成する
    console.log("accountInfo", accountInfo);
  };

  createAccount({
    userId: 1,
    name: "John",
    age: 30,
    // email: "john@example.com",
    isActive: true,
  });

  interface AdminUserProps extends UserProps {
    role: string ;
  }

  const createAdminUser = (accountInfo: AdminUserProps) => {
    // データベースに管理者アカウントを作成する
    console.log("accountInfo", accountInfo);
  };

  createAdminUser({
    userId: 1,
    name: "John",
    age: 30,
    email: "john@example.com",
    isActive: true,
    role: "admin",
  });

  // typeを使っても同じことができる。好み。
  type UserPropsType = {
    userId: number;
    name: string;
    age: number;
    email?: string;
    isActive: boolean;
  }

  type AdminUserPropsType = UserPropsType & {
    role: string;
  }

  const createAdminUser2 = (accountInfo: AdminUserPropsType) => {
    // データベースに管理者アカウントを作成する
    console.log("accountInfo", accountInfo);
  };

  createAdminUser2({
    userId: 1,
    name: "John",
    age: 30,
    role: "admin",
    isActive: true,
  });
};
