import {Observable, action, computed, observable} from 'mobx';

class BirdStore {
    @observable birds = [];

    @action addBird = (bird) => {
        this.birds.push(bird);
        
    }

    @computed get birdCount(){
        return this.birds.length;
    }

}

//In the entire application we want only a single instance to be used. Hence export a single instance. 
const store = new BirdStore();
export default store;