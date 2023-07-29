import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

const style: CSSProperties = {
    color: '#0070f3',
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
            <a className={`text-white text-2xl md:pr-5 pl-10 ${id > 1 ? 'md:border-l-2' : ''}`} style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
    );
};



