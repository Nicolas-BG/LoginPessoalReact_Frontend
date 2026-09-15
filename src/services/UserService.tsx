import type User from '../interfaces/user';

export default class UserService {
    public user: User = {
        id: 0,
        nome: 'João',
        sobrenome: 'Provisa',
        cargo: 'Funcionário',
        email: 'Coisa_provisória@pmail.com',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgg9eiGsWSmzdkfyB3Cvcq0fRJr7gHNxt3TMGaxYdZPBpE85HhtnvRA4zw&s=10'
    };
}