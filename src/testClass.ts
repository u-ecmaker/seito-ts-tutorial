export const testClass = () => {

  class User {
    userId: number;
    name: string;
    age: number;
    email?: string;
    isActive: boolean;

    constructor(userId: number, name: string, age: number, isActive: boolean, email?: string) {
      this.userId = userId;
      this.name = name;
      this.age = age;
      this.email = email;
      this.isActive = isActive;

      this.email ? this.isValidEmail(this.email) : null;
      this.getProfileProtected();
    }

    public getProfilePublic(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }

    // publicで呼ばれたくないものはprivateにする
    // 外から使われる予定がないのであれば一旦privateにしておくのが無難
    private isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // protectedは継承されたクラスからアクセスできる
    protected getProfileProtected(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }

    public static sayHelloWorld(): void {
      console.log("Hello World");
    }
  }

  const user = new User(1, "John", 30, true, "john@example.com");

  /* public, private, protected */
  user.getProfilePublic();
  //user.isValidEmail("john@example.com"); //アクセス出来ない
  //user.getProfileProtected();           //アクセス出来ない

  class AdminUser extends User {
    role: "admin" | "user";

    constructor(userId: number, name: string, age: number, isActive: boolean, role: "admin" | "user", email?: string) {
      super(userId, name, age, isActive, email);
      this.role = role;

      // ↓privateは継承されたクラスからアクセスできない
      // this.isValidEmail(this.email);
      // ↓protectedは継承されたクラスからアクセスできる
      this.getProfileProtected();
    }
  }

  // (public) staticはインスタンス化しなくてもアクセスできる。
  // newでインスタンスを生成しなくてもアクセスできる。
  User.sayHelloWorld();

  new AdminUser(1, "John", 30, true, "admin", "john@example.com");
};
