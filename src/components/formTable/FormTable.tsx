interface IProps {
    header: string[];
    data: string[][];
    onClick?: () => void;
}

const FormTable = ({header, data, onClick}: IProps) => {
    return (
        <div>
            <div>
                <table>
                    <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {item.map((item, index) => (
                                <td key={index}>{item}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={onClick}>버튼 사라지기</button>
            </div>
        </div>

    );
}

export default FormTable;
