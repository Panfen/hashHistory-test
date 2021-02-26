import { observable, action } from 'mobx';
import { hashHistory} from 'react-router';

class RouterStore {
  @observable title = '测试';
}

const instance = new RouterStore()
export default instance;