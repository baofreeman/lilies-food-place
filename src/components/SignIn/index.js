import Input from '../Input';
import Button from '../Button';

function SignIn({ onClick }) {
    return (
        <div className="flex flex-col h-screen justify-between items-center py-56 px-32 flex-1">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <Input type={'text'} id="1" size={'m'} placeholder={'entername'} />
            <Input type={'text'} id="1" size={'m'} placeholder={'entername'} />
            <Button size="m" type="secondary" custom={'width'}>
                SIGN IN
            </Button>
            <div className="flex justify-between w-full">
                <Button size={'sm'} type={'basic text-black'} to onClick={onClick}>
                    Create an Account
                </Button>

                <Button size={'sm'} type={'basic text-black'} to>
                    Forgot password
                </Button>
            </div>
        </div>
    );
}

export default SignIn;