export function UserCard({username}: {username?: string}) {
    return (
        <>
            <div style={{
                border: '1px solid black',
                borderRadius:"10px",
                backgroundColor: 'pink',
                padding:'10px',
                color:'red',
                height:'60px',
                width:'150px',
            }}>
                <div> username: {username ?? "user"}</div>
                <div> password: 1234</div>
            </div>
        </>
    )
}