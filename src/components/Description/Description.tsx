import React from 'react';

type Props = {
    textType: number;
};

export const Description = ({
                           textType
                       }: Props) => {
    let text_h1 = '';
    let text_p = '';

    if (textType === 0) {
        text_h1 = '____ _______, ________';
        text_p ='Test'
    } else if (textType === 1) {
        text_h1 = 'Keep ________, ____';
        text_p ='Test test'
    } else if (textType === 2) {
        text_h1 = 'Keep smiling, ____';
        text_p ='Test test test'
    } else if (textType === 3) {
        text_h1 = 'Keep rocking, sunshine :)';
        text_p ='Test test test test'
    }

    return (
        <div className="centered-text">
            <h1>{text_h1}</h1>
            {/*<p>{text_p}</p>*/}
        </div>
    )
};
