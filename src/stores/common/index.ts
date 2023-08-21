import {atom} from 'recoil';
import {ITask, IUser} from "@/types/common";

export const taskState = atom<ITask[]>({
    key: 'stores.common.atom.taskState',
    default: [
        {id: 1, title: 'Task 1'},
        {id: 2, title: 'Task 2'},
    ],
});

export const userState = atom<IUser>({
    key: 'stores.common.atom.userState',
    default: {
        name: '임채홍',
        age: '41',
    }
});
