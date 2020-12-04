const { keyframes } = require("styled-components");

export const FadeIn = keyframes`
from {
    transform: scale(.25);
    opacity: 0;
}
to {
    transform: scale(1);
    opacity: 1;
}
`;

export const FadeOut = keyframes`
from {
    transform: scale(1);
     opacity: 1;
}
to {
    transform: scale(.25);
    opacity: 0;
}
`;

export const FadeInWithoutScale = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;
export const FadeOutWithoutScale = keyframes`
from {
     opacity: 1;
}
to {
    opacity: 0;
}
`;
