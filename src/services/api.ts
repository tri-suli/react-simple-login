import axios, {AxiosError} from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export async function login (email: string, password: string): Promise<boolean> {
    try {
        const res = await api.get(`/users/?email=${email}`);
        const [user] = res.data;

        return user && user.password === password;
    } catch (e) {
        console.log(e)
        if (axios.isAxiosError(e)) {
            const error = e as AxiosError;
            alert(error.message);
        }
    }

    return false;
}