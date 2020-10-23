import React from "react";
import "./style.scss";

const icons = {
    //location-arrow
    arrow: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.68377 9.9487C1.77208 9.6448 1.77208 8.35524 2.68377 8.05134L20.6838 2.05134C21.4655 1.79075 22.2093 2.53449 21.9487 3.31625L15.9487 21.3162C15.6448 22.2279 14.3552 22.2279 14.0513 21.3162L11.2094 12.7906L2.68377 9.9487ZM6.16228 9.00002L12.3162 11.0513C12.6148 11.1509 12.8491 11.3852 12.9487 11.6838L15 17.8377L19.4189 4.58116L6.16228 9.00002Z" fill="black" /></svg>),
    bookmark: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65079 21.7593C5.00212 22.3153 4 21.8544 4 21V5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V21C20 21.8544 18.9979 22.3153 18.3492 21.7593L12 16.3171L5.65079 21.7593ZM18 18.8258V5C18 4.44772 17.5523 4 17 4H7C6.44772 4 6 4.44772 6 5V18.8258L11.3492 14.2407C11.7237 13.9198 12.2763 13.9198 12.6508 14.2407L18 18.8258Z" fill="black" /></svg>),
    close: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" fill="black" /></svg>),
    equalizer: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12C8 13.3063 7.16515 14.4175 5.99991 14.8293L6 21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21L3.9991 14.829C2.83438 14.4169 2 13.3059 2 12C2 10.6941 2.83438 9.58312 3.9991 9.17102L4 3C4 2.44772 4.44772 2 5 2C5.55228 2 6 2.44772 6 3L5.99991 9.17067C7.16515 9.58249 8 10.6937 8 12ZM6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12ZM15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.6941 9.83438 16.5831 10.9991 16.171L11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L12.9999 16.1707C14.1651 16.5825 15 17.6937 15 19ZM13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19ZM22 5C22 6.3118 21.158 7.42695 19.985 7.83453C19.9953 7.88799 20 7.94344 20 8V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V8C18 7.94344 18.0047 7.88799 18.0137 7.83399C16.842 7.42695 16 6.3118 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5ZM20 5C20 4.44772 19.5523 4 19 4C18.4477 4 18 4.44772 18 5C18 5.55228 18.4477 6 19 6C19.5523 6 20 5.55228 20 5Z" fill="black" /></svg>),
    home: (<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.99999 20C4.34314 20 2.99999 18.6569 2.99999 17V11H1.99999C1.10909 11 0.662919 9.92286 1.29288 9.29289L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L20.7071 9.29289C21.3371 9.92286 20.8909 11 20 11H19V17C19 18.6569 17.6568 20 16 20H5.99999ZM11 2.41421L4.3509 9.0633C4.73009 9.20542 4.99999 9.57119 4.99999 10V17C4.99999 17.5523 5.44771 18 5.99999 18L7.99999 17.999L7.99999 14C7.99999 12.8954 8.89542 12 9.99999 12H12C13.1046 12 14 12.8954 14 14L14 17.999L16 18C16.5523 18 17 17.5523 17 17V10C17 9.57119 17.2699 9.20542 17.6491 9.0633L11 2.41421ZM12 14H9.99999L9.99999 17.999H12L12 14Z" fill="black" /></svg>),
    info: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10ZM12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6Z" fill="black" /></svg>),
    play: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4.99998C6 4.22819 6.83721 3.74732 7.50387 4.1362L19.5039 11.1362C20.1654 11.5221 20.1654 12.4779 19.5039 12.8638L7.50387 19.8638C6.83721 20.2526 6 19.7718 6 19V4.99998ZM8 6.74102V17.2589L17.0154 12L8 6.74102Z" fill="black" /></svg>),
    settings: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.89758 0.0019947L11.0201 0.00189209C11.0843 0.0048707 11.1406 0.0122107 11.2197 0.0294428C11.8002 0.155834 12.0209 0.364256 12.5611 1.64074L12.6491 1.85131L12.9886 2.69248L13.0165 2.70396L13.4539 2.50595C14.4066 2.07996 14.8976 1.90052 15.2278 1.85046L15.2962 1.84167L15.4209 1.83494C15.7182 1.83494 16.021 1.94025 16.2528 2.1236L16.3624 2.22165L17.7193 3.57296L17.8137 3.67265C18.2399 4.14218 18.2797 4.47505 17.8082 5.68823L17.6513 6.07961L17.2815 6.95458L17.2886 6.97166L18.1357 7.288L18.5441 7.4494C19.599 7.88072 19.8158 8.1106 19.9568 8.63864C19.9852 8.74511 19.9953 8.81765 19.9986 8.90769L20 9.00547V10.9132C20 11.0488 19.9954 11.1254 19.962 11.2594C19.8216 11.8231 19.6132 12.0378 18.3455 12.5733L18.1363 12.6606L17.301 12.9977L17.2952 13.0118L17.5972 13.6717C18.3484 15.3412 18.3746 15.7072 17.8809 16.257L17.8192 16.324L16.4263 17.7158C16.1769 17.9679 15.8217 18.1067 15.4779 18.1067C15.186 18.1067 14.7275 17.9679 13.9459 17.6545L13.5275 17.4831L13.0509 17.2815L13.0236 17.2928L12.7773 17.9533C12.1744 19.5419 11.9678 19.7998 11.3484 19.9596C11.2569 19.9832 11.1914 19.9933 11.1171 19.9974L10.9945 20H9.08563C8.96649 20 8.89925 19.9964 8.78092 19.9708C8.2007 19.845 7.97914 19.6361 7.43788 18.3589L7.34966 18.1482L7.0096 17.3066L6.98344 17.2957L6.34815 17.5813C5.332 18.0287 4.89179 18.1648 4.57806 18.1648C4.28426 18.1648 3.98508 18.0616 3.74708 17.8765L3.63349 17.7772L2.27843 16.4239L2.12369 16.2552C1.75208 15.8179 1.73381 15.4789 2.18994 14.3119L2.42762 13.7277L2.71777 13.0457L2.71172 13.031L2.05484 12.7862C0.737085 12.2862 0.33098 12.0559 0.137998 11.6354L0.0857984 11.503L0.0421951 11.3566C0.0175227 11.2629 0.00699347 11.1958 0.00271534 11.1195L0 10.9935V9.08467C0 8.94799 0.00473793 8.87073 0.0387721 8.73555C0.165661 8.23156 0.345761 8.00773 1.29447 7.58261L1.68766 7.41282L2.69733 7.00451L2.70425 6.9877L2.32674 6.15478C1.70383 4.73991 1.65224 4.30911 2.04525 3.82796L2.09903 3.76483L2.22636 3.62987L3.57616 2.28313C3.82346 2.03446 4.1772 1.89427 4.5215 1.89427C4.76776 1.89427 5.12934 1.99171 5.70805 2.2109L6.29026 2.4417L6.95028 2.71832L6.97734 2.70707L7.22549 2.04225C7.83405 0.442259 8.05128 0.174689 8.69321 0.0309887C8.77419 0.012862 8.83195 0.00513317 8.89758 0.0019947ZM10.523 2H9.40807L9.25087 2.36853C9.19117 2.51504 9.12383 2.68617 9.04778 2.88481L8.69932 3.81694C8.61575 4.03762 8.45736 4.2204 8.25375 4.33473L8.14832 4.38604L7.3292 4.7269C7.1224 4.81295 6.89398 4.82661 6.6804 4.768L6.55432 4.72416L5.58525 4.31569L5.06181 4.10695L4.70998 3.9771L3.91977 4.76552L4.01277 5.00042C4.04911 5.0889 4.09094 5.18782 4.13863 5.29803L4.2997 5.6633L4.70366 6.5464C4.80042 6.75669 4.82065 6.99264 4.76353 7.2141L4.71997 7.34493L4.38503 8.15885C4.29635 8.37434 4.13575 8.55093 3.93242 8.65982L3.82733 8.7085L2.73976 9.14567L2.19609 9.37872L2 9.46952V10.5997L2.23463 10.7014C2.32346 10.7386 2.42321 10.7791 2.53477 10.8233L2.90579 10.9672L3.80732 11.302C4.03461 11.384 4.22321 11.5449 4.34018 11.7532L4.39255 11.8612L4.72754 12.6728C4.81356 12.8812 4.82615 13.1112 4.76566 13.3257L4.7206 13.4523L4.33182 14.3646L4.088 14.9664L3.96921 15.286L4.75948 16.0752L4.99479 15.9822C5.08146 15.9469 5.17645 15.9073 5.28 15.8631L6.00585 15.543L6.5293 15.3021C6.74835 15.1974 6.99663 15.1766 7.22796 15.2408L7.342 15.28L8.16593 15.6202C8.38432 15.7104 8.56251 15.8744 8.67074 16.0816L8.71888 16.1887L8.92392 16.7061L9.21572 17.4157L9.38458 17.8034L9.47615 18H10.5944L10.7541 17.6235L10.9621 17.0924L11.3007 16.1844C11.3843 15.9617 11.5438 15.7774 11.7492 15.6626L11.8556 15.6112L12.676 15.2726C12.8804 15.1883 13.1058 15.1745 13.317 15.2313L13.4417 15.2738L14.2143 15.6015L14.7781 15.8311L15.0867 15.9501L15.2903 16.0238L16.0815 15.2341L15.929 14.8578L15.7004 14.3363L15.2956 13.4539C15.1985 13.2432 15.1782 13.0068 15.2356 12.7849L15.2793 12.6538L15.6137 11.8434C15.7019 11.6296 15.861 11.4541 16.0624 11.3452L16.1665 11.2964L17.0876 10.9262L17.5578 10.729L17.6871 10.6728L18 10.5297V9.40062L17.6863 9.26673L17.2615 9.0986L16.1891 8.69939C15.9623 8.61688 15.7744 8.45571 15.658 8.24732L15.6059 8.13934L15.2715 7.32452C15.1862 7.11664 15.1738 6.88739 15.2341 6.67355L15.279 6.54739L15.5895 5.8215C15.6703 5.62954 15.7406 5.45931 15.8014 5.30886L15.9103 5.03372L16.029 4.71221L15.2384 3.92482L15.0029 4.01798C14.8727 4.07108 14.7235 4.1341 14.5542 4.20769L14.3782 4.28483L13.4554 4.7034C13.2454 4.7996 13.0101 4.81961 12.7891 4.76264L12.6586 4.71921L11.8352 4.38074C11.6196 4.29214 11.443 4.13159 11.334 3.92829L11.2853 3.82321L10.9942 3.09482L10.7832 2.58452L10.6663 2.31313L10.523 2ZM10.0005 6C12.2066 6 14 7.79302 14 9.99914C14 12.2054 12.2065 14 10.0005 14C7.79382 14 6 12.2057 6 9.99914C6 7.7927 7.79369 6 10.0005 6ZM10.0005 8C8.89801 8 8 8.89752 8 9.99914C8 11.1013 8.89851 12 10.0005 12C11.1016 12 12 11.1011 12 9.99914C12 8.89768 11.1021 8 10.0005 8Z" fill="black" /></svg>),
    slider: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C13.3063 16 14.4175 16.8349 14.8293 18.0001L21 18C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20L14.829 20.0009C14.4169 21.1656 13.3059 22 12 22C10.6941 22 9.58312 21.1656 9.17102 20.0009L3 20C2.44772 20 2 19.5523 2 19C2 18.4477 2.44772 18 3 18L9.17067 18.0001C9.58249 16.8349 10.6937 16 12 16ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18ZM19 9C20.6569 9 22 10.3431 22 12C22 13.6569 20.6569 15 19 15C17.6941 15 16.5831 14.1656 16.171 13.0009L3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11L16.1707 11.0001C16.5825 9.83485 17.6937 9 19 9ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11ZM5 2C6.3118 2 7.42695 2.84196 7.83453 4.01495C7.88799 4.00469 7.94344 4 8 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H8C7.94344 6 7.88799 5.99531 7.83399 5.98628C7.42695 7.15804 6.3118 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2ZM5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4Z" fill="black" /></svg>),
    "turn-off": (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.751 5.00946C18.1157 4.65318 18.6832 4.63203 19.0719 4.94158L19.1652 5.02586L19.2622 5.12532C21.0086 6.9696 22 9.40828 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 9.52097 2.90708 7.18195 4.52383 5.35934L4.74867 5.11404L4.83483 5.02586C5.2208 4.63083 5.85392 4.62349 6.24895 5.00946C6.61359 5.36573 6.6479 5.9326 6.34745 6.32841L6.26536 6.42357L6.19004 6.50048C4.79197 7.9769 4 9.925 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 10.0342 19.2892 8.18231 18.0349 6.74706L17.8208 6.51176L17.7346 6.42357C17.3487 6.02855 17.356 5.39542 17.751 5.00946ZM12 2C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V3C11 2.44772 11.4477 2 12 2Z" fill="black" /></svg>),
    user: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 14H15C17.7614 14 20 16.2386 20 19C20 19.5523 19.5523 20 19 20C18.4872 20 18.0645 19.614 18.0067 19.1166L17.9949 18.8237C17.907 17.3072 16.6928 16.093 15.1763 16.0051L15 16H5C3.34315 16 2 17.3431 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.3112 2.12231 14.1182 4.78311 14.0046L5 14H15H5ZM10 0C13.3137 0 16 2.68629 16 6C16 9.31371 13.3137 12 10 12C6.68629 12 4 9.31371 4 6C4 2.68629 6.68629 0 10 0ZM10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2Z" fill="black" /></svg>),
    "user-add": (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 16H17C19.7614 16 22 18.2386 22 21C22 21.5523 21.5523 22 21 22C20.4872 22 20.0645 21.614 20.0067 21.1166L19.9949 20.8237C19.907 19.3072 18.6928 18.093 17.1763 18.0051L17 18H7C5.34315 18 4 19.3431 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3112 4.12231 16.1182 6.78311 16.0046L7 16ZM12 2C12.4062 2 12.8078 2.04051 13.2004 2.12029C13.7416 2.23029 14.0912 2.75821 13.9812 3.29943C13.8712 3.84065 13.3432 4.19022 12.802 4.08022C12.5404 4.02705 12.2722 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C13.2748 12 14.4482 11.4008 15.2001 10.4004C15.5319 9.95889 16.1588 9.86999 16.6003 10.2018C17.0418 10.5336 17.1307 11.1605 16.7989 11.602C15.6731 13.0999 13.9104 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2ZM19 2C19.5523 2 20 2.44772 20 3V4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H20V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V6H17C16.4477 6 16 5.55228 16 5C16 4.44772 16.4477 4 17 4H18V3C18 2.44772 18.4477 2 19 2Z" fill="black" /></svg>),
    users: (<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10H6C7.63573 10 9.08801 10.7855 10.0002 11.9998C10.864 10.8494 12.2129 10.0839 13.7433 10.0065L14 10H15C17.7614 10 20 12.2386 20 15C20 15.5523 19.5523 16 19 16C18.4872 16 18.0645 15.614 18.0067 15.1166L17.9949 14.8237C17.907 13.3072 16.6928 12.093 15.1763 12.0051L15 12H14C12.3431 12 11 13.3431 11 15C11 15.5128 10.614 15.9355 10.1166 15.9933L10 16C9.48716 16 9.06449 15.614 9.00673 15.1166L8.99491 14.8237C8.90704 13.3072 7.69275 12.093 6.17627 12.0051L6 12H5C3.34315 12 2 13.3431 2 15C2 15.5523 1.55228 16 1 16C0.447715 16 0 15.5523 0 15C0 12.3112 2.12231 10.1182 4.78311 10.0046L5 10ZM5 0C7.20914 0 9 1.79086 9 4C9 6.20914 7.20914 8 5 8C2.79086 8 1 6.20914 1 4C1 1.79086 2.79086 0 5 0ZM15 0C17.2091 0 19 1.79086 19 4C19 6.20914 17.2091 8 15 8C12.7909 8 11 6.20914 11 4C11 1.79086 12.7909 0 15 0ZM5 2C3.89543 2 3 2.89543 3 4C3 5.10457 3.89543 6 5 6C6.10457 6 7 5.10457 7 4C7 2.89543 6.10457 2 5 2ZM15 2C13.8954 2 13 2.89543 13 4C13 5.10457 13.8954 6 15 6C16.1046 6 17 5.10457 17 4C17 2.89543 16.1046 2 15 2Z" fill="black" /></svg>),
    video: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 0C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3C0 1.34315 1.34315 0 3 0H17ZM2 15V17C2 17.5523 2.44772 18 3 18H4V15H2ZM14 11H6V18H14V11ZM18 15H16V18H17C17.5523 18 18 17.5523 18 17V15ZM18 7H16V13H18V7ZM14 2H6V9H14V2ZM17 2H16V5H18V3C18 2.44772 17.5523 2 17 2ZM4 2H3C2.44772 2 2 2.44772 2 3V5H4V2ZM2 13H4V7H2V13Z" fill="black" /></svg>)
}

class Icon extends React.Component {

    getSvg(type = "") {
        if (icons[type]) return icons[type];
        else return "N/A";
    }

    render() {
        return (
            <i className={"icon-wrapper " + (this.props.clickable ? "clickable " : "") + (this.props.className ? this.props.className : "")} onClick={this.props.onClick}>
                {this.getSvg(this.props.type)}
            </i>
        );
    }
}

export default Icon;
