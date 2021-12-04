import React from "react";


function popUpFromYourBoxSignUpJoker() {
    // bleh
    console.log('pop up from your box 🃏 sign up joker 🃏')
    // Add
    // href="https://timeship.outseta.com/auth?widgetMode=register#o-anonymous"
}

const SignUpPage = () => {
    return (
        <div>
            <button
                href="https://timeship.outseta.com/auth?widgetMode=register#o-anonymous"
                type="button"
                onClick={popUpFromYourBoxSignUpJoker}
            >🃏 sign up 🃏</button>
        </div>
    )
};

export default SignUpPage