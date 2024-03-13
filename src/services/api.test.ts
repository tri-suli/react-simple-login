import { login } from './api'; // Replace with the correct path

jest.mock('axios', () => {
    return {
        create: () => {
            return {
                get: async (url: string) => {
                    if (url.includes('test@example.com')) {
                        return {
                            data: [{
                                id: 1,
                                email: 'test@example.com',
                                password: 'testPassword',
                            }]
                        };
                    }

                    return [{data: []}];
                },
            }
        },
        isAxiosError: () => true,
    };
});

describe('login function', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return true for a valid login', async () => {
        const result = await login('test@example.com', 'testPassword');

        expect(result).toBe(true);
    });

    it('should return false for an invalid login', async () => {
        const result = await login('test@example.com', 'invalidPassword');

        expect(result).toBe(false);
    });
});
