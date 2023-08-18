import About from "@/app/about/page";

import {render, screen} from '@testing-library/react';

describe('AboutPage', () => {
    it('renders a component', async () => {
        const {container} = render(<About/>);

        const about = screen.getByText('about Test');

        expect(about).toBeInTheDocument();
    });
});
