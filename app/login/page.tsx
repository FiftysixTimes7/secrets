
export default function Login(){

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');

        // Here you can add your logic to handle the login,
        // such as sending a request to your backend server.
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <header style={{ marginBottom: '20px' }}>
                <h1>Login</h1>
            </header>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <label htmlFor="username" style={{ marginBottom: '10px' }}>
                    Username:
                    <input type="text" id="username" name="username" required style={{ marginLeft: '10px', padding: '8px', width: '100%' }} />
                </label>
                <label htmlFor="password" style={{ marginBottom: '20px' }}>
                    Password:
                    <input type="password" id="password" name="password" required style={{ marginLeft: '10px', padding: '8px', width: '100%' }} />
                </label>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Log In</button>
            </form>
        </div>
    );
}