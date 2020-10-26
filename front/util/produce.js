import { enableES5, produce } from 'immer';

const producer =(...args)=>{
    enableES5();
    return produce(...args);
}
export default producer;