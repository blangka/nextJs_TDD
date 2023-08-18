import RecoilProvider from "@/providers/recoilProvider/RecoilProvider";

interface IProps {
    children: React.ReactNode;
}

const Provider = ({children}: IProps) => {
    return (<RecoilProvider>{children}</RecoilProvider>)
}

export default Provider;
