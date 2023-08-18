import {atom} from 'recoil';
import {ITask} from "@/types/common";

export const taskState = atom<ITask[]>({
    key: 'stores.common.atom.taskState',
    default: [
        {id: 1, title: 'Task 1'},
        {id: 2, title: 'Task 2'},
    ],
});
