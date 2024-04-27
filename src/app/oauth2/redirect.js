import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ACCESS_TOKEN } from '../../constants';
function OAuth2RedirectHandler() {
    const router = useRouter();

    const getUrlParameter = (name, search) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    useEffect(() => {
        const token = getUrlParameter('token', router.asPath);
        const error = getUrlParameter('error', router.asPath);

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            router.push({
                pathname: "/profile",
                query: { from: router.asPath }
            });
        } else {
            router.push({
                pathname: "/login",
                query: { from: router.asPath, error: error }
            });
        }
    }, []);

    // Placeholder return since Next.js requires a return value from a functional component
    return null;
}

export default OAuth2RedirectHandler;
