import List from "@/components/list/List";
import {useRecoilValue} from "recoil";
import {taskState} from "@/stores/common";

const ListContainer = () => {

    const tasks = useRecoilValue(taskState);
    return <List tasks={tasks}/>
}

export default ListContainer;
