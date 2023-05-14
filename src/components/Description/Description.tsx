import React from 'react';

type Props = {
    textType: 'A' | 'B' | 'C' | 'D'; // `textType` prop can be either 'A', 'B', 'C' or 'D'
};

export const Description = ({
                           textType
                       }: Props) => {
    let text_h1 = '';
    let text_p = '';

    if (textType === 'A') {
        text_h1 = '_____ ________, ____';
        text_p ='Test'
    } else if (textType === 'B') {
        text_h1 = 'Let\'s ________, ____';
        text_p ='Test test'
    } else if (textType === 'C') {
        text_h1 = 'Let\'s go, ____';
        text_p ='Test test test'
    } else if (textType === 'D') {
        text_h1 = 'Let\'s go, Liquid';
        text_p ='Test test test test'
    }

    return (
        <div className="centered-text">
            <h1>{text_h1}</h1>
            <p>{text_p}</p>
        </div>
    )
};
