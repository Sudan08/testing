import React, { SetStateAction, useState } from 'react';

const ChildComponent = ({
    inputValue,
    setInputValue,
}: {
    inputValue: string;
    setInputValue: React.Dispatch<SetStateAction<string>>;
}) => {
    return (
        <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
};

const TestComponent = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <span>{inputValue}</span>
            <ChildComponent
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </div>
    );
};

export default TestComponent;
