import {render} from "@testing-library/react";
import FormTable from "@/components/formTable/FormTable";
import userEvent from '@testing-library/user-event';
import {isValidReactEventType, isValidReactSyntheticEvent} from "@/__mocks__/isValidReactEvent";

describe('FormTable', () => {
    const header = ['이름', '나이'];
    const data = [
        ['홍길동', '20'],
    ];
    const onClick = jest.fn();


    it('renders a component', async () => {
        // formTable 컴포넌트는 Props로 header, data를 받는다.
        // header는 제목이고 data는 데이터이다.
        const {container} = render(<FormTable header={header} data={data} onClick={onClick}/>);

        // header가 정상적으로 렌더링 되었는지 확인
        const headerName = container.querySelectorAll('th')[0];
        const headerAge = container.querySelectorAll('th')[1];
        expect(headerName).toHaveTextContent('이름');
        expect(headerAge).toHaveTextContent('나이');

        // data가 정상적으로 렌더링 되었는지 확인
        const dataName = container.querySelectorAll('td')[0];
        const dataAge = container.querySelectorAll('td')[1];
        expect(dataName).toHaveTextContent('홍길동');
        expect(dataAge).toHaveTextContent('20');
    });

    it('Event Test', async () => {
        const {container} = render(<FormTable header={header} data={data} onClick={onClick}/>);

        // click 정상적으로 동작하는지 확인
        // click을 하면 onClick 함수가 호출되는지 확인
        await userEvent.click(container.querySelectorAll('button')[0]);
        expect(onClick).toBeCalledTimes(1);

        const handleClickResult = onClick.mock.calls[0][0];
        expect(isValidReactEventType(handleClickResult, 'click')).toBeTruthy();
        expect(isValidReactSyntheticEvent(handleClickResult)).toBeTruthy();
    });
});
