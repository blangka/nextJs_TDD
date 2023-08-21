import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import User from "@/app/user/page";
import Provider from "@/providers";

describe('User Page Test', () => {
    it('renders a component', async () => {
        render(<Provider><User/></Provider>);

        // 시작 문구 확인 : 사용자의 정보를 알려 드립니다.
        const intro = screen.getByText('사용자의 정보를 알려 드립니다.');
        expect(intro).toBeInTheDocument();

    });
});
