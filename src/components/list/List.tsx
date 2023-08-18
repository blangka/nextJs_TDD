import {ITask} from "@/types/common";

interface IProps {
    tasks?: ITask[];
}

const List = ({tasks}: IProps) => {
    return (
        <ul>
            <h1>할일 리스트</h1>
            <li>아무 일도 하기 싫다</li>
        </ul>
    )
}

export default List;
