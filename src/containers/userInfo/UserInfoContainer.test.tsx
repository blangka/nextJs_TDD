import {render, renderHook, screen} from "@testing-library/react";
import UserInfoContainer from "@/containers/userInfo/UserInfoContainer";
import userEvent from '@testing-library/user-event';
import Provider from "@/providers";
import {act} from "react-dom/test-utils";
import {RecoilRoot, useRecoilState} from "recoil";
import {userState} from "@/stores/common";

describe('UserInfoContainer Test', () => {


    it('renders a component', async () => {
        render(<Provider><UserInfoContainer/></Provider>);

        const button = screen.getByText('누굴 까요?');
        expect(button).toBeInTheDocument();
    });

    it('Event Test', async () => {

        // 이렇게 하면 recoil state를 변경할 수 있다.
        const {container} = render(<RecoilRoot initializeState={({set}) => {
            set(userState, {
                name: '홍길동',
                age: '20',
            });
        }}><UserInfoContainer/></RecoilRoot>);

        // 누굴 까요? 버튼을 누르면 사람 이름과 나이로 바뀐다.
        await userEvent.click(container.querySelectorAll('button')[0]);

        const name = screen.getByText('홍길동');
        const age = screen.getByText('20');

        expect(name).toBeInTheDocument();
        expect(age).toBeInTheDocument();

        // 나이 뒤에 세를 제대로 나타 내었는지 확인
        const ageFromString = screen.getByText('20세');
        expect(ageFromString).toBeInTheDocument();

    });
});
