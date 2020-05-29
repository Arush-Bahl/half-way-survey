class User{

    constructor(){

        this.email = null,
        this.input = null;
        this.index = null

    }

    updateCount(count) {
        database.ref('/').update({
            peopleCOunt: count
        });
    }

}