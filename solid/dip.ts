class Connector {
    private connection: string;
    constructor() {
        this.connection = '';
    }
}

class PasswordService {
    private readonly connector: Connector;

    constructor(connector: Connector) {
        this.connector = connector; 
    }
}

// DI
new PasswordService(new Connector());



