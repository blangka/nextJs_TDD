import List from './List';

import {render, screen} from '@testing-library/react';

describe('List test', () => {
    it('renders tasks', async () => {
        const tasks = [{
            id: 1,
            title: "아무 일도 하기 싫다",
        }, {
            id: 2,
            title: "아무 일도 하기 싫다",
        }
        ]

        const {container} = render(<List tasks={tasks}/>);
        expect(container).toHaveTextContent("아무 일도 하기 싫다");
    });
});
