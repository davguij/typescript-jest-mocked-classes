import { Users } from './users';
import { Http } from './common/http';
// the following line will instruct Jest
// to use the mock class instead of the real one
jest.mock('./common/http');

describe('Users', () => {
    let instance: Users;

    beforeEach(() => {
        instance = new Users();
    });

    it('should get all users as an array', async () => {
        expect(instance).toBeInstanceOf(Users);
        const allUsers = await instance.all();
        expect(allUsers).toBeDefined();
        expect(allUsers[0]).toBeDefined();
    });

    it('should get receive an error', async () => {
        Http.prototype.get = jest.fn().mockImplementationOnce(() => {
            return new Error('Something weird happened');
        });
        const error: Error = await instance.all();
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Something weird happened')
    });
});