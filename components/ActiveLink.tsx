import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

const style: CSSProperties = {
    color: 'rgba(255, 195, 55, 1)',
    textDecoration: 'underline',
}

interface Props {
    id: number;
    text: string;
    href: string;
}


export const ActiveLink: FC<Props> = ({ id ,text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href } legacyBehavior>
            <a className={`text-black lg:text-white md:text-xs 2xl:text-2xl md:pr-5 pl-10 ${id > 1 ? 'md:border-l-2' : ''}`} style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
    );
};



