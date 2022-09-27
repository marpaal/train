class User {
    private name: string;
    private password: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }

    get getUser() {
        const user = { name: this.name, password: this.password };
        return user;
    }

    set setPassword(password: string) {
        this.password = password;
    }
}

class Post {
    private comment: string;

    constructor(comment: string) {
        this.comment = comment;
    }

    get getPost() {
        return this.comment;
    }

    set setPost(comment: string) {
        this.comment = comment;
    }
}

// Avoid method concatenate in dependant class 